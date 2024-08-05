import axios from "axios";

const authEndpoint="https://accounts.spotify.com/authorize?";
const clientId="d6022b6189024a99b05c285ffe7f6264";
const redirectUri="http://localhost:3000/callback";
const scopes=["user-library-read","playlist-read-private"];
//export const loginEndpoint=`${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;

  const getSpotifyToken = () => {
    return localStorage.getItem('token');
  };
 console.log(getSpotifyToken(),"tokennnnnnnnnnnn")
  const apiClient = axios.create({
    baseURL: "https://api.spotify.com/v1/",
    headers: {
      Authorization: `Bearer ${getSpotifyToken()}`,
    },
  });
  
  export const setClientToken = (token) => {
    apiClient.interceptors.request.use(async function (config) {
      config.headers.Authorization = "Bearer " + token;
      return config;
    });
  };
  
  export default apiClient;