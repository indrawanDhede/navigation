import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  View,
  TouchableOpacity
} from 'react-native';

import HomeScreen from './HomeScreen'
import DetailsScreen from './DetailsScreen';
import ProfileScreen from './ProfileScreen';
import ExploreScreen from './ExploreScreen';


const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => {
    return(
    <Tab.Navigator
      initialRouteName="Home"
      barStyle={{backgroundColor: '#009387'}}
      activeColor="#fff"
      style={{ backgroundColor: 'tomato' }}
      backBehavior="none">
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Details"
        component={DetailsStackScreen}
        options={{
          tabBarLabel: 'Detail',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="folder" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
    )
    
}


export default MainTabScreen;


const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();

const HomeStackScreen = ({navigation}) => {
    return(
      <HomeStack.Navigator screenOptions={{headerStyle: {
        backgroundColor: '#009387'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
      }}>
      <HomeStack.Screen name="Home" component={HomeScreen} options={{
        title: 'Overview',
        headerRight: () => (<View style={{flex: 1, justifyContent: 'center'}}>
        
        <TouchableOpacity style={{flexDirection: 'row', marginRight: 10}} onPress={()=>navigation.openDrawer()}>
          <MaterialCommunityIcons name="menu" color="#fff" size={26} />
        </TouchableOpacity>
      </View>) 
      }} />
      </HomeStack.Navigator>
    )
}

const DetailsStackScreen = ({navigation}) => {
    return(
      <DetailsStack.Navigator screenOptions={{headerStyle: {
        backgroundColor: '#009387'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
      }}>
      <DetailsStack.Screen name="Details" component={DetailsScreen} options={{
      }} />
    </DetailsStack.Navigator>
    )
}
