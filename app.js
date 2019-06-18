const argv = require('./config/yargs').argv;
var colors = require('colors/safe');
const { crearArchivo, ListarTabla } = require('./multiplicar/multiplicar');


let commando = argv._[0];

switch (commando) {
    case 'listar':
        ListarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:`, colors.green(archivo)))
            .catch(e => console.log(e.red));
        break;
    default:
        console.log('Comando no reconocido'.red);
}