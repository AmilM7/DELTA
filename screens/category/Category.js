import {StyleSheet, View, FlatList} from 'react-native';
import {useEffect, useState} from 'react';
import {list} from "../../services/apiServices";
import {Spinner, Footer} from "../../components";
import Articles from "./Articles";


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

    const footerComponent = () => (
        <Footer/>
    )

    if (loading) return <Spinner/>
    return (
        <View style={styles.container}>
                <FlatList data={articles}
                          renderItem={itemData => <Articles articleID={itemData.item.id}/>}
                          style={styles.flatList}
                          ListFooterComponent={footerComponent}
                />
        </View>

    );
}
export default Category;

const styles = StyleSheet.create({
    container: {

    }
});