import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Login from './src/Login';
import Registrar from './src/Registrar';
import Tarefas from './src/Tarefas'
import TarefaForm from './src/TarefaForm'
import { HeaderStyles } from './src/styles/AppStyles'

const Stack = createStackNavigator()

// disable Navigation header => headerMode="none"
const App: () => React$Node = () => {
  return (
    <>
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">  
                <Stack.Screen name="Login" 
                    component={Login} 
                    options={HeaderStyles.login} />

                <Stack.Screen name="Registrar" 
                    component={Registrar} 
                    options={HeaderStyles.registrar} />

                <Stack.Screen name="Tarefas" 
                    component={Tarefas} 
                    options={HeaderStyles.tarefas} />
                
                <Stack.Screen name="Formulario" 
                    component={TarefaForm} 
                    options={HeaderStyles.tarefaForm} />
                    
            </Stack.Navigator>
        </NavigationContainer>
    </>
  );
}

export default App
