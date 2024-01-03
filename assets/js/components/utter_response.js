function utter_response(intent, msg) {
    $.ajax({
        type: "POST",
        headers: {
            'X-CSRFToken': csrfToken,
        },
        async: false,
        url: '/chat/utter_response/',
        data: {
            intent: intent,
            msg: msg
        },
        success: function (response) {
            if (response != null) {
                message_response = response.res
                if (response.product.length != 0) {
                    product = response.product;
                    product_state = true;
                }
            }
        }
    });
}