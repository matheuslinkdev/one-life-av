import { Box, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";

const Message = () => {
  return (
    <Flex alignItems="center" p={8} w="100%">
      <Box
        flex={1}
        justifyContent="start"
        display={{ base: "none", md: "block" }}
      >
        <Image
          src="/happypeople.webp"
          maxW="60%"
          filter="drop-shadow(10px 5px 15px var(--chakra-colors-violet-500))"
          className="default-transition"
          _hover={{
            filter:
              "drop-shadow(10px 5px 20px var(--chakra-colors-violet-600))",
          }}
        />
      </Box>
      <Grid flex={1} w="100%" textAlign="center">
        <Heading fontSize={{ base: 34., md: 50 }} fontWeight={400} mb={4}>
          IT’S OK TO NOT BE OK YOU ARE A HUMAN
        </Heading>
        <Text fontSize={22} fontWeight={400} mt={2}>
          In the fast-paced hustle of life, it's easy to feel overwhelmed by the
          weight of our problems. But fret not, for here, within the safe
          confines of our anonymous haven, you can unburden your heart and soul
          without fear or judgment.
        </Text>
      </Grid>
    </Flex>
  );
};

export default Message;
