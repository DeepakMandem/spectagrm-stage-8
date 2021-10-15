import React from 'react';
import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import PostCard from '../screens/PostCard'

export default class Feed extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          
          posts: '',
          
        };
      }

      fetchPosts=()=>{
          
      }

    keyExtracter=()=>{

    }

    renderItem=()=>{
        <PostCard>
            
        </PostCard>
    }


    render(){
        return(
            <View style={styles.container}>
                <SafeAreaView style={styles.driodSafeArea} />
                <View style={styles.appTitle}>
                    <View style={styles.appIcon}>
                        <Image
                            source={require("../assets/logo.png")}
                            style={styles.iconImage}
                        ></Image>
                    </View>
                        <View style={styles.appTitleTextContainer}>
                            <Text style={styles.appTitleText}>Spectagram</Text>
                        </View>
                </View>

                <View style={styles.cardContainer}>
                    <Flatlist
                        keyExtracter={this.keyExtracter}
                        data={posts}
                        renderItem={this.renderItem}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container={
        flex: 1,
        backgroundColor: "black"
    },
    driodSafeArea: {
        margin: Platform.OS === "andriod" ? StatusBar.currentHeight:RFValue(35)
    },
    appTitle:{
        flex: 0.07,
        flexDirection: "row"
    },
    appIcon: {
        flex: 0.2,
        justifyContent: "center",
        alignItems: "center",

    },
    iconImage: {
        width: "100%",
        height: "100%",
        resizMode: "contain"
    },
    appTitleTextContainer: {
        flex: 0.8,
        justifyContent: "center"
    },
    appTitleText: {
        color: "white",
        fontSize: RFValue(28),
    },
    cardContainer: {
        flex: 0.85
    }
})