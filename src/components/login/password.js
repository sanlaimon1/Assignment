import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './style';
import { useLocal } from '../../hook';

const header = props => {
    const local = useLocal();

    return (
        <View style={styles.container}>
            <Text style={styles.pwdTitle}>{props.title}</Text>

            <View style={styles.inputContainer}>
                <TextInput
                    placeholder={local.pwdPlaceholder}
                    secureTextEntry
                    style={styles.input}
                    value={props.pwdValue}
                    onChangeText={props.onChangePwd}
                />
                {props.onLoginPage == true ? (
                    <TextInput
                        placeholder={local.confirmPlaceholder}
                        secureTextEntry
                        style={[styles.input, styles.inputAlign]}
                        value={props.confirmPwdValue}
                        onChangeText={props.onChangeConfirmPwd}
                    />
                ) : (
                    null
                )}

            </View>

            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={props.action}
                activeOpacity={0.8}>
                <Text style={styles.buttonText}>{props.buttonText}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default header
