//A prototype chain
var a = {
    a: 10,
    calculate: function (z) {
        return this.x + this.y + z; 
    }
};

var b = {
    b: 20,
    __proto__: a
};

var c = {
    c: 30,
    __proto__: a
};

//call the inherited method
b.calculate(30); //60
c.calculate(40); //80

console.log(a.__proto__);

