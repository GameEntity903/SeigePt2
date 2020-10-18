class Block extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
  }
  display(){
    if(this.body.speed< 3){
      super.display();
    }
    else{
     push();
     this.visibility = this.visibility - 10;
     tint(255,this.visibility);
     World.remove(world,this.body);
     pop();
    }
   }
};
