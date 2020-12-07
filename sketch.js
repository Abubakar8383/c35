var ball;
var database
var databaseposition

function setup(){
    createCanvas(500,500);
    database=firebase.database();
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red"; 
    var getinfo = database.ref("Ball/position")
    getinfo.on("value",readop,showerr)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
    database.ref("Ball/position").set({
        x:ball.x+x,
        y:ball.y+y
    })
}
function readop(data){
databaseposition=data.val();
ball.x=databaseposition.x
ball.y=databaseposition.y
}
function showerr(){
    console.log("error")
}
