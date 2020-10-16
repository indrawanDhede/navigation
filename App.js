/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import {View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabScreen from './screens/MainTabScreen';
import ProductScreen from './screens/ProductScreen';
import PromoScreen from './screens/PromoScreen';
import {DrawerContent} from './screens/DrawerContent';
import RootStackScreen from './screens/RootStackScreen';
import { ActivityIndicator, Colors } from 'react-native-paper';
import {AuthContext} from './components/context';


const Drawer = createDrawerNavigator();

const App = (props)  => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);
  const [role, setRole] = React.useState('');

  const authContext = React.useMemo(()=> ({
    signIn: (role) => {
      setUserToken('fgkj');
      setIsLoading(false);
      setRole(role);
    },
    signOut: (role) => {
      setUserToken(null);
      setIsLoading(false);
      setRole(role);
    },
    signUp: (role) => {
      setUserToken('fgkj');
      setIsLoading(false);
      setRole(role);
    },
    getRole: () => {
      return role;
    }
  }));

 

  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false);
    }, 1000);
  }, [])

  if(isLoading){
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator animating={true} color={Colors.green800} size="large" />
      </View>
    )
  }
  return (
    <AuthContext.Provider value={authContext}>
       <NavigationContainer>
         { userToken !== null && role == 'admin' ? (
            <Drawer.Navigator drawerContent={props=> <DrawerContent {...props} />}>
              <Drawer.Screen name="Home" component={MainTabScreen} />
              <Drawer.Screen name="Promo" component={PromoScreen} />
              <Drawer.Screen name="Produk" component={ProductScreen} />
            </Drawer.Navigator>
          )
         
         : userToken !== null && role == 'owner' ?  (
            <Drawer.Navigator drawerContent={props=> <DrawerContent {...props} />}>
              <Drawer.Screen name="Home" component={MainTabScreen} />
              <Drawer.Screen name="Promo" component={PromoScreen} />
              <Drawer.Screen name="Produk" component={ProductScreen} />
            </Drawer.Navigator>
         )
         :
         <RootStackScreen />
        }
      </NavigationContainer>
    </AuthContext.Provider>
   
  );
};

export default App;
