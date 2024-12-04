import React from 'react';
import { View, Text } from 'react-native';

type CardProps = {
  title: string;
  firstDesc?: string;
  secondDesc?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  firstDesc,
  secondDesc
}) => {
    return (
        <View className="bg-gray-600 rounded-lg p-4 mb-2 w-full">
            <Text className="text-white flex-1 text-center font-bold text-lg">{title}</Text>
            <Text className="text-white flex-1 text-center">{firstDesc}</Text>
            <Text className="text-white flex-1 text-center">{secondDesc}</Text>
        </View>
    )
};

export default Card;
