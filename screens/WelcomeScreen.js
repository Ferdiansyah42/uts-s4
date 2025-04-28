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
    )
}