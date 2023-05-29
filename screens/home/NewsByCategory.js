import {Pressable, StyleSheet, Text, View, Modal} from "react-native";
import {list} from "../../services/apiServices";
import {useEffect, useState} from "react";
import Spinner from "../../components/Spinner";
import Article from "./Article";


const NewsByCategory = ({navigation, category}) => {

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
        <View style={styles.container}>
            <Text style={styles.heading}>{category}</Text>
            <Pressable onPress={() => onPressArticle(articlesByCategory[articlesByCategory.length - 1].id)}>
                <View style={styles.new}>
                    {isArticleOkay() && <Text>{articlesByCategory[articlesByCategory.length - 1].heading}</Text>}
                </View>
            </Pressable>
            <Pressable onPress={() => onPressArticle(articlesByCategory[articlesByCategory.length - 2].id)}>
                <View style={styles.new}>
                    {isArticleOkay() && <Text>{articlesByCategory[articlesByCategory.length - 2].heading}</Text>}
                </View>
            </Pressable>
            <Pressable onPress={() => onPressArticle(articlesByCategory[articlesByCategory.length - 3].id)}>
                <View style={styles.new}>
                    {isArticleOkay() && <Text>{articlesByCategory[articlesByCategory.length - 3].heading}</Text>}
                </View>
            </Pressable>

            <Pressable onPress={onPress}>
                <View style={styles.findMore}>
                    <Text>Find out more</Text>
                </View>
            </Pressable>
            {visible && <Article visible={visible} articleID={articleID} onClose={() => setVisible(false)}/>}
        </View>
    )

}

export default NewsByCategory;

const styles = StyleSheet.create({
    container: {
        margin: 10,
        padding: 5,
        borderWidth: 1,
    },
    heading: {
        fontWeight: "bold",
    },
    new: {
        margin: 3,
        padding: 3,
        borderWidth: 1,
    },
    findMore: {
        alignSelf: "center",
        marginHorizontal: 15,
        marginVertical: 10,
        paddingHorizontal: 20,
        paddingVertical: 7,
        margin: 5,
        borderWidth: 1,
        fontSize: 15,
    }
});