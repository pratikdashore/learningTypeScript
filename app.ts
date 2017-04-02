
class helloWorld{
    message : string;
    constructor (message : string){
        this.message = message;
    }

    start(){
        console.log(this.message);
    }
}

var hello = new helloWorld('Hello TypeScript');
var test : number = 5;
hello.start();
console.log(hello.message);
