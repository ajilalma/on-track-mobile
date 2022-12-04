import { View, StyleSheet } from "react-native"
import { Button, Card } from "react-native-paper"
import AppLineChart from "../chart/AppLineChart"

const Progress = () => {
    return (
        <Card mode='outlined' style={styles.card}>
            <Card.Title title='Read'></Card.Title>
            <Card.Content>
                <AppLineChart/>
            </Card.Content>
            <Card.Actions
                style={styles.cardAction}>
                <Button
                    mode='text'
                    uppercase='false'
                    dark='true'>
                    I did it today!!
                </Button>
            </Card.Actions>
        </Card>
    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        flexGrow: 0,
        margin: 2
    },
    cardAction: {
        alignSelf: 'flex-end'
    }
})

export default Progress;