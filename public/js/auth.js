const toggleForm = () => {
  const container = document.querySelector(".container");
  container.classList.toggle("active");
};

// Email validate through regex
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

$("input[type='email']").on("change", function(){
  $response = validateEmail($(this).val());
  if(!$response){
    $(this).addClass("border-2 border-red-500");
    $(this).siblings("small").removeClass("hidden");
  }else{
    $(this).removeClass("border-2 border-red-500");
    $(this).siblings("small").addClass("hidden");
  }
})

// Signup form submit
$("#signup-btn").on("click", function(){
  $email = $("#signup input[type='email']").val();
  $password = $("#signup input[type='password']").val();
  console.log("hey")
  let signupData = {
    email: $email,
    password: $password
  }
  $.ajax({
    type: "POST",
    url:"/signup",
    data:signupData,
    dataType: "json"
  })
  .done(function(data){
    console.log(data)
  })
  .fail(function(data){
    console.log(data.mesage)
  })
})