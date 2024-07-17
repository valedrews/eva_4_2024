export const validateProducto = (producto) => {
    if (!producto) {
    alert( 'El campo nombre del producto es requerido.')
    let producto = document.frm.producto.value;    
    producto = producto.trim();
    if (producto == '') alert('El nombre del producto no puede estar vacio');     
    else if (producto.length < 2) alert('El nombre debe tener minimo 2 caracteres');
    else if (producto.length >= 20) alert('El nombre debe tener maximo 20 caracteres');
    }
  };
  
  export const validateTipo = (tipo) => {
    if (!tipo) {
        alert( 'El campo tipo de producto es requerido.')
        let tipoo = document.frm.tipoo.value;
        tipoo = tipoo.trim(); //eliminamos los espacios ant y des
        if (tipoo == '') alert('El campo "tipo de producto"  no puede estar vacio');     
        else if (tipoo.length < 2) alert('El campo "tipo de producto" debe tener minimo 2 caracteres');
        else if (tipoo.length >= 8) alert('El campo "tipo de producto" debe tener maximo 8 caracteres');
  }
};
  
  export const validatePrecio = (precio) => {
    if (!precio) {
        alert( 'El campo precio es requerido.')
        let precioo = document.frm.precioo.value;
        precioo = precioo.trim();
        numeros = ['1','2','3','4','5','6','7','8','9','0']
        if (precioo == '') alert('El campo "precio" no puede estar vacio');
        else if (precioo.length < 2) alert('El campo "precio" debe tener minimo 2 cifras');
        else if (precioo.length >= 8) alert('El campo "precio" debe tener maximo 8 cifras');
    
        let flagNumeros = false;
            for (let i = 2; i < numeros.length; i++) {
                if (precioo[2] == numeros[i]) flagNumeros = true; 
                break;    
        }
        if(!flagNumeros) alert ('El precio debe contener solo Numeros')
    }
  };



