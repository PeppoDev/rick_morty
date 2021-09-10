import styled, { css } from "styled-components";

interface IWithStatus {
  status: string;
}

export const Container = styled.div`
  max-width: 500px;
  margin-right: 2rem;
  margin-bottom: 2rem;
  display: flex;
  background-color: rgb(60, 62, 68);
  border-radius: 8px;
  /* -webkit-box-shadow: 0px 5px 12px 2px #26272b;
  box-shadow: 0px 5px 12px 2px #26272b; */
`;

export const Image = styled.img`
  height: auto;
  max-width: 50%;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;

export const SubContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem;
`;

export const Title = styled.h3`
  margin-right: 10px;
`;

export const SubTitle = styled.p``;

export const Link = styled.a`
  color: white;
`;

export const Circle = styled.div<IWithStatus>`
  height: 10px;
  width: 10px;
  border-radius: 50%;

  ${({ status }) => css`
    background-color: ${status === "Alive"
      ? "green"
      : status === "Dead"
      ? "red"
      : "black"};
  `}
`;
