import axios from "axios";
// //const URL = "http://192.168.0.19:3000";
// const URL = "http://192.168.43.45:3000";

// //interceptors handle network error
// axios.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   function (error) {
//     if (!error.response) {
//       error.response = {
//         data: "net work error",
//         status: 500,
//       };
//     }
//     if (error.response.status === 401) {
//       // jumpTo("/login");
//       throw error;
//     }
//     return Promise.reject(error);
//   }
// );
// config.baseURL = URL;
// return axios(config);
// export default API;
export default axios.create({
  baseURL: "http://localhost:8000/api/",
});
