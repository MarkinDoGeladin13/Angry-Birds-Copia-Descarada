class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.rastro = loadImage("sprites/smoke.png");
    this.trajectory = [];
  }

  display() {
    super.display();
    if(this.body.velocity.x > 10 && this.body.position.x > 200){
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }
    //i++ = distribui as imagens igualmente, se o passaro for rapido, vai ser mais separado, e se for lento, vai ser bem junto
    for(var n = 0; n < this.trajectory.length; n++){
      image(this.rastro, this.trajectory[n][0], this.trajectory[n][1]);
    }
    
  }

}
