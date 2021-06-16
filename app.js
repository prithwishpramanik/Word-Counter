document.getElementById("button").addEventListener("click", function(event){
    let words = document.getElementById("exampleFormControlTextarea1").value;
    words.replace(/(^\s*)|(\s*$)/gi,"");
    words.replace(/[ ]{2,}/gi," ");
    words.replace(/\n /,"\n");

    var y = (words.match(/[a-z]/gi) || []).length;
    let x=words.split(" ").length;
    console.log(x);
    console.log(y);
    console.log(words);
    document.getElementById('exampleFormControlTextarea1').value = '';
    document.getElementById('word').innerHTML = x;
    document.getElementById('letters').innerHTML = y;



    event.preventDefault();
})



