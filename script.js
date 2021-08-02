function formReset() {
    document.querySelector(".search-tab").value="";
    document.querySelector(".words-list").remove();
  }
  function buttenReset() {
    document.querySelector(".search-tab").value="";
    
  }
  async function searchword(){
    const newword= await document.querySelector(".search-tab").value;
   
    console.log( '.name' , newword );
       const data = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${newword}` ,
      {
        method: "GET"
      }
    ) 
  
       const words = await data.json();
      loadwords(words);
     buttenReset();
   }
  
  function loadwords(words) {
    const wordsList = document.createElement("div");
    wordsList.className = "words-list";
    words.forEach((words) => {
      const wordsContainer = document.createElement("div");
      wordsContainer.className = "words-container";
  
      wordsContainer.innerHTML = `
     
      
      
      <div class="searched-word"><h1>${words.word}</h1></div>
        <div class="sound"><p>${words.phonetics[0].text}</p>
         <audio controls>
    <source src="${words.phonetics[0].audio}" />
    </audio>  </div>
       <div class="partofspeech1"> <h2>Part of Speech:${words.meanings[0].partOfSpeech}</h2>
        <p><b>Definition:</b>${words.meanings[0].definitions[0].definition}</p>
         <p><b>Synonyms:</b>${words.meanings[0].definitions[0].synonyms}</p>   
          <p><b>Example:</b>${words.meanings[0].definitions[0].example}</p></div>
          <div class="partofspeech2"><h2>Part of Speech:${words.meanings[1].partOfSpeech}</h2>
        <p><b>Definition:</b>${words.meanings[1].definitions[0].definition}</p>
          <p><b>Example:</b>${words.meanings[1].definitions[0].example}</p></div>
         
  
      
      `;
  
      wordsList.append(wordsContainer);
    });
  
    document.body.append(wordsList);
  }
   