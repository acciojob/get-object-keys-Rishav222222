//your JS code here. If required.
const student = {
	name : "Rishav"
}
Object.prototype.getKeys = function(){
	return Object.keys(this)
}
console.log(student.getKeys())