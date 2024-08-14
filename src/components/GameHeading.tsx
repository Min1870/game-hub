import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenreId from "../hooks/useGenreId";
import useGenres from "../hooks/useGenres";
import usePlatformId from "../hooks/usePlatformId";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const genre = useGenreId(gameQuery.genreId);
  const platform = usePlatformId(gameQuery.platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
