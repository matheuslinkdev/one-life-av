import { Flex, Heading, Text } from "@chakra-ui/react";

import benefitsArray from "../../data/benefits.json";

console.log(benefitsArray);

const Benefits = () => {
  return (
    <Flex
      flexDir="column"
      gap={4}
      w="100%"
      p={8}
      justifyContent="center"
      alignItems="center"
    >
      {benefitsArray.map((benefit, index) => {
        return (
          <Flex
            flexDir="column"
            justifyContent="center"
            p={4}
            textAlign="center"
            bgGradient={`linear(to-r, ${benefit.colorOne} 40%, ${benefit.colorTwo})`}
            className="default-transition"
            w={800}
            border="2px solid var(--chakra-colors-violet-300)"
            _hover={{
              border: "2px solid var(--chakra-colors-violet-400)",
            }}
            alignSelf={index % 2 === 0 ? "end" : "start"}
          >
            <Heading fontSize={{ base: 22, md: 24 }}>{benefit.title}</Heading>
            <Text fontWeight={500}>{benefit.description}</Text>
          </Flex>
        );
      })}
    </Flex>
  );
};

export default Benefits;
