import { StyleSheet, Text, View } from "react-native";
import { styles } from "../styles/main";
import { Spacer } from "./spacer";

export  default function CollectionProgressCard({ collected }) {
  return (
      <View style={[styles.float, CardStyles.card]}>
        <Text style={styles.lightText}>Collected Amount</Text>
        <Spacer h={10} />
        <Text style={CardStyles.balance}>Ksh {collected}</Text>
      </View>
  );
}

const CardStyles = StyleSheet.create({
  card: {
    padding: 20,
    borderRadius: 25,
    margin: 8,
    flexDirection: "column",
    backgroundColor: "white",
  },
  balance: {
    fontSize: 30,
    marginTop: 5,
    marginBottom: 5,
    fontWeight: "bold",
  },
});
