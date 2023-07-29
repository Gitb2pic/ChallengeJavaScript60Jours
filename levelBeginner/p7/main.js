let chaineDeCarractere = "at Function.executeUserEntryPoint [as runMain]"
 
 function inverseur(chaine){
 	let inverse = chaine.split("").reverse().join("");
 	return inverse;
 }


 console.log(inverseur(chaineDeCarractere));