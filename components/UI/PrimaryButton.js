import { View, Text, Pressable, StyleSheet } from "react-native";

import Colors from "../../constants/colors";

function PrimaryButton({children, onPress}){
    return(

    <View style={styles.btnOuterContainer}>
        <Pressable style={styles.btnInnerContainer} onPress={onPress} android_ripple={{color: Colors.primary2}}>
            <Text style={styles.btnText}>{children}</Text>
        </Pressable>
    </View>
    );

}

export default PrimaryButton;

const styles = StyleSheet.create({
    btnOuterContainer:{
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden'
    },
    btnInnerContainer:{
        backgroundColor: Colors.primary1,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 10
    },
    btnText:{
        color:'white',
        textAlign: 'center',
    }
});