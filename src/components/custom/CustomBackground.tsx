// customBackground.tsx
import { Flex } from "@chakra-ui/react";
import React from "react";

const CustomBackground = ({ children, direction, colorOne, colorTwo, colorThree }) => {
  return (
    <Flex
      bgGradient={`linear(${direction}, ${colorOne}, ${colorTwo}, ${colorThree})`}
      w="100%"
      minH="100vh"
      direction="column"
      align="center" 
      justify="center" 
      overflow="hidden"
    >
      {children}
    </Flex>
  );
};

export default CustomBackground;
