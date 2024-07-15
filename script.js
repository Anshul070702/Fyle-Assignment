// Clciking ReadMore
$(document).ready(function () {
  $(".owl-carousel").on("click", ".readMoreButton", function () {
    var url = $(this).data("url");
    window.open(url, "_blank");
  });
});

$(document).ready(function () {
  // Show the contact form modal when the contact us button is clicked
  $("#contactUsButton").on("click", function () {
    $("#contactFormModal").modal("show");
  });

  // Handle the contact form submission
  $("#contactForm").on("submit", function (event) {
    event.preventDefault();
    const formData = {
      workEmail: $("#workEmail").val(),
      firstName: $("#firstName").val(),
      lastName: $("#lastName").val(),
      termsCheck: $("#termsCheck").is(":checked"),
    };

    $.ajax({
      type: "POST",
      url: "https://getform.io/f/anleewla",
      data: formData,
      success: function (response) {
        alert("Message Sent successfully!");
        $("#contactFormModal").modal("hide");
      },
      error: function (error) {
        alert("Error sending message!. Please try again.");
      },
    });
  });
});
