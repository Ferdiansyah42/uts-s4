import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function AboutScreen(){
    return(
        <view style={tyles.container}>
            <text style={tyles.title}>Aplikasi</text>
            <text style={tyles.description}>
                Ini Adalah Daftar Makanan All Star dan Resep 🍽️
            </text>
        </view>
    );
}

const style= StyleSheet.create ({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
    title: {fontSize: 24, fontWeight: 'bold', marginBottom: 20},
    description: { fontSize: 16, textAlign: 'center', paddingHorizontal: 30},
});