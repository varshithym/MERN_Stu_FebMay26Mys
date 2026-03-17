const inspectbtn=document.getElementById("inspectbtn");
const out=document.getElementById("out");

inspectbtn.addEventListener("click",function(){
    const info={
        htmlLang : document.documentElement.lang,
        charset : document.characterSet,
        //browser's primary preferred language
        browserLanguage : navigator.language,
        //array of all browser languages
        browserLanguages : navigator.languages,
        sampletext : document.getElementById("sampletext").textContent
    };
    console.log(info);
    out.textContent=JSON.stringify(info,null,2);
});