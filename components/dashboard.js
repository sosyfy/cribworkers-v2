import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";

import { linkColor, primaryColor, styles } from "../styles/main";
import { Spacer } from "./spacer";
import CollectionProgressCard from './collectionsCard';



export default function DashboardScreen() {
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
                <CollectionProgressCard
                    collected={'40,000'}
                />

                <Spacer h={20} />
               
            </ScrollView>
        </SafeAreaView>
    );
}

const dashboardStyles = StyleSheet.create({
    row: {
        flex: 1,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-around',
        padding: 8,
        flexWrap: 'wrap',
    },
    card: {
        flexBasis: "45%",
        justifyContent:"center",
        alignItems: 'center',
        height: 150,
        padding: 20,
        margin: 8,
        borderRadius: 25,
        backgroundColor: "white",
    },

    cardText: {
        fontSize: 20,
        marginTop: 5,
        marginBottom: 5,
        fontWeight: "bold",
        textAlign:"center"
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



