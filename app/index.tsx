import { Image, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View>
        <Image source={require("@/assets/images/logo.png")} />
      </View>
    </View>
  );
}
