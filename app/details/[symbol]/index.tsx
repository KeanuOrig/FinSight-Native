import CustomLink from '@/components/global/CustomLink';
import { useLocalSearchParams } from 'expo-router';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function DetailsScreen() {
  const { symbol } = useLocalSearchParams();

  return (
    <>
      {/* Content Section */}
      <View className="p-6 justify-center items-center">
        <Text className="text-2xl font-bold mb-4">{symbol}</Text>

        {/* Chart Placeholder (with NativeWind styling for square and centered text) */}
        <View className="w-full h-48 bg-gray-300 justify-center items-center rounded-lg">
          <Text className="text-gray-500">Chart Placeholder</Text>
        </View>
        
        <View className='mt-6'>
          <CustomLink text={'Generate Analysis'} color={'amber'} href={`/details/${symbol}/generate`}/>
        </View>
        
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

