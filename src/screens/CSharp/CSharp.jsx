import React from 'react';
import {View, Text, ScrollView, SafeAreaView} from 'react-native';
import Navigation from '../../components/Navigation';
import Logo from '../../components/Logo';

const CSharp = ({ navigation }) => {
	return (
		<SafeAreaView className="flex-1 bg-white">
			<ScrollView className="flex-1">
				<View className="min-h-screen">
					{/* Header with Logo */}
					<View className="bg-slate-900 py-5 px-4 items-center mb-5">
						<Logo size={150} />
					</View>

					{/* Main Content */}
					<View className="flex-1 px-5 py-5">
						<Text className="text-3xl font-bold text-center mb-4 text-slate-900">
							C# Lessons
						</Text>
						<View>
							<Text className="text-xl font-bold text-slate-900 mb-2">Level 1: Basics</Text>
							<Text className="text-base text-gray-600 mb-4">Print text, run first program, understand structure</Text>
						</View>
					</View>

					{/* Footer */}
					<View className="bg-gray-50 py-5 items-center">
						<Text className="text-sm text-gray-600">© 2025 ByteSize. All rights reserved.</Text>
					</View>
				</View>
			</ScrollView>
			
			{/* Bottom Navigation */}
			<View className="bg-slate-900 border-t pb-10 border-slate-700">
				<Navigation navigation={navigation} activeTab="Lessons" />
			</View>
		</SafeAreaView>
	);
};

export default CSharp;