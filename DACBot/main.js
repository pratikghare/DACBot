var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true
});
var menuBtn = document.getElementById('menuBtn')
var sideNav = document.getElementById('sideNav')
var chatBox = document.getElementById('chat-box')
var chatBtn = document.getElementById('chatBtn')
var backChat = document.getElementById('back-icon')
var startChat = document.getElementById('start-chat')
var chatArea = document.getElementById('chat-area')



window.addEventListener('load', ()=>{
    let enterDate = document.getElementsByClassName('enter-date')
    let currDate = ("" + new Date()).split("GMT");
    let str = currDate;
    for(let i=0; i<enterDate.length; i++){
        enterDate[i].innerText = str[0]
    }
})

backChat.style.display = 'none'
sideNav.style.right = "-250px"
chatBox.style.left = '-800px'

menuBtn.onclick = function () {
    if(sideNav.style.right == "-250px"){
        sideNav.style.right = "0"
        sideNav.style.transition = "all 500ms ease-in-out"
    }
    else{
        sideNav.style.right = "-250px"
        sideNav.style.transition = "all 500ms ease-in-out"
    }
}

chatBtn.onclick = () => {
    let mainBody = document.querySelector('.main-body')
    mainBody.style.overflow = 'hidden'
    displayChat()
}

backChat.onclick = () => {
    displayChat()
}

function hideNavBar(){
    if(sideNav.style.right != "-250px"){
        sideNav.style.right = "-250px"
        sideNav.style.transition = "all 500ms ease-in-out"
    }
}
function hideChatBar(){
    if(chatBox.style.left != "-800px"){
        chatBox.style.left = "-800px"
        chatBtn.setAttribute('src', './images/titlelogo.jpg')
        chatBtn.style.left = '0'
        backChat.style.display = "none"
        chatBox.style.transition = "all 500ms ease-in-out"
        startChat.setAttribute('onclick', 'displayChat()')
    }
}   

function displayChat(){
    if(chatBox.style.left == '-800px'){
        chatBox.style.left = "0"
        backChat.style.display = 'block'
        //chatBtn.style.display = 'none'
        chatBtn.style.left = '-100%'
        chatBox.style.transition = "all 500ms ease-in-out"
        startChat.removeAttribute('onclick')
    }
    else{
        chatBox.style.left = "-800px"
        backChat.style.display = 'none'
        //chatBtn.style.display = 'block'
        chatBtn.style.left = '0'
        chatBox.style.transition = "all 500ms ease-in-out"
        startChat.setAttribute('onclick', 'displayChat()')
    }
}

function sendMessage(){
    let formElements = document.getElementById('form-elements')
    formElements.innerHTML = `
    <div class="recorded-response">
        <h2 style="margin-bottom:1em">Your Response has been recorded!</h2>
        <p style="margin-bottom:2em">contact us through</p>
        <a class="common-btn" href="mailto:pratikghare888@gmail.com">Email</a>
    </div>` 
}

function sendChat(){
    let chatSection = document.getElementById('chat-section')
    let userChats = document.getElementsByClassName('user-text')
    var inputChatText = document.getElementById('input-chat-text')
    let currDate = ("" + new Date()).split("GMT");
    let str = currDate;

    let userParent = document.createElement('div')
    userParent.setAttribute('class', 'user-text')

    let userchild1 = document.createElement('img')
    userchild1.setAttribute('src', './images/user-profile.webp')

    let userchild2 = document.createElement('div')
    userchild2.setAttribute('class', 'text-message')

    let textChild1 = document.createElement('p')
    textChild1.innerText = inputChatText.value
    let textChild2 = document.createElement('span')
    textChild2.setAttribute('class', 'date-time')
    textChild2.innerText = str[0]
    inputChatText.value = ""

    userchild2.appendChild(textChild1)
    userchild2.appendChild(textChild2)

    userParent.appendChild(userchild1)
    userParent.appendChild(userchild2)

    chatArea.appendChild(userParent)

    userChats[userChats.length-1].scrollIntoView()
}