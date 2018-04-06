function platzom(str){
	let translation = str

	// si la palabra termina en ar, se le quita eso caracteres

	if(str.toLowerCase().endsWith('ar')){
		translation = str.slice(0, -2)
		
	}

	//si la palabra incia con z se le añade pe al final
	if(str.toLowerCase().startsWith('z')){
		translation = translation + 'pe'
	}

	// Si la palabra traducida tiene 10 o más letras,
    // se debe partir a la mitad y unir con un guión del medio
    const length = translation.length
    if (length >= 10) {
    	const firstHalf = translation.slice(0, Math.round(length / 2))
    	const secondHalf = translation.slice(Math.round(length / 2))
    	translation = `${firstHalf}-${secondHalf}`
     }
    //la misma palabra intercambiando mayusculas y minisculas
    const reverse = (str) => str.split('').reverse().join('')
  
    function minMay(str) {
    	const length = str.length
    	let translation = ''
    	let capitalize = true
    	for (let i = 0; i < length; i++) {
    		const char = str.charAt(i)
    		translation += capitalize ? char.toUpperCase() : char.toLowerCase()
    		capitalize = !capitalize
    	}

    return translation
  }

    if (str == reverse(str)) {
    return minMay(str)
    }

	return translation
}

console.log(platzom('programar')) //program
console.log(platzom('zorro')) //zorrope
console.log(platzom('zarpar')) //zarppe
console.log(platzom('abecedario'))
console.log(platzom('sometemos'))




