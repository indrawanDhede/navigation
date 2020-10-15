import React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';

const HomeScreen = ({navigation}) => {
return(
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home Screen</Text>
      <Button title="Go to details screen" onPress={()=> navigation.navigate('Details')} />
    </View>
)
}

export default HomeScreen;