// LoginPage.tsx
"use client";
import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  useToast,
  FormErrorMessage,
} from "@chakra-ui/react";
import SkillSyncPage from "../common/SkillsyncPage";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const toast = useToast();

  const validateForm = () => {
    const errors: Record<string, string> = {};

    if (!email) {
      errors.email = "Email is required";
    }

    if (!password) {
      errors.password = "Password is required";
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleLogin = () => {
    if (validateForm()) {
      // Perform login logic here
      console.log("Logging in with:", email, password);

      // Show success toast
      toast({
        title: "Login Successful!",
        description: "You have successfully logged in.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } else {
      // Show error toast
      toast({
        title: "Login Failed",
        description: "Please fill in all required fields.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <SkillSyncPage>
      {" "}
      <Box
        p={8}
        mt={8}
        maxW="md"
        mx="auto"
        textAlign="center"
        boxShadow="0 4px 8px rgba(0,0,0,0.1)"
        borderRadius="md"
        bg="white"
        minW="30rem"
      >
        <Heading mb={4}>Login</Heading>
        <FormControl isInvalid={!!formErrors.email}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormErrorMessage>{formErrors.email}</FormErrorMessage>
        </FormControl>

        <FormControl mt={4} isInvalid={!!formErrors.password}>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            placeholder="Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormErrorMessage>{formErrors.password}</FormErrorMessage>
        </FormControl>

        <Button colorScheme="blue" mt={6} onClick={handleLogin}>
          Login
        </Button>
      </Box>
    </SkillSyncPage>
  );
};

export default LoginPage;
