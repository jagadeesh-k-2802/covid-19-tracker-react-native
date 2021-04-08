import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import {
  createStackNavigator,
  CardStyleInterpolators,
  TransitionSpecs
} from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { Home, Search, Prevention } from './pages';
import Detail from './pages/Detail';
import constants from './constants';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const createTabOptions = ({ tabBarLabel, icon }) => ({
  tabBarLabel,
  tabBarIcon: ({ color }) => (
    <MaterialCommunityIcons name={icon} color={color} size={26} />
  )
});

const barStyle = { backgroundColor: '#FFF' };

const screenOptions = {
  transitionSpec: {
    open: TransitionSpecs.ScaleFromCenterAndroidSpec,
    close: TransitionSpecs.ScaleFromCenterAndroidSpec
  },
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
};

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: constants.primaryBlue
  }
};

const StackScreen = () => (
  <Stack.Navigator
    initialRouteName="Home"
    headerMode="none"
    screenOptions={screenOptions}>
    <Stack.Screen name="Home" component={Prevention} />
    <Stack.Screen name="Detail" component={Detail} />
  </Stack.Navigator>
);

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="Home"
            barStyle={barStyle}
            activeColor={constants.primaryDarkBlue}>
            <Tab.Screen
              name="Home"
              component={Home}
              options={createTabOptions({
                touchBarLabel: 'Home',
                icon: 'home'
              })}
            />

            <Tab.Screen
              name="Search"
              component={Search}
              options={createTabOptions({
                touchBarLabel: 'Search',
                icon: 'magnify'
              })}
            />

            <Tab.Screen
              name="Prevention"
              component={StackScreen}
              options={createTabOptions({
                touchBarLabel: 'Prevention',
                icon: 'security'
              })}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </PaperProvider>
  );
};

export default App;
