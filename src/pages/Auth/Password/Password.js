import React, { useState, useContext, useEffect } from 'react';
import { View, Text, TextInput, Dimensions, Alert, Modal, Pressable } from 'react-native';

import Password from '@components/login/password';
import { AuthContext } from '@context/context';
import { appStorage } from '../../../utils';
import { useLocal } from '../../../hook';
import modalStyle from '../../../components/login/modalStyle';

import RNSecureKeyStore, { ACCESSIBLE } from "react-native-secure-key-store";

const Register = ({ navigation, route }) => {
    const [password, setPwd] = useState('');
    const [confirmPassword, setConfirmPwd] = useState('');
    const [login, setLogin] = useState(true);
    const [modalVisible, setModalVisible] = useState(false);
    const [loginPwd, setLoginPwd] = useState(false);

    const { getAuth, getLang } = useContext(AuthContext);
    const local = useLocal();

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        if(route.params == undefined){
            setLoginPwd(false);
        }else{
            setLoginPwd(true);
        }
    };

    const actionHandler = () => {
        console.log("loginPwd"+loginPwd)
        if (loginPwd == true) {
            if (password == confirmPassword && password != "" && confirmPassword != "") {
                let data = {
                    userEmail: route.params,
                    userPwd: password,
                    key: "userKey",
                };
                try {
                    appStorage.setItem('@user.data', JSON.stringify(data));
                    getAuth(true);
                    // navigation.navigate('Password');
                } catch (error) {
                    console.log(error);
                }
            } else {
                setModalVisible(true);
                setPwd('');
                setConfirmPwd('');
            }
        } else {
            try {
                RNSecureKeyStore.get('@user.data')
                    .then((res) => {
                        let data = JSON.parse(res);
                        if (password == data.userPwd) {
                            getAuth(true);
                        } else {
                            setModalVisible(true);
                            setPwd('');
                        }
                    }, (err) => {
                        console.log(err);
                    });

            } catch (error) {
                console.log('error', error);
            }
        }
    };

    return (
        <View >
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
                            <Text style={modalStyle.modalText}>Please Check your password</Text>
                            <Pressable
                                style={[modalStyle.button, modalStyle.OkbuttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text style={modalStyle.textStyle}> OK </Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
            </View>
            <Password
                title={local.password}
                buttonText={loginPwd == true ? local.register : local.login}
                pwdValue={password}
                confirmPwdValue={confirmPassword}
                onChangePwd={val => setPwd(val)}
                onLoginPage={loginPwd}
                onChangeConfirmPwd={val => setConfirmPwd(val)}
                action={actionHandler}
                isLogin={login}
            />
        </View>

    );
};

export default Register;
