class School {
schoolName = "Teachable"   
numberOfBlocks = 5
schoolBus = `Yellow`
Classes = 12  
Playgrounds = 3
Teachers = 20
Students = 679

static TeacherSalaries = 40000
static InstructionalMaterials = `Books&Laptops`
static Topic = "Object-Oriented Programming in Javascript"
static CourseTeacher = "Ezeh Livinus"
static Courses = "Frontend, Backend, ProductDesign, Web3"
static Coordinator = "Tappi" 

personalLog() {
    console.log(this)
}

Exam () {
    console.log(`Start Examinaton`)
}

Quiz () {
    console.log("You have 25mins")
}

Task() {
    console.log("Complete tasks before deadline to earn Points")
}

}
const school = new School()

School.TeacherSalaries = 55000 
school.numberOfBlocks = 7

school.Exam()

school.Quiz()

school.Task()
school.personalLog()

console.log(School)