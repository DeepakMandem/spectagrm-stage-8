import React from 'react';
import { createBottemTabNavigator } from '@react-navigation/bottom-tabs'
import Feed from '../screens/Feed'
import CreatePost from '../screens/CreatePost'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs react-native-paper'


const Tab = createBottemTabNavigator();

const BottemTabNavigator = () =>{
    return(
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if(route.name === 'Feed'){
                        iconName = focused
                            ? 'book'
                            : 'book-outline'
                    } else if (route.name === 'CreatePost'){
                        iconName= focused ? 'create' : 'create-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },

            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray'
            }}
        
        
        >

            <Tab.Screen name="Feed" component={Feed} />
            <Tab.Screen name="CreatePost" component={CreatePost} />



        </Tab.Navigator>
    )






}

const styles = StyleSheet.create({

    postCardLight: {
        color:"white",
        fontSize: RFValue(20)
    },
    authorNameTextLight: {
        color:"black",
        fontSize: RFValue(20)
    }
})

export default BottemTabNavigator