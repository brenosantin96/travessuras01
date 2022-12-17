< script >
    window.fbAsyncInit = function() {
        FB.init({
            appId: '1458498614608286',
            autoLogAppEvents: true,
            xfbml: true,
            version: 'v15.0'
        });


        FB.getLoginStatus(function(response) {
            statusChangeCallback(response)
        });
    };

function statusChangeCallback(response) { // Called with the results from FB.getLoginStatus().
    console.log(response); // The current login status of the person.
    if (response.status === 'connected') { // Logged into your webpage and Facebook.
        console.log("Authenticated")
    } else { // Not logged into your webpage or we are unable to tell.
        console.log("Not Authenticated")
    }
}

function checkLoginState() {
    FB.getLoginStatus(function(response) {
        statusChangeCallback(response)
    });
} <
/script>


<
fb: login - button scope = "public_profile,email, user_birthday"
onlogin = "checkLoginState();" >
    <
    /fb:login-button>

<
script async defer crossorigin = "anonymous"
src = "https://connect.facebook.net/en_US/sdk.js" > < /script>