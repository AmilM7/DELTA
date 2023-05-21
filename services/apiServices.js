import axios from "axios"

const headers = () => {
    return {
        'content-type': 'application/json',
        'accept': 'application/json',
        'pragma': 'no-cache, no-store, must-revalidate',
        'cache-control': 'no-cache',
        'expires': '0',
        'accept': '*/*',
        // 'authorization': `Bearer ${config.token}`
    };
};

const apiUrl = "https://ap-iam-ssst.herokuapp.com/"

const list = async (dataSet) => {
    return await request("get", apiUrl + dataSet, {}, headers())
}

const read = async (dataSet, id) => {
    return await request("get", apiUrl + dataSet + "/" + id, {}, headers());
};

const insert = async (dataSet, data) => {
    return await request('post', apiUrl + dataSet, data, headers());
};

const update = async (dataSet, data, id) => {
    return await request('put', apiUrl + dataSet + "/" + id, data, headers());
};

const remove = async function (dataSet, id) {
    return await request('delete', apiUrl + dataSet + "/" + id, {}, headers());
};

const request = async (method, url, data, headers) => {
    try {
        const response = await axios({
            method: method,
            url: url,
            data: data,
            headers: headers
        });
        return response.data;
    } catch (err) {
        console.log(err);
        return false;
    }
}

export {list, read, insert, update, remove}

