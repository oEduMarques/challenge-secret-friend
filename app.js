//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.


let friendsArr = []

function addFriend() {
    let friend = document.getElementById("amigo")
    let friendName = friend.value.trim()

    if (friendName === "") {
        alert("Insira um nome válido!")
        friend.value = ""
    } else {
        friendsArr.push(friend.value)
        friend.value = ""
    }
    friendList()
}

function friendList() {
    let list = document.getElementById("listaAmigos")
    list.innerHTML = ""
    
    for(let i = 0; i < friendsArr.length; i++) {
        let newFriend = document.createElement("li")
        newFriend.textContent = friendsArr[i]
        list.appendChild(newFriend)
    }
}
