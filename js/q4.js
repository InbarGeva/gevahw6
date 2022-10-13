console.log ("Question 4:")

const linkAdded = () => {
    const linkCreation = document.createElement("li");
    linkCreation.id = "cob";
    linkCreation.textContent = "https://www.csulb.edu/college-of-business";
    linkCreation.innerHTML = "College of Business"
    document.getElementById("links").insertBefore(linkCreation, document.getElementById("csulb"));   

}

linkAdded();