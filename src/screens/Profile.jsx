import React from 'react';
import {
  View,
  Text,
  // TouchableOpacity,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';

function Profile({ navigation }) {
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
            {/* Put profile here */}
          </View>

          {/* Footer */}
          <View className="bg-gray-50 py-5 items-center">
            <Text className="text-sm text-gray-600">© 2025 ByteSize. All rights reserved.</Text>
          </View>
        </View>
      </ScrollView>
      
      {/* Bottom Navigation */}
      <View className="bg-slate-900 border-t pb-10 border-slate-700">
        <Navigation navigation={navigation} activeTab="Profile" />
      </View>
    </SafeAreaView>
  );
};

export default Profile;