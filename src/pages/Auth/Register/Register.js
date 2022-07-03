import React, { useState, useContext } from 'react';
import { View, Text, TextInput } from 'react-native';

import Header from '@components/login/header';
import { AuthContext } from '@context/context';
import {appStorage} from '../../../utils';
import {useLocal} from '../../../hook';

const Register = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [login, setLogin] = useState(true);

    const { getAuth, getLang } = useContext(AuthContext);
    const local = useLocal();

    const actionHandler = () => {
        try {
            navigation.navigate('Password',email);
        } catch (error) {
            console.log(error);
        }
    };

    const footerHandler = () => {
        if (login) {
            navigation.navigate('Register');
        } else {
            navigation.goBack();
        }
    };

    return (
        <View>
            <Header
                title={local.register}
                buttonText={local.next}
                emailValue={email}
                onChangeEmail={val => setEmail(val)}
                action={actionHandler}
                footerText={local.login}
                isLogin={login}
                footerAction={footerHandler}
            />
        </View>
    );
};

export default Register;
