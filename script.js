class Employee {
    constructor(name, salary, hireDate) {
        this.name = name;
        this.salary = salary;
        this.hireDate = hireDate;
    }
    getName() {
        console.log(this.name.toUpperCase());
    }
    getSalary() {
        console.log(this.salary);
    }
    getHireDate() {
        console.log(this.hireDate);
    }
}

class Manager extends Employee {
    constructor(name, salary, hireDate, descriptionOfJob) {
        super(name, salary, hireDate);
        this.descriptionOfJob = descriptionOfJob;
    }
    jobDescription(){
    console.log(this.name + " was hired on " + this.hireDate + " has a salary of " + this.salary + " because they are the " + this.descriptionOfJob + ".");
    }
}

class Designer extends Employee {
    constructor(name, salary, hireDate, experience) {
        super(name, salary, hireDate);
        this.experience = experience;
    }
    yearsExperience() {
        console.log(this.name + " was hired on " + this.hireDate + " has a salary of  " + this.salary + ", and has " + this.experience + " years of experience.");
    }
}

class SalesAssociate extends Employee{
    constructor(name, salary, hireDate, degrees){
        super(name, salary, hireDate);
        this.degrees = degrees;
    }
    degreeCompleted(){
        console.log(this.name + " was hired on " + this.hireDate + " has a salary of " + this.salary + ", and has a degree in " + this.degrees  + "."); 
    }
}

let employee1 = new Manager("Kim", 75000, "8/28/2019", "All-Time Manager");
let employee2 = new Designer("Jim", 68000, "7/12/2017", 4);
let employee3 = new SalesAssociate("Damian", 52000, "1/4/2019", "journalism");

employee1.jobDescription();
employee2.yearsExperience();
employee3.degreeCompleted();