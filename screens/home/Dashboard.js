import {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Pressable, ScrollView, BackHandler} from "react-native";
import {list} from "../../services/apiServices";
import {Spinner, Footer} from '../../components'
import {Article, NewsHeading, NewsByCategory} from "./Index";
import {useNavigation} from "@react-navigation/native";

const Dashboard = () => {
    const [articles, setArticles] = useState([]);
    const [trendingArticle, setTrendingArticle] = useState([]);
    const [loading, setLoading] = useState(false);
    const [visible, setVisible] = useState(false);
    const [articleID, setArticleID] = useState(0);

    const fetchArticles = async () => {
        setLoading(true);
        const response = await list("articles");
        if (response) setArticles(response);
        setLoading(false);
    }
    const fetchTrendingArticles = async () => {
        setLoading(true);
        const response = await list("articles/trending");
        if (response) setTrendingArticle(response);
        setLoading(false);
    }

    const onPress = () => {
        setArticleID(trendingArticle.id);
        setVisible(true);
    }

    useEffect(() => {
        fetchArticles()
    }, []);

    useEffect(() => {
        fetchTrendingArticles();
    }, []);

    const navigation = useNavigation();

    if (loading) return <Spinner/>
    return (
        <View style={styles.container}>
            <ScrollView>
                {trendingArticle && <View style={styles.trending}>
                    <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressedItem}>
                        <Text style={styles.description}>Trending Now:</Text>
                        <Text style={styles.naslov}> Naslov: {trendingArticle.heading}</Text>
                        <Text> Description: {trendingArticle.description}</Text>
                    </Pressable>
                </View>}

                <View style={styles.trending}>
                    <Text style={styles.description}>The Latest News</Text>
                    <NewsHeading article={articles[articles.length - 1]} visibilityTrue={() => setVisible(true)}
                                 setArticleID={() => setArticleID(articles[articles.length - 1].id)}/>
                    <NewsHeading article={articles[articles.length - 2]} visibilityTrue={() => setVisible(true)}
                                 setArticleID={() => setArticleID(articles[articles.length - 2].id)}/>
                    <NewsHeading article={articles[articles.length - 3]} visibilityTrue={() => setVisible(true)}
                                 setArticleID={() => setArticleID(articles[articles.length - 3].id)}/>
                </View>

                <NewsByCategory category={"Business"} navigation={navigation}/>
                <NewsByCategory category={"Sport"} navigation={navigation}/>
                <NewsByCategory category={"Education"} navigation={navigation}/>
                <NewsByCategory category={"Travel"} navigation={navigation}/>
                <NewsByCategory category={"Politics"} navigation={navigation}/>
                <NewsByCategory category={"Health"} navigation={navigation}/>
                <NewsByCategory category={"Entertainment"} navigation={navigation}/>
                <Footer/>
            </ScrollView>
            {visible && <Article visible={visible} articleID={articleID} onClose={() => setVisible(false)}/>}
        </View>


    )
}
export default Dashboard;


/* All categories:
    Sport,
    Business,
    Education,
    Travel,
    Entertainment,
    Politics,
    Health*/

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: '#2121e7',
        color: '#ffffff',
    },
    trending: {
        margin: 10,
        padding: 5,
        borderWidth: 1,
    },
    naslov: {
        fontWeight: 'bold',
    },
    description: {
        fontSize: 20,
    },
    newestNews: {
        margin: 10,
        padding: 5,
        borderWidth: 1,
    },
    pressedItem: {
        //#Irfan dodaj
    },
    categoryList: {
        margin: 10,
        padding: 5,
        borderWidth: 1,
    },
});