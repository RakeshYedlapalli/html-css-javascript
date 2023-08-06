//factory Function to create an object

function createCircle(radius){

    return {
        radius : radius,
        draw : function(){
            //console.log('drawn');
        }
    }
}
// Constructor Function
const circle = createCircle(2);
//console.log(circle.draw());
//console.log(circle);

function   Circle(radius,length){
    console.log('this is ',this);
    this.radius = radius;
    this.draw = function() {
        console.log('drawn');
    }
}

const Circle2 = Function('radius',`
this.radius = radius;
this.draw = function() {
    console.log('drawn');
}
`);

const circleObjectWithNewKeyword =  new Circle2(1);



//console.log("this is c",circleObjectWithNewKeyword);


let num  = new Number();
let character  = new String();
let booleanValue1  = new Boolean();
console.log(num);
console.log(character);
console.log(booleanValue);
