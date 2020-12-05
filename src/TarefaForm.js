import React, { useState } from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native'
import CheckBox from '@react-native-community/checkbox'
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
                    multiline={true} numberOfLines={3}
                    maxLength={200}
                    onChangeText={field('description')}
                    value={data.description} />

                <View style={styles.checkBox}>
                    <CheckBox value={data.done} 
                        onValueChange={field('done')} />
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
        flexDirection: 'row',
        padding: 5
    },
    button: {
        width: '95%'
    }
})