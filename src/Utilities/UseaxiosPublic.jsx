import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://task-mangement-server-dun.vercel.app/'
})
const UseaxiosPublic = () => {
    return axiosPublic

};

export default UseaxiosPublic;