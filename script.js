let word=()=>{
    let para = "Some of the biggest and most expensive transportation projects in the world have involved building bridges. Bridges are crucial links that carry cars, trucks and trains across bodies of water, mountain gorges or other roads."
    let rpara=para.replace(/[^a-zA-Z ]/g, "");  
    console.log(rpara);
    let lower=rpara.toLowerCase();
    let result=lower.split(' ')
    return result;
}

let wordcount=()=>{
    let arr=word()
    const wordCount = {};
    arr.forEach((item) => {
        if (wordCount[item] == null){ 
            wordCount[item] = 1;
        }
        else {
        wordCount[item] += 1;
        }
    });
    console.log(wordCount); 
  
}
wordcount()
