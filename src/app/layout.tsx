import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ChakraProvider } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SkillSync - Suitable Jobs For Your Resume",
  description:
    "SkillSync is a cutting-edge platform designed to empower job seekers by dynamically aligning their unique skill set and professional qualifications with a curated selection of suitable job opportunities. Our innovative technology analyzes resumes and profiles, leveraging advanced algorithms to match individuals with roles that perfectly complement their expertise. With SkillSync, job seekers can streamline their job search process, ensuring they are presented with the most relevant and promising career opportunities, ultimately maximizing their chances of securing the perfect job.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}
