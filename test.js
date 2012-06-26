function Foo(y) {
   this.y = y; 
}


Foo.prototype.x = 10;
Foo.prototype.calcute = function (z) {
    return this.x + this.y +z;
};

