// /app/details/[symbol]/generate.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { fetchStockPrediction } from '@/api/stocks';
import { BuyRating, SearchParamType } from '@/types';
import Toast from 'react-native-toast-message';
import LoadingScreen from '@/components/global/LoadingScreen';
import { BUY_RATING } from '@/constants/Rating';

export default function GenerateScreen() {
  const { symbol } = useLocalSearchParams<SearchParamType>();

  const [analysis, setAnalysis] = useState('');
  const [buyRating, setBuyRating] = useState<BuyRating>('None')
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const generateAnalysis = async () => {
      try {
        setIsLoading(true);
        const data = await fetchStockPrediction(symbol);
        setAnalysis(data.prediction); 
        setBuyRating(data.rating);
      } catch (error) {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: 'Failed to analyze. Please try again later.',
        });
        console.error('Error fetching stocks:', error);
      } finally {
        setIsLoading(false); 
      }
    };
    generateAnalysis();
  }, []);

  let textColor = '';   
    
  switch (buyRating) {
      case BUY_RATING.STRONG_BUY:
          textColor = 'text-green-500';
          break;
      case BUY_RATING.BUY:
          textColor = 'text-green-500';
          break;
      case BUY_RATING.HOLD:
          textColor = 'text-blue-500';
          break;
      case BUY_RATING.SELL:
          textColor = 'text-red-500';
          break;
      case BUY_RATING.STRONG_SELL:
          textColor = 'text-red-500';
          break;
    default:
      textColor = 'text-gray-500';
  }

  const renderAnalysis = (text: string) => {

    const sanitizedText = text.replace(/\n+/g, "\n").trim();
    const sections = sanitizedText.split("\n\n");
  
    return sections.map((section, index) => {
      const parts = section.split(/\*\*(.*?)\*\*/);
  
      return (
        <View key={index} className="mb-4">
          <Text className="text-gray-700 leading-relaxed text-justify">
            {parts.map((part, idx) =>
              idx % 2 === 1 ? (
                <Text key={idx} className="mb-6 font-bold">
                  {"\n"}{part}{"\n"}
                </Text>
              ) : (
                part
              )
            )}
          </Text>
        </View>
      );
    });
  };
  
  
  if (isLoading) {
    return <LoadingScreen/>
  }
  
  return (
    <ScrollView className="bg-gray-100 flex-1 p-4">
      <View className="bg-white rounded-lg shadow-md p-4">
        <Text className={`text-center text-lg font-bold m-6 ${textColor}`}>
          Rating: {buyRating}
        </Text>
        <Text className="text-lg font-bold text-gray-800 mb-2">
          AI Analysis
        </Text>
        {renderAnalysis(analysis)}
      </View>
    </ScrollView>
  );
}
