import React, { useState, useEffect } from 'react';
import { View, Text ,Image } from 'react-native';
import { AuthContext } from '../context/context';
//Navigator
import { NavigationContainer } from '@react-navigation/native';

//Stack
import AuthStack from './stack/AuthStack.js';
import DashboardStack from './stack/DashboardStack.js';
import { appStorage } from '../utils';

import styles from '../navigation/style';

const appNavigator = () => {
    const [lang, setLang] = useState('en');
    const [auth, setAuth] = useState(false);
    const [splashScreen, setSplashScreen] = useState(true);

    useEffect(() => {
        storeData();
    }, []);

    const storeData = () => {
        try {
            const data = appStorage.getItem('@user.data');
            const locale = appStorage.getItem('@lang');
            setLang(locale);
            if (data) {
                setAuth(true);
                setTimeout(() => {
                    setSplashScreen(false);
                }, 3000);
            } else {
                setAuth(false);
                setSplashScreen(false);
            }
        } catch (error) {
            console.log('error', error);
        }
    };

    const context = {
        lang,
        auth,
        getAuth: value => {
            setAuth(value);
        },
        getLang: value => {
            setLang(value);
        },
    };

    if (splashScreen) {
        return (
            <View style={styles.splashContainer}>
                <Image style={styles.splashImage} source={require('../image/profile.png')} />
                <Text style={{ color: 'blue' }}>San Lai Mon</Text>
            </View>
        );
    } else if (auth) {
        return (
            <AuthContext.Provider value={context}>
                <NavigationContainer>
                    <DashboardStack />
                </NavigationContainer>
            </AuthContext.Provider>
        );
    } else {
        return (
            <AuthContext.Provider value={context}>
                <NavigationContainer>
                    <AuthStack />
                </NavigationContainer>
            </AuthContext.Provider>
        );
    }
}

export default appNavigator
