function sendmail(message) {
    $.ajax({
        type: "POST",
        url: 'sendmail',
        data: {
            name: message['name'],
            email: message['email'],
            number: message['number'],
            company: message['company'],
            content: message['content']
        },
        success: function (response) {
            console.log("message is sent.")
        }
    });
}