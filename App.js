import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createSwitchNavigator, createAppContainer} from "react-navigation";

import LoginScreen from "./screens/LoginScreen";
import LoadingScreen from "./screens/LoadingScreen";
import DashboardScreen from "./screens/DashBoardScreen";

import * as firebase from 'firebase'
import { firebaseConfig } from "./screens/config"

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)

}else{
  firebase.app();
}

const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen:LoadingScreen,
  LoginScreen:LoginScreen,
  DashboardScreen:DashboardScreen
})

const AppNavigator = createAppContainer(AppSwitchNavigator)


export default function App() {
  return (
    
    <View style={styles.container}>
      <AppNavigator/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
