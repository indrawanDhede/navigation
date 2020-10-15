import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Avatar, Title, Caption, Paragraph, Drawer, TouchableRipple, Switch, Divider} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem,
} from '@react-navigation/drawer';

import {AuthContext} from '../components/context';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export function DrawerContent (props) {

    const {signOut} = React.useContext(AuthContext);

    return(
        <View style={{flex: 1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection: 'row', marginVertical: 15}}>
                            <Avatar.Image
                                size={60}
                                source={require('../assets/user.jpeg')}
                            />
                            <View style={{marginLeft: 15, flexDirection: 'column'}}>
                                <Title style={styles.title}>Desi Ayu</Title>
                                <Caption style={styles.caption}>Gold Member</Caption>
                            </View>
                        </View>
                    </View>
                    <Divider />
                    <Drawer.Section>
                        <DrawerItem
                        icon={({color, size}) => (
                            <Icon name="home-outline" color={color} size={size} />
                        )}
                        label="Home"
                        onPress={()=>{props.navigation.navigate('Home')}} 
                        />
                        <DrawerItem
                        icon={({color, size}) => (
                            <Icon name="folder-outline" color={color} size={size} />
                        )}
                        label="Detail"
                        onPress={()=>{props.navigation.navigate('Details')}} 
                        />
                        <DrawerItem
                        icon={({color, size}) => (
                            <Icon name="bell-outline" color={color} size={size} />
                        )}
                        label="Promo"
                        onPress={()=>{props.navigation.navigate('Promo')}} 
                        />
                        <DrawerItem
                        icon={({color, size}) => (
                            <Icon name="account-check-outline" color={color} size={size} />
                        )}
                        label="Produk"
                        onPress={()=>{props.navigation.navigate('Produk')}} 
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
                <Drawer.Section style={styles.bottomDrawerSection}>
                    <DrawerItem
                    icon={({color, size}) => (
                        <Icon name="exit-to-app" color={color} size={size} />
                    )}
                    label="Sign Out"
                    onPress={()=>{signOut()}}
                    />

                </Drawer.Section>
        </View>
    )
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    Paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1,
    },
    preferences: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    }

})