import React from "react";
import axios from "axios";
import { Container } from "./styles";
import Card from "../Card";

const List: React.FC = () => {
  const [page, setPage] = React.useState(1);
  const [data, setData] = React.useState([]);

  const getChar = React.useCallback(async () => {
    try {
      const response = await axios.get(
        "https://rickandmortyapi.com/api/character/",
        {
          params: {
            page,
          },
        }
      );

      console.log(response.data);
      setData(response.data.results);

      // TODO: add toastfy
    } catch (error) {
      console.log(error);
    }
  }, [page]);

  React.useEffect(() => {
    getChar();
  }, [getChar]);

  return (
    <Container>
      {data.map((result) => (
        <Card data={result} />
      ))}
    </Container>
  );
};

export default List;
