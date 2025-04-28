import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

export default function welcomeScreen ({ navigation }){
    return (
        <ImageBackground source={require('../assets/background.png')} 
        style={StyleSheet.background}>
            <view>
                <Text> Selamat Datang </Text>
                <Text> Temukan Resep Favorit Kamu! </Text>

                <TouchableOpacity style={StyleSheet.button}
                onPress={() => navigation.replace ('HomeTab')}>

                    <Text style= {StyleSheet.button}> Get Started </Text>
                </TouchableOpacity>
            </view>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    overlay: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: 30,
        borderRadius: 20,
        alignItems: 'center',
    },
    title: {
        color: 'wihte',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        color: 'white',
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'center',
      },
      button: {
        backgroundColor: '#f39c12',
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 30,
      },
      buttonText: {
        color: 'white',
        fontSize: 18,
      },
});