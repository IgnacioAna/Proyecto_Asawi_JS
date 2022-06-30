//------------------------------------------------------------------------------------------------------------------

//SIMULADOR Proyecto Asawi

console.log("<----Bienvenidos a Asawi---->")

let precio = 1000;
let stock = 10;
let lista_productos = ["Asawi-Bon" , "Asawi-Brie" , "Asawi-Mat" , "Asawi-Roty" , "Asawi-Vegetariano"];
let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido");
let direccion = prompt("Ingrese su direccion");
let email = prompt("Ingrese su correo");
let sandwich = prompt("Ingrese el sandwich que desea" , lista_productos);
let cantidad = parseInt(prompt("Ingrese cantidad de unidades"));
let cantidad_cuotas = parseInt(prompt("Ahora ingrese en cuantas cuotas"));


let lista_clientes = [];

class Base_de_datos {
    constructor(nombre, apellido, direccion, email) {

        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.email = email;
       
    }

    saludar(){
        console.log("Bienvenido/a:" ,  this.nombre)
    }

    get_datos(){
        console.log("<---Datos del cliente--->");
        console.log("Nombre:" , this.nombre);
        console.log("Apellido:" , this.apellido);
        console.log("Direccion:" , this.direccion);
        console.log("Email:" , this.email);
    }
    
}

let nuevo_cliente = new Base_de_datos(nombre, apellido, direccion, email);

lista_clientes.push(nuevo_cliente);

nuevo_cliente.saludar();
nuevo_cliente.get_datos();

console.log(lista_clientes);



class Producto {
    constructor(nombre, precio, stock) {

        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
       
    }

    get_datos() {
        console.log("Nombre:" , this.nombre);
        console.log("Precio:" , this.precio);
        console.log("Stock:" , this.stock);
    }
    
}

let producto_bon = new Producto(lista_productos[0] , precio , stock);
let producto_brie = new Producto(lista_productos[1] , precio , stock);
let producto_mat = new Producto(lista_productos[2], precio, stock );
let producto_roty = new Producto(lista_productos[3], precio, stock );
let producto_vegetariano = new Producto(lista_productos[4], precio, stock );


console.log("<---Producto 1--->")
producto_bon.get_datos();
console.log("<---Producto 2--->")
producto_brie.get_datos();
console.log("<---Producto 3--->")
producto_mat.get_datos();
console.log("<---Producto 4--->")
producto_roty.get_datos();
console.log("<---Producto 5--->")
producto_vegetariano.get_datos();



let total = cantidad * precio;
let total_con_interes = 0;
let valor_de_cuota = 0;

function calcular_valores(){
    if (cantidad_cuotas == 0){
       
        total_con_interes = total
        valor_de_cuota = 0
    } 
    else if (cantidad_cuotas == 1){
       
        total_con_interes = total
        valor_de_cuota = total
    }    
    else if (cantidad_cuotas == 2){
      
        total_con_interes = total * 1.05
        valor_de_cuota = total_con_interes / cantidad_cuotas
    }
    else if (cantidad_cuotas == 3) {

        total_con_interes = total * 1.10
        valor_de_cuota = total_con_interes / cantidad_cuotas
    }
    else {
        total_con_interes = 0 
        valor_de_cuota = 0 
    }
}
calcular_valores();
console.log('El sub total es:', total);
console.log('Total con interes:', total_con_interes);
console.log('Cantidad de Cuotas:', cantidad_cuotas);
console.log('Monto por Cuota:', valor_de_cuota);