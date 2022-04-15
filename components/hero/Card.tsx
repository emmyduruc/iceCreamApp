import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import styled from "styled-components/native";
import { RootStackParamList } from "../../App";

type IceCreamObject = {
  name: string;
  location: string;
  flavours: string;
};

export const Card = ({ name, location, flavours }: IceCreamObject) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <Container
      onPress={() =>
        navigation.navigate("Details", {
          name: name,
          location: location,
          flavors: flavours,
        })
      }
    >
      <ContainerHeadline>{name}</ContainerHeadline>
      <ContainerSubHeadLine>{location}</ContainerSubHeadLine>
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  flex: 1;
  border-radius: 20px;
  padding: 20px;
  background-color: #d463f0;
`;

const ContainerHeadline = styled.Text`
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 900;
  letter-spacing: 0.5px;
  line-height: 30px;
  color: #fff;
`;

const ContainerSubHeadLine = styled.Text`
  font-size: 15px;
  font-weight: 100;
  color: #fff;
  line-height: 20px;
`;
