// JobsPage.tsx
"use client";
import React, { useEffect, useState } from "react";
import {
  Box,
  Heading,
  Text,
  Flex,
  Divider,
  Spinner,
  Button,
  useToast,
} from "@chakra-ui/react";
import SkillSyncPage from "../common/SkillsyncPage";
import JobUploader from "./JobUploader";
import { getAllJobs } from "@/utils/firebase";
import { findSimilarObjects } from "@/utils/similarity";

interface Job {
  id: string;
  title: string;
  description: string;
  location: string;
}

interface JobListProps {
  jobs: Job[];
}

const JobList: React.FC<JobListProps> = ({ jobs }) => {
  const toast = useToast();
  return (
    <Flex flexWrap="wrap" justifyContent="space-between">
      {jobs.map((job, index) => (
        <Box
          key={index}
          p={4}
          width={["100%", "48%", "32%"]}
          mb={4}
          boxShadow="md"
          borderWidth="1px"
          borderRadius="md"
        >
          <Heading size="md">{job.title}</Heading>
          <Text mt={2}>{job.description}</Text>
          <Divider mt={2} />
          <Text mt={2} fontWeight="bold">
            Location: {job.location}
          </Text>
          <Box width="100%" display="flex" alignItems={"flex-end"}>
            <Button
              ml="auto"
              bg="green.300"
              _hover={{ bg: "green.400" }}
              onClick={() => {
                toast({
                  title: `Applied to the ${job.title} position`,
                  description: "Your application is sucessful!",
                  status: "success",
                  position: "bottom-right",
                  duration: 3000,
                  isClosable: true,
                });
              }}
            >
              Apply
            </Button>
          </Box>
        </Box>
      ))}
    </Flex>
  );
};

const JobsPage: React.FC = () => {
  const [resumeContent, setResumeContent] = useState<string>("");

  const [fetchedJobs, setFetchedJobs] = useState<any>([]);
  const [matchingJobs, setMatchingJobs] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const getJobs = async () => {
    try {
      setLoading(true);
      const jobs = await getAllJobs();
      setFetchedJobs(jobs);
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getJobs();
  }, []);

  const handleGetJobListings = (content: string) => {
    console.log(content);
    const matches = findSimilarObjects(content, fetchedJobs, 0.2);
    console.log("match::" + JSON.stringify(matches));
    setMatchingJobs(matches);
  };

  return (
    <SkillSyncPage>
      <Box width="100%">
        <JobUploader
          onGetResumeContent={(content) => {
            setResumeContent(content);
            handleGetJobListings(content);
          }}
        />
        <Text fontSize="26px" fontWeight="600" mb={4} mt={4}>
          Suitable Jobs:
        </Text>
        <Button
          m={4}
          onClick={() => {
            setMatchingJobs(null);
          }}
        >
          Reset
        </Button>
        <Box>
          {loading ? (
            <Box
              w="100%"
              display="flex"
              flexDir={"row"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Spinner />
            </Box>
          ) : (
            <JobList jobs={matchingJobs ? matchingJobs : fetchedJobs} />
          )}
        </Box>
      </Box>
    </SkillSyncPage>
  );
};

export default JobsPage;
