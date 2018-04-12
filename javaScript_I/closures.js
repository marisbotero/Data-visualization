function saludarFamilia(apellido){
	return function saludarMiembroDeFamilia(nombre){
		console.log(`Hola ${nombre} ${apellido}`)

	}
}

const saludarBotero = saludarFamilia("Botero")
const saludarGonzalez= saludarFamilia("Gonzalez")
 /*
function saludarBotero(nombre){
	console.log(`Hola ${nombre} Botero`)
}

function saludarGonzalez(nombre){
	console.log(`Hola ${nombre} Gonzalez`)
}
*/
saludarBotero("Maris")
saludarBotero("Lucky")

saludarGonzalez("Beatriz")
saludarGonzalez("Gloria")
