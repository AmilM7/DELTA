import {StyleSheet, Text, View} from 'react-native';
import colors  from "../styles/colors";

const Footer = () => {

    return (
        <>
            <View style={styles.footer}>
                <View style={styles.footerContent}>
                    <View>
                        <Text style={styles.footerLogo}>Trenutno.ba</Text>
                    </View>
                    <View style={styles.footerInfo}>
                        <Text style={styles.footerText}>Contact: +38761023923</Text>
                        <Text style={styles.footerText}>E-mail: info@trenutno.ba</Text>
                    </View>
                </View>
                <View style={styles.credit}>
                    <Text style={styles.footerText}> All rights reserved &copy; Trenutno.ba 2023</Text>
                </View>
            </View>

        </>
    );
}

export default Footer;

const styles = StyleSheet.create({
    footer: {
        width: '100%',
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: colors.DarkBG,
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    footerContent: {
        marginBottom: 10,
        width: '100%',
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    footerInfo: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    },
    footerLogo:{
        fontSize: 25,
        color: colors.Primary,
        fontWeight: "bold"
    },
    footerText: {
        fontSize: 12,
        color: colors.Secondary,
        paddingBottom: 10,
    },
    credit: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: '90%',
        borderTopColor: colors.Secondary,
        borderTopWidth: 1
    },

});