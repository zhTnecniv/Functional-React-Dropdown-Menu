const baseURL = "http://localhost:3000/items";

const getItems = () => {
    return fetch(baseURL).then((res) => res.json());
};


export { getItems };