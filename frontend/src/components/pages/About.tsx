import { Container, Box, Heading, Grid, Text, Center } from "@chakra-ui/react";
import React from "react";
import Ilustration from "../../assets/undraw_digital_currency_qpak.svg";
import { BoldText } from "../BoldText";

interface AboutProps {}

export const About: React.FC<AboutProps> = () => {
  return (
    <Container w={"full"} centerContent>
      <Box h={"10"} />
      <Box w={"container.xl"}>
        <Heading mb={"4"}>About</Heading>
        <Box h={"2"} />
        <Grid
          templateColumns="repeat(2, 1fr)"
          gap={20}
          fontSize={"xl"}
          lineHeight={"10"}
          w={"full"}
        >
          <Text w={"full"}>
            With our tool, we want to help either{" "}
            <BoldText>inexperienced clients</BoldText> or{" "}
            <BoldText>savvy investors</BoldText> during the process of creating
            their <BoldText>diversified crypto portfolio.</BoldText> This
            project uses specially crafted{" "}
            <BoldText>algorithms to optimize risks</BoldText> and create the
            most suitable portfolio for our clients. We want to help you
            understand the risks, regarding the investment in cryptocurrencies
            and also teach you how to work with such assets to{" "}
            <BoldText>gain financial benefits with optimal risk.</BoldText>
          </Text>
          <Center>
            <img src={Ilustration} alt={"crypto"}></img>
          </Center>
        </Grid>
      </Box>
    </Container>
  );
};
