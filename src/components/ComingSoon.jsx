import React from 'react';
import { View, Text } from 'react-native';

const ComingSoon = () => {
  return (
	// does not make content unclickable
    <View className="absolute top-2 right-2">
      <Text className="text-white text-xs font-semibold bg-black/70 px-2 py-1 rounded">
        Coming Soon
      </Text>
    </View>
  );
};

export default ComingSoon;
