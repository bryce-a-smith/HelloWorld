// Constructor function for creating a Person object
function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

// Function to display a person's information
function displayPersonInfo(person) {
  console.log(`Name: ${person.firstName} ${person.lastName}`);
  console.log(`Age: ${person.age} years old`);
}

// Function to change the first name of a person
function changeFirstName(person, newFirstName) {
  person.firstName = newFirstName;
}

// Function to change the last name of a person
function changeLastName(person, newLastName) {
  person.lastName = newLastName;
}

// Function to change the age of a person
function changeAge(person, newAge) {
  person.age = newAge;
}

// Create a new Person object
const johnDoe = new Person("John", "Doe", 30);

// Display John's information
displayPersonInfo(johnDoe);

// Change John's first name to "Johnathan"
changeFirstName(johnDoe, "Johnathan");

// Change John's last name to "Smith"
changeLastName(johnDoe, "Smith");

// Change John's age to 35
changeAge(johnDoe, 35);

// Display John's updated information
displayPersonInfo(johnDoe);
