import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import { fetchChatResponse } from '../lib/gptApi';

export default function ChatScreen() {
    const [input, setInput] = useState('');
    const [response, setResponse] = useState('');

    const handleSend = async () => {
        const reply = await fetchChatResponse(input);
        setResponse(reply);
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

            <Button title="Translate & Respond" onPress={handleSend} />

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
    responseBox: { marginTop: 20, backgroundColor: '#f0f0f0', padding: 15, borderRadius: 10 },
    response: { fontSize: 16 }
});
