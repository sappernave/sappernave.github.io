function updatePage() 
{
    let nameBox = document.getElementById("namebox");
    let greetingBox = document.getElementById("greeting");
    let colorSelect = document.getElementById("background_color");

    let heading = document.getElementById("user");
    let messageP = document.getElementById("greetingbox");

    if (nameBox.value.trim() !== "") 
    {
        heading.textContent = "Welcome " + nameBox.value;
    }

    if (greetingBox.value.trim() !== "") 
    {
        messageP.textContent = greetingBox.value;
    }

    document.body.style.backgroundColor = colorSelect.value;
}

function todo() 
{
    let list = document.getElementById("userlist");
    let input = document.getElementById("input");

    if (input.value.trim() !== "") 
    {
        let li = document.createElement("li");
        li.textContent = input.value;
        list.appendChild(li);
        input.value = "";
    }
}