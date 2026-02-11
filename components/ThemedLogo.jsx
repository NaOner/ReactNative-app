import {Image, StyleSheet, Text, useColorScheme, View} from 'react-native'
import { Colors } from "../constants/Colors"
import darkCat from "../assets/Czarny kot.jpeg"
import lightCat from "../assets/kot.png"

const ThemedLogo = ({style, ...props}) => {
    const colorScheme = useColorScheme()

    const logo = colorScheme === 'dark' ? lightCat : darkCat

    return (
        <Image source={logo} style={style} {...props}/>
    )
}

export default ThemedLogo

const styles = StyleSheet.create({
    img:{
        width: 200,
        height: 200,
    },
})

