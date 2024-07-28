import { Flex, Icon, Link, Text } from "@chakra-ui/react";
import {
  PiInstagramLogo,
  PiLinkedinLogo,
  PiWhatsappLogo,
  PiYoutubeLogo,
} from "react-icons/pi";

const links = [
  "About Us",
  "Privacy Policy",
  "Refund Policy",
  "Shipping Policy",
  "Contact Us",
  "Terms & Conditions",
  "Support",
];

const socialMedia = [
  {
    label: "Instagram",
    icon: PiInstagramLogo,
  },
  {
    label: "LinkedIn",
    icon: PiLinkedinLogo,
  },
  {
    label: "Youtube",
    icon: PiYoutubeLogo,
  },
  {
    label: "WhatsApp",
    icon: PiWhatsappLogo,
  },
];

const Footer = () => {
  return (
    <Flex
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      p={8}
      w="100%"
      borderTop="1px solid var(--chakra-colors-violet-300)"
    >
      <Flex flexWrap="wrap" gap={6} justifyContent="center">
        {links.map((link) => {
          return (
            <Link
              key={link}
              mx={6}
              fontWeight={500}
              _hover={{ textDecor: "none", transform: "scale(1.06)" }}
              className="default-smooth"
            >
              {link}
            </Link>
          );
        })}
      </Flex>
      <Flex my={4}>
        {socialMedia.map((media) => {
          return (
            <Link>
              <Icon as={media.icon} fontSize={32} mx={4} />
            </Link>
          );
        })}
      </Flex>
      <Text>
        Address: 11th floor , Brigade Signature Towers , Kattamnallur ,
        Bangalore 560049
      </Text>

      <Text fontSize={16} fontWeight={500} mt={2}>
        © Fly Fare Technologies LLP 2024. All rights reserved.
      </Text>
    </Flex>
  );
};

export default Footer;
