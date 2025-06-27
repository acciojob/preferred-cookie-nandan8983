//your JS code here. If required.
document.addEventListener("DOMContentLoaded", () => {
    const fontSizeInput = document.getElementById("fontsize");
    const fontColorInput = document.getElementById("fontcolor");

    const savedFontSize = getCookie("fontsize");
    const savedFontColor = getCookie("fontcolor");

    if (savedFontSize) {
        document.documentElement.style.setProperty("--fontsize", `${savedFontSize}px`);
        fontSizeInput.value = savedFontSize;
    }

    if (savedFontColor) {
        document.documentElement.style.setProperty("--fontcolor", savedFontColor);
        fontColorInput.value = savedFontColor;
    }

    document.getElementById("fontForm").addEventListener("submit", (event) => {
        event.preventDefault();
        
        const fontSize = fontSizeInput.value;
        const fontColor = fontColorInput.value;

        document.documentElement.style.setProperty("--fontsize", `${fontSize}px`);
        document.documentElement.style.setProperty("--fontcolor", fontColor);

        setCookie("fontsize", fontSize, 365);
        setCookie("fontcolor", fontColor, 365);
    });
});


function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + "; path=/" + expires;
}


function getCookie(name) {
    const nameEQ = name + "=";
    const cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.indexOf(nameEQ) === 0) {
            return cookie.substring(nameEQ.length);
        }
    }
    return null;
}