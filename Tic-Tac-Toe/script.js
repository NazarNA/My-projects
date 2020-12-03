// Find main elements
let border = document.getElementsByClassName('border-item');
let counter = document.getElementById('counter');
let resetGame = document.getElementById('reset-game-button');


// Logic
for(let i = 0; i < border.length; i++){
	border[i].addEventListener('click',clickOnBorderItem);
}

let turn = 0;
let player1 = 'X';
let player2 = 'O';

function clickOnBorderItem(){
	if(turn < border.length){
		if(turn % 2 == 0){
			this.innerHTML = player1;
		} else {
			this.innerHTML = player2;	
		}
	}
	turn++;

	//player1 = 'X' check
	// horizontal
	if(border[0].innerHTML == player1 && border[1].innerHTML == player1 && border[2].innerHTML == player1){ counter.innerHTML = 'Winner - ' + player1};
	if(border[3].innerHTML == player1 && border[4].innerHTML == player1 && border[5].innerHTML == player1){ counter.innerHTML = 'Winner - ' + player1};
	if(border[6].innerHTML == player1 && border[7].innerHTML == player1 && border[8].innerHTML == player1){ counter.innerHTML = 'Winner - ' + player1};
	// vertical
	if(border[0].innerHTML == player1 && border[3].innerHTML == player1 && border[6].innerHTML == player1){ counter.innerHTML = 'Winner - ' + player1};
	if(border[1].innerHTML == player1 && border[4].innerHTML == player1 && border[7].innerHTML == player1){ counter.innerHTML = 'Winner - ' + player1};
	if(border[2].innerHTML == player1 && border[5].innerHTML == player1 && border[8].innerHTML == player1){ counter.innerHTML = 'Winner - ' + player1};
	// diagonal
	if(border[0].innerHTML == player1 && border[4].innerHTML == player1 && border[8].innerHTML == player1){ counter.innerHTML = 'Winner - ' + player1};
	if(border[2].innerHTML == player1 && border[4].innerHTML == player1 && border[6].innerHTML == player1){ counter.innerHTML = 'Winner - ' + player1};
	

	//player2 = 'O' check
	// horizontal
	if(border[0].innerHTML == player2 && border[1].innerHTML == player2 && border[2].innerHTML == player2){ counter.innerHTML = 'Winner - ' + player2};
	if(border[3].innerHTML == player2 && border[4].innerHTML == player2 && border[5].innerHTML == player2){ counter.innerHTML = 'Winner - ' + player2};
	if(border[6].innerHTML == player2 && border[7].innerHTML == player2 && border[8].innerHTML == player2){ counter.innerHTML = 'Winner - ' + player2};
	// vertical
	if(border[0].innerHTML == player2 && border[3].innerHTML == player2 && border[6].innerHTML == player2){ counter.innerHTML = 'Winner - ' + player2};
	if(border[1].innerHTML == player2 && border[4].innerHTML == player2 && border[7].innerHTML == player2){ counter.innerHTML = 'Winner - ' + player2};
	if(border[2].innerHTML == player2 && border[5].innerHTML == player2 && border[8].innerHTML == player2){ counter.innerHTML = 'Winner - ' + player2};
	// diagonal
	if(border[0].innerHTML == player2 && border[4].innerHTML == player2 && border[8].innerHTML == player2){ counter.innerHTML = 'Winner - ' + player2};
	if(border[2].innerHTML == player2 && border[4].innerHTML == player2 && border[6].innerHTML == player2){ counter.innerHTML = 'Winner - ' + player2};

	// count
	if(counter.innerHTML == 'Winner - ' + player1 || counter.innerHTML == 'Winner - ' + player2){turn = undefined;}
	if(counter.innerHTML !== 'Winner - ' + player1 && counter.innerHTML !== 'Winner - ' + player2 && turn == border.length){counter.innerHTML = 'Нічия!'};


};
