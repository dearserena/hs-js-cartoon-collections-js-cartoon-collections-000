function dwarfRollCall(dwarves) {
  let dwarveNames = [];
  for(let i = 0; i < dwarves.length; i++){
    dwarveNames.push(`${i + 1}. ${dwarves[i]} `)
  }
  return dwarveNames.join('');
}


 function summonCaptainPlanet(planeteerCalls){
   let summonCall = [];
   for(let i = 0; i< planeteerCalls.length; i++){
     summonCall.push(`${planeteerCalls[i].toUpperCase()}!`);
   }
   return summonCall;
}


function longPlaneteerCalls(words) {
  for(let i = 0; i< words.length; i++){
    if(words[i].length >4){
      return true;
    }
    else {return false}
  }
}


function findTheCheese (foods) {
	for (var i = 0; i < foods.length; i++) {
		if (foods[i] === "cheddar") {
		return "cheddar";
		} else if (foods[i] === "gouda") {
		return "gouda";
		} else if (foods[i] === "camembert") {
		return "camembert";
		}
	}
	return "no cheese!";
}