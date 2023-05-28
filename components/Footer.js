import {Image, StyleSheet, Text, View} from 'react-native';
import {white} from "react-native-paper/src/styles/themes/v2/colors";

const Footer = () => {

    return (
        <View style={styles.footer}>
            <View>
                <View  style={styles.iconsView}>
                    <Image
                        style={styles.icons}
                        source={require('../assets/SocialMedia/icons8-facebook-50.png')}
                    />
                    <Image
                        style={styles.icons}
                        source={require('../assets/SocialMedia/icons8-instagram-48.png')}
                    />
                    <Image
                        style={styles.icons}
                        source={require('../assets/SocialMedia/icons8-twitter-48.png')}
                    />
                </View>
                <Text style={styles.textFooter}>Number: 38761023923</Text>
                <Text style={styles.textFooter}>E-mail: contact@trenutno.ba</Text>
            </View>
            <View>
                <Text style={styles.footerText}>Trenutno.ba</Text>
            </View>

        </View>
    );
}

export default Footer;

const styles = StyleSheet.create({
    footer: {
        height: 130,
        width: '100%',
        backgroundColor:'#4848de',
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    icons: {
        padding: 2,
        height: 30,
        width: 30,
    },
    iconsView: {
        marginTop: 15,
        width: 100,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    textFooter: {
        fontSize: 15,
        color: white,
        padding: 5,
    },
    footerText:{
        fontSize: 20,
        color: white,
        fontWeight: "bold",
        margin:15,
    },
});