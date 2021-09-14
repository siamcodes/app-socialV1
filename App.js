import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomePage from './pages/HomePage';
import LoadingPage from './pages/LoadingPage';
import LoginPage from './pages/LoginPage';
import PostPage from './pages/PostPage';
import ProfilePage from './pages/ProfilePage';
import RegisterPage from './pages/RegisterPage';
import NotificationPage from './pages/NotificationPage';
import MessagePage from './pages/MessagePage';

import firebase from 'firebase';
var firebaseConfig = {
  apiKey: "AIzaSyD0veqUiz-Hn1ssSgtw4uDwx0-CNKlcwo0",
  authDomain: "app-ch3-27bc3.firebaseapp.com",
  projectId: "app-ch3-27bc3",
  storageBucket: "app-ch3-27bc3.appspot.com",
  messagingSenderId: "791652650782",
  appId: "1:791652650782:web:e9eb7356efe7ca1741c30f",
  measurementId: "G-2WSZ75NDX9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics(); 


const AppTabNavigator = createBottomTabNavigator(
  {
    Home:{
      screen: HomePage,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => <Ionicons name="ios-home" size={24} color={tintColor} />
      }
    },
    Message:{
      screen: MessagePage,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => <Ionicons name="ios-chatbox" size={24} color={tintColor} />
      }
    },
    Post:{
      screen: PostPage,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => <Ionicons name="ios-add-circle" size={48} color={tintColor} />
      }
    },
    Notification:{
      screen: NotificationPage,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => <Ionicons name="ios-notifications" size={24} color={tintColor} />
      }
    },
    Profile:{
      screen: ProfilePage,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => <Ionicons name="ios-person" size={24} color={tintColor} />
      }
    }

  },
  {
    tabBarOptions: {
      activeTintColor: "#161F3D",
      inactiveTintColor: "#88888C4",
      showLabel: false
    }
  }

)

const AppStack = createStackNavigator({ 
   Home: HomePage,
   Post: PostPage,
   Profile: ProfilePage
})

const AuthStack = createStackNavigator({
  Login: LoginPage,
  Register: RegisterPage
})

export default createAppContainer(
    createSwitchNavigator(
      {
        Loading: LoadingPage,
        App: AppTabNavigator,
        Auth: AuthStack
      },
      {
        initialRouteName: "Loading"
      } 
    )
)

