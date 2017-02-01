console.log('test')

$( document ).ready(function() {
// //alternatively, $(function(){
//   //code here
// })

  $('#myButton').on("click", function(){

    alert("You clicked me!")
    event.stopPropagation()
  })

  $('#container').on('click', function(){
    alert('You clicked the container div!')
  })

  $('#drinks').append('<li>Coke</li> <li>Lemonade</li>')

  // $('#foods').append('<li>burger</li> <li>hotdogs</li>')

  var foods = ["burger", "hotdog"]
  for (var i=0; i<foods.length; i++) {
    $('#foods').append('<li>' + foods[i] + '</li>' )
  }

  $('#addFood').on('click', function() {
    if($('#foodInput').val() != '') {
    var  newFood = $('#foodInput').val()
    $('#foods').append('<li>' + newFood + '</li>')
    //alternatively
    //$('<li />'),
    $('#foodInput').val('')
    }
  })

  $('#addDrink').on('click', function() {
    if($('#drinkInput').val() != '') {
    var  newDrink = $('#drinkInput').val()
    $('#drinks').append('<li>' + newDrink + '</li>')
    //alternatively
    //$('<li />'),
    $('#drinkInput').val('')
    }
  })

  //adds to list when Return key is pressed
  $('#drinkInput').keydown(function(e){
    if(e.keyCode === 13){
      var newDrink = $('#drinkInput').val()
      if(newDrink !== '') {
        $('#drinks').append('<li>' + newDrink + '</li>')
        $('#drinkInput').val('')
      }
    } else if(e.keyCode===70) {
      //toggles purple background-color when 'f' key is pressed
      $('#drinkInput').parent().toggleClass('purple')
    }
  })

})
