import styled from "styled-components";
import { Link as BaseLink } from "react-router-dom";

export const Link = styled(BaseLink)<{ isDone: boolean }>`
  text-decoration: none;
  padding: 10px;
  color: ${(props) => (props.isDone ? "green" : "rgb(153, 38, 47)")};
`;
