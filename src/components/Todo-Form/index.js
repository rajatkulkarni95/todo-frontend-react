import React from "react";
import { Flex, Input, IconButton, Icon } from "@chakra-ui/core";
import { GrAdd } from "react-icons/gr";

export const TodoForm = ({ inputRef, handleSubmit }) => (
  <Flex as="form" mt={5} mb={8} onSubmit={handleSubmit}>
    <Input
      variant="outline"
      bg="gray.800"
      size="lg"
      placeholder="Add Todo..."
      ref={inputRef}
    />
    <IconButton
      aria-label="Logout"
      colorScheme="yellow"
      icon={<Icon as={GrAdd} />}
      ml={4}
      size="lg"
      type="submit"
    >
      Add
    </IconButton>
  </Flex>
);
