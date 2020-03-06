import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../../components/atomic/TabBarIcon';
import HomeScreen from '../../screens/HomeScreen';
import LinksScreen from '../../screens/LinksScreen';
// My custom pages.
import UpcomingJobsScreen from '../../screens/jobs/UpcomingJobs';
import RequestQuoteScreen from '../../screens/jobs/RequestQuote';
import CompletedJobsScreen from '../../screens/jobs/CompletedJobs';

// Potentially replace this (or recreate something similar, with the smooth tabe navigator
// page thing?)

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Upcoming';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Request"
        component={RequestQuoteScreen}
        options={{
          title: 'Request Quote',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-code-working" />,
        }}
      />
      <BottomTab.Screen
        name="Upcoming"
        component={UpcomingJobsScreen}
        options={{
          title: 'Upcoming Jobs',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-code-working" />,
        }}
      />
      <BottomTab.Screen
        name="Completed"
        component={CompletedJobsScreen}
        options={{
          title: 'Completed Jobs',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-book" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Request':
      return 'Request a quote';
    case 'Upcoming':
      return 'See your upcoming jobs';
    case 'Completed':
      return 'Assess completed jobs';
  }
}
