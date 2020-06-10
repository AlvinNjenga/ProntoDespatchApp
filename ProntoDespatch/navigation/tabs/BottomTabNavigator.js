import * as React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../../components/atomic/TabBarIcon';
import HomeScreen from '../../screens/HomeScreen';
import LinksScreen from '../../screens/LinksScreen';
// My custom pages.
import DeliveriesScreen from '../../screens/jobs/DeliveriesScreen';
import RequestQuoteScreen from '../../screens/jobs/RequestQuote';

const Tab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Upcoming';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({
    headerTitle: getHeaderTitle(route),
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 20,
    },
    headerTitleAlign: 'center',
    headerLeft: () => (
      <View style={{ paddingLeft: 20 }}>
        <TabBarIcon focused name="md-menu" />
      </View>),
    headerRight: () => (
      <View style={{ paddingRight: 20 }}>
        <TabBarIcon focused name="ios-add-circle" />
      </View>),
  });

  return (
    <Tab.Navigator
      initialRouteName={INITIAL_ROUTE_NAME}
      tabBarOptions={{
        style: { paddingBottom: 14, paddingTop: 14, height: 70, fontWeight: 'bold' }
      }}
    >
      <Tab.Screen
        name="Upcoming"
        component={DeliveriesScreen}
        options={{
          title: 'Deliveries',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="logo-dropbox" />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={LinksScreen}
        options={{
          title: 'Settings',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-settings" />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={LinksScreen}
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-person" />,
        }}
      />
    </Tab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Upcoming':
      return 'Deliveries';
    case 'Settings':
      return 'Settings';
  }
}
