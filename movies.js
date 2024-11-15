let arrayMovies = ["Turno de día", "30 noches con mi ex", "Bestia", "El monte", "Top gun maverick", "Elvis", "Thor: amor y trueno"];
let arrayEstrenos = ["Counter-Strike","NOP","Vértigo","Nick","Avatar"]

function upperCase(pelicula) {
    arrayMovies.unshift(pelicula.toUpperCase());
    for (let i = arrayMovies.length -1 ; i >= 0; i--) {
        if (arrayMovies[i] === pelicula){
            arrayMovies.splice(i,1)
        }
    }
    return arrayMovies.join(", ");
}
function concatenar(array1,array2) {
    arrayConcatenado= array1.concat(array2);
    return arrayConcatenado.join(", ")
}


// console.log(upperCase("Thor: amor y trueno"));
// console.log(estrenos.join(", "));
// console.log(concatenar(arrayMovies,arrayEstrenos));


