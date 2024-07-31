const date = new Date();
const year = date.getFullYear();
document.getElementById("title").innerHTML = `Utilla Fix ${year}`
const strings = [
    "Downloading Utilla.dll",
    "doenloading Exit Scam (Genesis edition)",
    "Downlaoding Seroxen...",
    "fixing compiuterinterface",
    "nah",
    "downloadoing something, probably",
    "ratting you",
    "downloadoing some random mystery file",
    "phishing attempt initiated",
    "phishing attempt failed",
    "doing somehing suspicious",
    "logging keystrokes",
    "tracking activity",
    "breaking bootloader",
    "fixing bootloader",
    "planting backdoor",
    "disabling firewall",

]


function Download(){
    document.getElementById("button").innerHTML = '<div class="loader"></div> ⠀Downloading...';
    document.getElementById("button").disabled = "hgds";
    setInterval(change, 250)
}



function change() {
    Math.random()
    let int = Math.floor(Math.random() * strings.length);  
    console.log(int)
    document.getElementById("status").innerHTML = `Status: ${strings[int]}`;
}