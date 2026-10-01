
var myName = "Abdul Mateen";        
var myAge = 21;                  
var isStudent = true;            


var biography = {
  name: myName,
  age: myAge,
  isStudent: isStudent,
  address: {
    street: "123 Main Street",
    city: "Lahore",
    country: "Pakistan"
  },
  degreeProgram: {
    title: "BS Computer Science",
    semester: 5,
    university: "Air University"
  }
};


console.log(
  biography.name + " is " + biography.age + " years old, lives in " +
  biography.address.city + ", " + biography.address.country +
  ", and is in semester " + biography.degreeProgram.semester +
  " of " + biography.degreeProgram.title + " at " +
  biography.degreeProgram.university + "."
);