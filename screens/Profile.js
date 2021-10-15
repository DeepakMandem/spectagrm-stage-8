import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class Profle extends React.Component{


    toggleSwitch() {
        const previous_state = this.state.isEnabled;
        const theme = !this.state.isEnabled ? "dark" : "light"
        var updates = {}
        updates["/users/" + firebase.auth().currentUser.uid + "/current_theme"] = theme

        firebase.database().ref().update(updates);
        this.setState({ isEnabled: !previous_state, light_theme: previous_state})
    }


    render(){
        return(
            <View>
                <Text> Profile Screen </Text>

                <View style={StyleSheet.container}>
                    <SafeAreaView style={StyleSheet.driodSafeArea}/>
                    <View style={StyleSheet.appTitle}>
                        <Image source={require("../assets/logo.png")}
                        style={StyleSheet.appIcon}></Image>
                        <Text style={StyleSheet.appTitleText}>{'Story Telling App'}</Text>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => this.signInWithGoogleAsync()}
                                >
                                    <Image
                                    source={require("../assets/google_icon.png")}
                                    style={styles.googleIcon}
                                    ></Image>
                                    <Text style={styles.googleText}>Sign in with Google</Text>
                                </TouchableOpacity>
                        </View>
                        <View style={styles.cloudContainer}>
                            <Image
                            source={require("../assets/cloud.png")}
                            style={styles.cloudImage}
                            ></Image>
                        </View>
                    </View>                
                </View>
            </View>
        )
    }
}