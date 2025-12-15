import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Navigation from '../../../components/Navigation';
import Logo from '../../../components/Logo';
import LessonCard from '../../../components/LessonCard';
import BackButton from '../../../components/BackButton';
import { useProgress } from '../../../context/ProgressContext';

const PythonLesson6 = ({ navigation }) => {
	const insets = useSafeAreaInsets();
	const { markLessonComplete } = useProgress();
	
	const handleLessonComplete = (isCorrect) => {
		if (isCorrect) {
			markLessonComplete('python', 6);
			console.log('Python Lesson 6 completed!');
		}
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
					<BackButton navigation={navigation} textColor="#16a34a" />
					<Text className="text-3xl font-bold mb-2 text-slate-900">
							Python Lesson 6
						</Text>
						<Text className="text-sm text-gray-500 mb-6" style={{ lineHeight: 20 }}>
							Updating Variables — Change variable values
						</Text>

						{/* Lesson Content - Replace with actual lesson */}
						<LessonCard 
							title="Updating Variables"
							lessonContent={
								"Concept: You can update a variable by assigning a new value.\n\n" +
								"Example:\nscore = score + 1\n\n" +
								"Key Point: score becomes one bigger.\n\n" +
								"Mini task: Increase score by 1."
							}
							correctAnswer={"score = score + 1"}
							onComplete={handleLessonComplete}
						/>
					</View>
				</View>
			</ScrollView>
			
			<Navigation navigation={navigation} activeTab="lessons" />
		</View>
	);
};

export default PythonLesson6;
