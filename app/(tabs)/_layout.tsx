import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { Image } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ 
      tabBarActiveTintColor: '#212121',
      headerTitle: () => {
        return <Image
          source={require("../../assets/images/favicon.png")}
          style={{ width: 120, height: 40, resizeMode: "contain" }} />;
      },
      headerTitleAlign: 'center',
      tabBarActiveBackgroundColor: '#FFECB3',
      headerStyle: {
        backgroundColor: '#FFECB3',
      },
    }}>
      <Tabs.Screen
        name="index" 
        options={{
          title:'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title:'Settings',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
        }}
      />
    </Tabs>
  );
}
