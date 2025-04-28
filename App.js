import React, {useEffect, useState} from "react";
import { View, Text, Image, TextInput, ouchableOpacity, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import axios from "axios";
import { Ionicons } from '@expo/vector-icons';

export default function Homescreen({navigation}){
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState (true);
  const [searchText, setSearchText] = useState('');

  const getMeals = async () => {
    try {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=');
      setMeals(response.data.meals);
    } catch (error) {
      console.error('Error fetching meals:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMeals();
  }, []);

  const filteredMeals = meals.filter((meal) =>
    meal.strMeal.toLowerCase().includes(searchText.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('Detail', { recipe: item })}
    >
      <Image source={{ uri: item.strMealThumb }} style={styles.image} />
      <Text style={styles.name}>{item.strMeal}</Text>
    </TouchableOpacity>
  );

}