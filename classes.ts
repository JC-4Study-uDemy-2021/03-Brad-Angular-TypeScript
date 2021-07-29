interface UserInterface {
  name: string;
  email: string;
  age: number;
  register();
  payInvoice();
}

// Class
class User implements UserInterface {
  // fields
  //private name: string; //means you canno access outside of the class
  name: string;
  email: string;
  age: number;

  // unsure
  constructor(name: string, email: string, age: number) {
    this.name = name;
    this.email = email;
    this.age = age;

    console.log(`user: ${this.name}`);
  }

  // Method
  register() {
    console.log(`${this.name} some text`);
  }

  payInvoice() {
    console.log(`${this.name} pay invoice`);
  }
}

// inheritance
class Member extends User {
  id: number;

  constructor(id: number, name: string, email: string, age: number) {
    super(name, email, age);
    this.id = id;
  }

  payInvoice() {
    super.payInvoice();
  }
}

// let john = new User("john", "a@age.com", 30);

//console.log(john.name); // will get an error with this because set to private
//console.log(john.age);

// john.register();

// let phil: User = new Member(1, "Phil", "b@bigint.com", 55);
// phil.payInvoice();
