import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Navigation from '../../../components/Navigation';
import Logo from '../../../components/Logo';
import LessonCard from '../../../components/LessonCard';
import BackButton from '../../../components/BackButton';

const JSLesson10 = ({ navigation }) => {
	const insets = useSafeAreaInsets();
	
	const handleLessonComplete = (isCorrect) => {
		if (isCorrect) {
			console.log('JavaScript Lesson 10 completed!');
			// Navigate to next lesson or show completion message
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
					<BackButton navigation={navigation} textColor="#ca8a04" />
					<Text className="text-3xl font-bold mb-2 text-slate-900">
							JavaScript Lesson 10
						</Text>
						<Text className="text-sm text-gray-500 mb-6" style={{ lineHeight: 20 }}>
							For Loops — Repeat code a set number of times
						</Text>

						{/* Lesson Content - Replace with actual lesson */}
						<LessonCard 
							title="For Loops"
							lessonContent={
								"Concept: A for loop repeats code a set number of times.\n\n" +
								"Example:\nfor (let i = 0; i < 3; i++) {\n  console.log(i);\n}\n\n" +
								"Key Point: for loops have start, condition, and update.\n\n" +
								"Mini task: Write a for loop that prints i from 0 to 2."
							}
							correctAnswer={"for (let i = 0; i < 3; i++) {\n  console.log(i);\n}"}
							onComplete={handleLessonComplete}
						/>
					</View>
				</View>
			</ScrollView>
			
			<Navigation navigation={navigation} activeTab="lessons" />
		</View>
	);
};

export default JSLesson10;
