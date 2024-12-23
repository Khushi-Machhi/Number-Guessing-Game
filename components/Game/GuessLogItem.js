import {Text, View, StyleSheet} from 'react-native';
import Colors from '../../constants/colors';

function GuessLogItem({ roundNumber, guess}) {
    return (
    <View style={styles.listItem}> 
        <Text>#{roundNumber}</Text>
        <Text>Guess: {guess}</Text>
    </View>
    )
}
 
export default GuessLogItem;

const styles = StyleSheet.create({
    listItem: {
        borderColor: Colors.primary3rimary4,
        borderWidth: 1,
        borderRadius: 40,
        padding: 8,
        backgroundColor: Colors.accent1,
        flexDirection: 'row',
        marginVertical: 8,
        justifyContent: 'space-between',
        elevation: 4,
        width: '100%'
    },
});