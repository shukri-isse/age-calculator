const day = document.getElementById("birth-day");
const month = document.getElementById("birth-month");
const year = document.getElementById("birth-year");
const myForm = document.getElementById("my-form");

const dayLabel = document.getElementById("birth-day-label");
const monthLabel = document.getElementById("birth-month-label");
const yearLabel = document.getElementById("birth-year-label");

const birthDayError = document.getElementById("birth-day-error");
const birthMonthError = document.getElementById("birth-month-error");
const birthYearError = document.getElementById("birth-year-error");


myForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const birthDayInput = day.value;
    const birthMonthInput = month.value;
    const birthYearInput = year.value;

    //reset error message for day
    birthDayError.textContent = "";
    birthDayError.style.display = "none";
    day.classList.remove("error");
    dayLabel.classList.remove("error");

    //reset error message for month
    birthMonthError.textContent = "";
    birthMonthError.style.display = "none";
    month.classList.remove("error");
    monthLabel.classList.remove("error");
    // month.classList.remove("validError");
    // month.classList.remove("requiredError");

    //reset error message for year
    birthYearError.style.display = "none";
    birthYearError.textContent = "";
    year.classList.remove("error");
    yearLabel.classList.remove("error");
    // year.classList.remove("validError");
    // year.classList.remove("requiredError");


    // Day
    if (!day.checkValidity()){
        // if invalid b/c no input
        if (birthDayInput=="") {
            //give error message
            birthDayError.textContent = "This field is required";
            //show error msg
            birthDayError.style.display = "block";

        }
        // if invalid b/c user gave wrong/improper input
        else {
            //give error message
            birthDayError.textContent = "Must be a valid day";
            // show error msg
            birthDayError.style.display = "block";
        }
          // add required error class to day input element
        day.classList.add("error");
        dayLabel.classList.add("error");
    }

    // Month
    if (!month.checkValidity()){
        if (birthMonthInput=="") {
            birthMonthError.textContent = "This field is required";
            birthMonthError.style.display = "block";
        }
        else {
            birthMonthError.textContent = "Must be a valid month";
            birthMonthError.style.display = "block";
        }
        month.classList.add("error");
        monthLabel.classList.add("error");
    }

    // Year
    const date = new Date();
    const currYear = date.getFullYear();
    if (!year.checkValidity() || parseInt(birthYearInput) > currYear){
        ///
        if (birthYearInput=="") {
            birthYearError.textContent = "This field is required";
            birthYearError.style.display = "block";
        }
        else {
            birthYearError.textContent = "Must be in the past";
            birthYearError.style.display = "block";
        }
        year.classList.add("error");
        yearLabel.classList.add("error");
    }

//  calculateAge(birthDayInput, birthMonthInput,birthYearInput);
    
});


const calculateAge = (day, month, year) => {
    const date = new Date() // current date
    const currYear = date.getFullYear();
    const currMonth = date.getMonth();
    const currDay = date.getDay();

    const yearDifference =  currYear - parseInt(year);
    //console.log(yearDifference) //25

}