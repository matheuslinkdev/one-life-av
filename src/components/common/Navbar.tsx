import { useState } from "react";
import {
  Center,
  Flex,
  Image,
  Link,
  IconButton,
  Box,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
} from "@chakra-ui/react";
import { PiUserCirclePlusFill } from "react-icons/pi";
import { IoClose, IoMenu } from "react-icons/io5";


const navLinks = ["Home", "About Us", "Space", "Sos", "Contact Us"];

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <Flex
      width="100%"
      justifyContent="space-between"
      alignItems="center"
      h="10vh"
      bgGradient="linear(to-r, marine.400, violet.300)"
      position="fixed"
      top="0"
      left="0"
      padding="0 20px"
      zIndex="10"
    >
      <Image src="/one-life-logo-white.png" height="60px" w="auto" />

      <Box display={{ base: "none", md: "flex" }}>
        {navLinks.map((link) => {
          return (
            <Link
              href="/"
              key={link}
              margin="0 10px"
              color="white"
              fontWeight="bold"
            >
              {link}
            </Link>
          );
        })}
      </Box>

      <IconButton
        display={{ base: "flex", md: "none" }}
        icon={isDrawerOpen ? <IoClose /> : <IoMenu />}
        aria-label="Open Menu"
        onClick={handleDrawerToggle}
        color="white"
        bg="transparent"
        _hover={{ bg: "transparent" }}
      />

      <Drawer
        isOpen={isDrawerOpen}
        placement="right"
        onClose={handleDrawerToggle}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
          <DrawerBody>
            {navLinks.map((link) => {
              return (
                <Link
                  href="/"
                  key={link}
                  display="block"
                  margin="10px 0"
                  fontWeight="bold"
                  onClick={handleDrawerToggle}
                >
                  {link}
                </Link>
              );
            })}
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <Center w="50px" h="50px" borderRadius="50%" color="white">
        <PiUserCirclePlusFill size="30px" />
      </Center>
    </Flex>
  );
};

export default Navbar;
