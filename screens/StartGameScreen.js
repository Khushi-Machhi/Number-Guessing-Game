import { View, TextInput, StyleSheet, Alert, Text } from "react-native";
import PrimaryButton from "../components/UI/PrimaryButton";
import { useState } from "react";
import Colors from "../constants/colors";
import Title from "../components/UI/Title";
import Card from "../components/UI/Card";
import InstructionText from "../components/UI/InstructionText";

function StartGameScreen({onPickNumber}) {
    const [enteredNumber, setEnteredNumber] = useState('');

    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText); // Updates the state with the entered text
    }

    function resetInputHandler() {
        setEnteredNumber(''); // Clears the input
    }

    function validateInputHandler() {
        const chosenNumber = parseInt(enteredNumber);

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            // Show alert for invalid number
            Alert.alert(
                'Invalid Number',
                'Valid range: between 1 and 99.',
                [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
            );
            return;
        }
        console.log("Valid number:", chosenNumber); // Log or handle valid input
        onPickNumber(chosenNumber);
    }

    return (
        <View style={styles.rootContainer}>
            <Title>Guess my Number</Title>
        <Card>
            <InstructionText>Enter a Number</InstructionText>
            <TextInput
                style={styles.numberInput}
                maxLength={2}
                keyboardType="number-pad"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={numberInputHandler} // Correct prop to handle text input
                value={enteredNumber}
            />
            <View style={styles.btnsContainer}>
                <View style={styles.btn}>
                    <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                </View>
                <View style={styles.btn}>
                    <PrimaryButton onPress={validateInputHandler}>Confirm</PrimaryButton>
                </View>
            </View>
        </Card>
        </View>
    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex:1,
        marginTop: 100,
        alignItems: 'center'
    },
    
    numberInput: {
        height: 65,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent1,
        borderBottomWidth: 2,
        color: Colors.accent1,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    btnsContainer: {
        flexDirection: 'row',
    },
    btn: {
        flex: 1,
    },
});






// import { View, TextInput, StyleSheet, Alert } from "react-native";
// import PrimaryButton from "../components/PrimaryButton";
// import { useState } from "react";

// function StartGameScreen() {

//     const [enteredNumber, setEnteredNumber] = useState('');

//     function numberInputHandler(enteredText){
//         setEnteredNumber(enteredText);
//     }

//     function resetInputHandler(){
//         setEnteredNumber('');
//     }

//     function validateInputHandler(){
//         const chosenNumber = parseInt(enteredNumber);

//         if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
//             //Show alert...
//             Alert.alert(
//                 'Invalid Number',
//                 'Valid range : between 1 to 99.',
//                 [{text:'Okay',style:'destructive', onPress: resetInputHandler}]
//             );
//             return;
//         }
//         console.log("Valid.");
//     }

//     return (
//         <View style={styles.inputContainer}>
//             <TextInput 
//             style={styles.numberInput} 
//             maxLength={2} 
//             keyboardType="number-pad"
//             autoCapitalize="none"
//             autoCorrect={false}
//             onChangeTexta={numberInputHandler}
//             value={enteredNumber}
//             />
//             <View style={styles.btnsContainer}>
//                 <View style={styles.btn}>
//                     <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
//                 </View>
//                 <View style={styles.btn}>
//                     <PrimaryButton onPress={validateInputHandler}>Confirm</PrimaryButton>
//                 </View>
//             </View>
//         </View>
//     );
// }

// export default StartGameScreen;

// const styles = StyleSheet.create({
//     inputContainer:{
//         alignItems:'center',
//         justifyContent: 'center',
//         marginTop: 100,
//         marginHorizontal:24,
//         padding: 16,
//         backgroundColor:'#3b021f',
//         borderRadius:8,
//         elevation: 4, //shadow.. only works in android
//         // for ios
//         // shadowColor:'black',
//         // shadowOffset:{width:0,height:2},
//         // shadowRadius: 6,
//         // shadowOpacity: 0.5,
//     },
//     numberInput: {
//         height:65,
//         width: 50,
//         fontSize: 32,
//         borderBottomColor: '#ddb52f',
//         borderBottomWidth: 2,
//         color: '#ddb52f',
//         marginVertical: 8,
//         fontWeight: 'bold',
//         textAlign: 'center'
//     },
//     btnsContainer:{
//         flexDirection: 'row',
//     },
//     btn:{
//         flex: 1
//     }
// });