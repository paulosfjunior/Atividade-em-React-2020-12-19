import React, { useState } from 'react'
import { StyleSheet, View, Text, CheckBox, TextInput, TouchableOpacity } from 'react-native'
import { GlobalStyles } from './styles/GlobalStyles'
import Service from './service/tarefas'

export default function TarefaForm({ navigation }) {
    const [data, setData] = useState({ id: '', title: '', description: '', done: false })

    const field = (field) => {
        return (value) => setData({...data, [field]: value })
    }

    const addTask = () => {
        Service.add(data)
        navigation.navigate('Tarefas', { id: data.id })
    }

    return (
        <React.Fragment>
            <View style={GlobalStyles.container}>
                <TextInput placeholder="tarefa" 
                    style={GlobalStyles.input} 
                    onChangeText={field('title')}
                    value={data.title} />

                <TextInput placeholder="descricao" 
                    style={GlobalStyles.input} 
                    onChangeText={field('description')}
                    value={data.description} />

                <View style={styles.checkBox}>
                    <CheckBox value={data.done} 
                        onChange={(value) => console.log(value)} />
                    <Text>Finalizada ?</Text>
                </View>

                <TouchableOpacity style={[ GlobalStyles.btnDefault, styles.button ]}
                    onPress={addTask}>
                    <Text style={GlobalStyles.btnDefaultText}>Salvar</Text>
                </TouchableOpacity>
            </View>
        </React.Fragment>
    )
}

const styles = StyleSheet.create({
    checkBox: {
        flexDirection: 'row'
    },
    button: {
        width: '95%'
    }
})