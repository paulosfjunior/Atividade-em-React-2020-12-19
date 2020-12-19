import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import styles from './TaskStyles'
import TaskItem from './TaskItem'
import Service from '../service/tarefas'

const SeparatorItem = () => (<View style={styles.separator}></View>)

const EmptyList = () => (
    <View>
        <Text>Você não possui tarefas no momento.</Text>
    </View>
)

export default function TaskList({ navigation, route }) {
    const [loaded, setLoaded] = useState(false)
    const [list, setList] = useState(Service.get())
    const [removed, setRemoved] = useState('')

    useEffect(() => {
        setLoaded(false)
        Service.loadTasks()
        setList(Service.get())
        setLoaded(true)
    }, [route, removed, loaded])

    // remove item da lista e notifica mudanca na lista
    const delAction = (id) => {
        return () => {
            Service.remove(id)
            setRemoved(id)
        }
    }

    console.log('Tasks:', list)
    const child = (list.size < 1) ? <EmptyList /> : <FlatList 
        data={list}
        keyExtractor={item => item.id}
        renderItem={ ({ item }) => <TaskItem data={item} delAction={delAction(item.id)} />}
        ItemSeparatorComponent={() => <SeparatorItem />}
        />

    return child
}
