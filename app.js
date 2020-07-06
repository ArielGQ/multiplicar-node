// requireds
// const fs = require('fs');

const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:`, colors.green(archivo)))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');
}

// console.log(argv);

// let base = '8';
// console.log(process.argv);

// let argv2 = process.argv;

// console.log(argv.base);
// console.log('limite', argv.limite);

// let parametro = argv[2];
// let base = parametro.split('=')[1]

// console.log(base);

// let data = '';

// for (let i = 1; i <= 10; i++) {
//     data += (`${ base } * ${ i } = ${ base * i }\n`);
// }

// fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
//     if (err) throw err;
//     console.log(`El archivo tabla-${ base }.txt ah sido creado`);
// });

//console.log(base);


// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado: ${ archivo}`))
//     .catch(e => console.log(e));