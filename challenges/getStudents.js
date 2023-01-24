class Classroom {
    constructor(title, hasTeachigAsistant, classlist){
        this.title = title;
        this.hasTeachigAsistant = hasTeachigAsistant;
        this.classlist = classlist;
    }
getStudents(){
    if (this.hasTeachigAsistant){
        this.classlist.shift();
        this.classlist.shift();
        return this.classlist.join();
    }
    this.classlist.shift();
    return this.classlist.join();
}
}

const classA = new Classroom("A", true, ["Ali1", "hadis2", "Nafis3", "Ramin4"]);
const classB = new Classroom("B", false, ["1", "2", "3", "4"])
console.log(classA.getStudents());
console.log(classB.getStudents())


// ******************** Destructure array *****************
function getListStudents(classRoom){
    let {hasTeachigAsistant, classList} = classRoom;
    let teacher, teacherAssistant, students;

    if (hasTeachigAsistant){
        [teacher, teacherAssistant, ...students] = classList
    }else{
        [teacher, ...students] = classList
    }
    return students

}
console.log(getListStudents(
    {hasTeachigAsistant: true, 
    classList : ["Ali1", "hadis2", "Nafis3", "Ramin4"]}
));
console.log(getListStudents(
    {hasTeachigAsistant: false, 
    classList : ["1", "2", "3", "4"]}
));