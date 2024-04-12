const text = "SmartBoard";
let index = 0;
const speed = 100; // Velocidade em milissegundos

function typeWriter() {
    if (index < text.length) {
        document.getElementById("typed").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
    }
}

typeWriter();

setInterval(() => {
const cursor = document.getElementById("cursor");
cursor.style.visibility = cursor.style.visibility === "visible" ? "hidden" : "visible";
}, 500); 


class YBCard { 
    constructor(id, title, description, image) { 
        this.idCard = id 
        this.titre = title 
        this.description = description 
        this.image = image 
    } 

    initCard() { 
        this.updateDom(); 
        this.activateListeners(); 
    } 

    updateDom() { 
        var cardDom = document.getElementById(this.idCard) 
        if (cardDom.hasChildNodes()) { 
            var cardDomImage = cardDom.getElementsByClassName('card-image')[0] 
            cardDomImage.src = this.image; 

            var cardDomTitle = cardDom.getElementsByClassName('card-title')[0] 
            cardDomTitle.innerHTML = this.titre; 

            var cardDomDesc = cardDom.getElementsByClassName('card-desc')[0] 
            cardDomDesc.innerHTML = this.description; 
        } 
    } 

    activateListeners() { 
        var cardDom = document.getElementById(this.idCard) 
        cardDom.addEventListener("mouseover", function(event) { 
            var cardDomTitle = cardDom.getElementsByClassName('card-title')[0] 
            var cardDomDesc = cardDom.getElementsByClassName('card-desc')[0] 
            var cardDomMiddle = cardDom.getElementsByClassName('card-mid')[0] 
            var cardMiddleHeight = cardDomTitle.offsetHeight + cardDomDesc.offsetHeight; 
            cardDomMiddle.style.height = cardMiddleHeight + 15 + "px"; 
        }, false); 

        cardDom.addEventListener("mouseout", function(event) { 
            var cardDomMiddle = cardDom.getElementsByClassName('card-mid')[0] 
            cardDomMiddle.style.height = 50 + "px"; 
        }, false); 
    } 
} 

var card1 = new YBCard(
    "card1",
    "Reconhecimento de Escrita em Tempo Real",
    "A SmartBoard é capaz de reconhecer a escrita feita na lousa em tempo real e convertê-la em texto digital.",
    "https://rockcontent.com/br/wp-content/uploads/sites/2/2019/09/real-time-bidding-1024x538.png.webp"
);
card1.initCard();

var card2 = new YBCard(
    "card2",
    "Acesso à Informação na Internet",
    "Os professores têm acesso instantâneo a uma vasta gama de informações relevantes na internet durante as aulas, o que enriquece o conteúdo apresentado.",
    "https://www.comparapps.com/wp-content/uploads/2020/04/que-es-una-pagina-web.png"
);
card2.initCard();

var card3 = new YBCard(
    "card3",
    "Interatividade Avançada",
    "Os alunos podem interagir de forma mais dinâmica com o conteúdo apresentado, solicitando mais informações sobre palavras ou conceitos específicos exibidos na lousa.",
    "https://images.ctfassets.net/pdf29us7flmy/35XD3JZO2sBeTtisb5cF7r/7ed42006c51e3fb8552f2c1ac24601f9/-IND-001-038-_How_To_Become_a_Teacher_Final.jpg"
);
card3.initCard();
