let img = $("img");
img.hide();

$("#boton").on("click", function () {
  img.show();
  $.ajax({
    type: "GET",
    url: "http://localhost:5000/amigos",
    success: (data) => {
      let info;
      $("#lista").empty(info);

      data.forEach((element) => {
        info = document.createElement("li");
        info.innerText = element.name + " id:" + element.id;
        $("#lista").append(info);
      });
      img.hide();
    },
  });
});

$("#search").on("click", function () {
  let entrada = $("#input").val(); //obten el valor del campo de busqueda
  img.show();
  $.ajax({
    type: "GET",
    url: "http://localhost:5000/amigos",
    success: (data) => {
      if (entrada !== data.id) {
        $("#amigo").text("Este amigo no esta");
      }
      img.hide();
    },
  });

  $.ajax({
    type: "GET",
    url: `http://localhost:5000/amigos/${entrada}`,
    success: (data) => {
      $("#amigo").text(data.name);
      img.hide();
    },
  });
});


$("#delete").click (() => {
    let entradaDelete = $("#inputDelete").val();
    $.ajax ({
        type: "DELETE",
        url: `http://localhost:5000/amigos/${entradaDelete}`,
        success: data => {
       
                
            $("#success").text('Tu amigo fue borrado con éxito');
            
        }
    })
})
// $("#buscar").on("click", function () {

//     $.ajax({
//       type: "GET",
//       url: "http://localhost:5000/amigos",
//       success: (data) =>
//       if($(data.id) === )
//     });
//     })

// let friendsHandler = function () {
//   let lista = $("#lista");
//   lista.empty();

//   $.get("http://localhost:5000/amigos", (response) => {
//     response.map((amigo) => {
//       let elementoHTML = document.createElement("li");
//       elementoHTML.innerText = `${amigo.name} es tu amigo numero: ${amigo.id}`;

//       lista.append(elementoHTML);
//     });
//   });
// };

// let searchHandler = function () {
//   // let id = document.querySelector("#input").value
//   let id = $("#input").val();

//   if (id) {
//     $.get(`http://localhost:5000/amigos/${id}`, (response) => {
//       $("#amigo").html(`Nombre: ${response.name}`);
//     });
//   } else {
//     $("#amigo").html("Inserta un id");
//   }
// };

// let deleteHandler = function () {
//   let id = document.querySelector("#inputDelete").value;

//   if (id) {
//     $.ajax({
//       type: "DELETE",
//       url: `http://localhost:5000/amigos/${id}`,
//       success: () => {
//         $("#success").html("Tu amigo fue eliminado con exito");
//         friendsHandler();
//       },
//     });
//   } else {
//     $("#success").html("Inserta un id");
//   }
//   // vaciarId(id = "") ;
// };

// $("#boton").on("click", friendsHandler);
// $("#search").on("click", searchHandler);
// $("#delete").on("click", deleteHandler);
