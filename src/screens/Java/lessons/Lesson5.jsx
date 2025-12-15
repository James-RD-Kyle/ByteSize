import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Navigation from '../../../components/Navigation';
import Logo from '../../../components/Logo';
import LessonCard from '../../../components/LessonCard';
import BackButton from '../../../components/BackButton';

const JavaLesson5 = ({ navigation }) => {
	const insets = useSafeAreaInsets();
	
	const handleLessonComplete = (isCorrect) => {
		if (isCorrect) {
			console.log('Java Lesson 5 completed!');
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
							Java Lesson 5
						</Text>
						<Text className="text-sm text-gray-500 mb-6" style={{ lineHeight: 20 }}>
							Common Data Types — int, String, boolean
						</Text>

						{/* Lesson Content - Replace with actual lesson */}
						<LessonCard 
							title="Common Data Types"
							lessonContent={
								"Concept: Types describe what kind of data you store.\n\n" +
								'Example:\nint score = 100;\nString name = "James Kyle";\nboolean isOnline = true;\n\n' +
								"Key Point: Choose the type that matches your data.\n\n" +
								'Mini task: Create a String named name with value "James Kyle".'
							}
							correctAnswer={'String name = "James Kyle";'}
							onComplete={handleLessonComplete}
						/>
					</View>
				</View>
			</ScrollView>
			
			<Navigation navigation={navigation} activeTab="lessons" />
		</View>
	);
};

export default JavaLesson5;
