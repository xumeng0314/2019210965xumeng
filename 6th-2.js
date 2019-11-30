class Father {
    constructor(age,tall){
        name;
        this.age = age;
        this.tall = tall;
    }
    toString() {
        return '(' + this.age + ', ' + this.tall + ')';
      }
}
class Son {
    constructor(age,tall){
        name;
        this.age = age;
        this.tall = tall;

    }
    toString() {
        return '(' + this.age + ', ' + this.tall + ')';
      }
}
Son.prototype = new Father();
let Son1 = new Son('李华');
let Father1 = new Father('李明');
console.log (Son1);
console.log (Father1);
let Father2 = new Father ('38','178cm',function(){
    alert(this.age,this.tall)
})
let Son2 = new Son ('18','181cm', function() {
    alert(this.age,this.tall)
})