import {useEffect, useState} from 'react';
import {View, Text, FlatList} from "react-native";
import {list} from "../services/apiServices";
import Spinner from '../components/Spinner'


const Dashboard = () => {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchArticles = async () => {
        setLoading(true);
        const response = await list("articles");
        if (response) setArticles(response);
        setLoading(false);
    }

    useEffect(() => {
        fetchArticles()
    }, []);

    if (loading) return <Spinner/>
    return (
        <View>
            <View>
                <Text>Dashboard</Text>
            </View>
            <View>
                <FlatList data={articles}
                          alwaysBounceVertical={false}
                          keyExtractor={item => item.id}
                          renderItem={itemData => <Text> {itemData.item.heading} </Text>}
                />
            </View>
        </View>
    )
}
export default Dashboard;