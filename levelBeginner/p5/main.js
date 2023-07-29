const a = [1, 2, 5, 6, 52];

function plusGrandNombre(array){
	let max = Math.max.apply(null,array);
	return max;
};

console.log(plusGrandNombre(a));


const personn = {
	fullName : function() {
		return `${this.firstName} ${this.lastName}`
	}
};

const personn1 = {
	firstName : "alex",
	lastName : "mpami"
};

const fullName = personn.fullName.apply(personn1);

console.log(fullName);
