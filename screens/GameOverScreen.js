import { View ,Text, StyleSheet, Image } from 'react-native';
import Title from '../components/UI/Title';
import Colors from '../constants/colors';
import PrimaryButton from '../components/UI/PrimaryButton';

function GameOverScreen({roundsNumber, userNumber, onStartNewGame}) {
    return(
        <View style={styles.rootContainer}>
            <Title>Game Over</Title>
            <View style={styles.imgContainer}>
            <Image style={styles.img} source={require('../assets/Win.png')} />
            </View>
            <View>
                <Text style={styles.summaryText}>Your Phone needed 
                    <Text style={styles.highlight}> {roundsNumber} </Text> 
                     rounds to guess the number 
                    <Text style={styles.highlight}> {userNumber}</Text>.
                </Text>
            </View>
            <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
        </View>
    );
}

export default GameOverScreen;

const styles = StyleSheet.create({
    rootContainer:{
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imgContainer:{
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: Colors.primary3,
        overflow: 'hidden',
        margin: 36
    },
    img:{
        width: "100%",
        height: "100%"
    },
    summaryText: {
        fontFamily: 'open-sans',
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 24
    },
    highlight: {
        fontFamily: 'open-sans-bold',
        // color: Colors.primary4
        color: 'black'
    }
});