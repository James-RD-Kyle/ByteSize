import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Navigation from '../../../components/Navigation';
import Logo from '../../../components/Logo';
import LessonCard from '../../../components/LessonCard';
import BackButton from '../../../components/BackButton';
import { useProgress } from '../../../context/ProgressContext';

const PythonLesson10 = ({ navigation }) => {
	const insets = useSafeAreaInsets();
	const { markLessonComplete } = useProgress();
	
	const handleLessonComplete = (isCorrect) => {
		if (isCorrect) {
			markLessonComplete('python', 10);
			console.log('Python Lesson 10 completed!');
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
							Python Lesson 10
						</Text>
						<Text className="text-sm text-gray-500 mb-6" style={{ lineHeight: 20 }}>
							Else Statements — Handle the false case
						</Text>

						{/* Lesson Content - Replace with actual lesson */}
						<LessonCard 
							title="Else Statements"
							lessonContent={
								"Concept: else runs when if is false.\n\n" +
								'Example:\nif age >= 18:\n    print("Adult")\nelse:\n    print("Minor")\n\n' +
								"Key Point: else is the fallback path.\n\n" +
								'Mini task: Write the else part that prints "Minor".'
							}
							correctAnswer={'else:\n    print("Minor")'}
							onComplete={handleLessonComplete}
						/>
					</View>
				</View>
			</ScrollView>
			
			<Navigation navigation={navigation} activeTab="lessons" />
		</View>
	);
};

export default PythonLesson10;
