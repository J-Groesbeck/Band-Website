const platinumMembers = ["FirstName LastName1", "FirstName LastName2", "FirstName LastName3", "FirstName LastName4", ]

platinumMembers.forEach(member => {
    $('#platMembers').append(`<li>${member}</li>`);
});

const goldMembers = ["FirstName LastName5", "FirstName LastName6", "FirstName LastName7", "FirstName LastName8", ]

goldMembers.forEach(member => {
    $('#golMembers').append(`<li>${member}</li>`);
});

const silverMembers = ["FirstName LastName9", "FirstName LastName10", "FirstName LastName11", "FirstName LastName12", ]

silverMembers.forEach(member => {
    $('#silMembers').append(`<li>${member}</li>`);
});

const bronzeMembers = ["FirstName LastName13", "FirstName LastName14", "FirstName LastName15", "FirstName LastName16", ]

bronzeMembers.forEach(member => {
    $('#broMembers').append(`<li>${member}</li>`);
});