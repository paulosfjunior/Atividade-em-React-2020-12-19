import React, { useState } from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native'
import { GlobalStyles } from './styles/GlobalStyles'

export default function Registrar({ navigation }) {
    const [data, setData] = useState({ nome: '', email: '', senha: '', confirmaSenha: '' })

    return (
        <React.Fragment>
            <View style={GlobalStyles.container}>
                {/* <Text style={styles.tituloText}>Registre-se</Text> */}

                <TextInput placeholder="Nome" 
                    style={GlobalStyles.input} />

                <TextInput placeholder="E-mail"
                    style={GlobalStyles.input} keyboardType="email-address" />

                <TextInput placeholder="Senha" 
                    style={GlobalStyles.input} secureTextEntry={true} />

                <TextInput placeholder="Confirmar senha"
                    style={GlobalStyles.input} secureTextEntry={true} />

                <TouchableOpacity style={styles.btnRegistrar}>
                    <Text style={styles.btnRegistrarText}>Registrar</Text>
                </TouchableOpacity>

                {/* <View style={styles.buttons}>
                    <TouchableOpacity style={styles.btnCancelar} onPress={() => navigation.goBack()}>
                        <Text style={styles.btnCancelarText}>Cancelar</Text>
                    </TouchableOpacity>
                </View> */}
            </View>
        </React.Fragment>
    )
}

const styles = StyleSheet.create({
    tituloText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        padding: 20
    },
    // buttons: {
    //     marginTop: 15
    // },
    btnRegistrar: {
        backgroundColor: '#059669',
        width: '90%',
        alignItems: 'center',
        padding: 10,
        marginTop: 20,
        borderRadius: 5
    },
    btnRegistrarText: {
        fontSize: 14,
        fontWeight: '500',
        color: '#D1FAE5'
    },
    // btnCancelar: {
    //     backgroundColor: '#059669',
    //     width: '40%',
    //     alignItems: 'center',
    //     padding: 10,
    //     marginTop: 10,
    //     borderRadius: 5
    // },
    // btnCancelarText: {
    //     fontSize: 14,
    //     fontWeight: '500',
    //     color: '#D1FAE5'
    // }
})
