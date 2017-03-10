$('.my_selector').click(function(){
   $.get('http://localhost:8080/3000', {}, function(data){
        console.log(data)
   });
});