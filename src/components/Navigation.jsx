import React from 'react';
import {
	View,
	Text,
	TouchableOpacity,
} from 'react-native';

function Navigation({ navigation, activeTab = 'Home' }) {

	const handleNavigateToProfile = () => {
		// Navigate to Profile screen
		if (navigation) {
			navigation.navigate('Profile');
		}
	};

	const handleNavigateToHome = () => {
		// Navigate to Home screen
	  if (navigation) {
			navigation.navigate('Home');
		}
	};

	const handleNavigateToLessons = () => {
		// Navigate to Lessons screen
		if (navigation) {
			navigation.navigate('Lessons');
		}
	};

	return (
		<View className="bg-slate-900 border-t border-slate-700 pb-5">
			<View className="flex-row justify-center gap-2.5 mt-5">
				<TouchableOpacity 
					className={`px-4 py-2 rounded-xl ${activeTab === 'Home' ? 'bg-blue-600' : ''}`}
					onPress={handleNavigateToHome}
				>
					<Text className={`text-white text-base ${activeTab === 'Home' ? 'font-bold' : 'font-medium'}`}>
						Home
					</Text>
				</TouchableOpacity>
				
				<TouchableOpacity 
					className={`px-4 py-2 rounded-xl ${activeTab === 'Lessons' ? 'bg-blue-600' : ''}`}
					onPress={handleNavigateToLessons}
				>
					<Text className={`text-white text-base ${activeTab === 'Lessons' ? 'font-bold' : 'font-medium'}`}>
						Lessons
					</Text>
				</TouchableOpacity>
				
				<TouchableOpacity 
					className={`px-4 py-2 rounded-xl ${activeTab === 'Profile' ? 'bg-blue-600' : ''}`}
					onPress={handleNavigateToProfile}
				>
					<Text className={`text-white text-base ${activeTab === 'Profile' ? 'font-bold' : 'font-medium'}`}>
						Profile
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default Navigation;