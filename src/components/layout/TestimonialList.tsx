import {
  Avatar,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import testimonialArray from "../../data/testimonials.json";
import { AiOutlineHeart } from "react-icons/ai";

import { FaRegComment } from "react-icons/fa6";
import { PiShareFatLight } from "react-icons/pi";
import { IoEyeOutline } from "react-icons/io5";

function getRandomComments() {
  return Math.floor(Math.random() * 4) + 1;
}

const TestimonialList = () => {
  return (
    <Flex
      flexDir="column"
      gap={4}
      bg="violet.500"
      p={4}
      borderRadius={8}
      h="80dvh"
      overflowY="scroll"
    >
      <Heading textAlign="center">Testimonials</Heading>
      {testimonialArray.map((testimonial) => {
        return (
          <Card maxW="lg">
            <CardHeader>
              <Flex>
                <Flex
                  flex="1"
                  gap="4"
                  alignItems="center"
                  flexWrap="wrap"
                  justifyContent="space-between"
                >
                  <Flex
                    alignItems="center"
                    bg="common.100"
                    borderRadius="md"
                    px={2}
                    py={1}
                  >
                    <Avatar name={testimonial.username} />
                    <Heading size="md" ml={2}>
                      {testimonial.username}
                    </Heading>
                  </Flex>
                  <Text>{testimonial.days_ago} Days Ago</Text>
                </Flex>
              </Flex>
            </CardHeader>
            <CardBody>
              <Text>{testimonial.story}</Text>
            </CardBody>

            <CardFooter
              justify="space-between"
              flexWrap="wrap"
              sx={{
                "& > button": {
                  minW: "136px",
                },
              }}
            >
              <ButtonGroup>
                <Button
                  flex="1"
                  borderRadius="4xl"
                  className="card-button"
                  variant="ghost"
                  leftIcon={<AiOutlineHeart />}
                >
                  {testimonial.likes}
                </Button>
                <Button
                  flex="1"
                  borderRadius="4xl"
                  className="card-button"
                  variant="ghost"
                  leftIcon={<FaRegComment />}
                >
                  {getRandomComments()}
                </Button>
              </ButtonGroup>

              <ButtonGroup>
                <Button
                  flex="1"
                  borderRadius="4xl"
                  className="card-button"
                  variant="ghost"
                  leftIcon={<IoEyeOutline />}
                >
                  {testimonial.views}
                </Button>
                <Button
                  flex="1"
                  borderRadius="4xl"
                  className="card-button"
                  variant="ghost"
                  leftIcon={<PiShareFatLight />}
                >
                  Share
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        );
      })}
    </Flex>
  );
};

export default TestimonialList;
