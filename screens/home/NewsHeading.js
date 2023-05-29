import {Pressable, StyleSheet, Text, View, Modal} from "react-native";
import Spinner from "../../components/Spinner";

const NewsHeading = ({article, visibilityTrue, setArticleID}) => {

    const onPress = () => {
        setArticleID();
        visibilityTrue();
    }

    if (article == undefined) return <Spinner/>
    return (
        <Pressable onPress={onPress}>
            <View style={styles.container}>
                <Text>{article.heading}</Text>
            </View>
        </Pressable>
    )
}

export default NewsHeading;

const styles = StyleSheet.create({
    container: {
        margin: 10,
        padding: 5,
        borderWidth: 1,
    },
});