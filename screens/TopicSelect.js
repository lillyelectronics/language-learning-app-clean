import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function TopicSelect({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Choose a Topic</Text>
            <Text style={styles.topic}>🍽 Restaurant Conversation</Text>
            <Text style={styles.topic}>✈️ Airport Check-In</Text>
            <Text style={styles.topic}>💼 Job Interview</Text>

            {/* 👇 Add a button to go to Chat screen */}
            <Button title="Start Practice" onPress={() => navigation.navigate('Chat')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f5f9ff',
    },
    heading: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    topic: {
        fontSize: 18,
        marginVertical: 10,
    },
});
