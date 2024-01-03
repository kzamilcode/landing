$(document).ready(function() {
  $(document).on("click", "#feedbacksubmit", function (event) {
    event.preventDefault();

    // Get form data
    var formData = new FormData(document.getElementById("feedbackfrm"));

    // Perform Ajax request
    $.ajax({
      type: 'POST',
      url: '/chat/feedback/',
      headers: {
        'X-CSRFToken': csrfToken,
      },
      data: formData,
      processData: false,
      contentType: false,
      beforeSend: function () {
        var btn = document.getElementById("feedbacksubmit")
        var txtarea = document.querySelector(".feedback-area")
        btn.disabled = true;
        txtarea.disabled = true;

        var radioButtons = document.querySelectorAll('.star-rating .radio-input');


        radioButtons.forEach(function (radioButton) {
          radioButton.disabled = true;
        });
        showBotTyping()
      },
      success: function (response) {
        let message = response.message
        console.log(message)
        hideBotTyping()
        botResponse = getBotResponse(message);
        $(botResponse).appendTo("#chatbox").hide().fadeIn(1000);
      },
      error: function (xhr, status, error) {
        // Handle error
        console.error('Form submission failed:', error);
      }
    });
  });
});
