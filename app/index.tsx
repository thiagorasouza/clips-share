import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingHorizontal: 5,
    backgroundColor: "#161622",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: { width: 130, height: 40, marginBottom: 20 },
  cards: { width: "100%", height: 300, marginBottom: 10 },
  textContainer: {
    paddingHorizontal: 10,
    paddingBottom: 15,
  },
  bigText: {
    lineHeight: 35,
    fontFamily: "Poppins-SemiBold",
    fontSize: 30,
    color: "#fff",
    textAlign: "center",
  },
  smallText: {
    fontFamily: "Poppins-Regular",
    fontSize: 15,
    color: "#CDCDE0",
    textAlign: "center",
  },
  path: {
    width: 72,
    height: 15,
    marginLeft: "auto",
    marginTop: -12,
  },
});

export default function Index() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Image
          style={styles.logo}
          source={require("@/assets/images/logo.png")}
          resizeMode="contain"
        />
        <Image
          style={styles.cards}
          source={require("@/assets/images/cards.png")}
          resizeMode="contain"
        />
        <View style={styles.textContainer}>
          <Text style={styles.bigText}>
            Discover Endless Possibilities with{" "}
            <Text style={{ color: "#FF8E01" }}>Aora</Text>
          </Text>
          <Image
            source={require("@/assets/images/path.png")}
            style={styles.path}
            resizeMode="contain"
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.smallText}>
            Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with Aora
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
