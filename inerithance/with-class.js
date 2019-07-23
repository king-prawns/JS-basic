class Person {
  constructor(first, last, age, gender, interests) {
    this.name = {
      first,
      last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }

  greeting() {
    alert(`Hi! I'm ${this.name.first}`);
  }

  farewell() {
    alert(`${this.name.first} has left the building. Bye for now!`);
  }
}

let han = new Person("Han", "Solo", 25, "male", ["Smuggling"]);
