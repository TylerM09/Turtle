class Bird{


construtor(x,y){

var options = {restitutiion:1, friction:1, density:.8,}

this.body = Bodies.rectangle(x, y, 25, 25, options)

this.height = 25
this.width = 25

World.add(world,this.body)
    
}

display(){

    var pos = this.body.position
    pos.x = mouseX
    pos.y = mouseY
    var angle = this.body.angle
   

      push()
      translate(pos.x, pos.y)
      rectMode(CENTER)
        rect(0, 0 ,this.width, this.height)
        rotate(angle)

        fill("cyan")
        stroke("green")


      pop()

}



}