import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import styles from './TaskStyles'
import TaskItem from './TaskItem'
import Service from '../service/tarefas'

const SeparatorItem = () => (<View style={styles.separator}></View>)

export default function TaskList({ navigation, route }) {
    const [list, setList] = useState(Service.get())
    const [removed, setRemoved] = useState('')

    useEffect(() => setList(Service.get()), [route, removed])

    // remove item da lista e notifica mudanca na lista
    const delAction = (id) => {
        return () => {
            Service.remove(id)
            setRemoved(id)
        }
    }

    return (
        <FlatList 
            data={list}
            keyExtractor={item => item.id}
            renderItem={ ({ item }) => <TaskItem data={item} delAction={delAction(item.id)} />}
            ItemSeparatorComponent={() => <SeparatorItem />}
        />
    )
}
