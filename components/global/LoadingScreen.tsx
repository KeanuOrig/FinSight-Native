import { Colors } from '@/constants/Colors';
import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

type LoadingScreenProps = {
  message?: string;
  color?: string;
  size?: 'small' | 'large';
  backgroundColor?: string;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({
  message = 'Loading...',
  color = '#4A90E2',
  size = 'large',
  backgroundColor = Colors.default.backgroundColor,
}) => {
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <ActivityIndicator size={size} color={color} />
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    marginTop: 20,
    fontSize: 16,
    color: '#333',
  },
});

export default LoadingScreen;
