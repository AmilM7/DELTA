import {list} from "../../services/apiServices";
import {StyleSheet, Text, View, Modal, ScrollView, BackHandler, Image, ImageBackground} from "react-native";
import {Appbar} from "react-native-paper";
import {useEffect, useState} from "react";
import {Spinner, Footer} from '../../components'
import colors from "../../styles/colors";

const Article = ({articleID, onClose}) => {
    const [article, setArticle] = useState({id: articleID});
    const [loading, setLoading] = useState(false);

    const fetchArticle = async () => {
        setLoading(true);
        const response = await list(`articles/${articleID}`);
        if (response) setArticle(response);
        setLoading(false);
    }

    useEffect(() => {
        fetchArticle();
    }, []);


    const closeModal = () => {
        onClose();
    };

    /*useEffect(() => {
        const backAction = () => {
            console.log("hello");
            console.log("hello");
            closeModal(); // Call the onClose function to close the Modal
            return true; // Prevent default behavior (exit the app)
        };

        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            backAction
        );

        return () => backHandler.remove(); // Cleanup the event listener on component unmount
    }, [closeModal]);*/

    if (loading) return <Spinner/>
    return (
        <Modal>
            <ScrollView>
            <Appbar.Header style={styles.header} statusBarHeight={10} mode={'center-aligned'}>
                <Appbar.BackAction color={colors.Secondary} onPress={closeModal}/>
                <Appbar.Content color={colors.Secondary} title={article.category}/>
            </Appbar.Header>
                <ImageBackground source={require('../../assets/Backgrounds/purple-texture.jpg')} resizeMode="cover">
                    <View style={styles.article}>
                        <Image style={styles.articleImage} source={require('../../assets/Backgrounds/news.jpg')} />
                        <View style={styles.articleText}>
                            <Text style={styles.categoryText}>Category: {article.category}</Text>
                            <View style={styles.articleTitle}>
                                <Text style={styles.headingText}>{article.heading}</Text>
                                <Text style={styles.descriptionText}>{article.description}</Text>
                            </View>
                            <Text style={styles.contentText}>{article.content}</Text>
                        </View>
                    </View>
                </ImageBackground>
            <Footer/>
            </ScrollView>
        </Modal>
    );

}

export default Article;

const styles = StyleSheet.create({
    article: {
        margin: 10,
        backgroundColor: colors.LightBG,
        borderRadius: 10
    },
    header: {
        backgroundColor: colors.BG,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        borderBottomColor: colors.Secondary,
        borderBottomWidth: 2
    },
    categoryText: {
        color: colors.SecondaryText,
        fontSize: 15,
        padding: 10
    },
    articleTitle: {
       backgroundColor: colors.BG,
        padding: 10
    },
    headingText: {
        color: colors.PrimaryText,
        fontSize: 17,
        fontWeight: "bold",
        marginBottom: 5
    },
    descriptionText: {
        color: colors.PrimaryText,
        fontSize: 15,
    },
    contentText:{
        color: colors.SecondaryText,
        fontSize: 15,
        padding: 10,
        textAlign: "justify",
        lineHeight: 22
    },
    articleImage: {
        width: '100%',
        height: 300,
        borderRadius: 5,
        marginBottom: 10,
        alignSelf: "center",
    },
});