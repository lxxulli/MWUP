import styled from "styled-components";
import { mainColors } from "../pages/style/GlobalStyled";

const SErrorMessage = styled.div`
  color: ${mainColors.pointColor};
  margin-bottom: 11px;
`;

export const ErrorMessage = ({ text }) => {
  return <SErrorMessage>{text}</SErrorMessage>;
};
