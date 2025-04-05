import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to SpeakMate 👋</Text>
            <Text style={styles.subtitle}>XP: 0 | Streak: 0</Text>
            <Button
                title="Start Learning"
                onPress={() => navigation.navigate('TopicSelect')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    title: { fontSize: 24, fontWeight: 'bold' },
    subtitle: { fontSize: 16, marginBottom: 20 },
});
