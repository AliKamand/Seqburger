$('.devourButton').on('click',function(){
  var id = $(this).attr('id');
  console.log(id);

  $.post('/handleDevour',{id:id},function(res){
    console.log('success');
    console.log(res);
  },'json');


  var parent = $(this).parent();
  location.reload();
});
