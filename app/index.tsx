import { Text, StatusBar, View} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import CustomLink from '@/components/global/CustomLink';

const HomeScreen = () => {
  return (
    <SafeAreaProvider>
      <StatusBar className="bg-gray-300" translucent />
      <SafeAreaView className="flex-1 justify-center bg-gray-600">
        <Text className="text-center text-white italic text-3xl font-serif">Welcome to FinSight!</Text>
        <View className='w-56 mx-auto mt-6'>
          <CustomLink 
            href="/(tabs)" 
            color='amber'
            text='Get Started'
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default HomeScreen;
