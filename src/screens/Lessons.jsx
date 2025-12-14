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
import ComingSoon from '../components/ComingSoon';

const Lessons = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  
  return (
    <View style={{ flex: 1, paddingTop: insets.top, paddingBottom: insets.bottom, backgroundColor: 'white' }}>
      <ScrollView className="flex-1">
        <View className="min-h-screen">
          {/* Header with Logo */}
          <View className="bg-slate-900 py-5 px-4 items-center mb-5">
            <Logo size={150} />
          </View>

          {/* Main Content */}
          <View className="flex-1 px-5 py-5">
            <Text className="text-3xl font-bold text-center mb-4 text-slate-900">
              Choose Your Lesson
            </Text>
            <Text className="text-lg text-center mb-8 text-gray-600 leading-6">
              Here you can find all the lessons available to you. Click on any lesson to start learning!
            </Text>
            
            {/* Lesson Categories */}
            <View className="gap-4">
              <TouchableOpacity 
                className="bg-gray-50 p-5 rounded-xl border-l-4 border-l-yellow-500 shadow-lg"
                onPress={() => navigation.navigate('Javascript')}
              >
                <Text className="text-xl font-bold text-slate-900 mb-2">JavaScript</Text>
                <Text className="text-sm text-gray-600">Learn modern JavaScript fundamentals</Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                className="bg-gray-50 p-5 rounded-xl border-l-4 border-l-green-600 shadow-lg"
                onPress={() => navigation.navigate('Python')}
              >
                <Text className="text-xl font-bold text-slate-900 mb-2">Python</Text>
                <Text className="text-sm text-gray-600">Master Python programming basics</Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                className="bg-gray-50 p-5 rounded-xl border-l-4 border-l-red-600 shadow-lg"
                onPress={() => navigation.navigate('Java')}
              >
                <Text className="text-xl font-bold text-slate-900 mb-2">Java</Text>
                <Text className="text-sm text-gray-600">Explore Java object-oriented programming</Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                className="bg-gray-50 p-5 rounded-xl border-l-4 border-l-blue-600 shadow-lg"
                onPress={() => navigation.navigate('CSharp')}
              >
                <Text className="text-xl font-bold text-slate-900 mb-2">C#</Text>
                <Text className="text-sm text-gray-600">Discover C# and .NET development</Text>
              </TouchableOpacity>
            </View>
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

export default Lessons;