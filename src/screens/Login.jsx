import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Logo from '../components/Logo';

function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Navigate to Home when login is pressed (no functionality yet)
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView className="flex-1">
        <View className="min-h-screen justify-center">
          {/* Header with Logo */}
          <View className="items-center mb-8">
            <Logo size={200} />
            <Text className="text-3xl font-bold text-slate-900 mt-4">
              Welcome to ByteSize
            </Text>
            <Text className="text-base text-gray-600 mt-2">
              Learn programming, one byte at a time
            </Text>
          </View>

          {/* Login Form */}
          <View className="px-6">
            <View className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <Text className="text-2xl font-bold text-slate-900 mb-6 text-center">
                Login
              </Text>

              {/* Email Input */}
              <View className="mb-4">
                <Text className="text-sm font-medium text-gray-700 mb-2">
                  Email
                </Text>
                <TextInput
                  className="border border-gray-300 rounded-lg px-4 py-3 text-base"
                  placeholder="Enter your email"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>

              {/* Password Input */}
              <View className="mb-6">
                <Text className="text-sm font-medium text-gray-700 mb-2">
                  Password
                </Text>
                <TextInput
                  className="border border-gray-300 rounded-lg px-4 py-3 text-base"
                  placeholder="Enter your password"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry
                />
              </View>

              {/* Login Button */}
              <TouchableOpacity
                className="bg-blue-600 rounded-lg py-4 items-center mb-4"
                onPress={handleLogin}
              >
                <Text className="text-white font-bold text-lg">
                  Login
                </Text>
              </TouchableOpacity>

              {/* Forgot Password Link */}
              <TouchableOpacity className="items-center">
                <Text className="text-blue-600 text-sm">
                  Forgot Password?
                </Text>
              </TouchableOpacity>
            </View>

            {/* Sign Up Link */}
            <View className="flex-row justify-center mt-6">
              <Text className="text-gray-600">
                Don't have an account?{' '}
              </Text>
              <TouchableOpacity>
                <Text className="text-blue-600 font-semibold">
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Footer */}
          <View className="mt-12 py-5 items-center">
            <Text className="text-sm text-gray-600">
              © 2025 ByteSize. All rights reserved.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Login;