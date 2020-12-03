let ticTacToe = {
    border: document.getElementsByClassName('border-item'),
    counter: document.getElementById('counter'),
    resetGame: document.getElementById('reset-game-button'),
    turn: 0,
    player1: 'X',
    player2: 'O',

    start: function(){
        let that = this;
        for(let i = 0; i < this.border.length; i++){
            this.border[i].addEventListener('click',that.clickOnBorderItem);
        }
    },

    clickOnBorderItem: function(){
        if(this.turn < this.border.length){
            if(this.turn % 2 == 0){
                this.innerHTML = player1;
            } else {
                this.innerHTML = player2;	
            }
        }
        this.turn++;
    
        //player1 = 'X' check
        // horizontal
        if(this.border[0].innerHTML == this.player1 && this.border[1].innerHTML == this.player1 && this.border[2].innerHTML == this.player1){ this.counter.innerHTML = 'Winner - ' + this.player1};
        if(this.border[3].innerHTML == this.player1 && this.border[4].innerHTML == this.player1 && this.border[5].innerHTML == this.player1){ this.counter.innerHTML = 'Winner - ' + this.player1};
        if(this.border[6].innerHTML == this.player1 && this.border[7].innerHTML == this.player1 && this.border[8].innerHTML == this.player1){ this.counter.innerHTML = 'Winner - ' + this.player1};
        // vertical
        if(this.border[0].innerHTML == this.player1 && this.border[3].innerHTML == this.player1 && this.border[6].innerHTML == this.player1){ this.counter.innerHTML = 'Winner - ' + this.player1};
        if(this.border[1].innerHTML == this.player1 && this.border[4].innerHTML == this.player1 && this.border[7].innerHTML == this.player1){ this.counter.innerHTML = 'Winner - ' + this.player1};
        if(this.border[2].innerHTML == this.player1 && this.border[5].innerHTML == this.player1 && this.border[8].innerHTML == this.player1){ this.counter.innerHTML = 'Winner - ' + this.player1};
        // diagonal
        if(this.border[0].innerHTML == this.player1 && this.border[4].innerHTML == this.player1 && this.border[8].innerHTML == this.player1){ this.counter.innerHTML = 'Winner - ' + this.player1};
        if(this.border[2].innerHTML == this.player1 && this.border[4].innerHTML == this.player1 && this.border[6].innerHTML == this.player1){ this.counter.innerHTML = 'Winner - ' + this.player1};
        
    
        //player2 = 'O' check
        // horizontal
        if(this.border[0].innerHTML == this.player2 && this.border[1].innerHTML == this.player2 && this.border[2].innerHTML == this.player2){ this.counter.innerHTML = 'Winner - ' + this.player2};
        if(this.border[3].innerHTML == this.player2 && this.border[4].innerHTML == this.player2 && this.border[5].innerHTML == this.player2){ this.counter.innerHTML = 'Winner - ' + this.player2};
        if(this.border[6].innerHTML == this.player2 && this.border[7].innerHTML == this.player2 && this.border[8].innerHTML == this.player2){ this.counter.innerHTML = 'Winner - ' + this.player2};
        // vertical
        if(this.border[0].innerHTML == this.player2 && this.border[3].innerHTML == this.player2 && this.border[6].innerHTML == this.player2){ this.counter.innerHTML = 'Winner - ' + this.player2};
        if(this.border[1].innerHTML == this.player2 && this.border[4].innerHTML == this.player2 && this.border[7].innerHTML == this.player2){ this.counter.innerHTML = 'Winner - ' + this.player2};
        if(this.border[2].innerHTML == this.player2 && this.border[5].innerHTML == this.player2 && this.border[8].innerHTML == this.player2){ this.counter.innerHTML = 'Winner - ' + this.player2};
        // diagonal
        if(this.border[0].innerHTML == this.player2 && this.border[4].innerHTML == this.player2 && this.border[8].innerHTML == this.player2){ this.counter.innerHTML = 'Winner - ' + this.player2};
        if(this.border[2].innerHTML == this.player2 && this.border[4].innerHTML == this.player2 && this.border[6].innerHTML == this.player2){ this.counter.innerHTML = 'Winner - ' + this.player2};
    
        // count
        if(this.counter.innerHTML == 'Winner - ' + this.player1 || this.counter.innerHTML == 'Winner - ' + this.player2){this.turn = undefined;}
    },
}