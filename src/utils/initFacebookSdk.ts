const facebookAppId = import.meta.env.VITE_APP_FACEBOOK_APP_ID;
const facebookSecretKey = import.meta.env.VITE_APP_FACEBOOK_SECRET_KEY;
const instagramAppID = import.meta.env.VITE_APP_INSTAGRAM_APP_ID;
const instagramToken = import.meta.env.VITE_APP_INSTAGRAM_TOKEN;
const instagramToken2 = import.meta.env.VITE_APP_INSTAGRAM_TOKEN2;
const instagramSecretKey = import.meta.env.VITE_APP_INSTAGRAM_SECRET_KEY;
const instagramUserID = import.meta.env.VITE_APP_INSTAGRAM_USER_ID_TRAVESSURAS;



const redirectURI = "https://localhost:3000/"

let authURL = `https://api.instagram.com/oauth/authorize
?client_id=${instagramAppID}
&redirect_uri=${redirectURI}
&scope=user_profile,user_media
&response_type=code`


let businessURL = ` https://graph.facebook.com/v3.2/${instagramUserID}?fields=business_discovery.username(travessuras_kids21){followers_count,media_count}&access_token={${instagramToken2}}`

export { authURL, businessURL }


//PEGAR CODIGO ATRAVES DA URL AUTHURL
//DEPOIS DE PEGADO AS PERMISSOES, PEGAR O CODIGO DA URL E SALVAR EM ALGUMA VARIAVEL
//DEPOIS FAZER UMA REQUISICAO POST https://api.instagram.com/oauth/access_token  e passar no BODY client_id, client_secret, code, grant_type, redirect_uri