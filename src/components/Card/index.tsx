import React from "react";

import {
  Container,
  SubContainer,
  Image,
  Title,
  SubTitle,
  Link,
  Circle,
} from "./styles";

interface IProps {
  data: {
    name: string;
    status: "Alive" | "unknown" | "Dead";
    species: "Alien" | "Human";
    origin: {
      url: string;
      name: string;
    };
    location: {
      name: string;
      url: string;
    };
    image: string;
  };
}

const Card: React.FC<IProps> = ({ data }) => {
  console.log(data);
  return (
    <Container>
      <Image src={data.image} />
      <SubContainer>
        <span
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Title>{data.name}</Title>
          <Circle status={data.status} />
        </span>

        <SubTitle>{`${data.species} - ${data.status}`}</SubTitle>
        <SubTitle>
          Origem: <Link href={data.origin.url}>{data.origin.name}</Link>
        </SubTitle>
        <SubTitle>
          Localização:{" "}
          <Link href={data.location.url}>{data.location.name}</Link>
        </SubTitle>
      </SubContainer>
    </Container>
  );
};

export default Card;
