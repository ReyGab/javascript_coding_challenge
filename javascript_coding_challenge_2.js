calculateValidationNumber = (input) => {
	if(typeof input !== 'number') 
  	return 'input is not integer';
    
  if(input.toString().length == 1) {
  	return input;
  } 
	
  let splittedInt = [...input+''].map(n => +n);
  splittedInt = splittedInt.reduce((acc, val) => acc 
  + val, 0)
  if(splittedInt.toString().length > 1) {
   splittedInt = calculateValidationNumber(splittedInt);
  }
  return splittedInt;
}

console.log(calculateValidationNumber());