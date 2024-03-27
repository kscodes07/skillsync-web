import React from "react";
import Link from "next/link";
import { Box, Flex, Image, Text, Button } from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      p={4}
      bg="blue.500"
      color="white"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={999}
    >
      {/* Left side with Logo and Title */}
      <Flex align="center">
        <Image
          src="./image.png"
          alt="Logo"
          boxSize="50px"
          mr={4}
          borderRadius={8}
        />
        <Text fontSize="lg" fontWeight="bold">
          Skill Sync
        </Text>
      </Flex>

      {/* Right side with Add Job button */}
      <Box>
        <Link href="/add-job">
          <Button>Add a Job</Button>
        </Link>
      </Box>
    </Flex>
  );
};

export default Header;
