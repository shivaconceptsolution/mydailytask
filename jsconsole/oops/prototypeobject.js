const student = {
    first_name: 'Mary',
    last_name: 'Green',
    display_full_name: function() {
        return `${this.first_name} ${this.last_name}`;
    }
};

console.log(student.display_full_name());

function Student(first_name, last_name) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.display_full_name = function() {
        return `${first_name} ${last_name}`;
    };
}
const student1 = new Student("Mary", "Green");
console.log(student1.display_full_name());
const student2 = new Student("Lary", "Smith");
console.log(student2.display_full_name());