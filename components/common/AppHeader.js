import { StyleSheet } from "react-native";
import { Appbar } from "react-native-paper";

const AppHeader = () => {
    return <Appbar.Header
        style={styles.container} >
        <Appbar.Content
            title="HaBits"
            subtitle='Track it till you make it'
            titleStyle={styles.headingText} />
        <Appbar.Action icon="plus" onPress={() => {}} />
        <Appbar.Action icon="dots-vertical" onPress={() => {}} />
    </Appbar.Header>
}

const styles = StyleSheet.create({
    container: {
        width: '100%'
    },
    headingText: {
        fontWeight: 'bold'
    }
})

export default AppHeader;