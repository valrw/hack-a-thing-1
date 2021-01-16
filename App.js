/**
 * Alarm app
 * Val Werner, January 2021
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

/* screens */
import ViewScreen from './ViewScreen.js';
import EditScreen from './EditScreen.js';

/* based on example from https://reactnative.dev/docs/navigation */

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <>
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={ViewScreen}
                options={{ title: 'View Alarms' }} />
            <Stack.Screen
                name="Edit"
                component={EditScreen}
                options={{ title: 'Edit Alarms' }} />
        </Stack.Navigator>
    </NavigationContainer>
    </>
  );
};

export default App;
