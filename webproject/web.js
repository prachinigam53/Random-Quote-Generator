const contentText = document.querySelector(".content"),
authorName = document.querySelector(".author .name"),
contentBtn = document.querySelector("button");
soundBtn = document.querySelector(".sound");
likeQuote = document.getElementById("likeQuote");
likeList = document.getElementById("likeList");
copyBtn = document.querySelector(".copy");
twitterBtn = document.querySelector(".twitter");

function randomQuote(){
    fetch("https://api.api-ninjas.com/v1/quotes",{
        headers:{"X-Api-Key": "KAhySE3C2Owb+e3DP6bHkg==HCnma2w7Zb25UQRd"}
    })
    .then(res => res.json()).then(data =>{
        console.log(data);
        contentText.innerText = data[0].quote;
        authorName.innerText = data[0].author;
        category.innerHTML = data[0].category;
        contentBtn.innerText="New Quote";
        contentBtn.classList.remove("loading");
    });
}
function LikeQuote() {
    if(likeQuote.style.color == "red"){
        likeQuote.removeAttribute("class");
        likeQuote.setAttribute("class", "fa-regular fa-heart");
        likeQuote.style.color ="black";
    }else{
    likeQuote.setAttribute("class", "fa-solid fa-heart");
    likeQuote.style.color ="red";
    }
}
soundBtn.addEventListener("click", ()=>{

    let utterance = new SpeechSynthesisUtterance(`${contentText.innerText} by ${authorName.innerText}`);
    speechSynthesis.speak(utterance);
});
copyBtn.addEventListener("click", ()=>{

    navigator.clipboard.writeText(contentText.innerText);
});
twitterBtn.addEventListener("click", ()=>{
    let tweetUrl=`https://twitter.com/intent/tweet?url=${contentText.innerText}`;
    window.open(tweetUrl,"blank");
});


contentBtn.addEventListener("click", randomQuote);
