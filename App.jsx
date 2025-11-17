import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, Text, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import "./global.css"

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent isDarkMode={isDarkMode} />
    </SafeAreaProvider>
  );
}

function AppContent({ isDarkMode }) {
  const safeAreaInsets = useSafeAreaInsets();

  return (
      <View className="flex-1 items-center justify-center">
        <Text
          className={`text-2xl font-bold ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}>
          ByteSize App
        </Text>
      </View>
  );
}

export default App;
