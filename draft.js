var id = 1;
var company = 'Traversy Media';
var isPublished = true;
var x = "hello";
var ids = [1, 2, 3, 4, 5];
var arr = [1, true, 'hello'];
// TUPLE
var person = [1, 'hello', true];
var employee;
employee = [
    [1, "String"],
    [56, "Homerun"],
];
// UNIONS
var union = 22;
union = 'twenty two';
// eNUM / eNUMERATED TYPE
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 9] = "Up";
    Direction1[Direction1["down"] = 10] = "down";
    Direction1[Direction1["left"] = 11] = "left";
    Direction1[Direction1["right"] = 12] = "right";
})(Direction1 || (Direction1 = {}));
var userName = {
    id: 3,
    name: 'saugat'
};
// Type assertion
var cid = 1;
//  two ways we can assert type
// 1st
var customerId = cid;
customerId = 4;
// 2nd
var personalId = cid;
personalId = 'XYZ30213';
// functions
function addNum(x, y) {
    return x + y;
}
// Void : if the function does not return anything
function log(message) {
    console.log(message);
}
var user1 = {
    id: 3,
    name: 'Saugat'
};
var multiply = function (x, y) {
    return x * y;
};
var Person = /** @class */ (function () {
    function Person(id, name) {
        this.id = id;
        this.name = name;
    }
    Person.prototype.register = function () {
        return "".concat(this.name, " is now a registered User.");
    };
    return Person;
}());
var saugat = new Person(1, 'Saugat Giri');
var rujan = new Person(3, 'Rujan Shrestha');
console.log(saugat, rujan);
console.log(customerId, personalId, user1, saugat.register(), rujan.register());
