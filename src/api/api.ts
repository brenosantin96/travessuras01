import axios from "axios";

const token = 'IGQVJYUkRDaENhM0NZAYzNETGpUZADZABWjE0UGNpVDI0Nk1mSmd6UHlhcHFrbjNGLXE5ZAFBQMUdDVnkxRUJlRUdBWjFvRmJoSjlHSDVvNFpQSjdrcWU5cDJ6STFzR2hQTTg0aFpNSVFjYzhjOVkwOGZANUAZDZD';
const url = `https://graph.instagram.com/me/media?access_token=${token}&fields=media_url,media_type,caption,permalink`;


export const instaAPI = { 

     getPosts : async () => {
        let response = await axios.get(url);
        return response.data;
    }

}

