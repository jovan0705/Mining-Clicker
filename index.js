var clicks = 0;
var btc = 0;
var parameter = 10
var audio = new audio("./asset/click.mp4")

function onClick() {
    clicks += 1;
    //let str = "hello"
    document.getElementById("clicks").innerHTML = clicks;
    document.getElementById("btc").innerHTML = clicks/1000 + "₿";
    if (clicks % 2 == 0) {
        document.getElementById("clicker2").id = "clicker";
    } else {
        document.getElementById("clicker").id = "clicker2";
    }
    console.log(clicks);
    if(clicks == parameter) {
        setTimeout(alertFunction,500)
        parameter+=5 
    }
    if(clicks == 100) {
        alert('Congratulation You Beat the Game and Getting Rickrolled :)')
        location.replace("./index.html")
        window.open("https://www.youtube.com/watch?v=iik25wqIuFo?autoplay=1");
    }
    audio.load();
    audio.play();
};

function offClick(){
    clicks = 0
    document.getElementById("clicks").innerHTML = clicks;
    document.getElementById("text").innerHTML = "welcome back bro"
    console.log("tertekan");
    console.log(clicks);

};

function alertFunction(){
    //
    let kata = ["you can doit","more","again","it'll make you rich bro"]
    console.log(kata[Math.floor(Math.random() * kata.length)]);
    let randomWords = kata[Math.floor(Math.random() * kata.length)]
    document.getElementById("clicker").innerHTML = randomWords
    
    // alert(kata[Math.floor(Math.random() * kata.length)])
}

