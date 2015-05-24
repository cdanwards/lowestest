(function () {
  console.log("Hello World");

  'use strict';

  $(document).ready(function() {

    $('#example-button').click(function(){
      alert('button clicked'); 



      var URL = "http://m.lowes.com/IntegrationServices/resources/productList/json/v3_0/4294857975?langId=-1&storeId=10702&catalogId=10051&nValue=4294857975&storeNumber=0595&pageSize=20&firstRecord=0&refinements=5003703";

      $.ajax({
        url: URL,
        type: 'GET',
        dataType: 'json',
        success: function(results){
          var brand = results.response.ProductsList.ProductInfo.p_product_brand_name;
          return console.log("Hello");
        }
    });
  });
});
});
