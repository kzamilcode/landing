
/**
 * removes the bot typing indicator from the chat screen
 */
function hideBotTyping() {
    $("#bot-image").remove();
    $(".botTyping").remove();
}

/**
 * adds the bot typing indicator from the chat screen
 */
function showBotTyping() {
    var chatbox = document.getElementById('chatbox');
    const botTyping = '<img class="bot-image" id="bot-image" src="../static/bot/assets/img/bot.png" alt="Bot"><div class="botTyping bot-message"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>';
    $(botTyping).appendTo(chatbox);
    $(".botTyping").show();
    scrollToBottomOfResults();
}
