var canvas,database
var playerCount,form,player,game
var gameState = 0;
var allPlayers

function setup(){
    canvas = createCanvas(400,400);
    database = firebase.database()
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    if (playerCount === 4){
        game.update(1)
    }
    if (gameState === 1){
        clear();
        game.play()
    }
}