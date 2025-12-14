import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';

const Home = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  
  const handleStartLearning = () => {
    // Navigate to Lessons screen
    if (navigation) {
      navigation.navigate('Lessons');
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
          <View className="min-h-96 justify-center items-center px-5 py-10">
            <Text className="text-3xl font-bold text-center mb-4 text-slate-900">
              Welcome to <Text className="text-blue-600">ByteSize</Text>
            </Text>
            <Text className="text-lg text-center mb-8 text-gray-600 leading-6">
              Master coding one byte at a time. Learn, practice, and track your progress!
            </Text>
            <TouchableOpacity 
              className="bg-blue-600 px-8 py-4 rounded-xl shadow-lg"
              onPress={handleStartLearning}
            >
              <Text className="text-white text-lg font-bold">Start Learning</Text>
            </TouchableOpacity>
          </View>

          {/* Footer */}
          <View className="bg-gray-50 py-5 items-center">
            <Text className="text-sm text-gray-600">© 2025 ByteSize. All rights reserved.</Text>
          </View>
        </View>
      </ScrollView>
      
      {/* Bottom Navigation */}
      <Navigation navigation={navigation} activeTab="Home" />
    </View>
  );
};

export default Home;
