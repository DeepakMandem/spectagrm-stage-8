import React from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { RFValue } from 'react-native-responsive-fontsize';




export default class PostScreen extends React.Component{

    fetchUser = () => {
        let theme;
        firebase
            .database()
            .ref("/users/" + firebase.auth().currentUser.uid)
            .on("value", (snapshot)=>{
                theme = snapshot.val().current_theme
                this.setState({ light_theme: theme === "light"})
            })
    }

render(){
    return(
        <View>

        </View>
    )
}
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