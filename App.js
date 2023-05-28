import React from 'react';
import { StyleSheet, View } from 'react-native';
import Dashboard from './screens/home/Dashboard'
import Category from "./screens/category/Category";
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { Appbar, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();



export default function App() {

    const navigationRef = React.useRef(null);
    const openNavigation = () => {
        navigationRef.current?.dispatch(DrawerActions.openDrawer());
    }

    return (
        <PaperProvider>
            <Appbar.Header style={styles.header} statusBarHeight={30} mode={'center-aligned'}>
                <Appbar.Action icon="menu" onPress={openNavigation} color="#FFFFFF" />
                <Appbar.Content color="#FFFFFFFF" title="Trenutno.ba"/>
            </Appbar.Header>
            <View style={styles.container}>
                <NavigationContainer ref={navigationRef}>
                    <Drawer.Navigator initialRouteName="home" screenOptions={{headerShown: false}}>
                        <Drawer.Screen name="Home" component={Dashboard}/>
                        <Drawer.Screen
                            name="Business"
                            component={Category}
                            initialParams={{category: "Business"}}
                        />
                        <Drawer.Screen
                            name="Sport"
                            component={Category}
                            initialParams={{category: "Sport"}}
                        />
                        <Drawer.Screen
                            name="Education"
                            component={Category}
                            initialParams={{category: "Education"}}
                        />

                        <Drawer.Screen
                            name="Travel"
                            component={Category}
                            initialParams={{category: "Travel"}}
                        />
                        <Drawer.Screen
                            name="Politics"
                            component={Category}
                            initialParams={{category: "Politics"}}
                        />
                        <Drawer.Screen
                            name="Health"
                            component={Category}
                            initialParams={{category: "Health"}}
                        />
                        <Drawer.Screen
                            name="Entertainment"
                            component={Category}
                            initialParams={{category: "Entertainment"}}
                        />
                    </Drawer.Navigator>
                </NavigationContainer>
            </View>
        </PaperProvider>

    );
}
/* All categories:
    Sport,
    Business,
    Education,
    Travel,
    Entertainment,
    Politics,
    Health*/

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: '#2121e7',
        color: '#ffffff',
    },
});
