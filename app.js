



document.getElementById("button").addEventListener("click", function(event){
    let words = document.getElementById("exampleFormControlTextarea1").value;
    var x=words.length;
    console.log(x);
    console.log(words);

    event.preventDefault();
})



