function session_register(user_msg, bot_msg, intent, confidence, time) {
    $.ajax({
        type: "POST",
        headers: {
            'X-CSRFToken': csrfToken,
        },
        // async: false,
        url: '/chat/session_register/',
        data: {
            user_msg: user_msg,
            bot_msg: bot_msg,
            intent: intent,
            confidence: confidence,
            _t: time
        },
        success: function (response) {
            if(!response.status === 200){
                setBotResponse('')
            }
        }
    });
}