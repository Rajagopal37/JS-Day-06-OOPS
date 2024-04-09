class Person {
    constructor(name,mail,batch){
        this.name = name;
        this.mail = mail;
        this.batch = batch;
    }
    toString () {
        return `Name: ${this.name}, 
Mail : ${this.mail},
Batch : ${this.batch}`
    }
}

let per01 = new Person ("ABC","abc@gmail.com","FSD-01");

console.log(per01.toString())
document.getElementById('3a').innerHTML = "Details of the persion " + per01.toString()