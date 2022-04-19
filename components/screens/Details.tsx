import { useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import styled from "styled-components/native";
import { RootStackParamList } from "../../App";
import { RouteProp } from "@react-navigation/native";

export const IceCreamDetails = () => {
  const route = useRoute<RouteProp<RootStackParamList, "Details">>();
  const arrowLeft = require("../asset/arrow_left.png");
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { name, location, flavors } = route?.params;

  return (
    <Container key={name}>
      <IconContainer onPress={() => navigation.navigate("Hero")}>
        <Icon source={arrowLeft} />
      </IconContainer>
      <ContainerHeadline>{name}</ContainerHeadline>
      <ContainerSubHeadLine>{location}</ContainerSubHeadLine>

      {flavors.split(",") &&
        flavors.split(",").map((flavors: string) => (
          <ContainerFlavours>
            <FlavourDot>{"\u2022"}</FlavourDot>
            <FlavourHeadLine>{flavors}</FlavourHeadLine>
          </ContainerFlavours>
        ))}
    </Container>
  );
};

const Container = styled.View`
  padding: 20px;
  flex: 1;
  flex-direction: column;
  background-color: #d463f0;
`;

const ContainerHeadline = styled.Text`
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 900;

  padding-top: 20px;
  letter-spacing: 0.5px;
  line-height: 30px;
  color: #fff;
`;

const ContainerFlavours = styled.View`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 60px;
`;

const FlavourHeadLine = styled.Text`
  font-size: 15px;
  font-weight: 200;
  color: #fff;
  line-height: 20px;
  padding-bottom: 20px;
`;
const FlavourDot = styled.Text`
  color: #fff;
  font-size: 15px;
`;
const ContainerSubHeadLine = styled.Text`
  font-size: 15px;
  font-weight: 100;
  color: #fff;
  line-height: 20px;
  padding-bottom: 20px;
`;
const IconContainer = styled.TouchableOpacity`
  height: 48px;
  background: #fff;
  border-radius: 24px;
  padding-bottom: 20px;
  width: 48px;
`;
const Icon = styled.Image`
  position: absolute;
  top: 10px;
  left: 10px;
`;
