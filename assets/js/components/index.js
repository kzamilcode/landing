function include(file) {
    const script = document.createElement('script');
    script.src = file;
    script.type = 'text/javascript';
    script.defer = true;

    document.getElementsByTagName('head').item(0).appendChild(script);
}
function getCSRFToken() {
    var csrfToken = null;
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.startsWith("csrftoken=")) {
            csrfToken = cookie.substring("csrftoken=".length, cookie.length);
            break;
        }
    }
    return csrfToken;
}
var csrfToken = getCSRFToken();
/* include all the components js file */

include('../static/bot/assets/js/datetimepicker.min.js');
include('../static/bot/assets/js/components/chat.js');
include('../static/bot/assets/js/constants.js');
include('../static/bot/assets/js/components/cardsCarousel.js');
include('../static/bot/assets/js/components/botTyping.js');
include('../static/bot/assets/js/components/suggestionButtons.js');
include('../static/bot/assets/js/components/charts.js');
include('../static/bot/assets/js/components/collapsible.js');
include('../static/bot/assets/js/components/dropDown.js');
include('../static/bot/assets/js/components/location.js');
include('../static/bot/assets/js/components/pdfAttachment.js');
include('../static/bot/assets/js/components/quickReplies.js');
include('../static/bot/assets/js/components/meetings.js');
include('../static/bot/assets/js/components/sendmail.js');
include('../static/bot/assets/js/components/session_register.js');
include('../static/bot/assets/js/components/utter_response.js');
include('../static/bot/assets/js/components/submitfeedbackfrm.js');
