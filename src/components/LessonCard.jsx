import React, { useState } from 'react';
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
} from 'react-native';

const LessonCard = ({ title, lessonContent, correctAnswer, onComplete }) => {
	const [userInput, setUserInput] = useState('');
	const [isCorrect, setIsCorrect] = useState(null);
	const [showFeedback, setShowFeedback] = useState(false);

	const checkAnswer = () => {
		const isAnswerCorrect = userInput.trim() === correctAnswer.trim();
		setIsCorrect(isAnswerCorrect);
		setShowFeedback(true);
		
		if (isAnswerCorrect && onComplete) {
			onComplete(true);
		}
	};

	const resetLesson = () => {
		setUserInput('');
		setIsCorrect(null);
		setShowFeedback(false);
	};

	return (
		<View className="bg-white p-6 rounded-2xl border border-gray-200" style={{ shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 8, elevation: 3 }}>
			{/* Lesson Title */}
			<Text className="text-2xl font-bold text-slate-900 mb-4">
				{title}
			</Text>

			{/* Lesson Content */}
			<View className="bg-gray-50 p-4 rounded-xl mb-4">
				<Text className="text-sm text-gray-700" style={{ lineHeight: 22 }}>
					{lessonContent}
				</Text>
			</View>

			{/* Text Input Area */}
			<View className="mb-4">
				<Text className="text-sm font-semibold text-gray-700 mb-2">
					Your Answer:
				</Text>
				<TextInput
					className="bg-white border border-gray-300 rounded-xl p-4 text-base text-slate-900"
					style={{ minHeight: 100, textAlignVertical: 'top' }}
					multiline
					placeholder="Type your code here..."
					placeholderTextColor="#9CA3AF"
					value={userInput}
					onChangeText={setUserInput}
					editable={!showFeedback || !isCorrect}
				/>
			</View>

			{/* Feedback Message */}
			{showFeedback && (
				<View className={`p-4 rounded-xl mb-4 ${isCorrect ? 'bg-green-50' : 'bg-red-50'}`}>
					<Text className={`text-sm font-semibold ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
						{isCorrect ? '✓ Correct! Great job!' : '✗ Not quite right. Try again!'}
					</Text>
				</View>
			)}

			{/* Action Buttons */}
			<View className="flex-row gap-3">
				{!showFeedback || !isCorrect ? (
					<TouchableOpacity
						className="flex-1 bg-blue-600 rounded-xl"
						style={{ paddingVertical: 14 }}
						onPress={checkAnswer}
						activeOpacity={0.8}
					>
						<Text className="text-white text-base font-semibold text-center">
							Check Answer
						</Text>
					</TouchableOpacity>
				) : null}
				
				{showFeedback && !isCorrect && (
					<TouchableOpacity
						className="flex-1 bg-gray-200 rounded-xl"
						style={{ paddingVertical: 14 }}
						onPress={resetLesson}
						activeOpacity={0.8}
					>
						<Text className="text-gray-700 text-base font-semibold text-center">
							Reset
						</Text>
					</TouchableOpacity>
				)}
			</View>
		</View>
	);
};

export default LessonCard;
