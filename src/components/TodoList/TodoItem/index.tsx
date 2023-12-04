import { Text, Touchable, TouchableOpacity, View } from "react-native";
import { Todo } from "..";
import { styles } from "./styles";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Trash from "../../../../assets/trash.svg";

type Props = {
  todo: Todo;
  setTodoDone: () => void;
  deleteTodo: () => void;
};

export const TodoItem = ({ todo, setTodoDone, deleteTodo }: Props) => {
  return (
    <View style={styles.container}>
      <BouncyCheckbox
        onPress={() => setTodoDone()}
        isChecked={todo.done}
        size={20}
        fillColor={todo.done ? "#8000FF" : "#0080FF"}
        TouchableComponent={TouchableOpacity}
        iconStyle={{ borderColor: "#FF0" }}
        innerIconStyle={{ borderWidth: 2 }}
      />

      <Text
        style={[
          styles.title,
          todo.done
            ? {
                textDecorationStyle: "solid",
                textDecorationLine: "line-through",
                color: "#888",
              }
            : {},
        ]}
      >
        {todo.title}
      </Text>
      <TouchableOpacity style={styles.trashIcon} onPress={() => deleteTodo()}>
        <Trash />
      </TouchableOpacity>
    </View>
  );
};
