function Blob(x,y,r){
    this.pos = createVector(x,y)
    this.r = r
    this.velocity = createVector(0,0)
    this.color = [random(255),random(255),random(255)]
    this.mass = 0

    this.checker = function(){
        if(this.pos.x - this.r < -width){
            this.pos.x = -width+this.r;
        }
        if(this.pos.x+this.r > width*6){
            this.pos.x = width*6-this.r;
        }  
        if(this.pos.y- this.r < -height){
            this.pos.y = -height + this.r;
        }  
        if(this.pos.y+this.r > height*6){
            this.pos.x = height*6-this.r;
        }   
    }

    this.update = function(){
        var newVelocity = createVector(mouseX-width/2,mouseY-height/2); // Потому что мы двигаем карту а не сам круг(визуально)
        newVelocity.setMag(3); // берет вектор любой длины и делает его n длины
        this.velocity.lerp(newVelocity,1); // Скорость поворота капли
        this.pos.add(this.velocity);
        
    }

    this.eats = function(other){
        var distance = p5.Vector.dist(this.pos,other.pos);
        if ( distance < this.r + other.r ){
            
            var sum = PI * this.r * this.r + PI * other.r * other.r  // сумма площадей нашей капли и той что сьели
            this.r = sqrt(sum/PI) // area = pi * r^2 => r = sqrt(area/pi)
            
            return true
        } else {
            return false
        }
    }

    this.show = function(){
        fill(this.color); 
         this.checker();
        
        ellipse(this.pos.x,this.pos.y,this.r*2,this.r*2)
    }
}
