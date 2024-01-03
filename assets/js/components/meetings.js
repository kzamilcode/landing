function free_timeslot(company, email, name, number, selectedDate) {
    $.ajax({
        type: "POST",
        async: false,
        url: '/book/calendar',
        headers: {
            'X-CSRFToken': csrfToken,
          },
        data: {
            'company': company,
            'email': email,
            'name': name,
            'number': number,
            'time': selectedDate
        },
        beforeSend: function () {
            var btn = document.getElementById("selectdate")
            var txtarea = document.getElementById("datetimepicker")
            btn.disabled = true;
            txtarea.disabled = true;
            showBotTyping()
          },
        success: function (response) {
            if (response != null) {
                free_times = response.res;
                hideBotTyping()
                botResponse = getBotResponse(free_times);
                $(botResponse).appendTo("#chatbox").hide().fadeIn(1000);
            }
        }
    });
}

function savelead(data) {
    $.ajax({
        type: "POST",
        async: true,
        headers: {
            'X-CSRFToken': csrfToken
        },
        data: {
            name: data['name'],
            email: data['email'],
            number: data['number'],
            company: data['company'],
            file_id: data['file_id']
        },
        url: '/chat/lead/generate/',
        success: function (response) {
            if (response != null) {
                console.log(response.res)
            }
        }
    });
}