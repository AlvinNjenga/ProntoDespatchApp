import React from 'react';
import { Button, TouchableOpacity, ImageBackground, Text, StyleSheet, TouchableHighlight } from 'react-native';

import Colors from '../../constants/Colors';

// You gotta see what props it takes and if it works fine.
export default function Buttons({ title, backgroundColor, hightlightColor, onPressOut }) {
    return (
        <TouchableHighlight
            style={[styles.button, { backgroundColor }]}
            onPress={() => onPressOut()}
            underlayColor={hightlightColor}
        >
            <Text style={styles.text}>{title}</Text>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 5,
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 50,
        paddingRight: 50,
    },
    text: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: 'center'
    }
});


{/* <Button
    color="red"
    title={title}
    onPress={() => console.log('Pressed button')}
/> */}