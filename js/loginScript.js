function check(form)
{
    var people = [
        {
            username: "Toxic",
            password: "lolo" 
        },
        {
            username: "Wobbly",
            password: "cool"
        }
    ]
    for (i = 0; i < people.length; i++) {
        if (form.user.value == people[i].username && form.pass.value == people[i].password) {
            window.location.replace("http://stackoverflow.com");
        }
        else {
            alert("Wrong password/username!")
            return false;
        }
    }    
}