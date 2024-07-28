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
  Icon,
} from "@chakra-ui/react";
import { PiUserCirclePlusFill } from "react-icons/pi";
import { IoClose, IoMenu } from "react-icons/io5";

interface Props {
  label: string;
  href: string;
}

const navLinks: Props[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/" },
  { label: "Community", href: "/community" },
  { label: "Sos", href: "/" },
  { label: "Contact Us", href: "/" },
];

const Navbar = () => {
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
        {navLinks.map((link) => (
          <Link
            href={link.href}
            key={link.label}
            margin="0 10px"
            color="white"
            fontSize={20}
            fontWeight={300}
            bg="violet.transparent.600"
            px={2}
            py={1}
            borderRadius={4}
            minW="80px"
            textAlign="center"
            transition=".5s ease"
            _hover={{ textDecoration: "none", bg: "violet.500" }}
          >
            {link.label}
          </Link>
        ))}
      </Box>

      <IconButton
        display={{ base: "flex", md: "none" }}
        icon={<IoMenu size="32px" />}
        aria-label={isDrawerOpen ? "Close Menu" : "Open Menu"}
        onClick={handleDrawerToggle}
        color="white"
        bg="transparent"
        _hover={{ bg: "transparent" }}
      />

      <Drawer
        isOpen={isDrawerOpen}
        placement="top"
        onClose={handleDrawerToggle}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader
            borderBottomWidth="1px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            w="100%"
            bgGradient="linear(to-r, violet.400, marine.200)"
          >
            <Image
              src="/one-life-logo-white.png"
              filter="drop-shadow(0 0 2px var(--chakra-colors-violet-900))"
            />
            <Icon as={IoClose} fontSize="32px" onClick={handleDrawerToggle} />
          </DrawerHeader>
          <DrawerBody
            display="flex"
            flexDir="column"
            gap={2}
            justifyContent="center"
          >
            {navLinks.map((link) => (
              <Link
                href={link.href}
                key={link.label}
                display="block"
                margin="10px 0"
                fontWeight={500}
                fontSize={22}
                bgGradient="linear(to-r, violet.400, marine.200)"
                px={2}
                py={2}
                borderRadius={4}
                minW="80px"
                textAlign="center"
                onClick={handleDrawerToggle}
              >
                {link.label}
              </Link>
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <Center
        w="50px"
        h="50px"
        borderRadius="50%"
        color="white"
        display={{ base: "none", md: "flex" }}
      >
        <Icon as={PiUserCirclePlusFill} fontSize="32px" />
      </Center>
    </Flex>
  );
};

export default Navbar;
