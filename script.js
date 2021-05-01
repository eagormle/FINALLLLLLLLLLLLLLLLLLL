var nav = document.body.querySelector(".nav");
var display = document.body.querySelector(".display");
var textt = document.body.querySelector(".text");
var buttonn = document.body.querySelector(".submit");
var number = document.body.querySelector(".number");
var messageBox = document.createElement("div")
document.body.appendChild(messageBox);
var list = [];
var pages = [
  {
    title: "Grade View",
    content: "Grade View"
  },
  {
    title: "Add Grade",
    content: "Add Grade",
  }
];
buttonn.style.display = "none";
textt.style.display = "none";
number.style.display = "none";
nav.style.display = "none";
login();
function login() {
  var valEle = document.body.querySelector(".valMess");
  var username = document.body.querySelector(".username").value;
  var password = document.body.querySelector(".password").value;
    if (username == "cool" && password == "password") {
      gradeview();
      document.body.querySelector(".username").style.display="none";
      document.body.querySelector(".password").style.display="none";
      document.body.querySelector(".login").style.display="none";
      messageBox.style.display = "none";
      nav.style.display="inline";
    }
    else if (username == "") {
      messageBox.innerHTML = " ";
      document.body.appendChild(messageBox);
    }
    else if (username != "cool" && password != "password") {
      messageBox.innerHTML = "Invalid Login";
      document.body.appendChild(messageBox);
    }
    else if (username != "cool") {
      messageBox.innerHTML = "Invalid Username";
      document.body.appendChild(messageBox);
    }
    else if (password != "password") {
      messageBox.innerHTML = "Invalid Password";
      document.body.appendChild(messageBox);
    }

   document.body.querySelector(".login").addEventListener("click", function () {
  login();
 });
}


function renderList() {
  var listEle = document.body.querySelector(".list");
  listEle.innerHTML = "";
  
  for (var i = 0; i < list.length; i++) {
    var element = document.createElement("div");
    element.innerHTML = list[i];
    listEle.appendChild(element);
  }
}

function submit() {
  var first = document.body.querySelector(".text").value;
  var second = " "
  var third = document.body.querySelector(".number").value;
  var text = "Student Name: " + first + second + "| Grade: " + third
  if (first.length > 0 && 0 < third) {
    if (third > 100){
      document.body.querySelector(".itmMess").innerHTML = "The number is too high";
    }else{
    list.push(text);
    document.body.querySelector(".itmMess").innerHTML=""
    gradeview();
    }
  }
  else{
    document.body.querySelector(".itmMess").innerHTML = "not enough letters or numbers";
  }
  renderList();
}


for (var i = 0; i < pages.length; i++) {
  pageMaker(pages[i]);
}

function pageMaker(pg) {
  this.button = document.createElement("button");
  this.button.addEventListener("click", function () {
    writeStuff(pg.content, pg.title);
  });
  this.button.innerHTML = pg.title;
  nav.appendChild(button);
}

function gradeview() {
  document.body.querySelector(".list").style.display="inline";
  document.body.querySelector(".itmMess").style.display="none";
  display.innerHTML = "";
  var view_header = document.createElement("h1");
  view_header.innerHTML = "View Grades";
  display.appendChild(view_header);
  buttonn.style.display = "none";
  textt.style.display = "none";
  number.style.display = "none";
  buttonn.addEventListener("click", submit);
  renderList();
}

function addgrade() {
  document.body.querySelector(".list").style.display="none";
  document.body.querySelector(".itmMess").style.display="inline";
  display.innerHTML = "";
  var view_header = document.createElement("h1");
  view_header.innerHTML = "Add Grades";
  display.appendChild(view_header);
  buttonn.style.display = "block";
  textt.style.display = "inline";
  number.style.display = "inline";
  buttonn.addEventListener("click", submit);
}

function writeStuff(stuff, pg) {
  if (pg == "Grade View") {
    gradeview();
  } else if (pg == "Add Grade") {
    addgrade();
  }
}
renderList();
writeStuff(pages[0].content, "Home");