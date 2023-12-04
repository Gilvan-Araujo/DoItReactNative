import { TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

import Plus from "../../../../assets/plus.svg";
import { useState } from "react";
import { Todo } from "..";
import uuid from "react-native-uuid";

type Props = {
  addNewTodo: (todo: Todo) => void;
};

export const AddTodo = ({ addNewTodo }: Props) => {
  const [todo, setTodo] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor="#808080"
        value={todo}
        onChangeText={(text) => setTodo(text)}
      />

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => {
          addNewTodo({
            id: uuid.v4().toString(),
            title: todo,
            done: false,
          });
          setTodo("");
        }}
      >
        <Plus />
      </TouchableOpacity>
    </View>
  );
};
