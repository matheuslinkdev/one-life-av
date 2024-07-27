import { Box, Center, Flex, Heading, Text } from "@chakra-ui/react";
import missionsArray from "../../data/mission_statements.json";

const Missions = () => {
  return (
    <Flex w="100%" h="100%" direction="column" position="relative">
      <Box
        w="100%"
        bg="ocre.200"
        position="absolute"
        top={6}
        textAlign="center"
      >
        <Heading>WHO WE ARE? WHAT WE DO? WHY WE DO?</Heading>
      </Box>

      <Flex
        direction="column"
        align="center"
        justify="center"
        pt={24} // Adiciona espaçamento superior para não sobrepor o Box
        mt={6}
        gap={6}
        px={6}
      >
        {missionsArray.map((mission, index) => (
          <Center
            key={index}
            mb={4}
            p={4}
            bgGradient="linear(to-r, violet.200, marine.200)"
            borderRadius="md"
            boxShadow="md"
            w={800}
            alignSelf={index % 2 === 0 ? "start" : "end"}
            className="default-transition"
            border="2px solid var(--chakra-colors-violet-300)"
            _hover={{
              border: "2px solid var(--chakra-colors-violet-400)",
            }}
          >
            <Text fontWeight={400} fontSize={20}>
              {mission.description}
            </Text>
          </Center>
        ))}
      </Flex>
    </Flex>
  );
};

export default Missions;
