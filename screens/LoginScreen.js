import React, {Component} from "react"
import {
    View,
    ActivityIndicator,
    SafeAreaView
} from "react-native"
import firebase from "firebase"
import { TouchableOpacity } from "react-native-gesture-handler";

export default class LoginScreen extends Component {

    signInWithGoogleAsync = async () => {
        try{
            const result = await this.signInWithGoogleAsync.loginAsync({
                behaviour:"web",
                androidClientId:
                "",
                iosClientId:
                "",
                scopes:['profile','emoji']
            
            });
        }
        
    


    }


    componentDidMount(){
        this.checkIfLoggedIn()
    }

    checkIfLoggedIn = () => {
        firebase.auth().onAuthStateChanged((user)=>{
            if(user) {
                this.props.navigation.navigate('DashboardScreen')
            }else{
                this.props.navigation.navigate('LoginScreen')
            }
        })
    }

    render(){
        if (!this.state.fontsLoaded) {
            return <AppLoading/>
        } else {
        return(
            <View style={{
                flex:1,
                justifyContent:"center",
                alignItems:"center"
            }}
            >
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
                <ActivityIndicator size="large"/>
                <Button title="Sign in with Google" onPress={() => this.signInWithGoogle()}>

                </Button>
            </View>
        )
        }
    }



}