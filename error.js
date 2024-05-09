
const quote=document.getElementById("aa")
const author=document.getElementById("vv")


const api_url="https://api.quotable.io/random";

async function getquote(url){
    const response=await fetch(url);
    var data=await response.json();
    console.log(data);
    quote.innerHTML=data.content
    author.innerHTML=data.author
}


function pop(){
    getquote(api_url)
    var box=document.getElementById("quotes");
    // box.classList.toggle("small");
    box.style.height="auto";
    var textHeight=box.scrollHeight;
    box.offsetHeight;
    box.style.height=textHeight+"px";
    var hidden=document.getElementById("vv");
    hidden.style.display="block"
    

}


    

  
    

