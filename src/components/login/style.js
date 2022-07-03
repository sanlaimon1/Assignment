import { StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen'

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: hp(8),
    },
    title: {
        fontSize: 30,
        alignItems: 'flex-start'
    },
    pwdTitle: {
        fontSize: 30,
    },
    inputContainer: {
        width: wp(100),
        alignItems: 'center',
        marginTop: hp(8),
    },
    input: {
        backgroundColor: '#ddd',
        width: wp(70),
        paddingHorizontal: hp(2),
        paddingVertical: hp(1),
        borderRadius: hp(1),
        margin: 0,
    },
    inputAlign: {
        marginTop: 20,
    },
    accContainer: {
        flexDirection: 'row',
        marginTop: hp(2),
    },
    footerText: {
        color: 'red',
    },
    devName: {
        color: 'red',
    },
    devContainer: {
        marginTop: hp(40),
        alignItems: 'center',
    },
    buttonContainer: {
        marginTop: hp(10),
        backgroundColor: '#fff',
        width: wp(30),
        paddingVertical: hp(1.8),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: hp(0.5),
    },
    buttonText: {
        color: '#000',
    },
    button: {
        padding: 10,
        elevation: 2,
        backgroundColor: "green",
        marginTop: hp(55),
        width: wp(20),
        borderRadius: hp(0.5),
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
    dashboard: {
        backgroundColor: 'white',
        width: 250,
        height: 200,
        borderColor: 'black',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dashboardText: {
        color: "black",
        fontWeight: "bold",
        fontSize: 20,
    },
    dashboardTextEmail: {
        color: "black",
        fontWeight: "bold",
        fontSize: 15,
        marginTop: hp(5),
    }
});

export default styles;