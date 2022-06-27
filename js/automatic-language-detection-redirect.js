//original code: https://gist.github.com/fv0/f8acf201faee95cf02e9365dcd0d46a0

// Set of supported languages
var supportedLanguages = { en: "en", es: "es", jp: "jp"};
var fallbackLanguage = "en";

// Check if the users browser language is a supported language of the website. Otherwise go to fallback.
var language = supportedLanguages[(navigator.language || navigator.userLanguage).substring(0,2)] || fallbackLanguage;

// Go to the language version of your website. Example: https://domain.com/en/

// Place the "." by your web domain, since the point is to test it in a local file

location.replace("." +  "/" + language + "/" + "index.html");