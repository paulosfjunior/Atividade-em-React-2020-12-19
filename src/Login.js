import React, { useState } from 'react'

import { View, Text, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import { GlobalStyles } from './styles/GlobalStyles'
import { LoginStyles } from './LoginStyles'

export default function Login({ navigation }) {
    const [credencial, setCredencial] = useState({ email:'', password: '' })

    return (
        <React.Fragment>
            <StatusBar barStyle="dark-content" />
            <View style={GlobalStyles.container}>
                {/* <View style={styles.titulo}>
                    <Text style={styles.tituloText}>Minhas Tarefas</Text>
                </View> */}

                <View style={LoginStyles.content}>
                    <TextInput placeholder="email" 
                        style={GlobalStyles.input} />

                    <TextInput placeholder="senha" 
                        style={GlobalStyles.input}
                        secureTextEntry={true} />

                    <TouchableOpacity style={LoginStyles.btnAcessar}
                        onPress={() => navigation.navigate('Tarefas')}>
                        <Text style={LoginStyles.btnAcessarText}>Acessar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={LoginStyles.btnRegistrar}
                        onPress={() => navigation.navigate('Registrar')}>
                        <Text style={LoginStyles.btnRegistrarText}>Registrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </React.Fragment>
    )
}
