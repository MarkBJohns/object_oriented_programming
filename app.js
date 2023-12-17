console.log('Object Oriented Programming');
// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

//                                         OBJECT ORIENTED PROGRAMMING

// ----------------------------------------------------------------------------------------------------------------

//      POJO

// --------------------------------------------------------------

// Plain Old JavaScript Object (POJO) refers to the traditional way JavaScript creates and edits objects.

const object1={};
object1.name='Mark';

const object2=new Object();
object2['name']='Mark';

//      Both object1 and object2 use POJO, and entering them in the console will show that the content is the 
//      same. We can also extract information from the objects using Object.keys(), Object.values(), and 
//      Object.entries().

// Object.keys(object1); = ['name']

// Object.values(objec1); = ['Mark']

// Object.entries(object1); = [['name','Mark']] *returns each key/value pair as an array

//      Note that you have to use the 'Object' keyword and then enter the specific function as a parameter, as
//      'object1.keys' will return 'undefined', because the code thinks you're trying to get the value of key
//      named 'keys' rather than executing a code (like it did for object1.name).

// Remember that any keys you add to an object are automatically converted to strings.

// ----------------------------------------------------------------------------------------------------------------

//      METHODS

// --------------------------------------------------------------

// You can add functions inside objects as the value in the key/value pairs, and these functions are called
//      'methods'. Methods can later be called on an object via a period. Think about 'Math'. Math doesn't
//      do anything by itself, but there are various methods (Math.random(), Math.floor(), etc) that you can
//      add to the Math object.

const add=(x,y)=>x+y;
const subtract=(x,y)=>x-y;
const multiply=(x,y)=>x*y;
const divide=(x,y)=>{
    if(y===0){
        return undefined;
    }
    return x/y
};
const square=(x)=>x*x;
const power=(x,y)=>x**y;

const ourMath={
    add:    add,
    subtr:  subtract,
    multi:  multiply,
    divide: divide,
    square: square,
    power:  power
}

//      Now we have our own math object with multiple mathematic functions saved inside. We can now call these
//      functions via the ourMath object:

// ourMath.add(2,2); = 4,     ourMath.power(4); = 16,     ourMath.multiply(3,5); = 15,    etc.

// ----------------------------------------------------------------------------------------------------------------

//      THIS

// --------------------------------------------------------------

// Say we're working with a triangle we need to get information about. We can create an object called 'triangle'
//      and store related information and functions in it.

// const Triangle={
//     a:  3,
//     b:  4,
// }

//      This object has two of its sides saved as 'a' and 'b'.

// Say we want to determine the area of this triangle. We can do so by creating a function to calculate it and
//      add that function to the object as a method:

// const getArea=(x,y)=>((x*y)/2);

//      But the issue with this function is that x and y are actually way too broad, since we don't need this 
//      function to mutliply any two numbers and divide the product by 2, we need to it specifically find the
//      area of the triangle we're working on.

// const getArea=(3,4)=>((3*4)/2);

//      This also doesn't work, both because the arguments are too specific for writing a function, and because
//      the side lengths of the triangle are subject to change.

// We need a way to flexibly use the values already saved inside Triangle as the arguments for our functions, and
//      that's where 'this' comes in.

// --------------------------------------------------------------

const Triangle={
    a:      3,
    b:      4,
    angle1: 90,
    angle2: 60,
    getArea(){
        return (this.a*this.b)/2
    },
    getHypotenuse(){
        return Math.sqrt(this.a**this.b);
    },
    getThirdAngle(){
        return 180-(this.angle1+this.angle2);
    }
}

// In this version, the getArea function references the a and b values already saved in Triangle, and uses the
//      'this' keyword to do so. Using 'this' within the scope of an object will let you call the values of the
//      keys inside that object. Now finding the area doesn't even require arguments, and you can find it by
//      entering 'Triangles.getArea()' into the console. This works for any functions you can think of that 
//      use data we can store in the object itself.

// Without getting into too much detail yet, keep in mind that trying to use 'this' with fat arrow functions
//      will result in different behavior.