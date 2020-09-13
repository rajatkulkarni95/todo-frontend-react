import React, { useState, useRef, useEffect } from "react";
import {
  Container,
  Stack,
  Heading,
  useColorMode,
  Button,
} from "@chakra-ui/core";
import { TodoHeader } from "../components/Todo-Header";
import { TodoForm } from "../components/Todo-Form";
import { TodoItem } from "../components/Todo-Item";
import { add_todo, delete_todo, complete_todo, get_todos } from "../services";

export const TodoContainer = () => {
  const [todos, setTodos] = useState([]);

  //To handle onchange values
  const inputRef = useRef();

  useEffect(() => {
    get_todos().then((response) => setTodos(response.data));
  }, []);

  //add input to todos
  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputRef.current.value === "") {
      return;
    }
    const todoObject = {
      text: inputRef.current.value,
      isCompleted: false,
    };

    add_todo(todoObject).then((response) =>
      setTodos(todos.concat(response.data))
    );

    inputRef.current.value = "";
  };

  //Completed or Not?
  const toggleTodo = (id) => {
    todos.map((todo) =>
      todo.id === id
        ? complete_todo(
            { isCompleted: !todo.isCompleted },
            id
          ).then((response) =>
            setTodos(
              todos.map((todo) => (todo.id !== id ? todo : response.data))
            )
          )
        : null
    );
  };

  //Delete Todos
  const deleteTodo = (id) => {
    delete_todo(id).then((response) =>
      setTodos(todos.filter((todo) => todo.id !== id))
    );
  };

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <header d="flex" justify="flex-end">
        <Button onClick={toggleColorMode}>
          Toggle {colorMode === "light" ? "Dark" : "Light"}
        </Button>
      </header>
      <Container
        bg="gray.900"
        color="white"
        h="auto"
        mt={[0, 10, 10, 10]}
        mb={10}
        p={4}
        borderRadius="5px"
      >
        <TodoHeader
          total={todos.length}
          completed={todos.filter((todo) => todo.isCompleted === true).length}
        />
        <TodoForm handleSubmit={handleSubmit} inputRef={inputRef} />
        <Stack spacing={4}>
          {todos.length === 0 ? (
            <Heading textAlign="center" size="md">
              No Tasks for Today!
            </Heading>
          ) : (
            todos.map((todo) =>
              todo.isCompleted === false ? (
                <TodoItem
                  key={todo.id}
                  {...todo}
                  toggleTodo={toggleTodo}
                  deleteTodo={deleteTodo}
                />
              ) : null
            )
          )}
          <Heading size="md" color="green.400">
            Completed Tasks
          </Heading>
          {todos.map((todo) =>
            todo.isCompleted ? (
              <TodoItem
                key={todo.id}
                {...todo}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
              />
            ) : null
          )}
        </Stack>
      </Container>
    </>
  );
};
