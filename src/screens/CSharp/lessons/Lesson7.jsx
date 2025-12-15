import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Navigation from '../../../components/Navigation';
import Logo from '../../../components/Logo';
import LessonCard from '../../../components/LessonCard';
import BackButton from '../../../components/BackButton';
import { useProgress } from '../../../context/ProgressContext';

const CSharpLesson7 = ({ navigation }) => {
	const insets = useSafeAreaInsets();
	const { markLessonComplete } = useProgress();
	
	const handleLessonComplete = (isCorrect) => {
		if (isCorrect) {
			markLessonComplete('csharp', 7);
			console.log('C# Lesson 7 completed!');
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
					<BackButton navigation={navigation} textColor="#2563eb" />
					<Text className="text-3xl font-bold mb-2 text-slate-900">
							C# Lesson 7
						</Text>
						<Text className="text-sm text-gray-500 mb-6" style={{ lineHeight: 20 }}>
							User Input — Read text using Console.ReadLine
						</Text>

						{/* Lesson Content - Replace with actual lesson */}
						<LessonCard 
							title="User Input"
							lessonContent={
								"Concept: Console.ReadLine reads a line of text typed by the user.\n\n" +
								"Example:\nstring name = Console.ReadLine();\n\n" +
								"Key Point: ReadLine returns a string (text).\n\n" +
								"Mini task: Read input into a variable called name."
							}
							correctAnswer={"string name = Console.ReadLine();"}
							onComplete={handleLessonComplete}
						/>
					</View>
				</View>
			</ScrollView>
			
			<Navigation navigation={navigation} activeTab="lessons" />
		</View>
	);
};

export default CSharpLesson7;
