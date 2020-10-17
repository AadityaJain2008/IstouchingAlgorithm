function istouching(object,object1){
    if (object.x - object1.x < object1.width/2 + object.width/2
      && object1.x - object.x < object1.width/2 + object.width/2
      && object.y - object1.y < object1.height/2 + object.height/2
      && object1.y - object.y < object1.height/2 + object.height/2) {
    object.shapeColor = "red";
    object1.shapeColor = "red";
  }
  else {
    object.shapeColor = "green";
    object1.shapeColor = "green";
  }
  } 