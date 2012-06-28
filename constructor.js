//a constructor function
function Foo(y) {
    //which mya create objects
    //by specified pattern: they have after
    //creation own "y" property
    this.y = y;
}

//also "Foo.prototype" stores reference
//to the prototype of newly created objects,
//so we may use it to define shared/inherited
//properties or methods, so the same as in 
//previous example we have:

//inherited property "x"
Foo.prototype.x = 10;
Foo.prototype.calcute = function (z) {
    return this.x + this.y + z;
}

//new create our "b" and " c"
//objects using "pattern" Foo
var b = new Foo(30);
var c = new Foo(40);

console.group();
//the __proto__ of Foo is empty
console.log(Foo.__proto__);
//the __proto__ of b and c are Foo
console.log(b.__proto__);
console.log(c.__proto__);
//the prototype of Foo is Foo
console.log(Foo.prototype);
//c.__proto__ === Foo.prototype
console.log(c.__proto__ === Foo.prototype);
/* every variable have a __proto__ property 
 * the acture value of this propety is determinde
 * by the right of =.
 * if right of = is not a value of "new" ,it will
 * try to found the reference type of the value
 * eg: var c = 1; //c.__proto__===Number
 *      var d = true //d.__proto__ === Boolean
 *      var e = "haha" //e.__proto__ === String
 *  if right of of = is declare via new
 *  the value of __proto__ is the prototype of
 *  the constructor function
 *  eg: function foo(){}
 *      var f = new foo();
 *      //f.__proto__ === foo.prototype;
 *  every function have a prototype property
 */
