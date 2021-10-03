const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var world, engine;
var ball_ob, ball_image;
var ground;
var background_img;
var database;
var basket_img, basket;
var str1;
var firstPos;
var form, player,game;
var playerCount;

var database = firebase.database()

var gameState;

function preload() {
    ball_image = loadImage("images/ball_img.png");
    background_img = loadImage("images/bg.jpg");
    basket_img = loadImage("images/Basket_img.png");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    engine = Engine.create();
    world = engine.world;
    database = firebase.database();

    game=new Game();
    game.getState();
    game.start();
}
function draw() {
    background(255);
    Engine.update(engine);


    
   
}

