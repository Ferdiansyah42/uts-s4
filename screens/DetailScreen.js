import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function DetailScreen({ route }) {
    const { recipe } = route.params;

    return (
        <ScrollView style={styles.container}>
            <Image source={{ uri: recipe.strMealThumb }} style={styles.image} />
            <Text style={styles.title}>{recipe.strMeal}</Text>
            <Text style={styles.origin}>Asal: {recipe.strArea}</Text>

            <Text style={styles.subtitle}>Instruksi Memasak:</Text>
            <Text style={styles.instructions}>
            {recipe.strInstructions}
            </Text>
        </ScrollView>
    );
}