import { Text } from "@chakra-ui/react";
import React from "react";

export const BoldText: React.FC<{}> = (props) => {
  return (
    <Text display={"inline"} fontWeight={"bold"} color={"blue.600"}>
      {" "}
      {props.children}{" "}
    </Text>
  );
};
