function createCircle (radius){

    return {
        radius ,
        location : {
            x:1,
            y:2
        },
        draw : function(){
            console.log("Hello I am draw method");
        }
    }
}

let factoryCircle = createCircle(2);

console.log("Object created using factory method is => " + JSON.stringify(factoryCircle));
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log("Hello I am from New method ");
    }
}

let callObject = new Circle(2);

console.log("Object created using new is => " + JSON.stringify(callObject));