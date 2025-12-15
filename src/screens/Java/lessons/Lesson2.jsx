import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Navigation from '../../../components/Navigation';
import Logo from '../../../components/Logo';
import LessonCard from '../../../components/LessonCard';
import BackButton from '../../../components/BackButton';

const JavaLesson2 = ({ navigation }) => {
	const insets = useSafeAreaInsets();
	
	const handleLessonComplete = (isCorrect) => {
		if (isCorrect) {
			console.log('Java Lesson 2 completed!');
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
					<BackButton navigation={navigation} textColor="#dc2626" />
					<Text className="text-3xl font-bold mb-2 text-slate-900">
							Java Lesson 2
						</Text>
						<Text className="text-sm text-gray-500 mb-6" style={{ lineHeight: 20 }}>
							Your First Program — Printing text to the screen
						</Text>

						{/* Lesson Content - Replace with actual lesson */}
						<LessonCard 
							title="Your First Program"
							lessonContent={
								"Concept: System.out.println prints text to the screen.\n\n" +
								'Example:\nSystem.out.println("Hello, World!");\n\n' +
								"Key Point: println prints text and moves to a new line.\n\n" +
								'Mini task: Print exactly: "Hello, Java!"'
							}
							correctAnswer={'System.out.println("Hello, Java!");'}
							onComplete={handleLessonComplete}
						/>
					</View>
				</View>
			</ScrollView>
			
			<Navigation navigation={navigation} activeTab="lessons" />
		</View>
	);
};

export default JavaLesson2;
