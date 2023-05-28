import {list} from "../../services/apiServices";
import {StyleSheet, Text, View, Modal,ScrollView, BackHandler} from "react-native";
import {Appbar} from "react-native-paper";
import {useEffect, useState} from "react";
import {Spinner, Footer} from '../../components'

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
                <Appbar.BackAction color="#FFFFFFFF" onPress={closeModal}/>
                <Appbar.Content color="#FFFFFFFF" title="Trenutno.ba"/>
            </Appbar.Header>
            <View style={styles.container}>
                <View style={styles.text}>
                    <Text style={styles.heading}>{article.heading}</Text>
                    <Text>{article.description}</Text>
                    <Text>{article.content}</Text>
                </View>
            </View>
            <Footer/>
            </ScrollView>
        </Modal>
    );

}

export default Article;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: '#2121e7',
        color: '#ffffff',
    },
    text: {
        padding: 20,
    },
    heading: {
        fontWeight: "bold",
    }
});