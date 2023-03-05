import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";

import { accentColor, linkColor, primaryColor, styles } from "../styles/main";
import { Spacer } from "../components/spacer";


export default function Dashboard({ navigation }) {
    let usename = "Oliver"
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                style={{ paddingHorizontal: 10, backgroundColor: primaryColor }}
                alwaysBounceVertical={true}
                horizontal={false}
                showsVerticalScrollIndicator={false}
            >
                <View style={dashboardStyles.header}>
                    <Text style={dashboardStyles.headerText}>Welcome: {usename}</Text>
                </View>
                <Spacer h={20} />
            

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
                <Spacer h={8} />
                
                <View style={[styles.float, dashboardStyles.row]}>
                    <View>
                        <Text>Total Tenants</Text>
                        <Text>300</Text>
                    </View>
                    <View>
                        <Text>Vaccant Houses</Text>
                        <Text> 12</Text>
                    </View>
                </View>
                <Spacer h={8} />
                <View style={[styles.float, dashboardStyles.row]}>
                    <View>
                        <Text>Total Tenants</Text>
                        <Text>300</Text>
                    </View>
                    <View>
                        <Text>Vaccant Houses</Text>
                        <Text> 12</Text>
                    </View>
                </View>

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
        justifyContent: "center",
        alignItems: 'center',
        height: 100,
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
        width: 1,
        backgroundColor: 'grey'
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


const transactionstyles = StyleSheet.create({
    transactionView: {
      padding: 20,
      backgroundColor: primaryColor,
      flex: 1,
    },
    transactionTab: {
      backgroundColor: primaryColor,
      flex: 1,
    },
    tabBarLabelStyle: {
      fontSize: 15,
      paddingVertical: 0,
      fontWeight: "500",
      textTransform: "capitalize",
    },
    tabBarLabel: {
      backgroundColor: accentColor,
      borderRadius: 50,
    },
    tabBarIndicatorStyle: {
      backgroundColor: "#fff",
      height: "84%",
      bottom: "8%",
      left: "1.5%",
      borderRadius: 20,
      width: "47%",
    },
  });
