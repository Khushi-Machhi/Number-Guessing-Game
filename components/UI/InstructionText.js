import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function InstructionText({children,styl}) {
    return(
        <Text style={[Styles.txt, styl]}>{children}</Text>
    )
}

export default InstructionText;

const Styles= StyleSheet.create({
    txt: {
        fontFamily:'open-sans-bold',
        color: Colors.accent1,
        fontSize: 24
    },
});