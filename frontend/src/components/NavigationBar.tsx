import {
  Box,
  Button,
  CloseButton,
  Flex,
  Heading,
  HStack,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

import { truncateAddress } from "../helpers/truncateAddress";
import { useUserData } from "../stores/useUserData";
import Logo from "../assets/SailyWallet.png";
import { toast } from "react-toastify";

interface NavigationBarProps {}

export const NavigationBar: React.FC<NavigationBarProps> = () => {
  const userAddress = useUserData((state) => state.address);

  const logout = async () => {};
  const login = async () => {
    toast.info("Work in progress");
  };

  return (
    <Box w="100%">
      <Flex mx={"auto"} w="60%" py={6} alignItems="center" height={"120px"}>
        <Box>
          <Heading>
            <NavLink to={"/"}>
              <Image src={Logo} height={"50px"}></Image>
            </NavLink>
          </Heading>
        </Box>
        <Spacer />
        <HStack spacing="64px">
          <Button variant="link" textColor="gray.600">
            <NavLink to={"/about"}>About</NavLink>
          </Button>
          <Button variant="link" textColor="gray.600">
            <NavLink to={"/form"}>
              <Text color={"blue.300"}>Invest</Text>
            </NavLink>
          </Button>

          {useUserData.getState().isLogged ? (
            <Button variant={"outline"}>
              <HStack>
                <NavLink to={"/profile"}>
                  <Text>{truncateAddress(userAddress, 15)}</Text>
                </NavLink>
                <CloseButton onClick={logout} size="sm" />
              </HStack>
            </Button>
          ) : (
            <Button
              w={150}
              h={12}
              onClick={login}
              borderColor={"gray.200"}
              borderWidth={"1px"}
              bg={"white"}
            >
              Log in
            </Button>
          )}
        </HStack>
      </Flex>
    </Box>
  );
};
