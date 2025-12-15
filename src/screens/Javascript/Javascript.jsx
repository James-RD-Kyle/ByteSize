import React, { useState } from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Navigation from '../../components/Navigation';
import Logo from '../../components/Logo';
import BackButton from '../../components/BackButton';

const Javascript = ({ navigation }) => {
	const insets = useSafeAreaInsets();
	const [completedLessons, setCompletedLessons] = useState([]);

	const lessons = [
		{ id: 1, title: "What Is JavaScript?", description: "A quick intro to JavaScript" },
		{ id: 2, title: "Your First Program", description: "Printing with console.log" },
		{ id: 3, title: "Comments", description: "Notes for humans (ignored by the computer)" },
		{ id: 4, title: "Variables", description: "Store values using let/const" },
		{ id: 5, title: "Common Data Types", description: "number, string, boolean" },
		{ id: 6, title: "Updating Variables", description: "Change variable values" },
		{ id: 7, title: "User Input (Intro)", description: "Input depends on environment" },
		{ id: 8, title: "If Statements", description: "Run code only when true" },
		{ id: 9, title: "Else Statements", description: "Handle the false case" },
		{ id: 10, title: "For Loops", description: "Repeat code a set number of times" },
	];

	const handleLessonPress = (lessonId) => {
		navigation.navigate(`JSLesson${lessonId}`);
	};
	
	return (
		<View style={{ flex: 1, paddingTop: insets.top, paddingBottom: insets.bottom, backgroundColor: 'white' }}>
			<ScrollView className="flex-1">
				<View className="min-h-screen">
					{/* Header with Logo */}
					<View className="bg-slate-900 py-5 px-4 items-center mb-5">
						<Logo size={150} />
					</View>

					{/* Main Content */}
					<View className="flex-1 px-6 py-5">
						<BackButton navigation={navigation} textColor="#ca8a04" />

						<Text className="text-3xl font-bold mb-2 text-slate-900">
							JavaScript Lessons
						</Text>
						<Text className="text-sm text-gray-500 mb-6" style={{ lineHeight: 20 }}>
							Master JavaScript fundamentals with hands-on practice
						</Text>

						{/* Progress Summary */}
						<View className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
							<Text className="text-lg font-semibold text-yellow-900 mb-1">
								Progress: {completedLessons.length}/{lessons.length} Lessons
							</Text>
							<View className="bg-gray-200 h-3 rounded-full overflow-hidden">
								<View 
									className="bg-yellow-500 h-full" 
									style={{ width: `${(completedLessons.length / lessons.length) * 100}%` }}
								/>
							</View>
						</View>

						{/* Lessons List */}
						{lessons.map((lesson) => {
							const isCompleted = completedLessons.includes(lesson.id);
							return (
								<TouchableOpacity
									key={lesson.id}
									onPress={() => handleLessonPress(lesson.id)}
									className={`mb-4 rounded-lg p-4 border-2 ${
										isCompleted 
											? 'bg-green-50 border-green-500' 
											: 'bg-white border-gray-300'
									}`}
								>
									<View className="flex-row items-center justify-between">
										<View className="flex-1">
											<Text className={`text-lg font-bold mb-1 ${
												isCompleted ? 'text-green-900' : 'text-slate-900'
											}`}>
												Lesson {lesson.id}: {lesson.title}
											</Text>
											<Text className={`text-sm ${
												isCompleted ? 'text-green-700' : 'text-gray-600'
											}`}>
												{lesson.description}
											</Text>
										</View>
										<View className={`ml-4 w-8 h-8 rounded-full items-center justify-center ${
											isCompleted ? 'bg-green-500' : 'bg-gray-300'
										}`}>
											<Text className="text-white font-bold">
												{isCompleted ? '✓' : lesson.id}
											</Text>
										</View>
									</View>
								</TouchableOpacity>
							);
						})}
					</View>

					{/* Footer */}
					<View className="bg-gray-50 py-5 items-center">
						<Text className="text-sm text-gray-600">© 2025 ByteSize. All rights reserved.</Text>
					</View>
				</View>
			</ScrollView>
			
			<Navigation navigation={navigation} activeTab="lessons" />
		</View>
	);
};

export default Javascript;
