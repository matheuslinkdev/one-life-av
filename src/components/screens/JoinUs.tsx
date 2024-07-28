import { Box, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";

const JoinUs = () => {
  return (
    <Flex
      alignItems="center"
      p={12}
      w="100%"
      flexDir={{ base: "column-reverse", md: "row" }}
    >
      <Grid flex={1} w="100%">
        <Heading fontSize={{ base: 26, md: 42 }} fontWeight={400}>
          “RECOVERY IS NOT ONE AND DONE. IT'S A LIFELONG JOURNEY THAT TAKES
          PLACE ONE DAY, ONE STEP AT A TIME.”
        </Heading>
        <Text fontSize={22} fontWeight={400} maxW={500}>
          - Steve Jobs, Mental Health & Adaptations.
        </Text>
        <Heading mt={12} fontSize={28} fontWeight={500}>
          Join us on this journey of resilience and renewal, as together, we
          weave a tapestry of support and compassion. At One Life Healthcare,
          your well-being is not just our priority; it's our collective mission.
        </Heading>
      </Grid>

      <Box flex={1} display="flex" justifyContent="end">
        <Image
          src="/meditating.png"
          w={400}
          mb={{ base: 8, md: "auto" }}
          filter="drop-shadow(10px 5px 15px var(--chakra-colors-violet-500))"
          className="default-transition"
          _hover={{
            filter:
              "drop-shadow(10px 5px 20px var(--chakra-colors-violet-600))",
          }}
        />
      </Box>
    </Flex>
  );
};

export default JoinUs;
