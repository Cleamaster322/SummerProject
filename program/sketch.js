var blob;
var zoom = 1;

var blobs = []

function setup(){
    createCanvas(600,600);
    blob = new Blob(0,0,64);
    for ( var i=0; i<600;i++){


        var x = random(-width,width*2)
        var y = random(-height,height*2)
        blobs[i] = new Blob(x,y,10);
    }
}

function draw(){
    background(0)

    translate(width/2,height/2) //камеру на центр карты 
    var newzoom = 64 / blob.r // 64 - стартовый радиус blob
    zoom = lerp(zoom,newzoom,0.1); // lerp - плавный переход 
    scale(zoom)

    translate(-blob.pos.x,-blob.pos.y)
    
    blob.show();
    blob.update();
    console.log(blobs)
    for ( var i=blobs.length-1; i>=0;i--){
        if ( blob.eats(blobs[i]) ){
            blobs.splice(i,1);
        }
        if ( blobs[i] != undefined ) // Иногда появлсяется ошибка
        blobs[i].show();
    } 
}