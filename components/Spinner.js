import {StyleSheet, View, Modal, ActivityIndicator, Text} from 'react-native';
import colors from "../styles/colors";

const Spinner = () => {

    return (
        <Modal visible={true}>
            <View style={styles.loading}>
                <ActivityIndicator color={colors.Primary} size='large' />
                <Text style={styles.loadingText}>Just a few seconds...</Text>
            </View>
        </Modal>
    );
}

export default Spinner;

const styles = StyleSheet.create({
    loading: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    loadingText: {
        fontSize: 15,
        color: colors.Primary,
        marginTop: 20
    },
});