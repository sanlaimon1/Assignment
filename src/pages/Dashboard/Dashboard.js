import React, { useState, useEffect , useContext } from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../../components/login/style';
// import { appStorage } from '../../utils';
import { AuthContext } from '@context/context';

import RNSecureKeyStore, { ACCESSIBLE } from "react-native-secure-key-store";

const Dashboard = () => {

  const [userEmail, setuserEmail] = useState('');
  const [userPwd, setuserPwd] = useState('');

  const { getAuth, getLang } = useContext(AuthContext);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      RNSecureKeyStore.get('@user.data')
        .then((res) => {
          let data = JSON.parse(res);
          setuserEmail(data.userEmail);
          setuserPwd(data.userPwd);
        }, (err) => {
          console.log(err);
        });

    } catch (error) {
      console.log('error', error);
    }
  };

  const logout = () => {
    let data = {
      userEmail: userEmail,
      userPwd: userPwd,
    };
    try {
      RNSecureKeyStore.set('@user.data', JSON.stringify(data), {accessible: ACCESSIBLE.ALWAYS_THIS_DEVICE_ONLY})
        .then((res) => {
          if(res){
            getAuth(false);
          }
          
        }, (err) => {
          console.log(err);
        });
    } catch (error) {
      console.log('error :', error);
    }
  }

  return (
    <View style={styles.container}>

      <View style={styles.dashboard}>
        <Text style={styles.dashboardText}>San Lai Mon</Text>
        <Text style={styles.dashboardTextEmail}>Email : {userEmail}</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => logout()}>
        <Text style={styles.textStyle}>Logout</Text>
      </TouchableOpacity>

    </View>
  )
}

export default Dashboard
