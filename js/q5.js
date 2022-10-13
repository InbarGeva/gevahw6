console.log("Question 5:")

function creatTable() {
    var x = document.createElement("TABLE");
    x.setAttribute("id", "output");
    document.body.appendChild(x);
  
    var y = document.createElement("TR");
    y.setAttribute("id", "myTr");
    document.getElementById("output").appendChild(y);
  
    var z = document.createElement("TD");
    var t = document.createTextNode("cell");
    z.appendChild(t);
    document.getElementById("myTr").appendChild(z);
}
  
creatTable()