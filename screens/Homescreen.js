import React, { useEffect, useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState(''); // << Tambahan

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

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#f39c12" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.hello}>HELLO</Text>
      <Text style={styles.welcome}>SELAMAT DATANG DI RESEP ALL STAR</Text>
      
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Cari makanan..."
          style={styles.input}
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />
        <Ionicons name="search" size={24} color="black" style={styles.searchIcon} />
      </View>

      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.popularButton}>
          <Text style={styles.popularText}>Populer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.favoriteButton}>
          <Text style={styles.favoriteText}>Favorit</Text>
        </TouchableOpacity>
      </View>

      {filteredMeals.length === 0 ? (
        <View style={styles.notFoundContainer}>
          <Text style={styles.notFoundText}>🍽️ Makanan tidak ditemukan</Text>
        </View>
      ) : (
        <FlatList
          data={filteredMeals}
          renderItem={renderItem}
          keyExtractor={(item) => item.idMeal}
          numColumns={2}
          contentContainerStyle={{ paddingBottom: 80 }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff', padding: 16 },
    hello: { fontSize: 24, fontWeight: 'bold' },
    welcome: { fontSize: 14, marginBottom: 16 },
    searchContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#eee', borderRadius: 10, marginBottom: 16 },
    input: { flex: 1, padding: 10 },
    searchIcon: { marginRight: 10 },
    menuContainer: { flexDirection: 'row', marginBottom: 16 },
    popularButton: { backgroundColor: '#f39c12', padding: 8, borderRadius: 20, marginRight: 10 },
    favoriteButton: { backgroundColor: '#ccc', padding: 8, borderRadius: 20 },
    popularText: { color: '#fff' },
    favoriteText: { color: '#333' },
    card: { flex: 1, backgroundColor: '#f9f9f9', margin: 8, borderRadius: 10, overflow: 'hidden', elevation: 2 },
    image: { width: '100%', height: 120 },
    name: { padding: 8, fontWeight: 'bold', textAlign: 'center' },
    centered: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    notFoundContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 20 },
    notFoundText: { fontSize: 18, color: '#888' },
  });