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

const triangle={
    a:      3,
    b:      4,
    angle1: 90,
    angle2: 60,
    getArea(){
        return (this.a*this.b)/2
    },
    getHypotenuse(){
        return Math.sqrt(this.a**2+this.b**2);
    },
    getThirdAngle(){
        return 180-(this.angle1+this.angle2);
    }
}

// In this version, the getArea function references the a and b values already saved in 'triangle', and uses the
//      'this' keyword to do so. Using 'this' within the scope of an object will let you call the values of the
//      keys inside that object. Now finding the area doesn't even require arguments, and you can find it by
//      entering 'triangle.getArea()' into the console. This works for any functions you can think of that 
//      use data we can store in the object itself.

// Without getting into too much detail yet, keep in mind that trying to use 'this' with fat arrow functions
//      will result in different behavior.

// ----------------------------------------------------------------------------------------------------------------

//      CONSTRUCTOR FUNCTIONS

// --------------------------------------------------------------

// Our methods work for 'triangle', and we've future-proofed our functions to any size changes we might make by
//      using 'this', but ultimately we'll still only have one triangle at a time. What if we want to have 
//      multiple triangles at a time that still share the same functionality?

function Triangle(a,b,angle1,angle2){
    if(angle1+angle2>179){
        throw new Error("Triangle cannot exceed 180 degrees");
    }
    this.a=a;
    this.b=b;
    this.angle1=angle1;
    this.angle2=angle2;
    this.getArea=function(){
        return (this.a*this.b)/2
    };
    this.getHypotenuse=function(){
        return Math.sqrt(this.a**2+this.b**2)
    };
    this.getThirdAngle=function(){
        return 180-(this.angle1+this.angle2);
    }
};

//      This is called a constructor function, usually signified by starting with an uppercase letter. If you
//      enter 'Triangle()' into the console, it will return undefined, because you're not technically
//      performing anything, but we can use it for its intended purpose with the keyword 'new'. Just like we 
//      used new to create maps and sets, we can use it to create a new triangle object that shares the
//      same structure as 'triangle' while changing the values.

const acuteTriangle=new Triangle(9,12,60,60);
const rightTriangle=new Triangle(7,24,90,45);
const obtuseTriangle=new Triangle(8,15,100,40);

//      Now acuteTriangle, rightTriangle, and obtuseTriangle are all objects with two predetermined side
//      lengths, two predetermined corner angles, and the functionality to determine the third length or angle.

// ----------------------------------------------------------------------------------------------------------------

//      PROTOTYPES

// --------------------------------------------------------------

// You've likely noticed that there are built in methods, such as 'add', 'random', 'from', 'filter', 'reduce',
//      etc, that come standard in vanilla javascript.

const numberArray=[1,2,3,4,5];

const squaredNumbers=numberArray.map((val)=>val*val);

//      If you enter squaredNumbers into the console, it will return [1,4,9,16,25], because of the map() 
//      method it applied to numberArray. But where did map() come from?

// --------------------------------------------------------------

// Because numberArray is an array, any methods for it will be array methods. Array methods are stored in 
//      object called a 'prototype', which you can see by entering Array.prototype into the console, which will
//      show you the list of all the array methods. You can do this for sets, maps, objects, 'Math', etc, as 
//      well. Prototypes are important because they're built in, but also because they're universal. Nobody had
//      to code a method function for numberArray, and you can use map() on every possible array as well.

// This universality is extremely useful, but is also something to be careful of. You can completely overwrite
//      a standard prototype method, and doing so will impact every data type rather than the specific object,
//      array, set, etc you're working on.

// Array.prototype.push=function(val){
//     console.log(`I don't wanna add ${val} tbh`);
// }

//      If you uncomment the code above, you're likely to get flooded with multiple error messages, and if you
//      try to enter numberAray.push(8), it will return a message about how much it doesn't want to do that and
//      numberArray will be unchanged.

// The only useful application is for something called a polyfill, which we won't cover just yet.

// --------------------------------------------------------------

// While it's ill-advised to change the prototype methods for universal data types, it's also incredibly useful
//      to change the prototypes for your own constructor functions. Going back to Triangle, if you enter 
//      Triangle.prototype, you'll see you automatically have a prototype object even though you never added it.
//      The functions you added to Triangle are carried over, but making them prototypes instead can carry over
//      changes to the methods more dynamically (instead of changing every object), run faster, and save memory
//      since the functions are only created once and shared rather than being called for every object.

function Quadrilateral(width,height){
    this.width=width;
    this.height=height;
};

Quadrilateral.prototype={
    isSquare(){
        return this.width===this.height;
    },
    getArea(){
        return this.width*this.height;
    },
    getPerimeter(){
        return (this.width*2)+(this.height*2);
    },
    getDiagonal(){
        return Math.sqrt(this.width**2+this.height**2);
    }
}

const littleSquare=new Quadrilateral(5,5);
const bigRectangle=new Quadrilateral(20,8);

//      If you enter littleSquare or bigRectangle into the console, unlike acuteTriangle, etc, you won't see
//      the functions in the object it returns. However, you can still run all of the functions in the 
//      Quadrilateral.prototype object. By making those functions prototypes, they take up no space in any
//      quadrilateral we create, but can still be recalled.