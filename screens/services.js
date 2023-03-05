import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";

import {primaryColor, styles } from "../styles/main";
import { Spacer } from "../components/spacer";




export default function Services() {

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                style={{ paddingHorizontal: 10, backgroundColor: primaryColor }}
                alwaysBounceVertical={true}
                horizontal={false}
                showsVerticalScrollIndicator={false}
            >
                 <Spacer h={10} />
                <View style={servicesStyles.header}>
                    <Text style={servicesStyles.headerText}> Services</Text>
                </View>
                <Spacer h={20} />
               
                <View style={servicesStyles.row}>
                    <View style={[styles.float ,servicesStyles.card]}>
                        <Text style={servicesStyles.cardText}>KRA Auto Filling </Text>
                    </View>
                    <View style={[styles.float ,servicesStyles.card]}>
                        <Text style={servicesStyles.cardText}>Insurance Policy Subscription</Text>
                    </View>
                    <View style={[styles.float ,servicesStyles.card]}>
                        <Text style={servicesStyles.cardText}>Property Advertising </Text>
                    </View>
                    <View style={[styles.float ,servicesStyles.card]}>
                        <Text style={servicesStyles.cardText}>Hardware Store</Text>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

const servicesStyles = StyleSheet.create({
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
        marginLeft: "auto",
    },
  
});



