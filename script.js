const platinumMembers = ["Sara Axelrod-Malagold", "Kunjan Bhatt", "Swati Dhage", "Alicia Caputo Smith", "Wei Ou", "Karen Hao", "Alison and Thomas Tsim", "Peggy Sheehan", "Paula Groesbeck", "Nandini Thomas", "Katherine Trezza", "Kay Haeusser", "Lisa Gianna", "Jessica Ho", "Niranjan Mulay / Madhu Mahajan", "Marine Preap", "Rita Shteynberg", "Ushma Patel", "Anna Bobrowska" ]

platinumMembers.forEach(member => {
    $('#platMembers').append(`<li>${member}</li>`);
});

const goldMembers = ["Robert Cameron", "Yanina Reznikov",  ]

goldMembers.forEach(member => {
    $('#golMembers').append(`<li>${member}</li>`);
});

const silverMembers = ["Michelle Wolf", "Betty Chang", "Melanie Chazanoff", "Chutchauan T", "Monika Kokosza", "Bheemesh Dwarampuri", "Lauren Faulkner", "Archana Kannughatta" ]

silverMembers.forEach(member => {
    $('#silMembers').append(`<li>${member}</li>`);
});

const bronzeMembers = ["Lisa Cartelli", "Jamie Sobolewski", ]

bronzeMembers.forEach(member => {
    $('#broMembers').append(`<li>${member}</li>`);
});