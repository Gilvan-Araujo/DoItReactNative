import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { AddTodo } from "./AddTodo";
import { useState } from "react";
import { TodoItem } from "./TodoItem";

export type Todo = {
  id: string;
  title: string;
  done: boolean;
};

export const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <View style={{ flexDirection: "column", flex: 1 }}>
      <AddTodo
        addNewTodo={(todo) => {
          setTodos([...todos, todo]);
        }}
      />

      <FlatList
        data={todos}
        style={{ margin: 24, marginTop: 32 }}
        ListHeaderComponent={() => (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 20,
            }}
          >
            <View style={styles.counterContainer}>
              <Text style={[styles.title, { color: "#0080FF" }]}>Criadas</Text>
              <Text style={styles.counter}>{todos.length}</Text>
            </View>

            <View style={styles.counterContainer}>
              <Text style={[styles.title, { color: "#8000FF" }]}>
                Concluídas
              </Text>
              <Text style={styles.counter}>
                {todos.filter((item) => item.done).length}
              </Text>
            </View>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
        keyExtractor={(item) => item.id}
        renderItem={(data) => (
          <TodoItem
            todo={data.item}
            setTodoDone={() => {
              setTodos(
                todos.map((todo) => {
                  if (todo.id === data.item.id) todo.done = !todo.done;

                  return todo;
                })
              );
            }}
            deleteTodo={() => {
              setTodos(todos.filter((todo) => todo.id !== data.item.id));
            }}
          />
        )}
        ListEmptyComponent={
          <View
            style={{
              paddingHorizontal: 20,
              paddingVertical: 48,
              gap: 16,
              alignItems: "center",
            }}
          >
            <Image source={require("../../../assets/clipboard.png")} />
            <View>
              <Text
                style={{
                  fontWeight: "700",
                  fontSize: 14,
                  lineHeight: 20,
                  textAlign: "center",
                  color: "#808080",
                }}
              >
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text
                style={{
                  fontWeight: "400",
                  fontSize: 14,
                  lineHeight: 20,
                  textAlign: "center",
                  color: "#808080",
                }}
              >
                Crie tarefas e organize seus itens a fazer{" "}
              </Text>
            </View>
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  counterContainer: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 17,
  },
  counter: {
    backgroundColor: "#333333",
    color: "#D9D9D9",
    borderRadius: 999,
    paddingVertical: 2,
    paddingHorizontal: 8,
    fontWeight: "700",
    fontSize: 12,
    lineHeight: 15,
  },
});
