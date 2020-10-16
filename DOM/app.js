/****** tedious AF ********/

//1
let btn = document.createElement("BUTTON");
btn.id = "firstBtn";
let btnText = document.createTextNode("Click me.");
btn.appendChild(btnText);
document.body.appendChild(btn);

//2
document.getElementById("firstBtn").addEventListener('click', function() {
    alert("This is a message");
});

document.getElementById("submit").addEventListener('click', function() {
    alert(document.getElementById("txtBox").value);
});

//3
let div1 = document.getElementsByTagName("div")[0];
div1.addEventListener('mouseover', function(){
    div1.style.backgroundColor = "blue";
});
div1.addEventListener('mouseout', function() {
    div1.style.backgroundColor = "orange";
});

//4
let p = document.createElement("P");
let pText = document.createTextNode("This is some text and it has characters and stuff");
p.appendChild(pText);
document.body.appendChild(p);
p.addEventListener('click', function() {
    p.style.color = 'rgb('+rand()+', '+rand()+', '+rand()+')';
});

function rand() {
    return Math.floor(Math.random() * Math.floor(255));
}

//5
let nameBtn = document.createElement("button");
nameBtn.id = "nameBtn";
let btnT = document.createTextNode("Add Name");
let nameDiv = document.createElement("div");
nameBtn.appendChild(btnT);
document.body.appendChild(nameBtn);
document.body.appendChild(nameDiv);
document.getElementById("nameBtn").addEventListener('click', function() {
    let span = document.createElement("span");
    span.appendChild(document.createTextNode("Mitch Gams"));
    nameDiv.appendChild(span);
});

//6 
let friends = ['Brandon', 'Dillon', 'Sojo', 'Richard', 'Mitch', 'Jarred', 'Carl', 'Jake', 'Drake', 'Meagan'];
document.getElementById("friendBtn").addEventListener('click', function() {
    let ul = document.getElementsByTagName("ul")[0];
    for(let i = 0; i < friends.length; i++) {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(friends[i]));
        ul.appendChild(li)
    }
});




