import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    TextInput,
    KeyboardAvoidingView,
    Platform,
    View,
  } from "react-native";
  
  import { linkColor,accentColor, primaryColor, styles } from "../styles/main";
  import { Spacer } from "../components/spacer";
  
  
  export default function Home({ navigation }) {
  
  
    return (
       <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.container}
      > 
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
                    numberOfLines={5}
                    multiline={true}
                    style={comStyles.textInput}
                />
                <TouchableOpacity
                    style={styles.formButton}
                >
                    <Text style={styles.formButtonText}>send</Text>
                </TouchableOpacity>
                <Spacer h={20} />
                <Text style={{ fontWeight: "bold" }}>2. Send SMS to Paid Tenants</Text>
                <TextInput
                   
                    keyboardType="default"
                    textContentType="familyName"
                    numberOfLines={5}
                    multiline={true}
                    style={comStyles.textInput}
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
                    numberOfLines={5}
                    multiline={true}
                    style={comStyles.textInput}
                />
                <TouchableOpacity
                    style={styles.formButton}
                >
                    <Text style={styles.formButtonText}>send</Text>
                </TouchableOpacity>
                <Spacer h={40} />
            </ScrollView>
        </KeyboardAvoidingView>
    );
  }
  
  const comStyles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "center",
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
    textInput: {
      borderWidth: 1,
      marginVertical: 10,
      padding: 5,
      borderRadius: 10,
      backgroundColor: accentColor,
      borderColor: linkColor,
      color: "black",
    }
  });
  
  