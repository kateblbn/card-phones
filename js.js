//How is working classes in clean js?

const show = document.querySelector('.show')

class Test{
    constructor(name, text, age) {
        this.name = name
        this.text = text 
        this.age = age
    }
    desciption(age, city) {
        console.log(this.name);
        let template = `
        <div>
        <p>${this.name}, ${this.text}, ${age}, ${city}</p>
        </div>
        `
        show.innerHTML += template;
    }
    data() {
        console.log(this.age);
    }
}
const tr = new Test("John", "text", 33);
const ar = new Test("Mary", "descr", 35);
console.log(tr);
tr.desciption(33, 'London');
ar.desciption(35, 'Paris');
tr.data();