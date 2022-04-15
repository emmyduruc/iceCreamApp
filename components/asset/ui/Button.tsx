import styled from "styled-components/native";

export const Button = styled.TouchableOpacity<{
  background: string;
}>`
  padding-bottom: 10px;
  border-radius: 20px;
  height: 48px;
  background-color: ${(props) => props.background};
`;

export const ButtonText = styled.Text<{ color: string }>`
  font-size: 15px;
  font-weight: 900;
  color: ${(props) => props.color};
  padding-top: 14px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  text-align: center;
`;
