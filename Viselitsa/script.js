let words = ['програма','макака','прекрасний','оладушек', 'дерево', 'планета', 'любов', 'ноутбук'];
let word = words[Math.floor(Math.random() * words.length)];
let answerArray = [];
for (let i = 0; i < word.length; i++){
	answerArray[i] = '_';
}

let remainingLetters = word.length;
let guessTry = 10;


while(remainingLetters > 0 && guessTry > 0){
alert(answerArray.join(' '));	
	let guess = prompt('Вгадайте букву або нажміть "Скасувати" для виходу з гри');
		guess = guess.toLowerCase();
	if(guess === null){
		break;
	} else if(guess.length != 1){
		alert('Введіть одну букву, будь ласка!');
	} else {
		guessTry--;
		for(let j = 0; j < word.length; j++){
			if(word[j] === guess && answerArray[j] === '_'){
				answerArray[j] = guess;
				remainingLetters--;
			};
		};
	};
};
alert(answerArray.join(' '));

if(guessTry > 0){
	alert('Так тримати, слово було ' + word);
} else {
	alert('Шкода, ви витратили всі спроби, слово було '  + word);
};


function areArraysSame(arr1, arr2) {
       if(arr1.length !== arr2.length){
            return false
       }
       for(let i = 0; i < arr1.length; i++){
           for(let j = 0; j < arr2.length; j++){
               if(arr1[i] === arr2[j]){
                return true
                    } else {
                  return false    
            }                
        }
    }
}


