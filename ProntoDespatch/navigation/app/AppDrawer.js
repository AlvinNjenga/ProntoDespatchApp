import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import {
    Avatar,
    Divider,
    Drawer,
    DrawerHeaderFooter,
    Layout,
    Text,
    Icon,
} from '@ui-kitten/components';
import { SafeAreaLayout } from '../../components/layout/SafeAreaLayout';

const GithubIcon = (style) => (
    <Icon {...style} name='github' />
);

const BookIcon = (style) => (
    <Icon {...style} name='book' />
);

const DATA = [
    { title: 'Bottom', icon: GithubIcon },
    { title: 'Top', icon: BookIcon },
];

export const AppDrawer = ({ navigation }) => {

    const onItemSelect = (index) => {
        switch (index) {
            case 0: {
                navigation.toggleDrawer();
                navigation.navigate('Bottom');
                return;
            }
            case 1: {
                navigation.navigate('Top');
                navigation.toggleDrawer();
                return;
            }
        }
    };

    const renderHeader = () => (
        <Layout
            style={styles.header}
            level='2'>
            <View style={styles.profileContainer}>
                {/* <Avatar
          size='giant'
          source={require('../../assets/images/image-app-icon.png')}
        /> */}
                <Text
                    style={styles.profileName}
                    category='h6'>
                    Pronto Despatch
        </Text>
            </View>
        </Layout>
    );

    const renderFooter = () => (
        <React.Fragment>
            <Divider />
            <DrawerHeaderFooter
                disabled={true}
                description={`Version 1.0.0 - A. Njenga`}
            />
        </React.Fragment>
    );

    // Experiment by making this not a safe area layout!
    return (
        <SafeAreaLayout
            style={styles.safeArea}
            insets='top'>
            <Drawer
                header={renderHeader}
                footer={renderFooter}
                data={DATA}
                onSelect={onItemSelect}
            />
        </SafeAreaLayout>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    header: {
        height: 128,
        paddingHorizontal: 16,
        justifyContent: 'center',
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileName: {
        marginHorizontal: 16,
    },
});
