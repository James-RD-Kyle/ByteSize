import React from 'react';
import {
  View,
  Text,
  //TouchableOpacity,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Logo from '../components/Logo';

function Login() {
  return (
	<SafeAreaView className="flex-1 bg-white">
	  <ScrollView className="flex-1">
		<View className="min-h-screen">
		  {/* Header with Logo */}
		  <View className="bg-slate-900 py-5 px-4 items-center mb-5">
			<Logo size={150} />
		  </View>
		  {/* Main Content */}
		  <View className="flex-1 px-5 py-5 justify-center items-center">
			{/* Put login form here */}
			<Text className="text-2xl font-bold text-slate-900">Login Screen</Text>
			<form>
			  <label className="block mb-2 text-sm font-medium text-gray-700">
				Email:
				</label>
			  <input
				type="email"
				className="border border-gray-300 rounded-lg px-3 py-2 mb-4 w-64"
				placeholder="Enter your email"
				/>
			  <label className="block mb-2 text-sm font-medium text-gray-700">
				Password:
				</label>
				<input
				type="password"
				className="border border-gray-300 rounded-lg px-3 py-2 mb-4 w-64"
				placeholder="Enter your password"
				/>
			  <button
				type="submit"
				className="bg-blue-600 text-white px-4 py-2 rounded-lg"
				>
				Login
			  </button>
			</form>
		  </View>
		  {/* Footer */}
		  <View className="bg-gray-50 py-5 items-center">
			<Text className="text-sm text-gray-600">© 2025 ByteSize. All rights reserved.</Text>
		  </View>
		</View>
	  </ScrollView>
	</SafeAreaView>
  );
}