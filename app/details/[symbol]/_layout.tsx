import { Stack, useLocalSearchParams } from 'expo-router';
import { Colors } from '@/constants/Colors';

export default function DetailLayout() {

    const { symbol } = useLocalSearchParams();
    
    return (
        <Stack
          screenOptions={{
            headerStyle: {
              backgroundColor: Colors.default.backgroundColor,
            },
            headerTitleAlign: 'center',
          }}
        >
            <Stack.Screen
                name="index"
                options={{
                headerTitle: symbol ? `Details of ${symbol}` : 'Details',
                }}
            />
            <Stack.Screen
                name="generate"
                options={{
                headerTitle: symbol ? `AI Analysis of ${symbol}` : 'Ai Analysis',
                }}
            />

        </Stack>
    );
}
