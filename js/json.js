$(document).ready(function(){
var info;
  if ($("body").hasClass("home")){
      $.getJSON("js/product.json", function(data){
        for (var name in data) {
          datainfo = JSON.stringify(data[name]);
          $(".items").append(
            "<div class='col-sm-4'>"+
            "<div class='panel panel-default'>"+
            "<div class='panel-heading text-center'>"+
            "<div class='label label-default' style='margin-right:11%; margin-left:5%;'>Name: <span class='badge'>"
            +data[name].name+"</span></div>"+
            "<div class='label label-default'>Price: <span class='badge price' >"+ data[name].price +" $</span></div>"+
            "</div>"+
            "<div class='panel-body'><img src='"+data[name].img+"' class='img-responsive' style='width:100%' alt='Image'></div>"+
            "<div class='panel-footer'>"+
            "<div class='btn btn-success add' info='"+ datainfo
            +"' style='margin-right:11%; margin-left:5%;'>Add to Cart <span class='glyphicon glyphicon-shopping-cart'></span></div>"+
            "<div class='btn btn-info'>Show Product <span class='glyphicon glyphicon-eye-open'></span></div>"+
            "</div></div></div>");
      //------------------------------- save to localStorage -------------------------------
              let items = [];
              $(".add").click(function() {
                var info = $(this).attr("info");
                items.push(info);
                localStorage.setItem("items", JSON.stringify(items));
                console.log(localStorage.getItem("items"));
              });
        }
      }, "json");
  }else if ($("body").hasClass("cart")){
      $(document).ready(function(){
          Data = JSON.parse(localStorage.getItem("items"));
          Data.forEach((data)=> {
            data = JSON.parse(data);
            $('.inputResult').append(
              '<div class="col-sm-3">'+
              '<div class="well">'+
              '<p class="productName">'+ data.name +' </p>'+
              '<img src="'+ data.img +'" class="img-responsive">'+
              '</div>'+
              '</div>'+
              '<div class="col-sm-9">'+
              '<div class="well">'+
              '<h3 price="'+ data.price +'"> Price: '+ data.price +' $</h3><h5><strong>Featuers:</strong> '+ data.featuer +' </h5>'+
              '</div></div>'
            );
          });
          var cost = 0;
          Data.forEach((data)=> {
            data = JSON.parse(data);
            cost += data.price
          });
           $(".totalcost").append(cost + " $");

          $(".clear").click(function(){
            localStorage.removeItem("items");
            $(".inputResult").remove();
          });
      });
    }
});
