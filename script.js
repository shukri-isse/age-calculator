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

const resultsYears = document.getElementById("calculatedYears");
const resultsMonths = document.getElementById("calculatedMonths");
const resultsDays = document.getElementById("calculatedDays");

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

//Calculate Age
const calculateAge = (day, month, year) => {
    const today = new Date() // current date
    const currYear = today.getFullYear();
    const currMonth = today.getMonth(); //make user input match date() which starts jan at 0 index
    const currDay = today.getDate(); //day of the month

    // convert month (1-12) into zero based index (0-11)
    const birthMonth = parseInt(month) -1;

    //Calculate Day Differnce
    let dayDifference = currDay - parseInt(day);
    //Calculate Month Difference
    let monthDifference = currMonth - birthMonth;
    // Calculate Year Difference
    let yearDifference =  currYear - parseInt(year);

    // if day difference is negative then birth DAY has not happened yet this month
    // you are not a month older yet, so subtract 1 from month
    if (dayDifference < 0) {
        monthDifference --;
        // create a date with currMonth as the *next* month and 0 as day → gives last day of *previous* month
        //  and 0 for day to access last day of previous month
        let lastDayOfPreviousMonth = new Date(currYear, currMonth, 0);
        // get the day of the month aka number of days in that month
        let numberOfDaysInPreviousMonth = lastDayOfPreviousMonth.getDate();
        //reset the day by adding number of days in previous month
        // ex if -3 days and 30 days in last month then -> -3 + 30 or 27 days
        dayDifference += numberOfDaysInPreviousMonth;
    }

    // if month difference is negative then birth MONTH has not happened yet this year
    // you are not a year older yet, so subtract 1 from year
    // reset the month by adding 12
    if (monthDifference < 0) {
        yearDifference --;
        monthDifference += 12;
    }

    // console.log(`yearDifference ${yearDifference}`) 
    // console.log(`monthDifference ${monthDifference}`)
    // console.log(`dayDifference ${dayDifference}`)
    return {yearDifference, monthDifference, dayDifference};
};

const displayAge = (years, months, days) => {
    resultsYears.textContent = years;
    resultsMonths.textContent = months;
    resultsDays.textContent = days;
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
        return;
    }

    // Month
    if (!month.checkValidity()){
        if (birthMonthInput=="") {
            showErrMsg(birthMonthError, "This field is required", month, monthLabel);
        }
        else {
            showErrMsg(birthMonthError, "Must be a valid month", month, monthLabel);
        }
        return;
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
        return;
    }

// destructure to save/return 3 values for year month and day
const {yearDifference, monthDifference, dayDifference} = calculateAge(birthDayInput, birthMonthInput, birthYearInput);
// console.log(yearDifference);
// console.log(monthDifference);
// console.log(dayDifference);
displayAge(yearDifference, monthDifference, dayDifference)
});