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
