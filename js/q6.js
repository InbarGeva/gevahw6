console.log ("Question 6:")



function miniDic () {
    const words = [{
        term: "Procrastination",
        definition: "Avoidance of doing a task that needs to be accomplished"
        }, {
          term: "Tautology",
          definition: "logical argument constructed in such a way that it is logically ir\
        refutable"
        }, {
          term: "Oxymoron",
          definition: "figure of speech that juxtaposes elements that appear to be contra\
        dictory"
    }];
    
    var dl = document.createElement ("dl");

    for (var word in words) {
        var dt = document.createElement ("dt");
        var dd = document.createElement ("dd");

        dt.innerHTML = words[this.term];
        dd.innerHTML = words[this.definition];

        dl.appendChild (dt);
        dl.appendChild (dd);
    }

    var content = document.getElementById ("content");
    content.appendChild (dl);
}

miniDic ();