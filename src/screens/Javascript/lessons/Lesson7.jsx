import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Navigation from '../../../components/Navigation';
import Logo from '../../../components/Logo';
import LessonCard from '../../../components/LessonCard';
import BackButton from '../../../components/BackButton';

const JSLesson7 = ({ navigation }) => {
	const insets = useSafeAreaInsets();
	
	const handleLessonComplete = (isCorrect) => {
		if (isCorrect) {
			console.log('JavaScript Lesson 7 completed!');
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
							JavaScript Lesson 7
						</Text>
						<Text className="text-sm text-gray-500 mb-6" style={{ lineHeight: 20 }}>
							User Input (Intro) — Input depends on environment
						</Text>

						{/* Lesson Content - Replace with actual lesson */}
						<LessonCard 
							title="User Input (Intro)"
							lessonContent={
								"Concept: Input depends on where JavaScript runs (browser, Node, app).\n\n" +
								"Example:\n// Browser input example: prompt('Name?')\n\n" +
								"Key Point: For now we focus on output and logic.\n\n" +
								'Mini task: Log "What is your name?"'
							}
							correctAnswer={'console.log("What is your name?");'}
							onComplete={handleLessonComplete}
						/>
					</View>
				</View>
			</ScrollView>
			
			<Navigation navigation={navigation} activeTab="lessons" />
		</View>
	);
};

export default JSLesson7;
