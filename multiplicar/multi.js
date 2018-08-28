const fs = require('fs');
const colors = require('colors/safe');

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) =>{
        if(!Number(base)){
            reject("la base no es un numero");
            return;
        }
        if(!Number(limite)){
            reject("el limite no es un numero");
            return;
        }
        if(limite<=0){
            reject("el limite debe ser mayor a 0");
            return;
        }
        let data = '';
    
        for (let i = 1; i<=limite;i++ ) {
            data+=`${base} * ${i} = ${base*i}\n`;  
        }
        console.log(data);
    });
}

//module.exports.nuevoArchivo = (base) => {
let nuevoArchivo = (base, limite=10) => {
    return new Promise((resolve, reject) =>{
        
        if(!Number(base)){
            reject("no es un numero");
            return;
        }
        
        let data = '';
    
        for (let i = 1; i<=limite;i++ ) {
            data+=`${base} * ${i} = ${base*i}\n`;  
        }
        
        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
          if (err)  
            reject(err);
          else
            resolve(colors.green(`tabla-${base}-al-${limite}.txt`))
          console.log('el archivo a sido creado');
        });
}); 
}

module.exports={
    crearArchivo: nuevoArchivo,
    listarTabla
}
