import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import { fetchChatResponse } from '../lib/gptApi';

export default function ChatScreen() {
    const [input, setInput] = useState('');
    const [response, setResponse] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSend = async () => {
        setLoading(true);
        const reply = await fetchChatResponse(input);
        setResponse(reply);
        setLoading(false);
    };

    const simulateSpeech = () => {
        // Simulate speech input for now
        setInput("How do I order food in Spanish?");
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>AI Spanish Tutor 💬</Text>

            <TextInput
                style={styles.input}
                placeholder="Say something in English..."
                value={input}
                onChangeText={setInput}
            />

            <View style={styles.buttonRow}>
                <Button title="🎤 Speak (Simulate)" onPress={simulateSpeech} />
                <Button title="Send" onPress={handleSend} />
            </View>

            {loading && <Text style={styles.loading}>⏳ Loading...</Text>}

            {response ? (
                <View style={styles.responseBox}>
                    <Text style={styles.response}>{response}</Text>
                </View>
            ) : null}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { padding: 20, alignItems: 'center' },
    title: { fontSize: 20, marginBottom: 20 },
    input: { borderWidth: 1, padding: 10, width: '100%', marginBottom: 10 },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        gap: 10,
        marginBottom: 20,
    },
    loading: { fontSize: 14, color: 'gray' },
    responseBox: { marginTop: 20, backgroundColor: '#f0f0f0', padding: 15, borderRadius: 10 },
    response: { fontSize: 16 }
});
