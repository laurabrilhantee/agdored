import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import CadastroListagemScreen from "../screens/CadastroListagemScreen";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: "Tela Inicial" }}
        />

        <Stack.Screen 
          name="Cadastro" 
          component={CadastroListagemScreen} 
          options={{ title: "Cadastro e Lista" }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}