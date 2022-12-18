import axios from "axios";

export const instagramAppID = import.meta.env.VITE_APP_INSTAGRAM_APP_ID;
export const instagramSecretKey = import.meta.env.VITE_APP_INSTAGRAM_SECRET_KEY;
export const instagramRedirectURI = import.meta.env.VITE_APP_INSTAGRAM_REDIRECTURI;
export const instagramGrantType = import.meta.env.VITE_APP_INSTAGRAM_GRANTTYPE;


const token = 'IGQVJYUkRDaENhM0NZAYzNETGpUZADZABWjE0UGNpVDI0Nk1mSmd6UHlhcHFrbjNGLXE5ZAFBQMUdDVnkxRUJlRUdBWjFvRmJoSjlHSDVvNFpQSjdrcWU5cDJ6STFzR2hQTTg0aFpNSVFjYzhjOVkwOGZANUAZDZD';
const url = `https://graph.instagram.com/me/media?access_token=${token}&fields=media_url,media_type,caption,permalink`;


export const instaAPI = {

    getPosts: async () => {
        let response = await axios.get(url);
        return response.data;
    },

    getAccessToken: async (client_id: string, client_secret: string, code: string, grant_type: string, redirect_uri: string) => {

        let response = await axios.post(`https://api.instagram.com/oauth/access_token`, {
            client_id, client_secret, code, grant_type, redirect_uri
        }, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'x-requested-with': 'XMLHttpRequest',
                'Access-Control-Allow-Origin': 'https://localhost:3000/',
                'Access-Control-Allow-Headers': '*',
            }
        });
        return response.data;
    },

    getAccessTokenWithFETCH: async (client_id: string, client_secret: string, code: string, grant_type: string, redirect_uri: string) => {

        const rawResponse = await fetch("https://api.instagram.com/oauth/access_token", {
            method: "POST",
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Access-Control-Allow-Origin': 'https://127.0.0.1:3000',
                'Access-Control-Allow-Methods': 'POST',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization'
            },
            body: JSON.stringify({ client_id, client_secret, code, grant_type, redirect_uri })
        })

        const response = await rawResponse.json();
        return response;

    }

}




//userID 17841403399771890
