
/* module for importing other js files */
function include(file) {
  const script = document.createElement('script');
  script.src = file;
  script.type = 'text/javascript';
  script.defer = true;

  document.getElementsByTagName('head').item(0).appendChild(script);
}

function welcomemgs(){
  if(counter === 0){
    wlcmmsg = getBotResponse("🌟 <b>Welcome to Heena Bot!</b> 🌟\n" +
        "\n" +
        "Hello there! I'm Heena, your friendly virtual assistant ready to help you with a wide range of tasks. Whether you're looking for information, need assistance, or just want to chat, I'm here for you!")
    $(wlcmmsg).appendTo("#chatbox").hide().fadeIn(1000);
    const suggestions = [
      {
        title: "tell me about your capabilities",
        payload: "tell me about your capabilities",
      },
      {
        title: "Where do you live?",
        payload: "Where do you live?",
      },
      {
        title: "What is the definition of AI?",
        payload: "What is the definition of AI?",
      },
      {
        title: "What is a chatbot?",
        payload: "What is a chatbot?",
      },
      {
        title: "Advantages of a Chatbot?",
        payload: "Advantages of a Chatbot?",
      },
      {
        title: "Why should I choose your chatbot over others?",
        payload: "Why should I choose your chatbot over others?",
      },
      {
        title: "What is RAG?",
        payload: "What is RAG?",
      },
      {
        title: "Can I integrate the chatbot with other applications?",
        payload: "Can I integrate the chatbot with other applications?",
      },
    ];
    addSuggestion(suggestions)
  }
  counter++
}
window.addEventListener('load', () => {
      // initialization
      $(document).ready(() => {
        welcomemgs()
      });
});
/* import components */
include('/static/bot/assets/js/components/index.js');
