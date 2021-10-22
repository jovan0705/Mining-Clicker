var clicks = 0;
var btc = 0;
var parameter = 10
function onClick() {
    clicks += 1;
    //let str = "hello"
    document.getElementById("clicks").innerHTML = clicks;
    document.getElementById("btc").innerHTML = clicks/1000 + "₿";
    console.log(clicks);
    if(clicks == parameter) {
        setTimeout(alertFunction,500)
        parameter+=5 
    }
    if(clicks == 30) location.replace("https://www.youtube.com/watch?v=iik25wqIuFo");
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
    let kata = ["you can doit","more","again","it'll make you rich bro","notice me senpai",
"to the moon","sri mulyani started crying","c'mon oni-chann"]
    console.log(kata[Math.floor(Math.random() * kata.length)]);
    let randomWords = kata[Math.floor(Math.random() * kata.length)]
    document.getElementById("clicker").innerHTML = randomWords
    
    //alert(kata[Math.floor(Math.random() * kata.length)])
}
