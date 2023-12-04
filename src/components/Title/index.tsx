import { Text, View } from "react-native";
import { styles } from "./styles";

import Rocket from "../../../assets/rocket.svg";

export const Title = () => {
  return (
    <View style={styles.container}>
      <Rocket />
      <Text style={styles.titleFirstHalf}>do</Text>
      <Text style={styles.titleSecondHalf}>it</Text>
    </View>
  );
};
