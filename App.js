import React from 'react';
import { StyleSheet, View } from 'react-native';
import Dashboard from './screens/home/Dashboard'
import Category from "./screens/category/Category";
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { Appbar, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { createDrawerNavigator } from '@react-navigation/drawer';
import colors from "./styles/colors";

const Drawer = createDrawerNavigator();



export default function App() {

    const navigationRef = React.useRef(null);
    const toggleNavigation = () => {
        navigationRef.current?.dispatch(DrawerActions.toggleDrawer());
    }

    return (
        <PaperProvider>
            <Appbar.Header style={styles.header} statusBarHeight={30} mode={'center-aligned'}>
                <Appbar.Action icon="menu" onPress={toggleNavigation} color={colors.Secondary} />
                <Appbar.Content color={colors.Secondary} title="Trenutno.ba"/>
            </Appbar.Header>
            <View style={styles.container}>
                <NavigationContainer ref={navigationRef}>
                    <Drawer.Navigator initialRouteName="home" screenOptions={{
                        headerShown: false,
                        drawerStyle:styles.drawerStyle,
                        drawerActiveBackgroundColor: colors.Primary,
                        drawerActiveTintColor: colors.LightText,
                        drawerInactiveTintColor: colors.Primary,
                        drawerType: 'front',
                    }}>
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
        backgroundColor: colors.BG,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        borderBottomColor: colors.Secondary,
        borderBottomWidth: 2
    },
    drawerStyle: {
        backgroundColor: colors.LightText,
    },
});
