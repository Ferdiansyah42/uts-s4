// App.js
import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import axios from 'axios';
import { enableScreens } from 'react-native-screens';

enableScreens();
const Stack = createStackNavigator();

// Halaman Home: ambil data dan tampilkan daftar
function HomeScreen({ navigation }) {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  const getMeals = async () => {
    try {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=');
      setMeals(response.data.meals);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching meals:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getMeals();
  }, [])

  if (loading){
    return(
      <view>
        <ActivityIndicator size="large" color="#f39c12" />
      </view>
    );
  }

};
