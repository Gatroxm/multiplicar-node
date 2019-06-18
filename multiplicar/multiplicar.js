const fs = require('fs');
const colors = require('colors');

let ListarTabla = (base, limite = 10) => {
    console.log("=================".green);
    console.log(`Tabla del ${base}`.green);
    console.log("=================".green);
    for (i = 1; i <= limite; i++) {
        console.log(`${ base } * ${ i } = ${ base * i }\n `);
    }

}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor ingresado ${base} no es un número`.red);
            return;
        }

        let data = '';

        for (i = 1; i <= limite; i++) {
            data += `${ base } * ${i} = ${ base * i} \n`;
        }

        fs.writeFile(`tablas/tabla-${ base }-al-${ limite }.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${ base }-al-${ limite }.txt`);
        });
    });
};

module.exports = {
    crearArchivo,
    ListarTabla
};