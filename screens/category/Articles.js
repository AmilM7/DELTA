import {StyleSheet, View, Text, Pressable, Image} from 'react-native';
import {useEffect, useState} from 'react';
import {list} from "../../services/apiServices";
import Article from "../home/Article";
import colors from "../../styles/colors";

const Articles = (articleID) => {
    const [article, setArticle] = useState({id: articleID});
    const [visible, setVisible] = useState(false);

    const fetchArticle = async () => {
        const response = await list(`articles/${articleID.articleID}`);
        if (response) setArticle(response);
    }

    useEffect(() => {
        fetchArticle();
    }, []);

    const onPress = () => {
        setVisible(true);
    }

    return (
        <View style={styles.article}>
            <Pressable android_ripple={{color: colors.BG, borderless: true}} onPress={onPress}>
                <View style={styles.articleInfo}>
                    <Image style={styles.articleImage} source={require('../../assets/Backgrounds/news.jpg')} />
                    <View style={styles.articleText}>
                        <Text style={styles.headingText}>{article.heading}</Text>
                        <Text style={styles.descriptionText}>{article.description}</Text>
                    </View>
                </View>
            </Pressable>
            {visible && <Article visible={visible} articleID={articleID.articleID} onClose={() => setVisible(false)}/>}
        </View>
    );
}

export default Articles;

const styles = StyleSheet.create({
    article: {
        margin: 10,
        backgroundColor: colors.LightBGtp,
        borderRadius: 10,
    },
    articleInfo: {
        display: "flex",
        flexDirection: "row",
        padding: 10,
    },
    articleText: {
        width: '70%',
        height: 100,
        overflow: "hidden"

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
    articleImage: {
        width: 100,
        height: 130,
        borderRadius: 5,
        marginRight: 10
    },
});