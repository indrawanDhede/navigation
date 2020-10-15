import React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';

const DetailsScreen = ({navigation}) => {
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Details Screen</Text>
        <Button title="Go to details screen..again" onPress={()=> navigation.navigate('Details')} />
        <Button title="Go to home" onPress={()=> navigation.navigate('Home')} />
        <Button title="Go back" onPress={()=> navigation.navigate('Home')} />
        <Button title="Go first screen.." onPress={()=> navigation.navigate('Home')} />
      </View>
    )
  }

export default DetailsScreen;