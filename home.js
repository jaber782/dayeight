import { StyleSheet, Text, View, TouchableOpacity, Image, Pressable } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'

const home = () => {
  return (
      <View style={styles.container}>
          <Image source={require("./hridoy.jpeg")} style={styles.image} />
      <Pressable onPress={() => router.replace("/createPost")} style={styles.button}><Text style={styles.text}>Create Post</Text></Pressable>
    </View>
  )
}

export default home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',

    },
    image: {
        height: 200,
        width: 200,
        borderRadius: 100,
    },
    button: {
        backgroundColor: 'hotpink',
        padding: 15,
        marginTop: 20,
        width: "70%",
        borderRadius: 15,
        
        
    },
    text: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        fontWeight:'bold'
    },
})