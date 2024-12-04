import React from 'react';
import { Pressable, Text } from 'react-native';
import { Link, LinkProps } from 'expo-router';

type CustomLinkProps = {
  text: string;
  color: 'red' | 'blue' | 'amber' | 'green';
} & Pick<LinkProps, 'href'>;

const CustomLink: React.FC<CustomLinkProps> = ({ href, text, color }) => {

  const colorVariants = {
    red: 'bg-red-600',
    blue: 'bg-blue-600',
    amber: 'bg-amber-600',
    green: 'bg-green-600',
  }

  return (
    <Link href={href} asChild> 
      <Pressable className={`${colorVariants[color]} py-3 px-6 rounded-lg mx-auto`}>
          <Text className='text-white text-center'>{text}</Text>
      </Pressable>
    </Link>
  );  
};

export default CustomLink;
