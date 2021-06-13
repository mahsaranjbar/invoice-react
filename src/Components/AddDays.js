function DateConvertor(props) {

    const date = props.date;
    const terms = props.terms;

    let month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

    let newDate = new Date(date.getTime()+(terms*24*60*60*1000));
    let d = newDate.getDate();
    let m = month[newDate.getMonth()];
    let y = newDate.getFullYear();
    let newDateFormat = d + " " + m + " " + y;

    return (newDateFormat);
}

export default DateConvertor;