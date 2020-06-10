import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../../screens/auth/LoginScreen';
import RegisterScreen from '../../screens/auth/RegisterScreen';

const Stack = createStackNavigator();

// This might cause a whole mess of problems.
export default AuthStackNavigator = ({ setSignedIn }) => (
    <Stack.Navigator>
        <Stack.Screen name="Login" options={{ headerShown: false }}>
            {props => <LoginScreen {...props} setSignedIn={setSignedIn} />}
        </Stack.Screen>
        <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
);