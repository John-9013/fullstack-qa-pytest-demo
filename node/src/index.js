export function saludar(nombre) {
  return `Hola, ${nombre}!`;
}

if (process.argv[1]?.endsWith("index.js")) {
  console.log(saludar("mundo"));
}
