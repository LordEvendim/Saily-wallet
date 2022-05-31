import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineSmile } from "react-icons/ai";
import Laptop2 from "../../assets/laptop2.png";
import InvestmentIllustration from "../../assets/undraw_investment.svg";
import PortfolioIllustration from "../../assets/undraw_portfolio.svg";
import SavingsIllustration from "../../assets/undraw_savings.svg";
import { BoldText } from "../BoldText";
import FooterWave from "../../assets/wave-haikei.svg";
import { AiOutlineExclamationCircle, AiOutlineCheck } from "react-icons/ai";

interface MainpageProps {}

export const Mainpage: React.FC<MainpageProps> = () => {
  const navigate = useNavigate();

  return (
    <Box
      w="full"
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Box h={120} w="full" />
      <Box w="container.xl">
        <Heading size="3xl" lineHeight="1.4" className="text-shadow-md">
          Advanced risk managment for{" "}
          <Text variant="link" textColor="blue.300" fontWeight="bold">
            Blockchain
          </Text>
        </Heading>
        <Box h={10} w="full" />
        <Button
          w="220px"
          h="70px"
          onClick={() => {
            navigate("/form");
          }}
          background={"white"}
          borderColor={"gray.200"}
          borderWidth={"2px"}
          borderRadius={"10px"}
        >
          <HStack align={"center"} h={"70px"} spacing={"10px"}>
            <Text fontWeight={"bold"} fontSize={"lg"} textColor={"gray.700"}>
              Try now
            </Text>
            <AiOutlineSmile size={"25px"} color="gray.700"></AiOutlineSmile>
          </HStack>
        </Button>
        <Flex
          alignItems={"center"}
          marginTop={"20px"}
          marginLeft={"10px"}
          color={"gray.400"}
        >
          <AiOutlineCheck size={"20px"} />
          <Text marginLeft={"10px"}>Free account</Text>
        </Flex>
        <Flex
          alignItems={"center"}
          marginTop={"20px"}
          marginLeft={"10px"}
          color={"gray.400"}
        >
          <AiOutlineCheck size={"20px"} />
          <Text marginLeft={"10px"}>Ready to use</Text>
        </Flex>
        <Flex
          alignItems={"center"}
          marginTop={"20px"}
          marginLeft={"10px"}
          color={"gray.400"}
        >
          <AiOutlineExclamationCircle size={"20px"} />
          <Text marginLeft={"10px"}>
            Currently supports only testing assets
          </Text>
        </Flex>
        <Box h={"40px"} />
        <Flex top={"120px"} alignItems={"center"} justify={"center"}>
          <Image src={Laptop2} height={"600px"}></Image>
        </Flex>
        <Box h={"10px"} />
        <Heading color={"white"} fontSize={"7xl"} className={"text-glow-white"}>
          How it works?
        </Heading>
        <Box h={"60px"} />
        <Flex justifyContent={"space-between"}>
          <Box
            bg={"white"}
            borderRadius={"30px"}
            backgroundColor={"white"}
            height={"550px"}
            width={"350px"}
            borderColor={"gray.300"}
            borderWidth={"2px"}
            position={"relative"}
            className={"drop-shadow-[10px_10px_5px_rgba(0,0,0,0.2)]"}
          >
            <Text
              marginLeft={"40px"}
              marginTop={"10px"}
              opacity={"0.1"}
              fontSize={"6xl"}
              position={"relative"}
            >
              1
            </Text>
            <Text
              textColor={"gray.600"}
              px={"30px"}
              marginTop={"10px"}
              lineHeight={"8"}
            >
              First, we have to know you better. You will be ask to fill a
              special form so we can understand what are you
              <BoldText>interested</BoldText> in and how big{" "}
              <BoldText>risk are you ready to take</BoldText>. With that
              knowledge we will create a{" "}
              <BoldText>wallet based on your needs.</BoldText>
            </Text>
            <Image
              src={InvestmentIllustration}
              height={"120px"}
              mx={"auto"}
              mt={"50px"}
            ></Image>
          </Box>
          <Box
            bg={"white"}
            borderRadius={"30px"}
            backgroundColor={"white"}
            height={"550px"}
            width={"450px"}
            borderColor={"gray.300"}
            borderWidth={"2px"}
            position={"relative"}
            className={"drop-shadow-[10px_10px_5px_rgba(0,0,0,0.2)]"}
          >
            <Text
              marginLeft={"40px"}
              marginTop={"10px"}
              opacity={"0.1"}
              fontSize={"6xl"}
              position={"relative"}
            >
              2
            </Text>
            <Text
              textColor={"gray.600"}
              px={"30px"}
              marginTop={"10px"}
              lineHeight={"8"}
            >
              Our special <BoldText>algorithms</BoldText> calculate the{" "}
              <BoldText>optimal wallet.</BoldText> Based on these calculations
              we adjust your portfolio for your needs in crypto space. We aim to
              support Tokens, Protocols, Indexes and other types of assets to
              <BoldText>diversify portfolio.</BoldText> Everything is considered
              to create that one special <BoldText>crypto portfolio.</BoldText>
            </Text>
            <Image
              src={SavingsIllustration}
              height={"120px"}
              mx={"auto"}
              mt={"50px"}
            ></Image>
          </Box>
          <Box
            bg={"white"}
            borderRadius={"30px"}
            backgroundColor={"white"}
            height={"550px"}
            width={"350px"}
            borderColor={"gray.300"}
            borderWidth={"2px"}
            position={"relative"}
            className={"drop-shadow-[10px_10px_5px_rgba(0,0,0,0.2)]"}
          >
            <Text
              marginLeft={"40px"}
              marginTop={"10px"}
              opacity={"0.1"}
              fontSize={"6xl"}
              position={"relative"}
            >
              3
            </Text>
            <Text
              textColor={"gray.600"}
              px={"30px"}
              marginTop={"10px"}
              lineHeight={"8"}
            >
              We will present you briefly <BoldText>your portfolio.</BoldText>{" "}
              You will need to register and pay a small fee to get detailed
              information about your created portfolio. You can either use that
              details on your own or let us handle your portfolio.
            </Text>
            <Image
              src={PortfolioIllustration}
              height={"120px"}
              mx={"auto"}
              mt={"50px"}
            ></Image>
          </Box>
        </Flex>
        <Box h={"300px"} />
        <Heading color={"gray.800"} fontSize={"7xl"} textShadow={"lg"}>
          Inspiration
        </Heading>
        <Text
          lineHeight={"10"}
          marginTop={"50px"}
          paddingX={"15px"}
          fontSize={"xl"}
        >
          After our research, we couldn't find any tools that would help us with
          choosing the right investments. And if we found one, it would usually
          be limited to pairs of particular tokens. And what's the point of
          using tools that are <BoldText>limited</BoldText> to very narrow part
          of the crypto world? At that point we decided to create such tool. We
          wanted to create something that would
          <BoldText>help us to choose what we want.</BoldText>
          In addition, many retail investors do not understand the risk they're
          taking. With our
          <BoldText>simple, yet well-functioning algorithm</BoldText> we can
          decide how much of our money we can risk at such trades. That's why we
          created this tool.
          <BoldText>To help people make right choices.</BoldText>
        </Text>
        <Box h={"200px"} />
      </Box>
      <Box
        fontSize={"30px"}
        height={"100px"}
        w={"full"}
        backgroundImage={FooterWave}
        backgroundSize={"cover"}
      >
        <Box w="container.xl" mx={"auto"} mt={"60px"}>
          <Flex fontSize={"xl"}>
            <Box></Box>
            <Box></Box>
            <Box></Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};
