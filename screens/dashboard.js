import {
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    Text,
    View,
  } from "react-native";
  import { PieChart } from "react-native-chart-kit";
  
  
  import { linkColor, accentColor, primaryColor, styles } from "../styles/main";
  import { Spacer } from "../components/spacer";
  import CollectionProgressCard from '../components/collectionsCard';
  
  const screenWidth = Dimensions.get("window").width;
  const data = [
    {
        name: "PAID",
        population: 21500000,
        color: "rgba(131, 167, 234, 1)",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
    },
  
    {
        name: "DUE",
        population: 11920000,
        color: "rgb(0, 0, 255)",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
    }
  ];
  
  
  export default function Dashboard() {
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
                <Text style={{
                    fontSize: 20,
                    color: "black",
                    fontWeight: "500",
                    marginRight: "auto",
                }}>SUMMARY</Text>
                <Spacer h={10} />
                <view>
                    <PieChart
                        data={data}
                        width={screenWidth}
                        height={130}
                        // chartConfig={chartConfig}
                        accessor={"population"}
                        backgroundColor={"transparent"}
                        paddingLeft={"15"}
                        center={[10, 50]}
                        absolute
                    />
  
                </view>
                <Spacer h={10} />
                <Text style={{
                    fontSize: 20,
                    color: "black",
                    fontWeight: "500",
                    marginRight: "auto",
                }}>Filter</Text>
                <View style={actionStyles.actionView}>
                    <TouchableOpacity style={actionStyles.action}>
                        <Text style={actionStyles.actionText}>View Tenants</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={actionStyles.action}>
                        <Text style={actionStyles.actionText}>View Tenants</Text>
                    </TouchableOpacity>
                </View>
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
        justifyContent: "center",
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
        textAlign: "center"
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
        justifyContent: "flex-start",
        padding: 10,
        margin: 8,
        marginRight: "auto"
    },
    action: {
        textAlign: 'center',
    },
    actionText: {
        backgroundColor: accentColor,
        padding: 10,
        color: linkColor,
        fontSize: 16,
        fontWeight: "500",
        textAlign: 'center',
    },
  
  });
  
  
  
  