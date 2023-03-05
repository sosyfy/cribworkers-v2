import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";
import { lightGrey, primaryColor, styles } from "../styles/main";
import { MaterialIcons } from "@expo/vector-icons";
import { Spacer } from "../components/spacer";
import { HapticButton } from "../components/hepaticButton";


export default function Home({ navigation }) {

    async function houseWorker() {
        navigation.navigate("Dashboard");
    }
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                style={{ paddingHorizontal: 10, backgroundColor: primaryColor }}
                alwaysBounceVertical={true}
                horizontal={false}
                showsVerticalScrollIndicator={false}
            >
                <View style={homeStyles.header}>
                    <Text style={homeStyles.headerText}>Your Homes</Text>
                </View>
                <Spacer h={20} />


                <View style={homeStyles.row}>
                    <HapticButton style={homeStyles.houseContainer} onPress={houseWorker}>
                        <View style={homeStyles.divider}></View>
                        <View style={homeStyles.house}>
                            <MaterialIcons name="home" style={homeStyles.homeIcon} />
                            <Text style={homeStyles.houseText}>Acacia</Text>
                        </View>
                    </HapticButton>
                    <HapticButton style={homeStyles.houseContainer} onPress={houseWorker}>
                        <View style={homeStyles.divider}></View>
                        <View style={homeStyles.house}>
                            <MaterialIcons name="home" style={homeStyles.homeIcon} />
                            <Text style={homeStyles.houseText}>Acacia</Text>
                        </View>
                    </HapticButton>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

const homeStyles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "center",
        padding: 10,
        backgroundColor: primaryColor,
    },
    headerText: {
        fontSize: 30,
        color: "black",
        textAlign: 'center',
        fontWeight: "500",
    },
    houseContainer: {
        backgroundColor: "white",
        flex: 1,
        alignItems: 'center',
        elevation: 5,
        shadowColor: lightGrey,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 20,
        borderRadius: "15%",
        position: 'relative',
    },
    house: {

    },
    divider: {
        position: 'absolute',
        top: "60%",
        left: 0,
        right: 0,
        height: 0.3,
        width: '100%',
        backgroundColor: lightGrey

    },
    houseText: {
        fontSize: 20,
        color: lightGrey,
        fontWeight: "500",
        paddingBottom: 20,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        gap: 20,
    },
    homeIcon: {
        fontSize: 50,
        marginBottom: 5,
        paddingTop: 20,
        color: lightGrey
    },

});
