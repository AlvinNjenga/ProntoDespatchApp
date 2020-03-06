import React from 'react';
import { StyleSheet } from 'react-native';
import {
    TabBar,
    Tab,
} from '@ui-kitten/components';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import UpcomingJobsScreen from '../../screens/jobs/UpcomingJobs';
import RequestQuoteScreen from '../../screens/jobs/RequestQuote';
import CompletedJobsScreen from '../../screens/jobs/CompletedJobs';


// This will actually likely end up being a tab view using React Native's tab view.
// The seperate tabs will potentialy basically be separate stacks that are rendered. 
// See if this'll be a problem.

const JobsTabBar = ({ navigation, state }) => {

    const onTabSelect = (index) => {
        navigation.navigate(state.routeNames[index]);
    };

    const renderTab = (route) => (
        <Tab
            key={route}
            title={route.toUpperCase()}
        />
    );

    return (
        <TabBar
            selectedIndex={state.index}
            onSelect={onTabSelect}>
            {state.routeNames.map(renderTab)}
        </TabBar>
    );
};

const TopTabs = createMaterialTopTabNavigator();

export default JobsTopTabNavigator = () => (
    <TopTabs.Navigator tabBar={(props) => <JobsTabBar {...props} />}>
        <TopTabs.Screen name='Request' component={RequestQuoteScreen} />
        <TopTabs.Screen name='Upcoming' component={UpcomingJobsScreen} />
        <TopTabs.Screen name='Completed' component={CompletedJobsScreen} />
    </TopTabs.Navigator>
);

const styles = StyleSheet.create({
    tabContainer: {
        minHeight: 64,
    },
});