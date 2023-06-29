// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}






  function btn() {
    var a = document.forms["Form"]["name"].value;
    var b = document.forms["Form"]["email"].value;
    var c = document.forms["Form"]["subject"].value;
    var d = document.forms["Form"]["message"].value;
    if ((a == null || a == "") && (b == null || b == "") && (c == null || c == "") && (d == null || d == "")) {
      alert("Please Fill In All Required Fields");
      return false;
    }
    else{
      alert("Form Submitted Successfully!");
      Form.reset();
      return topFunction();
    }
  }

  



