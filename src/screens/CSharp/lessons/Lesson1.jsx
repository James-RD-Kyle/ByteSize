import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Navigation from '../../../components/Navigation';
import Logo from '../../../components/Logo';
import LessonCard from '../../../components/LessonCard';
import BackButton from '../../../components/BackButton';
import { useProgress } from '../../../context/ProgressContext';

const CSharpLesson1 = ({ navigation }) => {
	const insets = useSafeAreaInsets();
	const { markLessonComplete } = useProgress();
	
	const handleLessonComplete = (isCorrect) => {
		if (isCorrect) {
			markLessonComplete('csharp', 1);
			console.log('C# Lesson 1 completed!');
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
							C# Lesson 1
						</Text>
						<Text className="text-sm text-gray-500 mb-6" style={{ lineHeight: 20 }}>
							What Is C#? — A quick intro to the C# language
						</Text>

						{/* Lesson Content - Replace with actual lesson */}
						<LessonCard 
							title="What Is C#?"
							lessonContent={
								"Concept: C# (pronounced C-sharp) is a programming language used to build apps like games, websites, and desktop programs.\n\n" +
								"Example:\n// This is what C# code looks like\n\n" +
								"Key Point: C# is general-purpose, so it can be used for many different types of apps.\n\n" +
								'Mini task: Print "Welcome to ByteSize!"'
							}
							correctAnswer={'Console.WriteLine("Welcome to ByteSize!");'}
							onComplete={handleLessonComplete}
						/>
					</View>
				</View>
			</ScrollView>
			
			<Navigation navigation={navigation} activeTab="lessons" />
		</View>
	);
};

export default CSharpLesson1;
