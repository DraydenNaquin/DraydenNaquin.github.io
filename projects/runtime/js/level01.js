var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function (game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            "name": "Robot Romp",
            "number": 1,
            "speed": -3,
            "gameItems": [
                { "type": "sawblade", "x": 400, "y": groundY },
                { "type": "sawblade", "x": 600, "y": groundY },
                { "type": "sawblade", "x": 900, "y": groundY },
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(false);

        // TODO 6 and on go here
        // BEGIN EDITING YOUR CODE HERE
        function createSawBlade(x, y) {
            var hitZoneSize = 45;
            var damageFromObstacle = 40;
            var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
            sawBladeHitZone.x = x;
            sawBladeHitZone.y = y;
            game.addGameItem(sawBladeHitZone);
            var obstacleImage = draw.bitmap("img/nade.png");
            sawBladeHitZone.addChild(obstacleImage);
            obstacleImage.x = -60;
            obstacleImage.y = -55;
        }
createSawBlade(800, 230);
createSawBlade(520, 380);
createSawBlade(1500, 307);

var enemy = game.createGameItem("enemy", 25);
var redSquare = draw.bitmap("img/pin2.png");
redSquare.x = -25;
redSquare.y = -25;
enemy.addChild(redSquare);
enemy.x = 1500;
enemy.y = groundY - 60
enemy.velocityX = -5;
enemy.rotationalVelocity = 5;

game.addGameItem(enemy);

enemy.onPlayerCollision = function () {
    game.changeIntegrity(-10)
};
enemy.onProjectileCollision = function () {
    game.increaseScore(100);
    enemy.fadeOut();
};
        // DO NOT EDIT CODE BELOW HERE
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if ((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
