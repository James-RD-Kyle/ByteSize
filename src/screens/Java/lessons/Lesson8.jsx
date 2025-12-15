import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Navigation from '../../../components/Navigation';
import Logo from '../../../components/Logo';
import LessonCard from '../../../components/LessonCard';
import BackButton from '../../../components/BackButton';
import { useProgress } from '../../../context/ProgressContext';

const JavaLesson8 = ({ navigation }) => {
	const insets = useSafeAreaInsets();
	const { markLessonComplete } = useProgress();
	
	const handleLessonComplete = (isCorrect) => {
		if (isCorrect) {
			markLessonComplete('java', 8);
			console.log('Java Lesson 8 completed!');
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
							Java Lesson 8
						</Text>
						<Text className="text-sm text-gray-500 mb-6" style={{ lineHeight: 20 }}>
							Input + Output — Ask a question, then respond
						</Text>

						{/* Lesson Content - Replace with actual lesson */}
						<LessonCard 
							title="Input + Output"
							lessonContent={
								"Concept: Programs often ask for input and respond.\n\n" +
								'Example:\nSystem.out.println("What is your name?");\nScanner sc = new Scanner(System.in);\nString name = sc.nextLine();\nSystem.out.println("Hello " + name);\n\n' +
								"Key Point: + joins strings.\n\n" +
								'Mini task: Print: "Hello " + name'
							}
							correctAnswer={'System.out.println("Hello " + name);'}
							onComplete={handleLessonComplete}
						/>
					</View>
				</View>
			</ScrollView>
			
			<Navigation navigation={navigation} activeTab="lessons" />
		</View>
	);
};

export default JavaLesson8;
