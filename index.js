const { registrar, leer } = require("./operaciones");

const argumentos = process.argv.slice(2);

if (argumentos[0] === "registrar") {
  try {
    registrar(
      argumentos[1],
      argumentos[2],
      argumentos[3],
      argumentos[4],
      argumentos[5]
    );
  } catch (error) {
    console.log(
      "Ocurrio un problema tratando de guardar el registro. Revisa los argumentos entregados!"
    );
  }
} else if (argumentos[0] === "leer") {
  try {
    leer();
  } catch (error) {
    console.log(
      "Se ha producido un error tratando de leer el archivo citas.json!"
    );
  }
} else {
  console.log(
    "La función especificada no existe. Las opciones posibles son registrar y leer"
  );
}
