// SkillSyncPage.tsx
import React, { ReactNode } from "react";
import { ChakraProvider, CSSReset, Box } from "@chakra-ui/react";
import Header from "./Header";

interface SkillSyncPageProps {
  children: ReactNode;
}

const SkillSyncPage: React.FC<SkillSyncPageProps> = ({ children }) => {
  return (
    <ChakraProvider>
      <CSSReset />
      <Box minHeight="100vh" display="flex" flexDirection="column" width="100%">
        {/* Header Component */}
        <Header />

        {/* Children components */}
        <Box
          flex="1"
          p={8}
          display="flex"
          flexDirection="column"
          alignItems="center"
          // justifyContent="center"
          marginTop="4rem"
        >
          {children}
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default SkillSyncPage;
