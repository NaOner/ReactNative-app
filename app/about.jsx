import {StyleSheet, Text, useColorScheme, View} from "react-native";
import { Link } from 'expo-router'


import ThemedView from "../components/ThemedView"
import ThemedText from "../components/ThemedText";
import Spacer from "../components/Spacer";



const About = () => {
    return (
        <ThemedView style={styles.container}>
            <ThemedText style={styles.title}>About Page</ThemedText>
            <Spacer />
            <Link href="/" style={styles.link}><ThemedText>Back to Home Page</ThemedText></Link>
        </ThemedView>
    )
}

export default About

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    link: {
        marginVertical: 10,
        borderBottomWidth: 1
    }
})