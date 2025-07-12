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

const resetErrorMsg = (err, inputElement, inputElmntLabel) => {
    err.textContent = "";
    err.style.display = "none";
    inputElement.classList.remove("error");
    inputElmntLabel.classList.remove("error");
};

const showErrMsg = (err, message, inputElement, inputElmntLabel) => {
    err.textContent = message;
    err.style.display = "block";
    inputElement.classList.add("error");
    inputElmntLabel.classList.add("error");
};

myForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const birthDayInput = day.value;
    const birthMonthInput = month.value;
    const birthYearInput = year.value;

    //reset error message for day
    resetErrorMsg(birthDayError, day, dayLabel);

    //reset error message for month
    resetErrorMsg(birthMonthError, month, monthLabel);
   
    //reset error message for year
    resetErrorMsg(birthYearError, year, yearLabel);
   

    // Day
    // if invalid
    if (!day.checkValidity()){
        // if invalid b/c user gave no input
        if (birthDayInput=="") {
            showErrMsg(birthDayError, "This field is required", day, dayLabel);
        }
    
        // if invalid b/c user gave wrong/improper input
        else {
            showErrMsg(birthDayError, "Must be a valid day", day, dayLabel);
    
        }
    }

    // Month
    if (!month.checkValidity()){
        if (birthMonthInput=="") {
            showErrMsg(birthMonthError, "This field is required", month, monthLabel);
        }
        else {
            showErrMsg(birthMonthError, "Must be a valid day", month, monthLabel);
        }
    }

    // Year
    const date = new Date();
    const currYear = date.getFullYear();
    if (!year.checkValidity() || parseInt(birthYearInput) > currYear){
        if (birthYearInput=="") {
           showErrMsg(birthYearError, "This field is required", year, yearLabel);
        }
        else {
            showErrMsg(birthYearError, "Must be in the past", year, yearLabel);
        }
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