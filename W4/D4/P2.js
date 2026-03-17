const translations ={
    Kn: {title: "ಸ್ವಾಗತ", desc: "ಇದು ಸ್ಥಲಿಕೃತ ",},
    en: {title:"Welcome", desc:" This is a Localized interface",},
    hi: {title:"स्वागत है", desc: "यह एक स्थानीय इंटरफ़ेस है",}
};
const title=document.getElementById("title");
const desc=document.getElementById("desc");
const out=document.getElementById("out");

function render(lang){
    const t=translations[lang] || translations.en;
    document.documentElement.lang=lang;
    title.textContent=t.title;
    desc.textContent=t.desc;
    out.textContent="Current UI language : "+lang;
    console.log("Render lang:",lang);
}

document.getElementById("langselect").addEventListener("change",function(){
    render(this.value);
   
});
document.getElementById("detectbtn").addEventListener("click",function(){
    const detected=(navigator.language || "en").slice(0,2).toLocaleLowerCase();
    render(detected);
});
render(en);