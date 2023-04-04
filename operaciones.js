const fs = require("fs");

const registrar = (nombre, edad, animal, color, enfermedad) => {
  const nuevoRegistro = { nombre, edad, animal, color, enfermedad };
  const registrosGuardados = fs.readFileSync("citas.json", "utf8");

  let todosRegistros = [];
  if (registrosGuardados) {
    const registrosGuardadosParsed = JSON.parse(registrosGuardados);
    todosRegistros = [...registrosGuardadosParsed, nuevoRegistro];
  } else {
    todosRegistros = [nuevoRegistro];
  }
  fs.writeFileSync("citas.json", JSON.stringify(todosRegistros));
};

const leer = () => {
  const registrosGuardados = JSON.parse(fs.readFileSync("citas.json", "utf8"));
  registrosGuardados.forEach((registro) => {
    console.log(registro);
  });
};

module.exports = { registrar, leer };
