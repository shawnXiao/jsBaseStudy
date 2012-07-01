/* There are four patterns of invocation in JavaScripte
 *  (1)the methord invocation pattern
 *  (2)the function invocation pattern
 *  (3)the constructor invocation pattern
 *  (4)the apply invocation pattern
 */


/* -------------------- Methord invocation ----------------------- */
//When a function is stored as a property of an object
// we call it a methord.When a method is invoked,this
// is bound to that objcet.If an invocation expression
// contains a refinement(that is , a . dot expression
// or [subscript] expression), it is invoke as a methord

//A method can use this to access the object so that it
//can retrive values from the object or modify the object
var myObject = {
    value: 0,
    increment: function (inc) {
        this.value += typeof inc === 'number' ? inc : 1;
    }
};

myObject.increment();
console.log(myObject.value);    //1

myObject.increment(2);
console.log(myObject.value);    //3

/* -------------------- Function invocation ----------------------- */
//When a function is not the property of an object,then it is invoked
//as a function. 
//When a function is invoked with this pattern,this is bound to the
//global object.
//When the inner function is invoked,this would still be bound to the 
//this variable of the outer function.A consequence of this error is
//that a method cannot employ an inner function to help it do its work 
//because the inner function does not share the method's access to
//the object as its this is bound to the wrong value.
//Fortunately, there is an easy workaround.If the method defines a
//varialbe and assigns it the value of this, the inner function 
//will have access through that variable.
myObject.double = function () {
    var that = this; //Workaround

    var helper = function () {
        that.value += that.value;    
        console.log(this);
    };

    helper();

}

//Invoke double as a methord.

myObject.double();
console.log(myObject.value);

/* -------------------- Constructor invocation ----------------------- */
//JavaScript is a prototype inheritance language.That means that objects
//can inherit properties directly from other objects.The language is 
//class free.
//If a function is invoked with the new prefix,then a new object will be 
//created with a hidden link to the value of the function's prototype 
//member,and this will be bound to that new object

var Quo = function (string) {
    this.status = string;
};

//Give all instance of Quo a public method
Quo.prototype.get_status = function () {
    return this.status;
}

//Make an instance of Quo
var myQuo = new Quo("confused");

console.log(myQuo.get_status());

/* -------------------- Apply invocation ----------------------- */
//Because JavaScript is a functional object-oriented language,functions
//can have methods.
//The apply method lets us construct an array of arguments to use to
//invoke a function.It also lets us choose the value of this.

var statusObject = {    
    status: 'A-OK'
}
console.log(Quo.prototype.get_status.apply(statusObject));
