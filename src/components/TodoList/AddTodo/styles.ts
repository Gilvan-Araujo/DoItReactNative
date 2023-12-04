import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingLeft: 24,
    paddingRight: 24,
    height: 52,
    flexDirection: "row",
    gap: 4,
    marginTop: -26,
  },
  textInput: {
    flex: 1,
    height: 52,
    borderColor: "#0D0D0D",
    borderWidth: 1,
    backgroundColor: "#262626",
    padding: 16,
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 22,
    letterSpacing: 0,
    color: "#808080",
    borderRadius: 6,
  },
  addButton: {
    width: 52,
    height: 52,
    backgroundColor: "#0080ff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
  },
});
