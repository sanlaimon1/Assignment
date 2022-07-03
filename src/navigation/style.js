import { StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    heightPercentageToDP,
} from 'react-native-responsive-screen'

const styles = StyleSheet.create({
    splashContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    splashImage: {
        width: hp(20),
        height: hp(20),
        opacity: hp(4),
        marginBottom: hp(2),
    }
});

export default styles;