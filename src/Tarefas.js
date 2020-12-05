import React, { useState, useLayoutEffect, useEffect } from 'react'
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import Service from './service/tarefas'

function AddButton({ onAdd }) {
    return (
        <View style={styles.btnAdd}>
            <TouchableOpacity onPress={onAdd}>
                <Text style={styles.btnAddText}>Adicionar</Text>
            </TouchableOpacity>
        </View>
    )
}

function DelButton({ onDelete }) {
    return (
        <TouchableOpacity style={styles.btnRemove} onPress={onDelete}>
            <Text style={styles.btnRemoveText}>Remover</Text>
        </TouchableOpacity>
    )
}

function SeparatorItem() {
    return (
        <View style={styles.separator}></View>
    )
}

function TaskItem({ data, delAction }) {
    const doneHStyle = data.done ? styles.itemTextHeaderDone : styles.itemTextHeader
    const doneStyle = data.done ? styles.itemDescriptionDone : styles.itemDescription

    return (
        <Swipeable renderRightActions={() => (<DelButton onDelete={delAction} />) }>
            <View style={styles.item}>
                <Text style={doneHStyle}>{data.title}</Text>
                <Text style={doneStyle}>{data.description}</Text>
            </View>
        </Swipeable>
    )
}

export default function Tarefas({ navigation, route }) {
    const addAction = () => navigation.navigate('Formulario')
    const [list, setList] = useState(Service.get())
    const [removed, setRemoved] = useState('')

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => null,
            headerRight: () => <AddButton onAdd={addAction} />
        })
    }, [navigation])

    useEffect(() => setList(Service.get()), [route, removed])

    // remove item da lista e notifica mudanca na lista
    const delAction = (id) => {
        return () => {
            Service.remove(id)
            setRemoved(id)
        }
    }

    return (
        <React.Fragment>
            <FlatList 
                data={list}
                keyExtractor={item => item.id}
                renderItem={ ({ item }) => <TaskItem data={item} delAction={delAction(item.id)} />}
                ItemSeparatorComponent={() => <SeparatorItem />}
            />
        </React.Fragment>
    )
}

const styles = StyleSheet.create({
    separator: {
        borderBottomWidth: 1,
        borderColor: '#dedede'
    },
    item: {
        padding: 10
    },
    itemTextHeader: {

    },
    itemTextHeaderDone: {
        color: '#9CA3AF',
    },
    itemDescription: {

    },
    itemDescriptionDone: {
        textDecorationLine: 'line-through',
        color: '#9CA3AF'
    },
    btnAdd: {
        borderRadius: 25,
        marginRight: 10,
        padding: 10,
        textAlign: 'center',
        backgroundColor: '#fee'
    },
    btnAddText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#065F46'
    },
    btnRemove: {
        backgroundColor: 'red',
        paddingTop: 10,
        paddingBottom: 10
    },
    btnRemoveText: {
        color: '#fff',
        fontSize: 12,
        padding: 10
    }

})
