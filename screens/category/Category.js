import {StyleSheet, View, FlatList, Text, ImageBackground, ScrollView} from 'react-native';
import {useEffect, useState} from 'react';
import {list} from "../../services/apiServices";
import {Spinner, Footer} from "../../components";
import Articles from "./Articles";
import colors from "../../styles/colors";


const Category = ({route}) => {
    const [loading, setLoading] = useState(false);
    const [articles, setArticles] = useState([]);

    const fetchArticles = async () => {
        setLoading(true);
        const response = await list(`articles/category/${route.params.category}`);
        if (response) setArticles(response);
        if (response) {
            const reversedArticles = response.reverse();
            setArticles(reversedArticles);
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchArticles()
    }, []);

    if (loading) return <Spinner/>
    return (
        <ImageBackground source={require('../../assets/Backgrounds/white-texture.jpg')} resizeMode="cover">
            <View>
                <Text style={styles.categoryHeading}>News</Text>
                    <FlatList data={articles}
                              renderItem={itemData => <Articles articleID={itemData.item.id}/>}
                              style={styles.flatList}
                    />
            </View>
        </ImageBackground>
    );
}
export default Category;

const styles = StyleSheet.create({
    categoryHeading: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        padding: 10,
        color: colors.LightText,
        backgroundColor: colors.Primary,
    },
    flatList: {

    },
});