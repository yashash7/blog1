<script>
function login() {
      let x = document.forms["loginForm"]["fname"].value;
      let y = document.forms["loginForm"]["password"].value;
      if (x == "") {
        alert("Name must be filled out");
        return false;
      }
      else if(y == "") {
          alert("Please Enter Password");
          return false;
      }
}
function register() {
    let x = document.forms["registerForm"]["fname"].value;
    let y = document.forms["registerForm"]["lname"].value;
    let z = document.forms["registerForm"]["password"].value;
    if (x == "") {
        alert("Firstname field should not be empty")
        return false;
    }
    else if (y == "") {
        alert("Lastname field should not be empty")
        return false;
    }
    else if (z == "") {
        alert("Please create a password")
        return false;
    }
}
</script>