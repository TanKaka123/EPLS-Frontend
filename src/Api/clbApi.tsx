import axiosClient from "./axiosClient";

const clbApi= {
    getAll :() => {
    const url = '/clb';
    return axiosClient.get(url);
    },
    // post :(params : any) => {
    //     const url = '/clb';
    //     return axiosClient.post(url,params);
    // },
    // delete :(params : any) => {
       
    //     const url = `/clb/${params}`;
    //     console.log("url : ",url);
    //     return axiosClient.delete(url);
    // },
}
export default clbApi;