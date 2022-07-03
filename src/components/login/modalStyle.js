import { StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { NavigationEvents } from 'react-navigation';

const style = StyleSheet.create({
    centeredView: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        marginTop: hp(40),
        backgroundColor: "white",
        borderRadius: 20,
        padding: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 0,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        marginLeft: wp(75),
        borderRadius:20,
    },
    buttonClose: {
        marginLeft: wp(25),
        borderRadius:20,
    },
    textStyle: {
        color: "black",
        fontWeight: "bold",
        textAlign: "center",
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        borderRadius:20,
        fontWeight: "bold",
        padding: 10,
    },
    OkbuttonClose: {
        marginLeft: wp(3),
        borderRadius:20,
    },
});

export default style;