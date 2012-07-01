//A more intresting case is when the inner function has a
//longer lifetime than its outer function

//Earlier, we made a myObject that had a value and an increment
//method.Suppose we wanted to protect the value from unauthorized
//changes.
//Instead of initializing myObject with an object literal,we will
//initialize myObject by calling a function that returna an object
//literal.That function defines a value variable.That variable is
//always availabe to the increment and getValue methods,but the
//function's scope keeps it hidden from the rest of the program:
//We are not assigning a function to myObject.We are assigning the
//result of invoking that function.Notice the () on the last line.
//The function returns an object containg two methods,and those
//methods continue to enjoy the privilege of access to the value
//variable.

var myObject = (function () {
    var value = 0;
    return {
        increment: function (inc) {
            value += typeof inc === 'number' ? inc : 1;
        },
        getValue: function () {
            return value;
        }
    };
}());
myObject.increment(2);
console.log(myObject.getValue());
myObject.increment(2);
console.log(myObject.getValue());

//It is important to understand that the inner function has access
//to the actual variables of the outer functions and not copies in 
//order to avoid the following problem:

//BAD EXAMPLE
//Make a function that assigns event handler functions to an array
//of nodes the wrong way
var add_the_handlers_wrong = function (nodes) {
    var i;
    for (i = 0; i < nodes.length; i += 1) {
        nodes[i].onclick = function (e) {
            console.log(i);
        };
    }
};
//It fails because the handler functions are bound to the varialbe
//i, not the value of teh variable i at the function was made
//END BAD EXAMPLE

//BETTER EXAMPLE
var add_the_handlers_right = function (nodes) {
    var i;
    for (i = 0; i < nodes.length; i += 1) {
        //nodes[0].[[Scope]] === [
        //...higher variable objects
        //AO of the parent context
        //AO fo the lamdda conteext:{i : 0}
        //];
        nodes[i].onclick = (function (i) {
            return function (e) {
                console.log(i);
            };
        }(i));
    }
};
window.onload = function () {
    var li = document.getElementsByTagName('li');
    add_the_handlers_right(li);
}
/* The use of closure
 * you should pay attention to which is the 
 * the outer function of the inner function
 * the outer function's lifetime is longger
 * than the inner function.so the arguments
 * have to be stored in the memory .so if 
 * some functions have a same outer function
 * ,the have the same outer variable.
 * Just rember,found the outer function,
 * found the memory variable.The variable in
 * the memory never change.
 *
 *
 *
 */
