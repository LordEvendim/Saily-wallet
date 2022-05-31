import {
  Box,
  Button,
  Checkbox,
  Container,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
  VStack,
  Text,
  HStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiChevronsDown } from "react-icons/fi";
import { toast } from "react-toastify";
import { BoldText } from "../BoldText";
import { portfolio } from "../../constants/portfolio";
import { Icons } from "../../constants/cryptologos";
import { AutoForm, AutoFormState } from "../formik/AutoForm";
import { CoinData, fetchCoins } from "../../modules/riskCalculator";

interface FormPageProps {}

export const FormPage: React.FC<FormPageProps> = () => {
  let navigate = useNavigate();

  const [sliderValue, setSliderValue] = useState(5);
  const [showTooltip, setShowTooltip] = useState(false);
  const [page, setPage] = useState<number>(0);
  const [deposit, setDeposit] = useState<number>(0);
  const [multiplier, setMultiplier] = useState<number>(1);

  const [checkedItems, setCheckedItems] = React.useState([false, false]);

  const allChecked = checkedItems.every(Boolean);
  const [coinsDetails, setCoinsDetails] = useState<(CoinData | undefined)[]>();
  const [investedAmounts, setInvestedAmounts] = useState<any>({});

  const handleSubmit = async (values: AutoFormState) => {
    let riskFactor = 0;
    let confidenceScore = 2;

    riskFactor += values.question1 === "0" ? -2 : 2;
    confidenceScore *= values.question2 === "0" ? 1.2 : 0.8;
    confidenceScore *= values.question3 === "0" ? 1.2 : 1;
    confidenceScore *= values.question4 === "0" ? 1.2 : 0.8;
    confidenceScore *= values.question5 === "0" ? 1.2 : 0.8;
    confidenceScore *= values.question6 === "0" ? 1.2 : 0.8;
    confidenceScore *= values.question7 === "2" ? 2 : 0.5;
    confidenceScore *= values.question8 === "0" ? 1.2 : 0.8;
    confidenceScore *= values.question9 === "0" ? 1.2 : 0.8;
    riskFactor += values.question10 === "0" ? 2 : -2;
    confidenceScore *= values.question11 === "0" ? 1.2 : 0.8;
    confidenceScore *= values.question12 === "0" ? 1.2 : 0.8;
    riskFactor += values.question13 === "2" ? 2 : -1;
    confidenceScore *= values.question14 === "0" ? 1.2 : 0.8;
    riskFactor += values.question15 === "0" ? 1.5 : -1.5;
    riskFactor += values.question16 === "0" ? 2 : -2;
    confidenceScore *= values.question17 === "0" ? 1.2 : 0.8;
    riskFactor += values.question18 === "0" ? 2 : -2;
    riskFactor += values.question19 === "0" ? -2 : 2;
    riskFactor += values.question20 === "0" ? 1 : -1;
    riskFactor += values.question21 === "0" ? 1 : -1;
    riskFactor += values.question22 === "0" ? 1 : -1;
    riskFactor += values.question23 === "0" ? 1 : -1;
    riskFactor += values.question24 === "0" ? -2 : 2;
    confidenceScore *= values.question25 === "0" ? 1.2 : 0.8;
    riskFactor += values.question26 === "0" ? 1 : -1;
    riskFactor += values.question27 === "0" ? -3 : 3;
    riskFactor += values.question28 === "0" ? 1 : -1;
    riskFactor += values.question29 === "0" ? 1 : -1;
    confidenceScore *= values.question30 === "0" ? 1.2 : 0.8;

    console.log(riskFactor);
    console.log(confidenceScore);
    riskFactor *= confidenceScore;

    const result = await fetchCoins();

    if (!result) {
      toast.error("Try again later");
      return;
    }

    setCoinsDetails(result);

    let totalInvested = 0;
    let invested: any = {};
    for (let i = 0; i < result.length; i++) {
      const thisResult = result[i];
      if (thisResult === undefined) continue;

      const amount = calculateAmount(riskFactor, thisResult.riskScore);
      totalInvested += amount;
      invested[thisResult.id] = amount;
    }

    setInvestedAmounts(invested);

    const multiplierA = deposit / totalInvested;

    setMultiplier(multiplierA);
    setPage(2);
  };
  const handleSubmitDeposit = async () => {
    if (!deposit) {
      return toast.error("Please provide valid data");
    }
    setPage(1);
  };
  const handleAccept = async () => {
    if (!allChecked) {
      return toast.error("Accept all rules");
    }

    setPage(3);
  };
  const calculateAmount = (riskValue: number, assetRisk: number) => {
    const riskValueabs = Math.abs(riskValue);

    if (riskValue > 0) {
      return riskValueabs / assetRisk;
    } else {
      return riskValueabs * assetRisk;
    }
  };

  switch (page) {
    case 0:
      return (
        <Container w={"full"} centerContent>
          <Box h={"10"} />
          <Box w={"container.xl"}>
            <Heading mb={"4"}>Form</Heading>
            <Box h={"2"} />
            <Grid templateColumns="repeat(2, 1fr)" gap={6}>
              <GridItem
                bg={"white"}
                p={"30px"}
                boxShadow={"xl"}
                borderRadius={"xl"}
              >
                <FormLabel>Investment value (in USD)</FormLabel>
                <input
                  id="deposit"
                  onChange={(e) => {
                    setDeposit(
                      parseInt(e.target.value) ? parseInt(e.target.value) : 0
                    );
                  }}
                  placeholder="Receiver address"
                  name="address"
                  value={deposit}
                  className="w-full border-gray-200 border-2 rounded-md p-4"
                  required
                />
                <Button
                  w={"180px"}
                  h={"50px"}
                  borderColor={"gray.300"}
                  borderWidth={"1px"}
                  bg={"blue.300"}
                  color={"white"}
                  className="mt-8 mb-5 mx-auto cursor-pointer w-full h-14 bg-gradient-to-bl from-violet-600 to-violet-800 transform hover:scale-[1.01] transition-all duration-75 rounded-lg text-white flex justify-center items-center flex-col text-lg"
                  type="submit"
                  onClick={() => handleSubmitDeposit()}
                >
                  Next
                </Button>
              </GridItem>
              <GridItem p={"30px"} fontSize={"lg"}>
                <Stack spacing={"40px"} display={"flex"} align={"center"}>
                  <Box fontWeight={"bold"}>Deposit funds</Box>
                  <FiChevronsDown></FiChevronsDown>
                  <Box>Fill the form</Box>
                  <FiChevronsDown></FiChevronsDown>
                  <Box>Proceed the transaction</Box>
                  <FiChevronsDown></FiChevronsDown>
                  <Box>Review your assets</Box>
                </Stack>
              </GridItem>
            </Grid>
          </Box>
        </Container>
      );
    case 1:
      return (
        <Container w={"full"} centerContent>
          <Box h={"10"} />
          <Box w={"container.xl"}>
            <Heading mb={"4"}>Form</Heading>
            <Box h={"2"} />
            <Grid templateColumns="repeat(2, 1fr)" gap={6}>
              <GridItem
                bg={"white"}
                p={"30px"}
                boxShadow={"xl"}
                borderRadius={"xl"}
              >
                <AutoForm handleSubmit={handleSubmit} />
              </GridItem>
              <GridItem p={"30px"} fontSize={"lg"}>
                <Stack spacing={"40px"} display={"flex"} align={"center"}>
                  <Box>Deposit funds</Box>
                  <FiChevronsDown></FiChevronsDown>
                  <Box fontWeight={"bold"}>Fill the form</Box>
                  <FiChevronsDown></FiChevronsDown>
                  <Box>Proceed the transaction</Box>
                  <FiChevronsDown></FiChevronsDown>
                  <Box>Review your assets</Box>
                </Stack>
              </GridItem>
            </Grid>
          </Box>
          <Box height={"300px"} />
        </Container>
      );
    case 2:
      return (
        <Container w={"full"} centerContent>
          <Box h={"10"} />
          <Box w={"container.xl"}>
            <Heading mb={"4"}>Form</Heading>
            <Box h={"2"} />
            <Grid templateColumns="repeat(2, 1fr)" gap={6}>
              <GridItem
                bg={"white"}
                p={"30px"}
                boxShadow={"xl"}
                borderRadius={"xl"}
              >
                <VStack
                  justifyContent={"flex-start"}
                  alignItems={"start"}
                  spacing={"30px"}
                >
                  <FormLabel fontSize={"xl"}>Accept the rules</FormLabel>
                  <Checkbox
                    isChecked={checkedItems[0]}
                    onChange={(e) =>
                      setCheckedItems([e.target.checked, checkedItems[1]])
                    }
                    isRequired
                  >
                    I understnad that this application is not opertaing with any
                    monetary value. It's just for{" "}
                    <BoldText>presentation</BoldText> of the future product
                  </Checkbox>
                  <Checkbox
                    isChecked={checkedItems[1]}
                    onChange={(e) =>
                      setCheckedItems([checkedItems[0], e.target.checked])
                    }
                    isRequired
                  >
                    I understand that this is{" "}
                    <BoldText>NOT a financial advice</BoldText>
                  </Checkbox>
                  <Button
                    w={"180px"}
                    h={"50px"}
                    borderColor={"gray.300"}
                    borderWidth={"1px"}
                    bg={"blue.300"}
                    color={"white"}
                    className="mt-8 mb-5 mx-auto cursor-pointer w-full h-14 bg-gradient-to-bl from-violet-600 to-violet-800 transform hover:scale-[1.01] transition-all duration-75 rounded-lg text-white flex justify-center items-center flex-col text-lg"
                    type="submit"
                    onClick={() => handleAccept()}
                  >
                    Next
                  </Button>
                </VStack>
              </GridItem>
              <GridItem p={"30px"} fontSize={"lg"}>
                <Stack spacing={"40px"} display={"flex"} align={"center"}>
                  <Box>Deposit funds</Box>
                  <FiChevronsDown></FiChevronsDown>
                  <Box>Fill the form</Box>
                  <FiChevronsDown></FiChevronsDown>
                  <Box fontWeight={"bold"}>Proceed the transaction</Box>
                  <FiChevronsDown></FiChevronsDown>
                  <Box>Review your assets</Box>
                </Stack>
              </GridItem>
            </Grid>
          </Box>
        </Container>
      );
    case 3:
      return (
        <Container w={"full"} centerContent>
          <Box h={"10"} />
          <Box w={"container.xl"}>
            <Heading mb={"4"}>Portfolio</Heading>
            <Box h={"2"} />
            <Grid
              templateColumns="repeat(2, 1fr)"
              gap={6}
              marginBottom={"50px"}
            >
              <GridItem
                bg={"white"}
                p={"30px"}
                boxShadow={"xl"}
                borderRadius={"xl"}
                borderColor={"gray.100"}
                borderWidth={"1px"}
              >
                {coinsDetails?.map((element) => {
                  if (!element) return null;

                  return (
                    <Box
                      borderRadius={"5px"}
                      borderColor={"gray.300"}
                      borderWidth={"1px"}
                      p={"20px"}
                      display={"flex"}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                      boxShadow={"sm"}
                      my={"10px"}
                    >
                      <HStack spacing={"10px"}>
                        <Image src={element.image} width={"24px"}></Image>
                        <Text>{element.name}</Text>
                      </HStack>
                      <HStack spacing={"10px"}>
                        <Text fontSize={"lg"}>
                          {((Math.round(
                            investedAmounts[element.id] * multiplier
                          ) /
                            element.price) *
                            1000) /
                            1000}{" "}
                          {element.symbol}
                        </Text>
                        <Text fontSize={"md"} color={"gray.300"}>
                          ~
                          {(investedAmounts[element.id] * multiplier).toFixed(
                            2
                          )}{" "}
                          USD
                        </Text>
                      </HStack>
                    </Box>
                  );
                })}
                <Text
                  fontWeight={"bold"}
                  fontSize={"2xl"}
                  marginTop={"20px"}
                  marginLeft={"20px"}
                >
                  Toal invested: {deposit} USD
                </Text>
              </GridItem>
              <GridItem p={"30px"} fontSize={"lg"}>
                <Stack spacing={"40px"} display={"flex"} align={"center"}>
                  <Box>Deposit funds</Box>
                  <FiChevronsDown></FiChevronsDown>
                  <Box>Fill the form</Box>
                  <FiChevronsDown></FiChevronsDown>
                  <Box>Proceed the transaction</Box>
                  <FiChevronsDown></FiChevronsDown>
                  <Box fontWeight={"bold"}>Review your assets</Box>
                </Stack>
              </GridItem>
            </Grid>
          </Box>
        </Container>
      );
    default:
      return null;
  }
};
