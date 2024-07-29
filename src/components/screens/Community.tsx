import { Flex } from "@chakra-ui/react";
import TestimonialList from "../layout/TestimonialList";
import CounsellorList from "../layout/CounsellorList";

const Community = () => {
  return (
    <Flex flexDir="column" w="100%" h={{ base: "auto", md: "100dvh" }} p={4}>
      <Flex
        w="100%"
        justifyContent="space-evenly"
        flexWrap="wrap"
        gap={8}
        mt={{ base: 24, md: 16 }}
        mb={4}
      >
        <TestimonialList />
        <CounsellorList />
      </Flex>
    </Flex>
  );
};

export default Community;
