import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import theme from "../../global/styles/theme";

export const Container = styled(RectButton)`
    height: 48px;
    width: 48px;
    justify-content: center;
    align-items: center;
    background-color: ${theme.COLORS.PRIMARY};
    border-radius: 8px;

`