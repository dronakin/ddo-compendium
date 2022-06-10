import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

import { Container } from "../components/shared";
import { colors } from "../components/colors";
import { SectionList, View, StyleSheet } from "react-native";

const WelcomeContainer = styled(Container)`
    background-color: ${colors.graydark};
    justify-content: space-between;
    height: 100%;
    width: 100%;
    flex: 1;
    max-height: 55%;
    flex-Directions: column;
    align-Items: center;
`;

const WelcomeList = styled.View`
    
`;

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    sectionHeader: {
      paddingTop: 2,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 2,
      fontSize: 14,
      fontWeight: 'bold',
      backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  })


export const Welcome = () => {
    return (
        <>
            <View style={styles.container}>
              <SectionList 
                sections={[
                    {data: ['Classes', 'Races', 'Feats', 'Items', 'Spells',]}
                ]}
              />
            </View>
        </>
    );
};

