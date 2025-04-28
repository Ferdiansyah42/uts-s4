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

const style = StyleSheet.create ({
    container: {flex: 1, backgroundColor: '#fff'},
    image: {width: '100%', height: 250 },
    title: { fontSize: 24, fontWeight: 'bold', marginVertical: 10, textAlign: 'center'},
    origin: {fontSize: 16, marginBottom: 10, textAlign: 'center'},
    subtitle: { fontSize: 18, fontWeight: 'bold', marginHorizontal: 16, marginBottom: 8},
    instructions: {fontSize: 16, marginHorizontal: 16, lineHeight: 22},
});