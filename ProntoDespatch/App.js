import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { SplashScreen } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ApplicationProvider } from '@ui-kitten/components';
import { mapping, light as lightTheme } from '@eva-design/eva';

import BottomTabNavigator from './navigation/tabs/BottomTabNavigator';
import useLinking from './navigation/hooks/useLinking';

import AuthStackNavigator from './navigation/stacks/AuthStackNavigator';

const Stack = createStackNavigator();

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const containerRef = React.useRef();
  const { getInitialState } = useLinking(containerRef);
  const [isSignedIn, setSignedIn] = React.useState(false);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();

        // Load our initial navigation state
        setInitialNavigationState(await getInitialState());

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  // Important stuff goes from here.
  // Maybe the background for a lot of it will be a triangle type, but it comes and points 
  // to the left? And I could learn to animate it onto the page.

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    return (
      <ApplicationProvider mapping={mapping} theme={lightTheme}>
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <NavigationContainer ref={containerRef} initialState={initialNavigationState}>
            {!isSignedIn && (
              <AuthStackNavigator setSignedIn={setSignedIn} />
            )}
            {isSignedIn && (
              // TO-DO: Import and render AppDrawer here.
              <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Root" component={BottomTabNavigator} />
              </Stack.Navigator>
              // TO-DO: Import and render AppDrawer here.
            )}
          </NavigationContainer>
        </View>
      </ApplicationProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
