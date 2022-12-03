import { Appbar } from "react-native-paper";

const AppHeader = () => {
    return <Appbar.Header
        style={{
            width: '100%'
        }}
    >
        <Appbar.Content title="On Track" />
        <Appbar.Action icon="dots-vertical" onPress={() => {}} />
    </Appbar.Header>
}

export default AppHeader;