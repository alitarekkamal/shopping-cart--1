$(document).ready(function(){
  var info;
  var cart;
  if ($("body").hasClass("home")){
    $.getJSON("product.json", function(data) {
        for (var name in data) {
          datainfo = JSON.stringify(data[name]); // stringify it-->
          //intro= JSON.parse(datainfo);
          //console.log(intro);
          $(".items").append(
            "<div class='col-sm-4'>"+
              "<div class='panel panel-default'>"+
                "<div class='panel-heading text-center'>"+
                    "<div class='label label-default' style='margin-right:11%; margin-left:5%;'>Name: <span class='badge'>"+data[name].name+"</span></div>"+
                    "<div class='label label-default'>Price: <span class='badge price' >"+ data[name].price +" $</span></div>"+
                "</div>"+
                "<div class='panel-body'><img src='"+data[name].img+"' class='img-responsive' style='width:100%' alt='Image'></div>"+
                "<div class='panel-footer'>"+
                  "<div class='btn btn-success add' info='"+ datainfo +"' style='margin-right:11%; margin-left:5%;'>Add to Cart <span class='glyphicon glyphicon-shopping-cart'></span></div>"+
                  "<div class='btn btn-info'>Show Product <span class='glyphicon glyphicon-eye-open'></span></div>"+
                "</div></div></div>");
                //--------------------- defined attr to use ------------------------
                    let items = [];
                    $(".add").click(function() {

                      var info = $(this).attr("info");
                    items.push(info);
                    localStorage.setItem("items", items);

                    console.log(localStorage.getItem("items"));
                    });


          }
      }, "json");

    }else if ( $("body").hasClass("cart")){
      $(document).ready(function(){

          Data = localStorage.getItem("items");

          for (var name in Data){

          $(".inputResult").append(
            '<div class="col-sm-3">'+
              '<div class="well">'+
               '<p class="productName">'+Data+' </p>'+
               '<img src="'+Data[name].img+'" class="img-responsive">'+
              '</div>'+
            '</div>'+
            '<div class="col-sm-9">'+
              '<div class="well">'+
                '<h3> Price: '+Data[name].price+' $</h3><h5><strong>Featuers:</strong> '+Data[name].featuer +' </h5>'+
            '</div></div>'
          );
          }
          //$(".totalcost").append(expandData[name].price+" $");
      });
    }
});
