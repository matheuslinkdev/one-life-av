import { Flex, Heading, Text } from "@chakra-ui/react";

import benefitsArray from "../../data/benefits.json";

const Benefits = () => {
  return (
    <Flex
      flexDir="column"
      gap={4}
      maxW="95dvw"
      p={8}
      justifyContent="center"
      alignItems="center"
    >
      {benefitsArray.map((benefit) => {
        return (
          <Flex
          key={benefit.title}
            flexDir="column"
            justifyContent="center"
            p={4}
            textAlign="center"
            bgGradient={`linear(to-r, ${benefit.colorOne} 40%, ${benefit.colorTwo})`}
            className="default-transition"
            w={800}
            maxW="95dvw"
            border="2px solid var(--chakra-colors-violet-300)"
            _hover={{
              border: "2px solid var(--chakra-colors-violet-400)",
            }}
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
