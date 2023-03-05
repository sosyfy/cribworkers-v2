import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

import { linkColor, primaryColor, styles } from "../styles/main";
import { Spacer } from "../components/spacer";


export default function Home({ navigation }) {


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                style={{ paddingHorizontal: 10, backgroundColor: primaryColor }}
                alwaysBounceVertical={true}
                horizontal={false}
                showsVerticalScrollIndicator={false}
            >
                <View style={comStyles.header}>
                    <Text style={comStyles.headerText}>COMMUNICATE</Text>
                </View>

                <Spacer h={20} />
                <Text style={{ fontWeight: "bold" }}>1. Send SMS to all tenants</Text>
                <TextInput
                    keyboardType="default"
                    textContentType="familyName"
                    numberOfLines={10}
                    multiline={true}
                    style={styles.textinput}
                />
                <TouchableOpacity
                    style={styles.formButton}
                >
                    <Text style={styles.formButtonText}>send</Text>
                </TouchableOpacity>
                <Spacer h={20} />
                <Text style={{ fontWeight: "bold" }}>Send SMS to Paid Tenants</Text>
                <TextInput
                   
                    keyboardType="default"
                    textContentType="familyName"
                    numberOfLines={10}
                    multiline={true}
                    style={styles.textinput}
                />
                <TouchableOpacity
                    style={styles.formButton}
                >
                    <Text style={styles.formButtonText}>send</Text>
                </TouchableOpacity>
                <Spacer h={20} />
                <Text style={{ fontWeight: "bold" }}>3. Send SMS to Due tenants</Text>
                <TextInput
                    keyboardType="default"
                    textContentType="familyName"
                    numberOfLines={10}
                    multiline={true}
                    style={styles.textinput}
                />
                <TouchableOpacity
                    style={styles.formButton}
                >
                    <Text style={styles.formButtonText}>send</Text>
                </TouchableOpacity>

            </ScrollView>
        </SafeAreaView>
    );
}

const comStyles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "flex-end",
        padding: 10,
        backgroundColor: primaryColor,
    },
    headerText: {
        fontSize: 20,
        color: "black",
        fontWeight: "500",
        marginHorizontal: "auto",
    },
    linkTitle: {
        color: linkColor,
        fontSize: 16,
        fontWeight: "500",
    },
});

const inputStyles = StyleSheet.create({
    textAreaContainer: {
        borderColor: COLORS.grey20,
        borderWidth: 1,
        padding: 5
    },
    textArea: {
        height: 150,
        justifyContent: "flex-start"
    }
})