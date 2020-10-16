import React from 'react';
import {Text, View, Button} from 'react-native';
import {AuthContext} from '../components/context';

const HomeScreen = ({navigation}) => {

const {getRole} = React.useContext(AuthContext);
return(
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Role as : {getRole()}</Text>
      <Button title="Go to details screen" onPress={()=> navigation.navigate('Details')} />
    </View>
)
}

export default HomeScreen;