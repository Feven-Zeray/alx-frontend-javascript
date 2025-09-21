// task_1/js/main.ts

// ✅ Task 1 – Teacher Interface
interface Teacher {
  readonly firstName: string; // cannot be modified after initialization
  readonly lastName: string; // cannot be modified after initialization
  fullTimeEmployee: boolean; // must always be present
  yearsOfExperience?: number; // optional
  location: string; // must always be present
  [key: string]: any; // allow additional attributes
}

const teacher3: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: false,
  location: "London",
  contract: false,
};

console.log("Teacher:", teacher3);

// ✅ Task 2 – Directors Interface Extends Teacher
interface Director extends Teacher {
  numberOfReports: number; // mandatory for directors
}

const director1: Director = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: true,
  location: "London",
  numberOfReports: 17,
};

console.log("Director:", director1);

// ✅ Task 3 – printTeacher Function + Interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  readonly fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Function using object destructuring and the specified return string
function printTeacher({ firstName, lastName }: {
  firstName: string;
  lastName: string;
}): string {
  return `${firstName}. ${lastName}`;
}

// Example usage
console.log(
  "PrintTeacher:",
  printTeacher({ firstName: "John", lastName: "Doe" })
);

// ✅ Task 4 – StudentClass + Interfaces

// Interface for constructor parameters
interface StudentProps {
  firstName: string;
  lastName: string;
}

// Interface for the class methods
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Class declaration with constructor
class StudentClass {
  firstName: string;
  lastName: string;

  constructor(student: StudentProps) {
    this.firstName = student.firstName;
    this.lastName = student.lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage
const student = new StudentClass({ firstName: "Jane", lastName: "Smith" });
console.log("Student Name:", student.displayName());
console.log("Student Work:", student.workOnHomework());
