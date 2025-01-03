import {View, Text, StyleSheet} from 'react-native';
import Colors from '../../constants/colors';

function NumberContainer({children}){
    return(
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    )
}

export default NumberContainer;

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.accent1,
        padding: 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20
    },
    numberText: {
        color: Colors.accent1,
        fontSize: 36,
        fontWeight: 'bold'
    }
});