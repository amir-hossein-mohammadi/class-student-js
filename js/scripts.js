class Student {
    constructor(
        fullName ,
        age ,
        grade ,
        university ,
        dateOFGraduate ,
        averageMark ,
    ){
        this.fullName = fullName;
        this.age = age;
        this.grade = grade;
        this.university = university;
        this.dateOFGraduate = dateOFGraduate;
        this.averageMark = averageMark;
    }
    get getFullName() {
        return this.fullName;
    }
    set setFullName(fullName){
        this.fullName = fullName;
    }

    details(){
        return this.fullName + " " + this.age + " " + this.grade + " " + this.university + " " + this.dateOFGraduate + " " + this.averageMark;
    }
}

let student = new Student(
    "Amirhossein Mohammadi",
    "26", 
    "bachelor of IT",
    "Elmi-karbordi Anformatic Iran",
    new Date("February 19, 2018"),
    "16.03"
);

console.log(student.details());