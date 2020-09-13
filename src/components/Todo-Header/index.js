import React from "react";
import { Flex, Heading } from "@chakra-ui/core";

export const TodoHeader = ({ completed, total }) => (
  <Flex justify="space-between" p={4}>
    <Heading>React Todo</Heading>
    <Flex justify="space-between" alignItems="center">
      <Heading as="h4" size="md">
        Completed: {completed}/{total}
      </Heading>
    </Flex>
  </Flex>
);
