import React, { useState, useContext, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, Dimensions, Alert, Modal, Pressable } from 'react-native';

import Header from '@components/login/header';
import { AuthContext } from '@context/context';
import styles from '../../../components/login/style';
import modalStyle from '../../../components/login/modalStyle';
import { appStorage } from '../../../utils';
import { useLocal } from '../../../hook';
import RNSecureKeyStore, { ACCESSIBLE } from "react-native-secure-key-store";

var screen = Dimensions.get('window')

const Login = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [login, setLogin] = useState(true);
    const [modalVisible, setModalVisible] = useState(false);

    const { lang, getAuth, getLang } = useContext(AuthContext);
    const local = useLocal();

    const actionHandler = () => {
        try {
            RNSecureKeyStore.get('@user.data')
                .then((res) => {
                    let data = JSON.parse(res);
                    if(email == data.userEmail){
                        navigation.navigate('Password');
                    }else{
                        alert("Please check your email");
                    }
                }, (err) => {
                    console.log(err);
                });

        } catch (error) {
            console.log('error', error);
        }
    };

    const footerHandler = () => {
        if (login) {
            navigation.navigate('Register');
        } else {
            navigation.navigate('Login');
        }
    };

    const changeLanguage = value => {
        try {
            appStorage.setItem('@lang', value);
            getLang(value);
        } catch (error) {
            console.log('error', error);
        }
    };

    return (
        <View>
            <View style={modalStyle.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={modalStyle.centeredView}>
                        <View style={modalStyle.modalView}>
                            <Pressable
                                style={[modalStyle.button, modalStyle.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text style={modalStyle.textStyle}> X </Text>
                            </Pressable>
                            <TouchableOpacity onPress={() => changeLanguage('en')}>
                                <Text style={modalStyle.modalText}>English</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => changeLanguage('mm')}>
                                <Text style={modalStyle.modalText}>Myanmar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
                <Pressable
                    style={[modalStyle.button, modalStyle.buttonOpen]}
                    onPress={() => setModalVisible(true)}
                >
                    <Text style={modalStyle.textStyle}>{lang == 'en' ? "English" : "Myanmar"}</Text>
                </Pressable>
            </View>
            <View style={styles.languageContainer}>
            </View>
            <Header
                title={local.login}
                buttonText={local.next}
                emailValue={email}
                onChangeEmail={val => setEmail(val)}
                action={actionHandler}
                footerText={local.register}
                isLogin={login}
                footerAction={footerHandler}
            />
            <View style={styles.devContainer}>
                <Text>Developed by <Text style={styles.devName}>San Lai Mon</Text></Text>
            </View>

        </View>
    );
};

export default Login;
