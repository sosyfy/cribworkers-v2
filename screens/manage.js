import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
} from "react-native";

import { accentColor, linkColor, primaryColor, styles } from "../styles/main";
import { Spacer } from "../components/spacer";


export default function Manage({ navigation }) {
    let usename = "Oliver"
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                style={{ paddingHorizontal: 10, backgroundColor: primaryColor }}
                alwaysBounceVertical={true}
                horizontal={false}
                showsVerticalScrollIndicator={false}
            >
              
                <Spacer h={10} />
                <View style={[styles.float, dashboardStyles.row]}>
                    <View style={dashboardStyles.card}>
                        <Text style={dashboardStyles.cardText}>Total Tenants</Text>
                        <Text style={dashboardStyles.subtext}>300</Text>
                    </View>
                    <View style={dashboardStyles.middleLine}></View>
                    <View style={dashboardStyles.card}>
                        <Text style={dashboardStyles.cardText}>Vaccant Houses</Text>
                        <Text style={dashboardStyles.subtext}> 12</Text>
                    </View>
                </View>
                <Spacer h={4} />
                <View style={actionStyles.actionView}>
                    <TouchableOpacity style={actionStyles.action}>
                        <Text style={actionStyles.actionText}>View Tenants</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={actionStyles.action}>
                        <Text style={actionStyles.actionText}>View Tenants</Text>
                    </TouchableOpacity>
                </View>
                <Spacer h={3} />

                <View style={[styles.float, dashboardStyles.row]}>
                    <View style={dashboardStyles.card}>
                        <Text style={dashboardStyles.cardText}>Workers</Text>
                        <Text style={dashboardStyles.subtext}>4</Text>
                    </View>
                    <View style={dashboardStyles.middleLine}></View>
                    <View style={[dashboardStyles.card, { paddingVertical: 10 }]}>
                        <Text style={dashboardStyles.cardText}>1. Oliver</Text>
                        <Text style={dashboardStyles.cardText}>2. John</Text>
                        <Text style={dashboardStyles.cardText}>3. Peter</Text>
                        <Text style={dashboardStyles.cardText}>4. Mary</Text>
                    </View>
                </View>
                <Spacer h={8} />
                <View style={[styles.float, dashboardStyles.row]}>
                    <View style={dashboardStyles.card}>
                        <Text style={dashboardStyles.cardText}>Allocated sms</Text>
                        <Text style={dashboardStyles.subtext}>1000</Text>
                    </View>
                    <View style={dashboardStyles.middleLine}></View>
                    <View style={dashboardStyles.card}>
                        <Text style={dashboardStyles.cardText}>Remaining sms</Text>
                        <Text style={dashboardStyles.subtext}>500</Text>
                    </View>
                </View>
                <Spacer h={16} />

                <TouchableOpacity style={[actionStyles.action, { marginHorizontal: 8}]}>
                    <Text style={actionStyles.actionText}>View Tenants</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>

    );
}

const dashboardStyles = StyleSheet.create({
    row: {
        padding: 20,
        borderRadius: 25,
        margin: 8,
        flexDirection: "row",
        backgroundColor: "white",
        position: 'relative'
    },
    card: {
        flex: 1,
        flexBasis: "50%",
        justifyContent: "center",
        alignItems: 'center',
        // height: 130,
        borderRadius: 25,
        backgroundColor: "white",
    },

    cardText: {
        fontSize: 20,
        marginTop: 5,
        marginBottom: 5,
        fontWeight: "500",
        textAlign: "center"
    },
    subtext: {
        fontSize: 30,
        marginTop: 5,
        marginBottom: 5,
        fontWeight: "bold",
        textAlign: "center"
    },
    middleLine: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        width: 2,
        backgroundColor: accentColor,
        left: "50%",
        right: "50%"
    },
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
        marginRight: "auto",
    },
    linkTitle: {
        color: linkColor,
        fontSize: 16,
        fontWeight: "500",
    },
});

const actionStyles = StyleSheet.create({
    actionView: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        backgroundColor: "white",
        flex: 1,
        borderRadius: 25,
        margin: 8
    },
    action: {
        flexBasis: "40%",
        textAlign: 'center',
    },
    actionText: {
        backgroundColor: accentColor,
        borderRadius: 50,
        padding: 10,
        color: linkColor,
        fontSize: 16,
        fontWeight: "500",
        textAlign: 'center',
    },

});


