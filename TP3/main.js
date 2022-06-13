document.getElementById("answer").onclick = validate;
document.getElementById("answer2").onclick = validate;
let quest = document.querySelectorAll("question");

function validate() {
    var checkboxes = document.getElementsByName("input");
    var checkboxChecked = []; 

    for(var i = 0; i < checkboxes.length; i++) {
        if(checkboxes[i].checked && (checkboxes[i].value === "true")) {
            checkboxChecked.push(checkboxes[i]);
        }
    }

    if(checkboxChecked.length === 1) {
        alert("Bonne reponse");
    } 
    else {
        alert("Mauvaise reponse !");
    }
}

function Next() {
    for (i = 0; i < quest.length; i++) {
        if (quest[i].classList.contains("active")) {
            quest[i].classList.remove("active")
            if (i < quest.length - 1) {
                quest[i + 1].classList.add("active")
                break;
            } else
                quest[0].classList.add("active");
            break;
        }
    }
}

quest.addEventListener("click", quest)