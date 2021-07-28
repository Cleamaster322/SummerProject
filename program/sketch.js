var blob;
var zoom = 1;

var blobs = []


function setup(){
    createCanvas(window.innerWidth-10,window.innerHeight-30);

    blob = new Blob(0,0,64);
    for ( var i=0; i<100;i++){


        var x = random(-width,width)
        var y = random(-height,height)
        blobs[i] = new Blob(x,y,10);
    }
}

function draw(){
    background(255,255,255)
    translate(width/2,height/2) //камеру на центр карты 
    var newzoom = 64 / blob.r // 64 - стартовый радиус blob
    zoom = lerp(zoom,newzoom,0.1); // lerp - плавный переход 
    scale(zoom)

    translate(-blob.pos.x,-blob.pos.y)
    
    blob.show();
    console.log(blob.x, blob.y)
    blob.update();
    // console.log(blob.pos)
    for ( var i=blobs.length-1; i>=0;i--){
        if ( blob.eats(blobs[i]) ){
            blobs.splice(i,1);
            blobs.push(new Blob(random(-width,width*2),random(-height,height*2),10)) // Спавн новой еды
        }
        if ( blobs[i] != undefined ) // Иногда появлсяется ошибка
        blobs[i].show();
    } 
}
