// customBackground.tsx
import { Flex } from "@chakra-ui/react";
import { CustomBgTypes } from "../../types/global-types";

const CustomBackground = ({
  children,
  direction,
  colorOne,
  colorTwo,
  colorThree,
}: CustomBgTypes) => {
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
