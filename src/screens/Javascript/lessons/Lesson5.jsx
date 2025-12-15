import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Navigation from '../../../components/Navigation';
import Logo from '../../../components/Logo';
import LessonCard from '../../../components/LessonCard';
import BackButton from '../../../components/BackButton';

const JSLesson5 = ({ navigation }) => {
	const insets = useSafeAreaInsets();
	
	const handleLessonComplete = (isCorrect) => {
		if (isCorrect) {
			console.log('JavaScript Lesson 5 completed!');
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
							JavaScript Lesson 5
						</Text>
						<Text className="text-sm text-gray-500 mb-6" style={{ lineHeight: 20 }}>
							Common Data Types — number, string, boolean
						</Text>

						{/* Lesson Content - Replace with actual lesson */}
						<LessonCard 
							title="Common Data Types"
							lessonContent={
								"Concept: JavaScript has types like number, string, and boolean.\n\n" +
								'Example:\nlet score = 100;\nlet name = "James Kyle";\nlet isOnline = true;\n\n' +
								"Key Point: JavaScript figures out types automatically.\n\n" +
								'Mini task: Create a variable name with value "James Kyle".'
							}
							correctAnswer={'let name = "James Kyle";'}
							onComplete={handleLessonComplete}
						/>
					</View>
				</View>
			</ScrollView>
			
			<Navigation navigation={navigation} activeTab="lessons" />
		</View>
	);
};

export default JSLesson5;
