const os = require('os');

    // método para conocer los cpus de nuestra maquina
//console.log("CPU info", os.cpus());
console.table( os.cpus());
    // Conocer la ip de nuestra máquina.
//console.log("IP addrees", os.networkInterfaces().I0.map(i => i.address)); 
//console.log('IP address', os.networkInterfaces()); // solo en windows


    // Conocer la memoria libre de nuestro sistema
console.log("Free memory", os.freemem());

    // Conocer tipo de sistema operativo tenemos
console.log("Type ", os.type());

    // Conocer la versión
console.log("SO version", os.release());

// Imprimir la dirección del usuario
console.log("Usr info", os.userInfo());