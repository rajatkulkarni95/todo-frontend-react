import React from "react";
import { Flex, IconButton, Icon, Text } from "@chakra-ui/core";
import { FaTrashAlt, FaCheck, FaRegCircle } from "react-icons/fa";

export const TodoItem = ({ text, isCompleted, id, toggleTodo, deleteTodo }) => {
  const getStatusIcon = () => {
    return isCompleted ? <Icon as={FaCheck} /> : <Icon as={FaRegCircle} />;
  };
  return (
    <Flex justifyContent="space-between">
      <Flex alignItems="center">
        <IconButton
          onClick={() => toggleTodo(id)}
          colorScheme={isCompleted ? "green" : "gray"}
          aria-label="todo status"
          icon={getStatusIcon()}
          mr={4}
          size="md"
          bg="gray.700"
        />
        <Text
          color={isCompleted ? "gray.200" : "inherit"}
          size="md"
          as={isCompleted ? "s" : "p"}
        >
          {text}
        </Text>
      </Flex>
      <Flex alignItems="center">
        <IconButton
          onClick={() => deleteTodo(id)}
          aria-label="remove todo"
          icon={<Icon as={FaTrashAlt} />}
          size="sm"
          bg="red.500"
        />
      </Flex>
    </Flex>
  );
};
