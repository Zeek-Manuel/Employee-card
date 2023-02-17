const employees = [
    {
        avatar: "https://randomuser.me/api/portraits/women/85.jpg",
        icon_link: "/assets/headphone.png",
        miscellaneous: "Focusing",
        name: "Sarah Doe",
        bio: "Full Stack maker & UI / UX Designer",
        team_name: "MerakiTeam",
        location: "Carlifornia",
        email: "sarah@test.com",
        color: "coral"
    },
    {
        avatar: "https://randomuser.me/api/portraits/women/56.jpg",
        icon_link: "/assets/headphone.png",
        miscellaneous: "Focusing",
        name: "Sarah Brown",
        bio: "Top IT specialist",
        team_name: "MerakiTeam",
        location: "Carlifornia",
        email: "peter@test.com",
        color: "green"
    },
    {
        avatar: "https://randomuser.me/api/portraits/women/62.jpg",
        icon_link: "/assets/headphone.png",
        miscellaneous: "Focusing",
        name: "Lucy Baker",
        bio: "Software engineer",
        team_name: "MerakiTeam",
        location: "Texas",
        email: "charlse@test.com",
        color: "steelblue"
    },
    {
        avatar: "https://randomuser.me/api/portraits/men/75.jpg",
        icon_link: "/assets/headphone.png",
        miscellaneous: "Focusing",
        name: "John Doe",
        bio: "A father of 5, partime devops engineer",
        team_name: "MerakiTeam",
        location: "San Fransisco",
        email: "john@test.com",
        color: "pink"
    },
]

const employeeCardsContainer = document.querySelector('.employee-cards-container')

employees.forEach((employee) => {
    var employeeCard = document.createElement('div')
    employeeCard.className = 'employee-card'

    var image = document.createElement('img')
    image.src = employee.avatar
    image.className = 'employee-avatar'
    image.style.border = `5px solid ${employee.color}`

    var name = document.createElement('h2')
    name.innerText = employee.name
    name.className = 'employee-name'

    var bio = document.createElement('p')
    bio.innerText = employee.bio
    bio.className = 'employee-bio'

    var location = document.createElement('p')
    location.innerText = employee.location
    location.className = 'employee-location'

    employeeCardsContainer.appendChild(employeeCard)
    employeeCard.appendChild(bio)
    employeeCard.appendChild(location)
    employeeCard.appendChild(name)
    employeeCard.appendChild(image)
})