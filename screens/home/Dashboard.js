import {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Pressable, ScrollView, BackHandler, ImageBackground, Image} from "react-native";
import {list} from "../../services/apiServices";
import {Spinner, Footer} from '../../components'
import {Article, NewsHeading, NewsByCategory} from "./Index";
import {useNavigation} from "@react-navigation/native";
import colors from "../../styles/colors";

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
                <Text style={styles.trendingText}>Trending Now</Text>
                <ImageBackground style={{padding: 10}} source={require('../../assets/Backgrounds/purple-texture.jpg')} resizeMode="cover">
                    {trendingArticle &&
                        <View style={styles.trending}>
                            <Pressable android_ripple={{color: colors.LightBG, borderless: true}} onPress={onPress} style={({pressed}) => pressed && styles.pressedItem}>
                                <View style={styles.trendingContent}>
                                    {/*<Image style={styles.trendingImage} source={{uri: trendingArticle.picture}}></Image>*/}
                                    <Image style={styles.trendingImage} source={require('../../assets/Backgrounds/trending.jpg')} />
                                    <View style={styles.trendingInfo}>
                                        <Text style={styles.headingText}>{trendingArticle.heading}</Text>
                                        <Text style={styles.descriptionText}>{trendingArticle.description}</Text>
                                    </View>
                                </View>
                            </Pressable>
                        </View>
                    }
                </ImageBackground>

                <ImageBackground source={require('../../assets/Backgrounds/white-texture.jpg')} resizeMode="cover">
                    <View style={styles.latest}>
                        <Text style={styles.latestText}>The Latest News</Text>
                        <NewsHeading article={articles[articles.length - 1]} visibilityTrue={() => setVisible(true)}
                                     setArticleID={() => setArticleID(articles[articles.length - 1].id)}/>
                        <NewsHeading article={articles[articles.length - 2]} visibilityTrue={() => setVisible(true)}
                                     setArticleID={() => setArticleID(articles[articles.length - 2].id)}/>
                        <NewsHeading article={articles[articles.length - 3]} visibilityTrue={() => setVisible(true)}
                                     setArticleID={() => setArticleID(articles[articles.length - 3].id)}/>
                    </View>
                </ImageBackground>

                <NewsByCategory categoryIcon={"briefcase"} categoryColor={"#464646"} category={"Business"} navigation={navigation}/>
                <NewsByCategory categoryIcon={"volleyball"} categoryColor={"#278c1c"} category={"Sport"} navigation={navigation}/>
                <NewsByCategory categoryIcon={"school"} categoryColor={"#2972cb"} category={"Education"} navigation={navigation}/>
                <NewsByCategory categoryIcon={"airplane"} categoryColor={"#e17727"} category={"Travel"} navigation={navigation}/>
                <NewsByCategory categoryIcon={"tie"} categoryColor={"#39c9a5"} category={"Politics"} navigation={navigation}/>
                <NewsByCategory categoryIcon={"hospital"} categoryColor={"#c03131"} category={"Health"} navigation={navigation}/>
                <NewsByCategory categoryIcon={"popcorn"} categoryColor={"#c1d73f"} category={"Entertainment"} navigation={navigation}/>
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
    trending: {
        backgroundColor: colors.LightBGtp,
        borderRadius: 10
    },
    trendingContent: {
        padding: 10
    },
    trendingInfo: {
        width: '100%'
    },
    trendingText: {
        width: '100%',
        backgroundColor: colors.Secondary,
        textAlign: "center",
        fontSize: 25,
        fontWeight: "bold",
        paddingTop: 15,
        paddingBottom: 15,
        color: colors.LightText,
    },
    latest: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: '100%',
        padding: 10,
        paddingBottom: 80
    },
    latestText: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
        color: colors.SecondaryText,
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
    trendingImage: {
        height: 300,
        width: '100%',
        marginBottom: 10,
        borderWidth: 2,
        borderRadius: 5
    },
});