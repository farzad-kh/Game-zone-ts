import { Badge, HStack } from "@chakra-ui/react";
interface Props {
  metacritic: number;
}
const CriticScore = ({ metacritic }: Props) => {
  const newMetacritic =
    metacritic >= 75 ? "green" : metacritic >= 65 ? "orange" : "red";
  return (
    <HStack justifyContent={"end"} alignItems={"end"}>
      {metacritic !== null ? (
        <Badge
          width="max-content"
          padding={"2px 4px"}
          colorScheme={newMetacritic}
        >
          {metacritic}
        </Badge>
      ) : (
        <Badge width="max-content" padding={"2px 4px"}>
        N/A
        </Badge>
      )}
    </HStack>
  );
};

export default CriticScore;
