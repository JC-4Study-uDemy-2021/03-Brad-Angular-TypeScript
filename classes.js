var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Class
var User = /** @class */ (function () {
    // unsure
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        console.log("user: " + this.name);
    }
    // Method
    User.prototype.register = function () {
        console.log(this.name + " some text");
    };
    User.prototype.payInvoice = function () {
        console.log(this.name + " pay invoice");
    };
    return User;
}());
// inheritance
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    function Member(id, name, email, age) {
        var _this = _super.call(this, name, email, age) || this;
        _this.id = id;
        return _this;
    }
    Member.prototype.payInvoice = function () {
        _super.prototype.payInvoice.call(this);
    };
    return Member;
}(User));
// let john = new User("john", "a@age.com", 30);
//console.log(john.name); // will get an error with this because set to private
//console.log(john.age);
// john.register();
// let phil: User = new Member(1, "Phil", "b@bigint.com", 55);
// phil.payInvoice();
