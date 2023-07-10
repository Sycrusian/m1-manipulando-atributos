const users = [
    {
        name: 'Madalena',
        profile: 'Admin',
        sector: 'Administration'
   },
   {
        name: 'Rafael',
        profile: 'User',
        sector: 'Finance'
   },  
   {
        name: 'Baltazar',
        profile: 'User',
        sector: 'Reception'
   },  
   {
        name: 'Carmen',
        profile: 'Admin',
        sector: 'Business'
   }    
]


function makeCard(user) {
    const card = document.createElement("li");
    card.setAttribute("class", "card");
    const name = document.createElement("h2");
    name.innerText = user.name;
    const sector = document.createElement("p");
    sector.innerText = user.sector;
    if (user.profile === "Admin") {
        if (user.sector === "Administration") {
            card.classList.add("administration");
        } else {
            card.classList.add("admin");
        }
    } else {
        card.classList.add("user");
    }
    card.appendChild(name);
    card.appendChild(sector);
    return card;
}

function makeList(userList) {
    const list = document.getElementById("user-list");
    for (let i in userList) {
        const card = makeCard(userList[i]);
        list.appendChild(card);
    }
}

makeList(users);