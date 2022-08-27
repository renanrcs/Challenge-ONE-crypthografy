window.addEventListener('load', function() {
    
    document.querySelector('#encrypt').addEventListener('click', () => {
        //Pegando valor da tag textarea;
         let textarea = document.querySelector('#text-encrypt').value.toLowerCase();
         
         //Atribuindo valor da tag textarea para a tag <p>
         document.querySelector('#text-result').innerHTML = trocarLetras(textarea);

         document.getElementById('hide-content').style.display = "none";
         
        });
        
    document.getElementById("decrypt").addEventListener('click', () => {
        let textarea2 = document.querySelector('#text-encrypt').value.toLowerCase();
      console.log(textarea2);
      
        document.getElementById("text-result").innerHTML = descriptografar(textarea2);

        document.getElementById('hide-content').style.display = "none";

      });

      document.querySelector("#reset").addEventListener('click', () => {

          document.getElementById("text-encrypt").value = "";
      });

      document.querySelector("#second-btn-clear").addEventListener('click', () => {

          document.getElementById("text-result").innerText = "";
          this.document.getElementById("hide-content").style.display = "block"
      });

      document.getElementById("button-copy").addEventListener('click', function(){
        var textCopy = document.getElementById("text-result").innerText;
        
        // textCopy.select();
        // textCopy.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(textCopy);
        alert("Copiado");
      });

});

function trocarLetras(word){
 var count = 0;
  var newWord = word;
  var texto = '';

  while(count < newWord.length){
    if(newWord.charAt(count) == "e"){
      texto += 'enter';
    } 
    if(newWord.charAt(count) == "a"){
      texto += 'ai';
    }
    if(newWord.charAt(count) == 'i'){
      texto += 'imes';
    }
    if(newWord.charAt(count) == "o"){
      texto += 'ober';
    }
    if(newWord.charAt(count) == "u"){
      texto += 'ufat';
    }
    if(newWord.charAt(count) != 'a' && newWord.charAt(count) != 'e' && newWord.charAt(count) != 'i' && newWord.charAt(count) != 'o' & newWord.charAt(count) != 'u'){
      texto += newWord[count];
    }
    count++;
  }
  return texto; 
}

function descriptografar(textoQualquer){

  let matriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"] ];
  console.table(matriz);

  textoQualquer = textoQualquer.toLowerCase();

  /*for (let iterator of matriz) {
    textoQualquer = textoQualquer.replaceAll(iterator[1], iterator[0]);
  }*/

  for(let i = 0; i < matriz.length; i++){

    // verificar se o texto contem o 2º indice de cada array
    if(textoQualquer.includes(matriz[i][1])){
      // fazer a troca
      textoQualquer = textoQualquer.replaceAll(matriz[i][1], matriz[i][0]);
    }
  }
  return textoQualquer;
}

/*As "chaves" de criptografia que utilizaremos são:
A letra "e" é convertida para "enter"
A letra "i" é convertida para "imes"
A letra "a" é convertida para "ai"
A letra "o" é convertida para "ober"
A letra "u" é convertida para "ufat"*/