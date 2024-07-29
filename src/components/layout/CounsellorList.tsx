import {
  Avatar,
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import counsellorsArray from "../../data/counsellors.json";

const CounsellorList = () => {
  return (
    <Flex
      flexDir="column"
      gap={4}
      bg="ocre.200"
      px={4}
      py={6}
      borderRadius={8}
      h="80dvh"
      overflowY="scroll"
    >
      <Heading textAlign="center">Counsellors</Heading>
      {counsellorsArray.map((counsellor) => {
        return (
          <Card maxW="sm" maxH="220px">
            <CardHeader>
              <Flex>
                <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                  <Avatar name={counsellor.name} />

                  <Box>
                    <Heading size="sm" fontFamily="Montserrat, sans-serif">
                      {counsellor.name}
                    </Heading>
                    <Text>{counsellor.rating}</Text>
                  </Box>
                </Flex>
              </Flex>
            </CardHeader>
            <CardBody mt={-4}>
              <Text>{counsellor.title}</Text>
              <Text mt={2}>{counsellor.languages}</Text>
            </CardBody>
          </Card>
        );
      })}
    </Flex>
  );
};

export default CounsellorList;
