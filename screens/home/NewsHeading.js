import {Pressable, StyleSheet, Text, View, Modal, Image} from "react-native";
import Spinner from "../../components/Spinner";
import colors from "../../styles/colors";
import {white} from "react-native-paper/src/styles/themes/v2/colors";

const NewsHeading = ({article, visibilityTrue, setArticleID}) => {

    const onPress = () => {
        setArticleID();
        visibilityTrue();
    }

    if (article == undefined) return <Spinner/>
    return (
        <View style={styles.latestNews}>
            <Pressable android_ripple={{color: colors.LightBG, borderless: true}} onPress={onPress}>
                <View style={styles.latestNewsContent}>
                    <Image style={styles.latestImage} source={{uri: article.picture}}></Image>
                    <View style={styles.latestNewsInfo}>
                        <Text style={styles.headingText}>{article.heading}</Text>
                        <Text style={styles.descriptionText}>{article.description}</Text>
                    </View>
                </View>
            </Pressable>
        </View>
    )
}

export default NewsHeading;

const styles = StyleSheet.create({
    latestNews: {
        marginBottom: 10,
        borderRadius: 10,
        backgroundColor: colors.LightBGtp
    },
    latestNewsContent: {
        margin: 10
    },
    latestNewsInfo: {
        width: '100%'
    },
    headingText: {
        color: colors.PrimaryText,
        fontSize: 15,
        fontWeight: "bold"
    },
    descriptionText: {
        color: colors.SecondaryText,
        fontSize: 12
    },
    latestImage: {
        height: 150,
        width: '100%',
        marginBottom: 10,
        borderWidth: 2,
        borderColor: colors.Primary
    },
});