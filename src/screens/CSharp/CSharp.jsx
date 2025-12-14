import React, { useState } from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Navigation from '../../components/Navigation';
import Logo from '../../components/Logo';
import BackButton from '../../components/BackButton';

const CSharp = ({ navigation }) => {
	const insets = useSafeAreaInsets();
	const [completedLessons, setCompletedLessons] = useState([]);

	const lessons = [
		{ id: 1, title: 'Lesson Title 1', description: 'Description for lesson 1' },
		{ id: 2, title: 'Lesson Title 2', description: 'Description for lesson 2' },
		{ id: 3, title: 'Lesson Title 3', description: 'Description for lesson 3' },
		{ id: 4, title: 'Lesson Title 4', description: 'Description for lesson 4' },
		{ id: 5, title: 'Lesson Title 5', description: 'Description for lesson 5' },
		{ id: 6, title: 'Lesson Title 6', description: 'Description for lesson 6' },
		{ id: 7, title: 'Lesson Title 7', description: 'Description for lesson 7' },
		{ id: 8, title: 'Lesson Title 8', description: 'Description for lesson 8' },
		{ id: 9, title: 'Lesson Title 9', description: 'Description for lesson 9' },
		{ id: 10, title: 'Lesson Title 10', description: 'Description for lesson 10' },
	];

	const handleLessonPress = (lessonId) => {
		navigation.navigate(`CSharpLesson${lessonId}`);
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
							C# Lessons
						</Text>
						<Text className="text-sm text-gray-500 mb-6" style={{ lineHeight: 20 }}>
							Master C# fundamentals with hands-on practice
						</Text>

						{/* Progress Summary */}
						<View className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
							<Text className="text-lg font-semibold text-blue-900 mb-1">
								Progress: {completedLessons.length}/{lessons.length} Lessons
							</Text>
							<View className="bg-gray-200 h-3 rounded-full overflow-hidden">
								<View 
									className="bg-blue-600 h-full" 
									style={{ width: `${(completedLessons.length / lessons.length) * 100}%` }}
								/>
							</View>
						</View>

						{/* Lessons List */}
						{lessons.map((lesson) => {
							const isCompleted = completedLessons.includes(lesson.id);
							return (
								<TouchableOpacity
									key={lesson.id}
									onPress={() => handleLessonPress(lesson.id)}
									className={`mb-4 rounded-lg p-4 border-2 ${
										isCompleted 
											? 'bg-green-50 border-green-500' 
											: 'bg-white border-gray-300'
									}`}
								>
									<View className="flex-row items-center justify-between">
										<View className="flex-1">
											<Text className={`text-lg font-bold mb-1 ${
												isCompleted ? 'text-green-900' : 'text-slate-900'
											}`}>
												Lesson {lesson.id}: {lesson.title}
											</Text>
											<Text className={`text-sm ${
												isCompleted ? 'text-green-700' : 'text-gray-600'
											}`}>
												{lesson.description}
											</Text>
										</View>
										<View className={`ml-4 w-8 h-8 rounded-full items-center justify-center ${
											isCompleted ? 'bg-green-500' : 'bg-gray-300'
										}`}>
											<Text className="text-white font-bold">
												{isCompleted ? '✓' : lesson.id}
											</Text>
										</View>
									</View>
								</TouchableOpacity>
							);
						})}
					</View>

					{/* Footer */}
					<View className="bg-gray-50 py-5 items-center">
						<Text className="text-sm text-gray-600">© 2025 ByteSize. All rights reserved.</Text>
					</View>
				</View>
			</ScrollView>
			
			{/* Bottom Navigation */}
			<Navigation navigation={navigation} activeTab="Lessons" />
		</View>
	);
};

export default CSharp;