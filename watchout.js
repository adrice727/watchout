// start slingin' some d3 here.

var gameOptions = { width: 700, height: 700};

var gameBoard = d3.select('.container').append('svg:svg').attr('width', gameOptions.width).attr('height', gameOptions.height);


var rand = function() {
  return Math.floor(Math.random() * 676) + 12;
};

var drawEnemies = function(){
  for ( var i = 0; i < 30; i++){
    gameBoard.append('circle').attr('class', 'enemy')
                              .attr('cx', rand())
                              .attr('cy', rand())
                              .attr('r', 12)
                              .attr('fill', 'black');
  }
};

drawEnemies();

var drag = d3.behavior.drag()
  .on("drag", function() {

      d3.select(this).attr('cx', keepInBounds(d3.mouse(this)[0]));
      d3.select(this).attr('cy', keepInBounds(d3.mouse(this)[1]));
  });

var keepInBounds = function(position){
  if ( position > 688 ){
    return 688;
  }
  if ( position < 12 ){
    return 12;
  }
  return position;
};

gameBoard.append('circle').attr('class', 'player')
                          .attr('cx', 350)
                          .attr('cy', 350)
                          .attr('r', 12)
                          .attr('fill', 'orange')
                          .call(drag);


setInterval(function(){
  d3.selectAll('.enemy').each(function() {
    d3.select(this).transition().duration(1500).ease('cubic').attr({'cx': rand(), 'cy': rand()});
  });
}, 2000);

var currentScore = 0;
var highScore = 0;
var collisions = 0;

var checkForCollision = function(){
  d3.selectAll('.enemy').each(function() {
    var playerX = d3.select('.player').attr('cx');
    var playerY = d3.select('.player').attr('cy');

    var enemyX = d3.select(this).attr('cx');
    var enemyY = d3.select(this).attr('cy');


    if ( Math.abs(playerX - enemyX) < 24 &&
         Math.abs(playerY - enemyY) < 24) {
      onCollision();
    } else {
      currentScore += 1;
    }
  });
  d3.select('.current-score').text(currentScore);
};

var onCollision = function() {
  if (currentScore > highScore) {
    highScore = currentScore;
  }
  collisions++;
  currentScore = 0;
  d3.select('.high-score').text(highScore);
  d3.select('.collision-count').text(collisions);
}

setInterval(checkForCollision, 100);




