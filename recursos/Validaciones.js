$( document ).ready(function() {
  obtenerDatos()
});                     
function obtenerDatos() {
  $.ajax('https://62ccc653a080052930afb985.mockapi.io/paisajes', {
      type: 'GET',  // http method
      success: function (data, status, xhr) {
          for (var indice = 0; indice < data.length; indice++) {
              var ciudad = data[indice].ciudad
              var direccion = data[indice].direccion
              var imagen = data[indice].imagen
              var filaTAbla = '<tr>'
                              + '<td class="prc-25">'+ciudad+'</td>'
                              +  '<td class="prc-25">'+direccion+'</td>'
                              +   '<td class="prc-25"><img src="'+imagen+'" alt="" style="width: 131px"></td>'
                              '</tr>'
              console.log(filaTAbla)
              $("#tabla-cocteles").append(filaTAbla)

          }
      },
      error: function (jqXhr, textStatus, errorMessage) {
          alert("No me pude conectar a la api: error"+errorMessage+" estado:"+textStatus  )
      }
  });
}

function llamarMensaje() {
  const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: '¿Quieres ir a nuestra pagina de contacto?',
      text: "En caso de no querer realizar la accion presionar cancelar!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, redirigeme!',
      cancelButtonText: 'No, Cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
          var url = "formulario.html";
          $(location).attr('href',url);
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
}