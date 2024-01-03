function scrollToBottomOfResults() {
    var iframe = document.getElementById('chatframe');
    var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    var chats = iframeDocument.getElementById('chatbox')
    chats.scrollTop = chats.scrollHeight;
}
// Bot pop-up intro
// document.addEventListener("DOMContentLoaded", () => {
//     const elemsTap = document.querySelector(".tap-target");
//     // eslint-disable-next-line no-undef
//     const instancesTap = M.TapTarget.init(elemsTap, {});
//     instancesTap.open();
//     setTimeout(() => {
//         instancesTap.close();
//     }, 4000);
// });
$(document).ready(function(){
        // Use click event to manually show/hide the dropdown
    $('.dropdown-trigger').on('click', function(){
        // Toggle the 'active' class to show/hide the dropdown
        $('#dropdown1').toggleClass('active');
    });

    // Close the dropdown when clicking outside of it
    $(document).on('click', function(e){
        if(!$(e.target).closest('.dropdown-trigger').length && !$(e.target).closest('#dropdown1').length) {
            $('#dropdown1').removeClass('active');
        }
    });
});
window.addEventListener('load', () => {
    // initialization
    $(document).ready(() => {
        // Bot pop-up intro
        $("div").removeClass("tap-target-origin");
        // drop down menu for close, restart conversation & clear the chats.
        // $(".dropdown-trigger").dropdown();

        // initiate the modal for displaying the charts,
        // if you dont have charts, then you comment the below line
        $(".modal").modal();

        // enable this if u have configured the bot to start the conversation.
        // showBotTyping();
        // $("#userInput").prop('disabled', true);

        // if you want the bot to start the conversation
        // customActionTrigger();
    });

    $("#profile_div").click(() => {
        $(".profile_div").toggle();
        $(".widget").toggle();
    });

    // clear function to clear the chat contents of the widget.
    $("#clear").click(() => {
        var iframe = document.getElementById('chatframe');
        var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
        var chats = iframeDocument.getElementById('chatbox')
        $(chats).fadeOut("normal", () => {
            $(chats).html("");
            $(chats).fadeIn();
        });
    });

    // close function to close the widget.
    $("#close").click(() => {
        $(".profile_div").toggle();
        $(".widget").toggle();
        scrollToBottomOfResults();
    });
});