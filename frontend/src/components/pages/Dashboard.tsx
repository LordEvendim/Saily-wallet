import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  HStack,
  Spacer,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

interface DashboardProps {}

export const Dashboard: React.FC<DashboardProps> = () => {
  let navigate = useNavigate();

  return (
    <Container w={"full"} centerContent>
      <Box h={"10"} />
      <Box w={"container.xl"}>
        <Flex>
          <Heading mb={"4"}>Dashboard</Heading>
          <Spacer />
          <HStack spacing={"10px"}>
            <Button
              onClick={() => {
                navigate("/create");
              }}
            >
              Your action
            </Button>
            <Button
              onClick={() => {
                navigate("/positions");
              }}
            >
              Your action 2
            </Button>
          </HStack>
        </Flex>
        <Box h={"2"} />
        <Grid templateColumns="repeat(2, 1fr)" gap={6}></Grid>
      </Box>
    </Container>
  );
};
