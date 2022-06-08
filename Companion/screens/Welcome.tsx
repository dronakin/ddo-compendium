import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

import { Container } from "../components/shared";
import { colors } from "../components/colors";

const WelcomeContainer = styled(Container)`
    background-color: ${colors.graydark};
    justify-content: space-between;
    height: 100%;
    width: 100%;
`;

const TopSection = styled.View`
    width: 100%;
    flex: 1;
    max-height: 55%;
`;

const BottomSection = styled.View`
    width: 100%;
    padding: 25px;
    flex: 1;
`;

export const Welcome : FunctionComponent = () => {
    return (
        <>
            <StatusBar style="light" />
            <WelcomeContainer>
                <TopSection></TopSection>
                <BottomSection></BottomSection>
            </WelcomeContainer>
        </>
    );
};

