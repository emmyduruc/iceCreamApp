import styled from "styled-components/native";
import { Button, ButtonText } from "../asset/ui/Button";
import { useRecoilState } from "recoil";
import { getIceCreamAtom, iceCreamAtom } from "../recoil/recoilAtom";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";

export const AddLocation = () => {
  const [iceCream, setIceCreams] = useRecoilState(iceCreamAtom);

  const [iceCreamData, setIceCreamData] = useRecoilState(getIceCreamAtom);

  const arrowLeft = require("../asset/arrow_left.png");

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const handleSubmit = (inputName: string, event: string) => {
    setIceCreams({
      ...iceCream,
      [inputName]: event,
    });
  };

  const handlePress = () => {
    setIceCreamData([...iceCreamData, iceCream]);
  };

  return (
    <Container>
      <IconContainer onPress={() => navigation.navigate("Hero")}>
        <Icon source={arrowLeft} />
      </IconContainer>

      <TextInput
        value={iceCream.name}
        onChangeText={(event) => handleSubmit("name", event)}
        style={{
          borderBottomColor: "#ffff",
          borderBottomWidth: 1,
        }}
        placeholder="Name"
      />

      <TextInput
        value={iceCream.location}
        onChangeText={(event) => handleSubmit("location", event)}
        style={{
          borderBottomColor: "#ffff",
          borderBottomWidth: 1,
        }}
        placeholder="Location"
      />
      <TextInput
        value={iceCream.flavours}
        onChangeText={(event) => handleSubmit("flavours", event)}
        style={{
          borderBottomColor: "#ffff",
          borderBottomWidth: 1,
        }}
        placeholder="Flavour(comma seperated)"
      />
      <ButtonContainer>
        <Button onPress={handlePress} background="#fff">
          <ButtonText color="#d463f0">Save</ButtonText>
        </Button>
      </ButtonContainer>
    </Container>
  );
};
const ButtonContainer = styled.View`
  position: relative;
  margin-top: auto;
  padding-bottom: 20px;
`;

const Container = styled.View`
  padding: 20px;
  flex: 1;
  flex-direction: column;
  background-color: #d463f0;
`;

const TextInput = styled.TextInput.attrs({
  placeholderTextColor: "white",
  fontSize: "15px",
  paddingTop: "7%",
  fontWeight: "bold",
})`
  color: #fff;
  background-color: #d463f0;
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
