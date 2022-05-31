import {
  Button,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  VStack,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React from "react";

interface AutoFormProps {
  handleSubmit: (values: AutoFormState) => Promise<void>;
}

type FormTemplate =
  | {
      id: string;
      type: "radio";
      question: string;
      answers: string[];
    }
  | {
      id: string;
      type: "radio";
      question: string;
      answers: string[];
    };

const formTemplate: FormTemplate[] = [
  {
    id: "question1",
    type: "radio",
    question: "What type of investment are you interested in?",
    answers: [
      "Long-term investment that will give small but certain earnings",
      "Short-term investment, which can give very large earnings, but also has a high risk of capital loss",
    ],
  },
  {
    id: "question2",
    type: "radio",
    question:
      "Do you understand the risks of an unregulated cryptocurrency market?",
    answers: ["Yes", "No"],
  },
  {
    id: "question3",
    type: "radio",
    question: "Why do you want to use our tool?",
    answers: [
      "To find out what is suitable for me",
      "To find a good alternative to my current investments",
      "I want to own cryptocurrencies because I think they will be worth more in the future",
      "I don't want my capital not working for me",
    ],
  },
  {
    id: "question4",
    type: "radio",
    question: "What is DEX?",
    answers: [
      "Decentralized Exchange",
      "Destabilized Ex-coin",
      "Decentralized Expert",
    ],
  },
  {
    id: "question5",
    type: "radio",
    question: "What is stacking?",
    answers: [
      "Giving away a portion of your coins to improve the performance of the blockchain network. In return, a fixed income in the form of a given coin",
      "Placing your coins in a savings deposit",
      "Continuously adding to your investment to grow your capital",
    ],
  },
  {
    id: "question6",
    type: "radio",
    question: "Do you realize that this is not a financial advice?",
    answers: ["Yes", "No"],
  },
  {
    id: "question7",
    type: "radio",
    question: "How long have you been investing in cryptocurrencies?",
    answers: ["<1 month", ">2 months", ">1 year"],
  },
  {
    id: "question8",
    type: "radio",
    question: "What is stablecoin?",
    answers: [
      "A coin that tries to bring its value closer to the U.S. dollar",
      "A coin whose value will never go down",
      "A coin with a fixed value",
    ],
  },
  {
    id: "question9",
    type: "radio",
    question: "Are you aware that cryptocurrencies can have high volatility?",
    answers: ["Yes", "No"],
  },
  {
    id: "question10",
    type: "radio",
    question: "Would you be able to invest in a coin that has high volatility?",
    answers: ["Yes", "No"],
  },
  {
    id: "question11",
    type: "radio",
    question: "Is daily high volatility typical for cryptocurrencies?",
    answers: ["Yes", "No"],
  },
  {
    id: "question12",
    type: "radio",
    question: "Do you know what ETFs are?",
    answers: ["Yes", "No"],
  },
  {
    id: "question13",
    type: "radio",
    question: "Do you want to invest with leverage?",
    answers: ["Yes", "No"],
  },
  {
    id: "question14",
    type: "radio",
    question: "What is spread:",
    answers: [
      "The difference between the cost to buy and sell",
      "The difference between the opening price and the closing price",
      "The difference between the amount of cryptocurrencies in the market",
    ],
  },
  {
    id: "question15",
    type: "radio",
    question:
      "Would you like to invest in projects based on bigger, more well-known projects?",
    answers: ["Yes", "No"],
  },
  {
    id: "question16",
    type: "radio",
    question:
      "Would you be willing to risk capital by purchasing a cryptocurrency whose price may depend on a single post on a social networking site?",
    answers: ["Yes", "No"],
  },
  {
    id: "question17",
    type: "radio",
    question: "Do your investments threaten your financial stability?",
    answers: ["Yes", "No"],
  },
  {
    id: "question18",
    type: "radio",
    question:
      "Would you like to invest in a new project if its creators are anonymous?",
    answers: ["Yes", "No"],
  },
  {
    id: "question19",
    type: "radio",
    question: "Would you like to invest in an index?",
    answers: ["Yes", "No"],
  },
  {
    id: "question20",
    type: "radio",
    question:
      "Would you like to invest in a cryptocurrency with the possibility of passive income? (more risky)",
    answers: ["Yes", "No"],
  },
  {
    id: "question21",
    type: "radio",
    question: "Would you like to invest in ETFs?",
    answers: ["Yes", "No"],
  },
  {
    id: "question22",
    type: "radio",
    question: "Would you like to invest in the DEX protocols? (more risky)",
    answers: ["Yes", "No"],
  },
  {
    id: "question23",
    type: "radio",
    question:
      "Would you like to have your capital invested in put/call contracts?",
    answers: ["Yes", "No"],
  },
  {
    id: "question24",
    type: "radio",
    question: "Would you like to invest in major markets/cryptocurrencies?",
    answers: ["Yes", "No"],
  },
  {
    id: "question25",
    type: "radio",
    question:
      "Are you aware that the cryptocurrency market is not stable, and it is difficult to predict what may happen to it in the long term?",
    answers: ["Yes", "No"],
  },
  {
    id: "question26",
    type: "radio",
    question:
      "Would you like to invest in cryptocurrencies that have a Meme name (Dogecoin)",
    answers: ["Yes", "No"],
  },
  {
    id: "question27",
    type: "radio",
    question:
      "Would you like to invest in cryptocurrencies that have a large supply?",
    answers: ["Yes", "No"],
  },
  {
    id: "question28",
    type: "radio",
    question:
      "Would you like to invest in cryptocurrencies that have no useful function ?",
    answers: ["Yes", "No"],
  },
  {
    id: "question29",
    type: "radio",
    question:
      "Would you like to invest in cryptocurrencies that are not available on centralized markets?",
    answers: ["Yes", "No"],
  },
  {
    id: "question30",
    type: "radio",
    question:
      "If you lose a significant amount of your invested capital, you will not lose much of your financial stability ?",
    answers: ["Yes", "No"],
  },
];

export interface AutoFormState {
  question1: string;
  question2: string;
  question3: string;
  question4: string;
  question5: string;
  question6: string;
  question7: string;
  question8: string;
  question9: string;
  question10: string;
  question11: string;
  question12: string;
  question13: string;
  question14: string;
  question15: string;
  question16: string;
  question17: string;
  question18: string;
  question19: string;
  question20: string;
  question21: string;
  question22: string;
  question23: string;
  question24: string;
  question25: string;
  question26: string;
  question27: string;
  question28: string;
  question29: string;
  question30: string;
}

const initialValues = {
  question1: "",
  question2: "",
  question3: "",
  question4: "",
  question5: "",
  question6: "",
  question7: "",
  question8: "",
  question9: "",
  question10: "",
  question11: "",
  question12: "",
  question13: "",
  question14: "",
  question15: "",
  question16: "",
  question17: "",
  question18: "",
  question19: "",
  question20: "",
  question21: "",
  question22: "",
  question23: "",
  question24: "",
  question25: "",
  question26: "",
  question27: "",
  question28: "",
  question29: "",
  question30: "",
};

export const AutoForm: React.FC<AutoFormProps> = ({ handleSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validateOnChange={true}
    >
      {(formikProps) => (
        <Form>
          <VStack alignItems={"start"} spacing={"30px"}>
            {formTemplate.map((element, indexQuestion) => {
              return (
                <FormControl key={indexQuestion} as="fieldset" isRequired>
                  <FormLabel as="legend" fontWeight={"semibold"}>
                    {element.question}
                  </FormLabel>
                  <RadioGroup>
                    <VStack alignItems={"start"} spacing={"5px"}>
                      {element.answers.map((answer, index) => (
                        <Radio
                          key={index}
                          value={index.toString()}
                          name={element.id}
                          id={element.id}
                          onChange={formikProps.handleChange}
                        >
                          {answer}
                        </Radio>
                      ))}
                    </VStack>
                  </RadioGroup>
                </FormControl>
              );
            })}
          </VStack>
          <Button
            w={"180px"}
            h={"50px"}
            borderColor={"gray.300"}
            borderWidth={"1px"}
            bg={"blue.300"}
            color={"white"}
            isLoading={formikProps.isSubmitting}
            className="mt-8 mb-5 mx-auto cursor-pointer w-full h-14 bg-gradient-to-bl from-violet-600 to-violet-800 transform hover:scale-[1.01] transition-all duration-75 rounded-lg text-white flex justify-center items-center flex-col text-lg"
            type="submit"
          >
            Next
          </Button>
        </Form>
      )}
    </Formik>
  );
};
