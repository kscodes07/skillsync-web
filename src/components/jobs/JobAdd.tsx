// JobAddComponent.tsx
"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  Heading,
  Input,
  Textarea,
  FormControl,
  FormLabel,
  Stack,
  useToast,
} from "@chakra-ui/react";
import SkillSyncPage from "../common/SkillsyncPage";
import { addJob } from "@/utils/firebase";
import { useRouter } from "next/navigation";

interface JobAddComponentProps {}

const JobAddComponent: React.FC<JobAddComponentProps> = () => {
  const toast = useToast();
  const router = useRouter();

  const [newJob, setNewJob] = useState({
    title: "",
    description: "",
    location: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewJob((prevJob) => ({ ...prevJob, [name]: value }));
  };

  const handleAddJob = async () => {
    // This is the function to add the job
    const addedJob = { ...newJob };
    try {
      await addJob(addedJob);
    } catch (err) {
      console.log(err);
    }
    // Example: You can log the added job or perform additional logic here
    console.log("Added Job:", addedJob);
    toast({
      title: `Added Job successfully!`,
      description: "Your job has been successfully added.",
      status: "success",
      position: "bottom-right",
      duration: 3000,
      isClosable: true,
    });
    router.push("/");
    // Optionally, clear the form after adding the job
    setNewJob({ title: "", description: "", location: "" });
  };

  return (
    <SkillSyncPage>
      {" "}
      <Box
        p={4}
        boxShadow="md"
        borderWidth="1px"
        borderRadius="md"
        minW="35rem"
      >
        <Heading mb={4}>Add Job</Heading>
        <Stack spacing={4}>
          <FormControl>
            <FormLabel>Title</FormLabel>
            <Input
              type="text"
              name="title"
              value={newJob.title}
              onChange={handleInputChange}
              placeholder="Enter job title"
            />
          </FormControl>

          <FormControl>
            <FormLabel>Description</FormLabel>
            <Textarea
              name="description"
              value={newJob.description}
              onChange={handleInputChange}
              placeholder="Enter job description"
            />
          </FormControl>

          <FormControl>
            <FormLabel>Location</FormLabel>
            <Input
              type="text"
              name="location"
              value={newJob.location}
              onChange={handleInputChange}
              placeholder="Enter job location"
            />
          </FormControl>

          <Button onClick={handleAddJob} colorScheme="blue">
            Add Job
          </Button>
        </Stack>
      </Box>
    </SkillSyncPage>
  );
};

export default JobAddComponent;
