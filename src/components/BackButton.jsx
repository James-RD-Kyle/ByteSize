import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const BackButton = ({ navigation, textColor = '#2563eb' }) => {
	return (
		<TouchableOpacity
			onPress={() => navigation.goBack()}
			className="flex-row items-center mb-4"
		>
			<Text className="text-lg font-semibold" style={{ color: textColor }}>Back</Text>
		</TouchableOpacity>
	);
};

export default BackButton;
