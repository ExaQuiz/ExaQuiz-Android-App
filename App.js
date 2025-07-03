import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import QuizScreen from './screens/QuizScreen';
import ProfileScreen from './screens/ProfileScreen';
import ResultScreen from './screens/ResultScreen';
import RedeemScreen from './screens/RedeemScreen';
import NotificationInbox from './screens/NotificationInbox';
import CompetitionScreen from './screens/CompetitionScreen';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Quiz" component={QuizScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Result" component={ResultScreen} />
        <Stack.Screen name="Redeem" component={RedeemScreen} />
        <Stack.Screen name="Notifications" component={NotificationInbox} />
        <Stack.Screen name="Competition" component={CompetitionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
