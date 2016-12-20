var counter1 = 0;
var counter2 = 0;
var counter3 = 0;

function three(number) {
	if (number === 1 && counter1 === 0) {
		counter1++
	}
	else if (number === 2 && counter2 === 0) {
		counter2++ 
	}
	else if (number === 3 && counter3 === 0) {
		counter3++
	}
	
	var counter4 = counter1 + counter2 + counter3;

	if (counter4 === 3) {
	alert("You win!")
	};
	
};

