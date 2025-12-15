import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import { useProgress } from '../context/ProgressContext';

function Profile({ navigation }) {
  const insets = useSafeAreaInsets();
  const { completedLessons } = useProgress();
  
  // Profile state - ready for actual user data
  const [profile, setProfile] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'user@example.com',
    username: 'johndoe',
    dateOfBirth: '01/01/2001',
  });

  const [isEditing, setIsEditing] = useState(false);

  // Statistics by language - using actual completion data
  const languageStats = [
    { language: 'C#', completed: (completedLessons.csharp || []).length, total: 10, color: '#2563eb' },
    { language: 'JavaScript', completed: (completedLessons.javascript || []).length, total: 10, color: '#ca8a04' },
    { language: 'Python', completed: (completedLessons.python || []).length, total: 10, color: '#16a34a' },
    { language: 'Java', completed: (completedLessons.java || []).length, total: 10, color: '#dc2626' },
  ];
  
  return (
    <View style={{ flex: 1, paddingTop: insets.top, paddingBottom: insets.bottom, backgroundColor: 'white' }}>
      <ScrollView className="flex-1">
        <View className="min-h-screen">
          {/* Header with Logo */}
          <View className="bg-slate-900 py-5 px-4 items-center mb-5">
            <Logo size={150} />
          </View>

          {/* Main Content */}
          <View className="flex-1 px-6 py-5">
            {/* Profile Header */}
            <View className="items-center mb-6">
              {/* Profile Picture Placeholder */}
              <View 
                style={{ 
                  width: 96, 
                  height: 96, 
                  borderRadius: 48,
                  backgroundColor: '#e2e8f0',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 16
                }}
              >
                <Text className="text-4xl text-slate-600">
                  {profile.firstName[0]}{profile.lastName[0]}
                </Text>
              </View>

              {/* Name and Username */}
              <Text className="text-2xl font-bold text-slate-900 mb-1">
                {profile.firstName} {profile.lastName}
              </Text>
              <Text className="text-base text-gray-600 mb-2">
                @{profile.username}
              </Text>
            </View>

            {/* Profile Details */}
            <View className="bg-gray-50 rounded-lg p-4 mb-6">
              <View className="flex-row justify-between items-center mb-3">
                <Text className="text-lg font-bold text-slate-900">
                  Account Information
                </Text>
                <TouchableOpacity
                  className="px-4 py-2 bg-blue-600 rounded-lg"
                  onPress={() => setIsEditing(!isEditing)}
                >
                  <Text className="text-white font-semibold text-sm">
                    {isEditing ? 'Save' : 'Edit'}
                  </Text>
                </TouchableOpacity>
              </View>
              
              <View className="mb-3">
                <Text className="text-sm text-gray-600 mb-1">First Name</Text>
                {isEditing ? (
                  <TextInput
                    className="text-base text-slate-900 border border-gray-300 rounded px-3 py-2"
                    value={profile.firstName}
                    onChangeText={(text) => setProfile({...profile, firstName: text})}
                    placeholder="First Name"
                  />
                ) : (
                  <Text className="text-base text-slate-900">{profile.firstName}</Text>
                )}
              </View>

              <View className="mb-3">
                <Text className="text-sm text-gray-600 mb-1">Last Name</Text>
                {isEditing ? (
                  <TextInput
                    className="text-base text-slate-900 border border-gray-300 rounded px-3 py-2"
                    value={profile.lastName}
                    onChangeText={(text) => setProfile({...profile, lastName: text})}
                    placeholder="Last Name"
                  />
                ) : (
                  <Text className="text-base text-slate-900">{profile.lastName}</Text>
                )}
              </View>

              <View className="mb-3">
                <Text className="text-sm text-gray-600 mb-1">Username</Text>
                {isEditing ? (
                  <TextInput
                    className="text-base text-slate-900 border border-gray-300 rounded px-3 py-2"
                    value={profile.username}
                    onChangeText={(text) => setProfile({...profile, username: text})}
                    placeholder="Username"
                  />
                ) : (
                  <Text className="text-base text-slate-900">@{profile.username}</Text>
                )}
              </View>

              <View className="mb-3">
                <Text className="text-sm text-gray-600 mb-1">Email</Text>
                {isEditing ? (
                  <TextInput
                    className="text-base text-slate-900 border border-gray-300 rounded px-3 py-2"
                    value={profile.email}
                    onChangeText={(text) => setProfile({...profile, email: text})}
                    placeholder="Email"
                    keyboardType="email-address"
                  />
                ) : (
                  <Text className="text-base text-slate-900">{profile.email}</Text>
                )}
              </View>

              <View>
                <Text className="text-sm text-gray-600 mb-1">Date of Birth</Text>
                {isEditing ? (
                  <TextInput
                    className="text-base text-slate-900 border border-gray-300 rounded px-3 py-2"
                    value={profile.dateOfBirth}
                    onChangeText={(text) => setProfile({...profile, dateOfBirth: text})}
                    placeholder="MM/DD/YYYY"
                  />
                ) : (
                  <Text className="text-base text-slate-900">{profile.dateOfBirth}</Text>
                )}
              </View>
            </View>

            {/* Progress by Language */}
            <View className="bg-gray-50 rounded-lg p-4 mb-6">
              <Text className="text-lg font-bold text-slate-900 mb-4">
                Progress by Language
              </Text>
              
              {languageStats.map((lang, index) => (
                <View key={index} className="mb-4">
                  <View className="flex-row justify-between mb-2">
                    <Text className="text-sm font-medium text-slate-900">
                      {lang.language}
                    </Text>
                    <Text className="text-sm text-gray-600">
                      {lang.completed}/{lang.total} lessons
                    </Text>
                  </View>
                  
                  {/* Progress Bar */}
                  <View className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <View 
                      style={{
                        width: `${(lang.completed / lang.total) * 100}%`,
                        backgroundColor: lang.color,
                      }}
                      className="h-full"
                    />
                  </View>
                </View>
              ))}
            </View>

          </View>

          {/* Footer */}
          <View className="bg-gray-50 py-5 items-center">
            <Text className="text-sm text-gray-600">© 2025 ByteSize. All rights reserved.</Text>
          </View>
        </View>
      </ScrollView>
      
      {/* Bottom Navigation */}
      <Navigation navigation={navigation} activeTab="Profile" />
    </View>
  );
};

export default Profile;