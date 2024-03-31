const arrayProductos=[{
    nombre: "PC HP",
    categoria:"electrodomesticos",
    precio: 1000

},

{
    nombre:"Auriculares Xiaomi",
    categoria:"electrodomesticos",
    precio:200
},

{
    nombre:"Sandia",
    categoria:"frutas",
    precio:10
},
{
    nombre:"zapatillas vans",
    categoria: "zapatillas",
    precio:2000
},
{
    nombre:"mango",
    categoria:"frutas",
    precio: 15
}
];

function mostrarPromedio(prom){
labelProm=document.querySelector("#lblPromedio");
labelProm.innerHTML=prom;
}
function obtenerOrden(sl,array){
    switch(parseInt(sl)){
        case 1:
            array.sort((a,b)=>b.precio-a.precio);
            
            break;
        case 2:
            array.sort((a,b)=>a.precio-b.precio);
            break;
        case 3:
            array.sort((a, b) => {
                const aL = a.nombre.toLowerCase(); 
                const bL = b.nombre.toLowerCase(); 
                if (aL > bL) {
                    return 1;
                }
                if (aL < bL) {
                    return -1;
                }
                return 0;
            });

        break;
            
    }
}

function mostrarResultados(array){
    let sectionProductos= document.querySelector("section.texto");
    sectionProductos.innerHTML="";
    if(array.length==0){
        sectionProductos.innerHTML="<label class='rojo'>Su busqueda no coincide con nuestros registros</label>";
    }
        array.forEach((prod)=>{
            
            sectionProductos.innerHTML+=`
            <article class="borde">
            <h2>
            ${ prod.nombre}

    </h2>
    <p>
    categoria:
    ${
        prod.categoria
}
            </p>
            <p>
            $
    ${prod.precio}
            </p>
            
        
        </article>
        `
    }   
        
    )
}
function calcularPromedio(array){
    let suma=array.reduce((acc,producto)=>acc+producto.precio,0);
    let cantidad=array.reduce((cont)=>cont+1,0);
    console.log(suma);
    console.log(cantidad);
    return suma/cantidad;
}

const sl=document.getElementById("slOrden").value;
console.log(sl);
obtenerOrden(sl,arrayProductos);
mostrarResultados(arrayProductos)
let promedio=calcularPromedio(arrayProductos);
mostrarPromedio(promedio);
document.getElementById("btnBuscar").addEventListener("click",
()=>{
    
    let slClick=document.getElementById("slOrden").value;
    const txt=document.getElementById("txtFiltro").value.replace(/\s/g, '').toLowerCase();
    console.log(txt);
    if(txt!=""){
        arrayFiltrado=arrayProductos.filter((el)=>el.categoria.replace(/\s/g, '').toLowerCase()==txt ||el.nombre.replace(/\s/g, '').toLowerCase()==txt);
    obtenerOrden(slClick,arrayFiltrado);
    console.log(arrayFiltrado);
    mostrarResultados(arrayFiltrado);
    promedio=calcularPromedio(arrayFiltrado);
    mostrarPromedio(promedio);
    }else{
        obtenerOrden(slClick,arrayProductos);
        mostrarResultados(arrayProductos);
        promedio=calcularPromedio(arrayProductos);
        mostrarPromedio(promedio);
    }
    }
    
    
    




);



