import api from "./api";

export default async function token(){
    if([undefined, null, ""].includes(getCookie('access_token'))){
        const url = `https://test.api.amadeus.com/v1/security/oauth2/token`;
        const response = await fetch(url, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `grant_type=client_credentials&client_id=${api.KEY}&client_secret=${api.SECRET}`
        });
        const data = await response.json();
        const token = data.access_token;

        setCookie('access_token', token);

        return token;
    }
    else{
        return getCookie('access_token');
    }
}

function setCookie(name,value) {
    var expires = "";
    var date = new Date();
    date.setTime(date.getTime() + 1700000);
    expires = "; expires=" + date.toUTCString();

    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)===' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}