"use client";
import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Button,
  Heading,
  useToast,
  FormErrorMessage,
} from "@chakra-ui/react";
import SkillSyncPage from "../common/SkillsyncPage";

const Signup: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [userType, setUserType] = useState<string>("");
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const toast = useToast();

  const validateForm = () => {
    const errors: Record<string, string> = {};

    if (!name) {
      errors.name = "Name is required";
    }

    if (!email) {
      errors.email = "Email is required";
    }

    if (!password) {
      errors.password = "Password is required";
    }

    if (!userType) {
      errors.userType = "Please select a user type";
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSignup = () => {
    if (validateForm()) {
      // Perform signup logic here
      console.log("Signing up with:", name, email, password, userType);

      // Show success toast
      toast({
        title: "Signup Successful!",
        description: "You have successfully signed up.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } else {
      // Show error toast
      toast({
        title: "Signup Failed",
        description: "Please fill in all required fields.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <SkillSyncPage>
      <Box
        p={8}
        mt={8}
        maxW="md"
        mx="auto"
        textAlign="center"
        boxShadow="0 4px 8px rgba(0, 0, 0, 0.1), 0 -4px 8px rgba(0, 0, 0, 0.1)"
        borderRadius="md"
        bg="white"
        minW="30rem"
      >
        <Heading mb={4} color={"blue.500"}>
          Sign up
        </Heading>
        <FormControl isInvalid={!!formErrors.name}>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <FormErrorMessage>{formErrors.name}</FormErrorMessage>
        </FormControl>

        <FormControl mt={4} isInvalid={!!formErrors.email}>
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

        <FormControl mt={4} isInvalid={!!formErrors.userType}>
          <FormLabel>User Type</FormLabel>
          <RadioGroup value={userType} onChange={(value) => setUserType(value)}>
            <Stack direction="row">
              <Radio value="employee">Employee</Radio>
              <Radio value="employer">Employer</Radio>
            </Stack>
          </RadioGroup>
          <FormErrorMessage>{formErrors.userType}</FormErrorMessage>
        </FormControl>

        <Button colorScheme="blue" mt={6} onClick={handleSignup}>
          Sign up
        </Button>
      </Box>
    </SkillSyncPage>
  );
};

export default Signup;
