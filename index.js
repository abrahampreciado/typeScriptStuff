var message = 'Hold the door';
console.log(message);
var person = {
    name: 'Ned',
    lastName: 'Stark',
    id: 1
};
console.log('person', person);
function greeter(person) {
    return 'Hello ' + person;
}
console.log(greeter('Tyrion'));
var LoggerClass = /** @class */ (function () {
    function LoggerClass(name) {
        this.name = name;
    }
    LoggerClass.prototype.greet = function () {
        console.log('Hi ', this.name);
    };
    return LoggerClass;
}());
var myLogger = new LoggerClass('Hodor');
myLogger.greet();
var myNumber = 666;
console.log('myNumber', myNumber);
//type assertion
var str = '1';
var str2 = str; //str is now of type number 
console.log(typeof (str2));
//typescript object, adding function after object declaration
var character = {
    firstName: 'Jon',
    lastName: 'Snow',
    logName: function () { } //Type template 
};
character.logName = function () {
    console.log(character.firstName);
};
character.logName();
var personObj = {
    firstname: 'Jaime',
    lastname: 'Lannister'
};
var invokeperson = function (obj) {
    console.log('firstName', obj.firstname);
    console.log('lastName', obj.lastname);
};
invokeperson(personObj);
/*

-install typeScript:
node install typescript

-compile index.ts:
tsc index.ts

-run index.js with node

-start up watcher (Watch for file changes and recompile them on the fly):
Ctrl + Shift + B (in VS code), and select tsc: watch -tsconfig.json

-compile multiple files:
tsc file1.ts, file2.ts, file3.ts

*/ 
