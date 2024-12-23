import { View, Text, StyleSheet, Alert, FlatList } from 'react-native';
import Title from '../components/UI/Title';
import { useState, useEffect } from 'react';
import NumberContainer from '../components/Game/NumberContainer';
import PrimaryButton from '../components/UI/PrimaryButton';
import Card from '../components/UI/Card';
import InstructionText from '../components/UI/InstructionText';
import { Ionicons } from '@expo/vector-icons';
import GuessLogItem from '../components/Game/GuessLogItem';

function generateRandomBetween(min, max, exclude){
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude){
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}
let minBoundry = 1;
let maxBoundry = 100;

function GameScreen({userNumber, onGameOver}) {
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [guessRounds, setGuessRounds] = useState([initialGuess]);

    useEffect(() => {
        if (currentGuess === userNumber){
            onGameOver(guessRounds.length);
        }
    }, [currentGuess, userNumber, onGameOver]);

    useEffect(()=> {
        minBoundry = 1;
        maxBoundry = 100;
    }, []);

    function nextguessHandler(direction) {

        if ((direction === 'lower' && currentGuess < userNumber) || (direction === 'greater' && currentGuess > userNumber)) {
            Alert.alert("Don't Lie!!",'You know this is wrong...',[
                { text:'Sorry!', style: 'cancel'}
            ]);
            return;
        }

        if (direction === 'lower') {
            maxBoundry = currentGuess;
        } else {
            minBoundry = currentGuess + 1;
        }
        const newRndNumber =  generateRandomBetween(minBoundry, maxBoundry, currentGuess);
        setCurrentGuess(newRndNumber);
        setGuessRounds(prevGuessRounds=>[newRndNumber,...prevGuessRounds]);
    }
    const guessRoundsListLength = guessRounds.length;

    return (
        <View style={styles.screen}>
            <Title>Guessed Number</Title>
                <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <InstructionText styl={styles.instructionText}>Higher or Lower?</InstructionText>
                <View style={styles.btns}>
                    <View style={styles.btn} >
                    <PrimaryButton onPress={nextguessHandler.bind(this, 'lower')}>
                        <Ionicons name="remove" size={24} color="white"/>
                    </PrimaryButton>
                    </View>
                    <View style={styles.btn} >
                    <PrimaryButton onPress={nextguessHandler.bind(this, 'greater')}>
                    <Ionicons name='add' size={24} color="white"/>
                    </PrimaryButton>
                    </View>
                </View>
            </Card>

            <View style={styles.ListContainer}>
               {/* {guessRounds.map(guessRound => <Text key={guessRound}>{guessRound}</Text>)} */}

               <FlatList 
               data={guessRounds} 
               renderItem={(itemData) => <GuessLogItem roundNumber={guessRoundsListLength-itemData.index} guess={itemData.item}/>} 
               keyExtractor={(item) => item }
               />

            </View>

        </View>
    );
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24
    },
    instructionText: {
        marginTop: 12,
        marginBottom: 12
    },
    btns: {
        flexDirection: 'row'
    },
    btn: {
        flex: 1
    },
    ListContainer: {
        flex: 1,
        padding: 16
    }
});