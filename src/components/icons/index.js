import React from 'react'
import Ionic from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialComunity from 'react-native-vector-icons/MaterialCommunityIcons'

export const IconeMaterialComunity = (props) => (
  <MaterialComunity
    color={props.color}
    style={props.style}
    name={props.name}
    size={props.size}
    onPress={props.onPress}
  />
)

export const IconeMaterial = (props) => (
  <MaterialIcons
    color={props.color}
    style={props.style}
    name={props.name}
    size={props.size}
  />
)

export const IconeIonic = (props) => (
  <Ionic
    color={props.color}
    style={props.style}
    name={props.name}
    size={props.size}
  />
)