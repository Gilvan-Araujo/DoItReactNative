import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#262626",
    borderWidth: 1,
    borderColor: "#333333",
    borderRadius: 8,
    padding: 12,
    paddingRight: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "400",
    color: "#F2F2F2",
    flex: 1,
    textAlign: "justify",
  },
  trashIcon: { marginLeft: 8 },
});
