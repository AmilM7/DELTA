import {Image, Pressable, StyleSheet, Text, View} from "react-native";
import {list} from "../../services/apiServices";
import React, {useEffect, useState} from "react";
import Spinner from "../../components/Spinner";
import Article from "./Article";
import colors from "../../styles/colors";
import {IconButton} from "react-native-paper";


const NewsByCategory = ({navigation, category, categoryColor, categoryIcon}) => {

    const [articlesByCategory, setArticlesByCategory] = useState([]);
    const [loading, setLoading] = useState(false);

    const [visible, setVisible] = useState(false);
    const [articleID, setArticleID] = useState(0);


    const fetchArticlesByCategory = async () => {
        setLoading(true);
        const response = await list(`articles/category/${category}`);
        if (response) setArticlesByCategory(response);
        setLoading(false);
    }

    useEffect(() => {
        fetchArticlesByCategory();
    }, []);

    const isArticleOkay = () => {
        return articlesByCategory && articlesByCategory.length > 0;
    }

    const onPress = () => {
        navigation.navigate(category)
    }

    const onPressArticle = (articleID) => {
        setArticleID(articleID);
        setVisible(true);
    }

    if (loading) return <Spinner/>
    return (
        <View style={styles.category}>
            <View style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                width: '100%',
                backgroundColor: categoryColor
            }}>
                <IconButton iconColor={colors.LightText} icon={categoryIcon} />
                <Text style={styles.headingText}>{category}</Text>
            </View>

            <View style={styles.categoryContent}>
                <View style={styles.categoryArticle}>
                    <Pressable android_ripple={{color: colors.BG, borderless: true}} onPress={() => onPressArticle(articlesByCategory[articlesByCategory.length - 1].id)}>
                        <View style={styles.categoryArticleInfo}>
                            <Image style={styles.articleImage} source={require('../../assets/Backgrounds/news.jpg')} />
                            {isArticleOkay() && <Text style={styles.categoryArticleHeading}>{articlesByCategory[articlesByCategory.length - 1].heading}</Text>}
                        </View>
                    </Pressable>
                </View>

                <View style={styles.categoryArticle}>
                    <Pressable android_ripple={{color: colors.BG, borderless: true}} onPress={() => onPressArticle(articlesByCategory[articlesByCategory.length - 2].id)}>
                        <View style={styles.categoryArticleInfo}>
                            <Image style={styles.articleImage} source={require('../../assets/Backgrounds/news-2.jpg')} />
                            {isArticleOkay() && <Text style={styles.categoryArticleHeading}>{articlesByCategory[articlesByCategory.length - 2].heading}</Text>}
                        </View>
                    </Pressable>
                </View>

                <View style={styles.categoryArticle}>
                    <Pressable android_ripple={{color: colors.BG, borderless: true}} onPress={() => onPressArticle(articlesByCategory[articlesByCategory.length - 3].id)}>
                        <View style={styles.categoryArticleInfo}>
                            <Image style={styles.articleImage} source={require('../../assets/Backgrounds/news-3.jpg')} />
                            {isArticleOkay() && <Text style={styles.categoryArticleHeading}>{articlesByCategory[articlesByCategory.length - 3].heading}</Text>}
                        </View>
                    </Pressable>
                </View>

                <View style={styles.seeMore}>
                    <Pressable android_ripple={{color: colors.LightBG, borderless: true}} onPress={onPress}>
                        <Text style={styles.seeMoreText}>See more</Text>
                    </Pressable>
                    {visible && <Article visible={visible} articleID={articleID} onClose={() => setVisible(false)}/>}
                </View>
            </View>
        </View>
    )

}

export default NewsByCategory;

const styles = StyleSheet.create({
    category: {
        width: '100%',
        paddingBottom: 80,
        backgroundColor: colors.BG
    },
    headingText: {
        fontWeight: "bold",
        fontSize: 15,
        color: colors.LightText,
    },
    categoryContent: {
        padding: 10,
        backgroundColor: colors.BG
    },
    categoryArticle: {
        padding: 10,
        backgroundColor: colors.LightBG,
        borderRadius: 10,
        marginBottom: 10
    },
    categoryArticleInfo: {
        width: '70%',
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    categoryArticleHeading: {
        fontSize: 15,
    },
    articleImage: {
        width: 100,
        height: 100,
        borderRadius: 5,
        marginRight: 10
    },
    seeMore: {
        width: '100%',
        backgroundColor: colors.Primary,
        padding: 10,
        borderRadius: 5
    },
    seeMoreText: {
        textAlign: "center",
        fontSize: 15,
        color: colors.LightText,
    }

});