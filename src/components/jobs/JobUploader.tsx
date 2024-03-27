// JobUploader.tsx
import React, { useState } from "react";
import { Box, Button, Stack, Textarea } from "@chakra-ui/react";

interface JobUploaderProps {
  onGetResumeContent: (resumeContent: string) => void;
}

const JobUploader: React.FC<JobUploaderProps> = ({ onGetResumeContent }) => {
  const [resumeContent, setResumeContent] = useState<string>("");

  const handleTextAreaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setResumeContent(event.target.value);
  };

  const handleGetResumeContent = () => {
    onGetResumeContent(resumeContent);
  };

  return (
    <Stack spacing={4} width="100%">
      <Box
        p={4}
        boxShadow="md"
        borderWidth="1px"
        borderRadius="md"
        bgColor="white"
      >
        <Stack direction={["column", "column"]} spacing={4} align="center">
          <Textarea
            value={resumeContent}
            onChange={handleTextAreaChange}
            placeholder="Enter your skills and relevant experience here..."
            resize="vertical"
            minH="120px"
            borderRadius="md"
            borderColor="gray.300"
            _focus={{ borderColor: "blue.400" }}
          />
          {/* <Button
            colorScheme="green"
            onClick={handleGetResumeContent}
            borderRadius="md"
            _hover={{ bg: "green.500" }}
            _active={{ bg: "green.600" }}
          >
            Get Resume Content
          </Button> */}
          <Button
            colorScheme="blue"
            onClick={handleGetResumeContent}
            borderRadius="md"
            _hover={{ bg: "blue.500" }}
            _active={{ bg: "blue.600" }}
          >
            Get Job Listings
          </Button>
        </Stack>
      </Box>
    </Stack>
  );
};

export default JobUploader;
