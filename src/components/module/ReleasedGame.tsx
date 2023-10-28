import React from "react";

import { Badge,TagLabel,Text } from "@chakra-ui/react";

interface Props {
  released: string;
}

const ReleasedGame = ({ released }: Props) => {
  return (
    <>
      <Text marginTop={1}  color={"gray.400"} width={"max-content"} fontWeight={"semibold"} fontSize={"14"}>
        {released?.slice(0, 4)}
      </Text>
    </>
  );
};

export default ReleasedGame;
