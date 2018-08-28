const argv = require("./config/yargs").argv;
const colors = require("colors");

const { crearArchivo, listarTabla } = require("./multiplicar/multi");

//let argv2 = process.argv;
let comando = argv._[0];
//let base = argv[2].split("=")[1];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite).then(archivo => console.log(`Archivo creado ${archivo}`)).catch(err => console.log(err));
    break;
    case 'crear':
        crearArchivo(argv.base, argv.limite).then(archivo => console.log(`Archivo creado ${archivo}`)).catch(err => console.log(err));
    break;
    default:
    console.log("Comando no reconocido");
}

//console.log('Limite',argv.limite);