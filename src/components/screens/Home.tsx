import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";
import { IoArrowForwardOutline } from "react-icons/io5";

const Home = () => {
  return (
    <Flex alignItems="center" p={12} w="100%">
      <Grid flex={1} w="100%" >
        <Heading fontSize={{ base: 32, md: 56 }} fontWeight={400}>
          Your Mental Health Matters
        </Heading>
        <Text fontSize={22} fontWeight={400} maxW={500} mt={2}>
          Explore a compassionate space where you can connect, share, and grow
          with others on their mental health journey.
        </Text>
        <Button
          w={200}
          borderRadius={24}
          bg="marine.400"
          mt={12}
          fontFamily="Cormorant Garamond, serif"
          fontWeight={800}
          fontSize={22}
        >
          SPEAK IT OUT !
          <Icon as={IoArrowForwardOutline} ml={1} />
        </Button>
      </Grid>

      <Box flex={1} display="flex" justifyContent="end">
        <Image
          src="/flowes.webp"
          maxW="60%"
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

export default Home;
