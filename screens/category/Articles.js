import {StyleSheet, View, Text, Pressable} from 'react-native';
import {useEffect, useState} from 'react';
import {list} from "../../services/apiServices";
import Article from "../home/Article";

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
        <View>
            <Pressable onPress={onPress}>
                <View style={styles.container}>
                    <Text>Ovdje je svaki posebno</Text>
                    <Text>{article.heading /*Imas ovdje i ostale (description,id..) */}</Text>
                </View>
            </Pressable>
            {visible && <Article visible={visible} articleID={articleID.articleID} onClose={() => setVisible(false)}/>}
        </View>
    );
}

export default Articles;

const styles = StyleSheet.create({
    container: {
        margin: 10,
        padding: 5,
        borderWidth: 1,
    }
});