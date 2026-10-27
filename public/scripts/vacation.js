document.getElementById("Book-Vacation").onsubmit = () => {
    let isValid = true;

    clearErrors();

    //Destination validation
    let place = document.getElementById("destination").value.trim();
    if (place === "none") {
        document.getElementById("err-destination").style.display = "block";
        isValid = false;
    }

    //Departure date validation
    let date = document.getElementById("date").value.trim();
    if (date === "") {
        document.getElementById("err-date").style.display = "block";
        isValid = false;
    }

    //Number of travelers validation
    let num = document.getElementById("num").value.trim();
    if (num === "" || num <= 0 || isNaN(num)) {
        document.getElementById("err-num").style.display = "block";
        isValid = false;
    }

    return isValid;
};

function clearErrors()  {
    let errors = document.getElementsByClassName("err");
    for (let i = 0; i < errors.length; i++) {
        errors[i].style.display = "none";
    }
}