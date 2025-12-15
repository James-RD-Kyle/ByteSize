import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Navigation from '../../../components/Navigation';
import Logo from '../../../components/Logo';
import LessonCard from '../../../components/LessonCard';
import BackButton from '../../../components/BackButton';
import { useProgress } from '../../../context/ProgressContext';

const JavaLesson9 = ({ navigation }) => {
	const insets = useSafeAreaInsets();
	const { markLessonComplete } = useProgress();
	
	const handleLessonComplete = (isCorrect) => {
		if (isCorrect) {
			markLessonComplete('java', 9);
			console.log('Java Lesson 9 completed!');
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
							Java Lesson 9
						</Text>
						<Text className="text-sm text-gray-500 mb-6" style={{ lineHeight: 20 }}>
							If Statements — Run code only when true
						</Text>

						{/* Lesson Content - Replace with actual lesson */}
						<LessonCard 
							title="If Statements"
							lessonContent={
								"Concept: if runs code only when the condition is true.\n\n" +
								'Example:\nif (age >= 18) {\n    System.out.println("Adult");\n}\n\n' +
								"Key Point: Conditions are true or false.\n\n" +
								'Mini task: Write an if that prints "Adult" if age >= 18.'
							}
							correctAnswer={'if (age >= 18) {\n    System.out.println("Adult");\n}'}
							onComplete={handleLessonComplete}
						/>
					</View>
				</View>
			</ScrollView>
			
			<Navigation navigation={navigation} activeTab="lessons" />
		</View>
	);
};

export default JavaLesson9;
