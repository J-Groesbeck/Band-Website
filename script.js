// Dynamically generates boosters members in boosters.html accordian

const platinumMembers = ["Sara Axelrod-Malagold", "Kunjan Bhatt", "Swati Dhage", "Alicia Caputo Smith", "Wei Ou", "Karen Hao", "Alison and Thomas Tsim", "Peggy Sheehan", "Paula Groesbeck", "Nandini Thomas", "Katherine Trezza", "Kay Haeusser", "Lisa Gianna", "Jessica Ho", "Niranjan Mulay / Madhu Mahajan", "Marine Preap", "Rita Shteynberg", "Ushma Patel", "Anna Bobrowska"]

platinumMembers.forEach(member => {
    $('#platMembers').append(`<li>${member}</li>`);
});

const goldMembers = ["Robert Cameron", "Yanina Reznikov",]

goldMembers.forEach(member => {
    $('#golMembers').append(`<li>${member}</li>`);
});

const silverMembers = ["Michelle Wolf", "Betty Chang", "Melanie Chazanoff", "Chutchauan T", "Monika Kokosza", "Bheemesh Dwarampuri", "Lauren Faulkner", "Archana Kannughatta"]

silverMembers.forEach(member => {
    $('#silMembers').append(`<li>${member}</li>`);
});

const bronzeMembers = ["Lisa Cartelli", "Jamie Sobolewski",]

bronzeMembers.forEach(member => {
    $('#broMembers').append(`<li>${member}</li>`);
});


//Back to top button
// Get the button:
let topbutton = document.getElementById("topBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topbutton.style.display = "block";
    } else {
        topbutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}