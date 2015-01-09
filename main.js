var t = {
  turn :(Math.floor((Math.random() *6 ) + 1)% 2) === 0 ? "o":"x",
  move : null,
  win : false,
  board : [],
  possibleWins : [[0,1,2], [0,3,6], [0,4,8], [1,4,7], [2,5,8], [6,7,8], [3,4,5],[2,4,6]],
  
  init : function() {
    for ( var i = 0; i < 9; i++ ) {
      this.board[i] = '';
    }
  },
  
  isSpotFree : function(spot) {
    spot = spot * 1;
    if ( this.board[spot] === '' ) return true;
    return false;
  },
  
  getMove : function() {
    var safegaurd = 10;
    this.move = null;
    console.log( 'In getMove');
    while ( this.move === null && (--safegaurd > 0) ) {
      console.log( ' inside the whle loop');
      this.move = prompt("Where would " + this.turn + " like to move? Pick 0-8");
      
      if ( !this.isSpotFree(this.move) ) {
        console.log("spot taken try again");
        this.move = null;      
      } else {
        console.log('ok,' + this.turn + ' is ok to go in ' + this.move);
      }
    }
  },
  
  makeMove : function() {
    this.board[ this.move ] = this.turn;
  },

  checkForWin : function(){ 
    for (var i = 0; i < 8; i++) {
      if ( this.possibleWins[i].indexOf(this.turn) !== -1 ) {
        if( this.possibleWins[i][0] === this.turn && this.possibleWins[i][1] === this.turn && this.possibleWins[i][2] === this.turn) {
             console.log('we have a win');
              this.win = true;
             //this.doWin();
        }
      }
    }
  },
  
  changeTurn : function() {
    if ( this.turn === 'x' ) { this.turn = 'o'; }
    else 
      this.turn = 'x';
  },
  

  mainLoop: function() {
    var safegaurd = 10;    
    this.init();
    do {
      this.getMove();
      this.makeMove();
      this.checkForWin();
      this.changeTurn();
      console.log(this.board);
    } while (this.win !== true && (--safegaurd > 0) );
  }

   
};

t.mainLoop();