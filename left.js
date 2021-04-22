class Left{
    constructor(x,y,width,height){
    
    var options = {
        'restitution':1,
       
    }
    this.body = Bodies.rectangle(x,y, width, height, options);
    this.width = width;
    this.height = height; 
}
display(){
    var pos =this.body.position;
   
    rectMode(CENTER);
    fill("red");
    rect(390,610,100,10);
  }
}