import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

export default function SplashScreen() {
  return <View style={styles.container}>
    <Text style={styles.title}> Welcome to Callverse </Text>
    <ActivityIndicator size="large" color="#007AFF" />
  </View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 16,
    color: "#333333",
  },
});
