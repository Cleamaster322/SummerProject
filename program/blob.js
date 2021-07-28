function Blob(x,y,r){
    this.pos = createVector(x,y)
    this.r = r
     

    this.update = function(){
        var VelocityBlob = createVector(mouseX-width/2,mouseY-height/2); // Потому что мы двигаем карту а не сам круг(визуально)
        VelocityBlob.setMag(3); // берет вектор любой длины и делает его n длины
        this.pos.add(VelocityBlob)
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
        fill(255);   // Поестить чтоб цвет не менялся
        ellipse(this.pos.x,this.pos.y,this.r*2,this.r*2)
    }
}
