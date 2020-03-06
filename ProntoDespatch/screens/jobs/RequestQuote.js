import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
// import KeyboardAvoidingView

export default function RegisterScreen() {
    return (
        <View style={styles.container}>
            {/* This is where  you start building! */}
            {/* Also does this have to be a scroll view? I don't necessarily know when this is supposed
            to be useful. */}
            <View style={styles.contentContainer}>
                <Text>Request a quote</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
    },
    contentContainer: {
        paddingTop: 15,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});