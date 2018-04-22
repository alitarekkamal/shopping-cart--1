$(document).ready(function(){
  if ($("body").hasClass("home")){
    $.getJSON("product.json", function(data) {
        for (var name in data) {
          $(".items").append(
            "<div class='col-sm-4'>"+
              "<div class='panel panel-default'>"+
                "<div class='panel-heading text-center'>"+
                    "<div class='label label-default' style='margin-right:11%; margin-left:5%;'>Name: <span class='badge'>"+data[name].name+"</span></div>"+
                    "<div class='label label-default'>Price: <span class='badge price' >"+ data[name].price +" $</span></div>"+
                "</div>"+
                "<div class='panel-body'><img src='"+data[name].img+"' class='img-responsive' style='width:100%' alt='Image'></div>"+
                "<div class='panel-footer'>"+
                  "<div class='btn btn-success add'img='"+data[name].img+"' featuer='"+data[name].featuer+"' price='"+data[name].price+"' name='"+data[name].name +"' id='"+ data[name].id +"' style='margin-right:11%; margin-left:5%;'>Add to Cart <span class='glyphicon glyphicon-shopping-cart'></span></div>"+
                  "<div class='btn btn-info'>Show Product <span class='glyphicon glyphicon-eye-open'></span></div>"+
                "</div></div></div>");
                //--------------------- defined attr to use ------------------------
              var id;
              var img;
              var price;
              var name;
              var featuer;
              $(".add").click(function(){
                img = $(this).attr('img');
                id = $(this).attr('id');
                price = $(this).attr('price');
                name = $(this).attr('name');
                featuer = $(this).attr('featuer');
                  localStorage.setItem("id",id);
                  localStorage.setItem("name", name);
                  localStorage.setItem( "price",price);
                  localStorage.setItem( "img",img);
                  localStorage.setItem( "featuer",featuer);
                });
          }
      }, "json");

    }else if ( $("body").hasClass("cart")){
      $(document).ready(function(){

          var setname = localStorage.name;
          var setimg = localStorage.img;
          var setprice = localStorage.price;
          var setid = localStorage.id;
          var setfeatuer = localStorage.featuer;

          $(".inputResult").append(
            '<div class="col-sm-3">'+
              '<div class="well">'+
               '<p class="productName">'+setname+' </p>'+
               '<img src="'+setimg+'" class="img-responsive">'+
              '</div>'+
            '</div>'+
            '<div class="col-sm-9">'+
              '<div class="well">'+
                '<h3> Price: '+setprice+' $</h3><h5><strong>Featuers:</strong> '+setfeatuer +' </h5>'+
            '</div></div>'
          );
          $(".totalcost").append(setprice+" $");
      });
    }
});
