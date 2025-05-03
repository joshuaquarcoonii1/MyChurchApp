import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import SermonsScreen from './screens/SermonsScreen';
import AnnouncementsScreen from './screens/AnnouncementsScreen';
import EventsScreen from './screens/EventsScreen';
// (Later, you can create SermonsScreen.js, AnnouncementsScreen.js, etc.)
import { Ionicons } from '@expo/vector-icons';  // << You import this at the top

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
     <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Sermons') {
              iconName = 'play-circle';
            } else if (route.name === 'Announcements') {
              iconName = 'megaphone';
            }else if (route.name === 'Events') {
              iconName = 'calendar'; // Icon for Events screen
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          headerShown: true,
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Sermons" component={SermonsScreen} />
<Tab.Screen name="Announcements" component={AnnouncementsScreen} />
<Tab.Screen name="Events" component={EventsScreen} />
        {/* Later add other screens here */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
