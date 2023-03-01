const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const word = document.getElementById("searcher");

const setQuery = (e) =>{
    if(e.keyCode == "13")
    getResult(word.value);
}

const getResult = (name) =>{
    let query = `${url}${word.value}`;
    fetch(query)
    .then(mean => {
        return mean.json();
    })
    .then(displayresult = (result) =>{
        console.log(result.name);
        
        let name = document.getElementById("name");
        name.innerHTML = result[0].word;
        //console.log(result[0]);

        let sec = document.getElementById("sec");
        sec.innerHTML = result[0].phonetic;
        
        //console.log(result[0].meanings["synonyms"]);
       
        
        let mean = document.getElementById("mean");
        mean.innerHTML  = result[0].meanings[0]["synonyms"][0];

        let mean2 = document.getElementById("mean2");
        mean2.innerHTML = result[0].meanings[1]["synonyms"][0];


        if(result[0].meanings[0]["synonyms"].length == 0){
            mean2.innerHTML = "NONE";
            mean.innerHTML = "NONE"
        }
       
        console.log(result[0].meanings[1]["synonyms"][1]);
        console.log(result)
    })
}

const searchBar = document.getElementById("searcher");
searchBar.addEventListener("keypress",setQuery)









//function myf(){
   
  //  let query = `${url}${word.value}`;
    //console.log(query);
    //console.log(query.word);




//}
