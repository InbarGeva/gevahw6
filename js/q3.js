console.log ("Question 3:")



const boldYellowP = () => {
    const elems = document.getElementsByTagName("p");

for (let i = 0; i < elems.length; i++) {
   elems[i].style.backgroundColor = "yellow";
  elems[i].style.fontWeight = "bold";
}
}

boldYellowP();

