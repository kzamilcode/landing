//Remove Dropdown Content on Click Outside
window.addEventListener('click',(e)=>{
    const drop = document.querySelectorAll(".dropdown-content")
    if(drop && drop.length){
        const dLen = drop.length
        for(var a =0;a<dLen; a++){
            const d = drop[a]
            if(d.classList.contains("dropdown-show") && !d.contains(e.target) && !e.target.classList.contains("dropbtn")){
                console.log("asas")
                d.classList.remove("dropdown-show")
            }
        }
    }
})

//Show and hide dropdown
const onDrop = (e) => {
    if(e.nextElementSibling){
        if(e.nextElementSibling.classList.contains("dropdown-show")){
            e.nextElementSibling.classList.remove("dropdown-show")
            return;
        }
        e.nextElementSibling.classList.add("dropdown-show")
    }
}

const getTestHtmlContent = () => `
<div class="chat-image">
    <img src="https://cdn.pixabay.com/photo/2013/11/24/11/10/lab-217043_1280.jpg"  /> 
</div>
<div class="chat-video">
    <video controls>
        <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" >
        Your browser does not support the video tag.
    </video>
</div>
<button class="btn btn-primary waves-effect waves-light">Test</button>
<div class="check">
    <label>
        <input type="checkbox" checked="checked"  class="filled-in" />
        <span>Chat</span>
    </label>
</div>
<div class="radio-group">
    <label>
        <input name="chat" type="radio" />
        <span>Do Chat</span>
      </label>
      <label>
        <input name="chat" type="radio" />
        <span>Don't Chat</span>
      </label>
</div>
<table class="striped highlight responsive-table">
        <thead>
          <tr>
              <th>Name</th>
              <th>Item Name</th>
              <th>Item Price</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Alvin</td>
            <td>Eclair</td>
            <td>$0.87</td>
          </tr>
          <tr>
            <td>Alan</td>
            <td>Jellybean</td>
            <td>$3.76</td>
          </tr>
          <tr>
            <td>Jonathan</td>
            <td>Lollipop</td>
            <td>$7.00</td>
          </tr>
        </tbody>
      </table>
    <div class="chat-document">
    <iframe
        src="https://drive.google.com/viewerng/viewer?embedded=true&url=http://infolab.stanford.edu/pub/papers/google.pdf#toolbar=0&scrollbar=0"
        frameBorder="0"
        scrolling="auto"
        height="100%"
        width="100%"
    ></iframe>
    </div>

    <div class="dropdown">
        <button onclick="onDrop(this)" class="btn btn-primary dropbtn">Dropdown</button>
        <ul class="dropdown-content">
           <li class="dropdown-item">DropItem 1</li>
           <li class="dropdown-item">DropItem 2</li>
           <li class="dropdown-item">DropItem 3</li>
        </ul>
    </div>
`

/**
 * creates horizontally placed cards carousel
 * @param {Array} cardsData json array
 */
function createCardsCarousel(cardsData) {
    let cards = "";
    cardsData.map((card_item) => {
        const item = `<div class="carousel_cards product-card in-left">
                        <div class="product-card__image">
                            <img src=${card_item.image}>
                        </div>
                        <div class="product-card__body">
                            <div class="product-card__title">${card_item.title}</div>
                            <div class="product-card__desc">${card_item.info}</div>
                            <div class="product-card__price"><span>$650</span></div>
                        </div>
                        <div class="product-card__footer">
                            <div class="product-card__action">Select</div>
                            <div class="product-card__action">Buy</div>
                        </div>
                    </div>`;
        cards += item;
    });
    const testHtmlContent = getTestHtmlContent()
    const cardContents = `
<!--    ${testHtmlContent}-->
    <div id="paginated_cards" class="cards"> 
                            <div class="cards_scroller">
                                ${cards} 
                            </div>
                            <div class="cards_control cards_control-left">
                                <span class="material-icons ">west</span>
                            </div>
                            <div class="cards_control cards_control-right">
                                <span class="material-icons">east</span>
                            </div>
                        </div>`;
    return cardContents;
}

/**
 * appends cards carousel on to the chat screen
 * @param {Array} cardsToAdd json array
 */
function showCardsCarousel(cardsToAdd) {
    const cards = createCardsCarousel(cardsToAdd);

    $(cards).appendTo("#chatbox").show();

    if (cardsToAdd.length <= 2) {
        $(`.cards_scroller>div.carousel_cards:nth-of-type(2)`).fadeIn(3000);
    } else {
        for (let i = 0; i < cardsToAdd.length; i += 1) {
            $(`.cards_scroller>div.carousel_cards:nth-of-type(${i})`).fadeIn(3000);
        }
        $(".cards .arrow.prev").fadeIn("3000");
        $(".cards .arrow.next").fadeIn("3000");
    }

    scrollToBottomOfResults();

    const card = document.querySelector("#paginated_cards");
    const card_scroller = card.querySelector(".cards_scroller");
    const card_item_size = 225;

    /**
     * For paginated scrolling, simply scroll the card one item in the given
     * direction and let css scroll snaping handle the specific alignment.
     */
    function scrollToNextPage() {
        card_scroller.scrollBy(card_item_size, 0);
    }

    function scrollToPrevPage() {
        card_scroller.scrollBy(-card_item_size, 0);
    }

    card.querySelector(".cards_control-right").addEventListener("click", scrollToNextPage);
    card.querySelector(".cards_control-left").addEventListener("click", scrollToPrevPage);
    $(".usrInput").focus();
}