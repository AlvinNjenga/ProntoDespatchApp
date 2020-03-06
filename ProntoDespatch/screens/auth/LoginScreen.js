import * as React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Image, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { Input, Button, Avatar } from '@ui-kitten/components';

const { width } = Dimensions.get('window');

// Potentially do the triangle thing and try make it work
// as a background?
// https://codedaily.io/tutorials/22/The-Shapes-of-React-Native
export default function LoginScreen({ navigation, setSignedIn }) {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.loginContainer}>
                    <View style={styles.logoWrapper}>
                        <Image
                            style={styles.logo}
                            source={require('../../assets/images/pronto-logo-colour.png')}
                        />
                    </View>
                    <View style={styles.inputGroupWrapper}>
                        <View style={styles.inputWrapper}>
                            <Input
                                size="large"
                                placeholder="Email..."
                                style={styles.input}
                            />
                        </View>
                        <View style={styles.inputWrapper}>
                            <Input
                                size="large"
                                placeholder="Password..."
                                // style={[styles.input, { borderBottomColor: "chartreuse" }]}
                                style={styles.input}
                            />
                            <Text style={{ alignSelf: 'flex-end', marginVertical: 10, color: 'limegreen' }}>Forgot password?</Text>
                        </View>
                        {/* Sign in buttons need to have bigger text, and potentially roboto or something. Takes up most of button. */}
                        <View style={styles.buttonGroup}>
                            <View style={styles.buttonWrapper}>
                                <Button
                                    status='success'
                                    style={styles.button}
                                    size='large'
                                    onPressOut={() => setSignedIn(true)}
                                >
                                    Sign In
                                </Button>
                            </View>
                            <View style={styles.buttonWrapper}>
                                <Button
                                    status='warning'
                                    style={styles.button}
                                    size='large'
                                    onPressOut={() => navigation.navigate('Register')}
                                >
                                    Register
                                </Button>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </>
    );
}

LoginScreen.navigationOptions = {
    header: null,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    loginContainer: {
        flex: 1,
        paddingTop: 0,
    },
    logoWrapper: {
        flex: 1,
        justifyContent: 'flex-end',
        // backgroundColor: '#C9DBFF',
        alignItems: 'center'
    },
    logo: {

    },
    input: {
        borderColor: 'white',
        borderBottomColor: 'black',
        backgroundColor: 'white'
    },
    button: {
        fontSize: 16,
    },
    inputGroupWrapper: {
        flex: 2,
        // backgroundColor: '#FFD3C9',
        alignItems: 'center',
        marginTop: "10%"
    },
    inputWrapper: {
        width: "90%",
        marginVertical: 5,
    },
    buttonWrapper: {
        width: "90%",
        marginVertical: 10
    },
    buttonGroup: {
        marginTop: 30,
        width: "100%",
        alignItems: 'center'
    },
    footerText: {
        alignItems: 'center',
        fontSize: 5,
        position: 'absolute',
        bottom: 0,
        left: '25%'
    }
});