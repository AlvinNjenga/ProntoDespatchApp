import * as React from 'react';
import { StyleSheet, Text, View, Button, ImageBackground, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import EmptyBox from '../../assets/images/EmptyBox.png';

const deliveries = [
    {
        id: 111,
        name: 'Hoddesdon',
        date: '10-06-2020',
        type: 'van'
    },
    {
        id: 123,
        name: 'Ware',
        date: '12-06-2020',
        type: 'van'
    },
    {
        id: 155,
        name: 'Harlow',
        date: '15-06-2020',
        type: 'bike'
    }
]

export default function DeliveriesScreen() {
    return (
        <View style={styles.container}>
            {!deliveries && (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: -50 }}>
                    <Image
                        source={EmptyBox}
                        style={{ width: 200, height: 200, }}
                    />
                    <Text style={styles.emptyBoxText}>Nothing to see here.</Text>
                    <Text style={{ color: '#2f95dc', ...styles.emptyBoxText }}>Would you like to book a delivery?</Text>
                </View>
            )}
            {deliveries && (
                <View style={styles.contentContainer}>
                    <Text>
                        Here's that shit.
                    </Text>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F8F8F8',
    },
    emptyBoxText: {
        paddingTop: 10,
        fontSize: 20
    },
    contentContainer: {
        flex: 1
    }
});