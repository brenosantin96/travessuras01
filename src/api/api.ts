import axios from "axios";

const token = 'IGQVJXSVQ2Tks5a203RUl4R3ZAFNEJVTmhVLUszbERnYVRxZA3ZAmLUN1NjJBZAUlXUHRwYjBoM0lCRngtWEliZAFQ2Yy1PZA0RRSlQ1UXBraktBM0JwQ0JpVmFseHFVcW52dnNXMUV6QzZAFWmJIazk2cHRFbgZDZD';
const url = `https://graph.instagram.com/me/media?access_token=${token}&fields=media_url,media_type,caption,permalink`;


export const instaAPI = { 

     getPosts : async () => {
        let response = await axios.get(url);
        return response.data;
    }

}

