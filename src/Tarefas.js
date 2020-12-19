import React, { useLayoutEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TaskList from './Tarefas/TaskList'
import TarefaForm from './TarefaForm'
import { StyleSheet, Image } from 'react-native'

const Tab = createBottomTabNavigator()

const bottomBarOptions = {
    activeTintColor: '#047857'
}

const btnStyles = StyleSheet.create({
    btn: {
        width: 28,
        height: 28
    }
})

const GearsIcon = () => (<Image source={require('./assets/gears.png')} style={btnStyles.btn} />)
const AddIcon = () => (<Image source={require('./assets/add.png')} style={btnStyles.btn} />)

const options = ({ route }) => {
    return {
        tabBarIcon: () => {
            if (route.name == 'Adicionar') return <AddIcon />
            return <GearsIcon />
        }
    }
}

export default function Tasks({ navigation }) {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => null,
            headerRight: () => null
        })
    }, [navigation])

    return (
        <Tab.Navigator 
            tabBarOptions={bottomBarOptions} 
            screenOptions={options}>
            <Tab.Screen name="Tarefas" component={TaskList} />
            <Tab.Screen name="Adicionar" component={TarefaForm} />
        </Tab.Navigator>
    )
}
