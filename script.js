function createGame (player1, hour, player2) { // Essa função será responsavel por criar os jogos. Bandeira dos paises e horario dos jogos
    return `
    <li>
        <img src="./assets/icon-${player1}.svg" alt="Logo do ${player1}">
        <strong>${hour}</strong>
        <img src="./assets/icon-${player2}.svg" alt="Logo da ${player2}">
    </li>
    `
}

function createCard (date, day, games) { // Essa função sera responsavel por criar o cartão. cor, tamanho e etc. E alguns detalhes como dia e data dos jogos
    return ` 
        <div class="card">  
            <h2>${date}<span>${day}</span></h2>
            <ul>
            ${games}
            </ul>
        </div>
    `
}
 // Está pegando o conteudo do id="cards", e colocando ele em JS 
document.querySelector("#cards").innerHTML = `
 
    ${createCard("24/11", "quinta", // todos os jogos do dia 24
     createGame("switzerland", "07:00", "cameroon") + 
     createGame("uruguay", "10:00", "south-korea") + 
     createGame("portugal", "13:00", "ghana") +
     createGame("brazil", "16:00", "serbia")
    )} 

    ${createCard("28/11", "segunda", // Todos os jogos do dia 28
    createGame("cameroon", "07:00", "serbia") +
    createGame("south-korea", "10:00", "ghana") +
    createGame("brazil", "13:00", "switzerland") +
    createGame("portugal", "16:00", "uruguay")
    )}

    ${createCard("02/12", "sexta", // Todos os jogos do dia 02
    createGame("south-korea", "12:00", "portugal") +
    createGame("ghana", "12:00", "uruguay") +
    createGame("serbia", "16:00", "switzerland") +
    createGame("cameroon", "16:00", "brazil")
    )}
`