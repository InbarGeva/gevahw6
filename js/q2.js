console.log("Question 2:")

const displayText400 = () => {
    const courses400 = Array.from(document.getElementsByClassName("400level"));
    courses400.forEach(element => {
        console.log(element.textContent);
    });
}

displayText400();





