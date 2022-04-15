import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { RootStackParamList } from "../../App";
import { Button, ButtonText } from "../asset/ui/Button";
import { Card } from "./Card";
import { v4 as uuid } from "uuid";
import { useRecoilValue } from "recoil";
import { icreamsData } from "../recoil/recoilAtom";
import { ScrollView } from "react-native-gesture-handler";

const windowWidth = Dimensions.get("window").width;

export const Hero = () => {
  const heroImage = require("../asset/hero_image.png");
  const IcreamValues = useRecoilValue(icreamsData);
  const id: string = uuid();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image source={heroImage} />
        <HeroText>Build Up your icecream universe</HeroText>

        {IcreamValues.length !== 0
          ? IcreamValues.map((icecream) => (
              <CardContainer key={id}>
                <Card {...icecream} />
              </CardContainer>
            ))
          : null}

        <ButtonContainer>
          <Button
            onPress={() => navigation.navigate("AddLocation")}
            background="#49dcff"
          >
            <ButtonText color="#fff">Add Location</ButtonText>
          </Button>
        </ButtonContainer>
      </ScrollView>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;
const CardContainer = styled.TouchableOpacity`
  padding: 10px 20px;
`;
const ButtonContainer = styled.View`
  padding: 10px 20px;
`;

const Image = styled.Image`
width: ${windowWidth}
height: 340px;
`;
const HeroText = styled.Text`
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-size: 25px;
  font-weight: bold;
  color: #fff;
  top: 140px;
  left: 20px;
  text-align: center;
  position: absolute;
  text-align: center;
  padding: 0px 20px;
`;
