import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProgressContext = createContext();

export const useProgress = () => {
	const context = useContext(ProgressContext);
	if (!context) {
		throw new Error('useProgress must be used within a ProgressProvider');
	}
	return context;
};

export const ProgressProvider = ({ children }) => {
	const [completedLessons, setCompletedLessons] = useState({
		javascript: [],
		python: [],
		java: [],
		csharp: [],
	});

	// Load completed lessons from AsyncStorage on mount
	useEffect(() => {
		loadProgress();
	}, []);

	const loadProgress = async () => {
		try {
			const savedProgress = await AsyncStorage.getItem('@lesson_progress');
			if (savedProgress) {
				setCompletedLessons(JSON.parse(savedProgress));
			}
		} catch (error) {
			console.error('Error loading progress:', error);
		}
	};

	const saveProgress = async (newProgress) => {
		try {
			await AsyncStorage.setItem('@lesson_progress', JSON.stringify(newProgress));
		} catch (error) {
			console.error('Error saving progress:', error);
		}
	};

	const markLessonComplete = (language, lessonId) => {
		setCompletedLessons((prev) => {
			const languageLessons = prev[language] || [];
			if (!languageLessons.includes(lessonId)) {
				const newProgress = {
					...prev,
					[language]: [...languageLessons, lessonId],
				};
				saveProgress(newProgress);
				return newProgress;
			}
			return prev;
		});
	};

	const isLessonComplete = (language, lessonId) => {
		return (completedLessons[language] || []).includes(lessonId);
	};

	const getCompletedCount = (language) => {
		return (completedLessons[language] || []).length;
	};

	const resetProgress = async (language) => {
		const newProgress = {
			...completedLessons,
			[language]: [],
		};
		setCompletedLessons(newProgress);
		await saveProgress(newProgress);
	};

	return (
		<ProgressContext.Provider
			value={{
				completedLessons,
				markLessonComplete,
				isLessonComplete,
				getCompletedCount,
				resetProgress,
			}}
		>
			{children}
		</ProgressContext.Provider>
	);
};
