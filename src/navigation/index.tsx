import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SplashScreen, Login, Home, Shops, Profile } from '../pages/index';
import { Provider } from 'react-redux';
import { store } from '../provider/store';
import { theme } from '../theme';
import { Header } from '../components/molecules/Header/Header';
const Stack = createNativeStackNavigator();
const HomeTabs = createMaterialTopTabNavigator();

const HomeTabsScreen = () => {
  return (
    <HomeTabs.Navigator screenOptions={{
      tabBarLabelStyle: {
        color: theme.colors.primary[50],
        fontFamily: 'Roboto',
        fontWeight: '700'
      },
      tabBarStyle: {
        backgroundColor: theme.colors.primary[600]
      }
    }}>
      <HomeTabs.Screen name="Lojas" component={Shops} />
      <HomeTabs.Screen name="Ofertas" component={Home} />
    </HomeTabs.Navigator>
  );
}

const ShopTabsScreen = () => {
  return (
    <HomeTabs.Navigator screenOptions={{
      tabBarLabelStyle: {
        color: theme.colors.primary[50],
        fontFamily: 'Roboto',
        fontWeight: '700'
      },
      tabBarStyle: {
        backgroundColor: theme.colors.primary[600]
      }
    }}>
      <HomeTabs.Screen name="Ofertas da Loja" component={Shops} />
      <HomeTabs.Screen name="Informações" component={Profile} />
    </HomeTabs.Navigator>
  );
}

const Navigation = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Header />
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
          
        >
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={HomeTabsScreen} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Shop" component={ShopTabsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
};

export default Navigation;
