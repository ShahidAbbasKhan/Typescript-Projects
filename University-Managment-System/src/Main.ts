class Person{
    name:string;
    age:number;

    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
    getName(){
        return this.name;
    }
}

class Student  extends Person{
    static Id:number=0;
    rollNumber:string;
    courses:Course[]=[];
    Std_Id:number;
    constructor(name:string,age:number,rollNumber:string){
        super(name,age);
        this.rollNumber=rollNumber; 
        this.Std_Id= ++Student.Id; 
    }
    registerForCourse(course:Course){
        this.courses.push(course);
    }
}

class Instructor extends Person{
    static Id:number=0;
    private salary:number;
    Inst_Id:number;
    courses:Course[]=[];
    constructor(name:string,age:number,salary:number){

        super(name,age)
        this.salary= salary;
        this.Inst_Id= ++Instructor.Id;
    }
    assignCourses(course:Course){
        this.courses.push(course);
    } 
}

class Course {
    id:string;
    name:string;
    students:Student[]=[];
    instructor!:Instructor;
    constructor(Id:string,name:string){
        this.id=Id;
        this.name=name;
    }
    addStudents(student:Student){
        this.students.push(student);
        student.registerForCourse(this)
    }
    
    setInstructor(instructor:Instructor){
        this.instructor= instructor;
        instructor.assignCourses(this);
    }
}

class Department{
    name:string;
    courses!:Course[];
    constructor(name:string){
        this.name= name;
    }
    addCourses(course:Course){
        this.courses.push(course);

    }
}