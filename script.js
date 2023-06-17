let total = 20;
let labelTotal = document.getElementById('total');

labelTotal.append(`${total}`);



function addRow() {
    var tabla = document.getElementById("myTable");
    var fila = tabla.insertRow();

    for(var i = 0; i<=8; i++){
      var celda = fila.insertCell(i);
      celda.innerHTML = '<input type="text" id="data" class="form-control input">';
      if(i==8){
        celda.innerHTML = '<button onclick="eliminarFila(this)" class="btn btn-danger">Eliminar</button>'
      }
    }
  }
 
  function saveData(){
     var inputs = document.getElementById("data"); 
     var values = [];

     for (var i = 0; i < inputs.length; i++) {
      var inputValue = inputs[i].value;
      values.push(inputValue); 
    }

    console.log(values); 
  }

  // '<button onclick="eliminarFila(this)" class="btn btn-danger"> <div class="row">'+
  // '<i class="bi bi-trash3"></i>' + 'Eliminar' +  '</div></button>';

  function eliminarFila(boton) {
    var fila = boton.parentNode.parentNode; // Obtener la fila actual
    fila.parentNode.removeChild(fila); // Eliminar la fila de la tabla
  }