currDateTime =
moment(); /*gets a relevant object with many date and time attributes from momentjs lib and stores it in currDateTime*/
var timeZone = moment.tz.guess();
var currTime = new Date();
var currTimeOffset = currTime.getTimezoneOffset();
var currTimeZoneAbbr = moment.tz.zone(timeZone).abbr(currTimeOffset);

var time_format = "12"; /* FORMAT CAN BE 12 hour (12) OR 24 hour (24)*/
var hour = currDateTime.hours(); /* Returns the hour (from 0-23) */
var minutes =
currDateTime.minutes(); /* Returns the minutes (from 0-59) */
var result = hour; //set result to current hour
var result2 = hour; //set result2 to current hour
var ext = "";

if (time_format == "12") {
//format hour for am/pm or 24 hour time
if (hour > 12) {
  ext = "P.M.";
  hour = hour - 12;
  if (hour == 12) {
    hour = "00";
    ext = "A.M.";
  }
} else if (hour < 12) {
  ext = "AM";
} else if (hour == 12) {
  ext = "P.M.";
}
}

if (minutes < 10) {
minutes = "0" + minutes;
}
result = hour;
result = result + ":" + minutes + " " + ext;

console.log("The current local time is", result, currTimeZoneAbbr);

/* ######################################################## roman numeral calc ########################*/
var time_format = "12"; /* FORMAT CAN BE 12 hour (12) OR 24 hour (24)*/
var hour = currDateTime.hours(); /* Returns the hour (from 0-23) */
var minutes =
currDateTime.minutes(); /* Returns the minutes (from 0-59) */
var result = hour;
var ext = "";

if (time_format == "12") {
//format hour for am/pm or 24 hour time
if (hour > 12) {
  ext = "P.M.";
  hour = hour - 12;
  if (hour == 12) {
    hour = "00";
    ext = "A.M.";
  }
} else if (hour < 12) {
  ext = "AM";
} else if (hour == 12) {
  ext = "P.M.";
}
}

if (minutes < 10) {
minutes = "0" + minutes;
}
result = hour;
result = result + ":" + minutes + " " + ext;

// hours to roman numerals
const intToRomanHour = (num) => {
const map = {
  XII: 12,
  XI: 11,
  X: 10,
  IX: 9,
  VIII: 8,
  VII: 7,
  VI: 6,
  V: 5,
  IV: 4,
  III: 3,
  II: 2,
  I: 1,
};
let result = "";

for (key in map) {
  result += key.repeat(Math.floor(num / map[key]));
  num %= map[key];
}

return result;
};
var romanHour = intToRomanHour(hour);
// Minutes to roman numerals
// brute force minutes to roman numerals, need to come up with more elegant solution
if (minutes == 0) {
romanMinute = "XII";
} else if (minutes == 1) {
romanMinute = "XIII";
} else if (minutes == 2) {
romanMinute = "XIIII";
} else if (minutes == 3) {
romanMinute = "XIIIII";
} else if (minutes == 4) {
romanMinute = "XIIIV";
} else if (minutes == 5) {
romanMinute = "I";
} else if (minutes == 6) {
romanMinute = "II";
} else if (minutes == 7) {
romanMinute = "III";
} else if (minutes == 8) {
romanMinute = "IIII";
} else if (minutes == 9) {
romanMinute = "IIV";
} else if (minutes == 10) {
romanMinute = "II";
} else if (minutes == 11) {
romanMinute = "III";
} else if (minutes == 12) {
romanMinute = "IIII";
} else if (minutes == 13) {
romanMinute = "IIIII";
} else if (minutes == 14) {
romanMinute = "IIIV";
} else if (minutes == 15) {
romanMinute = "III";
} else if (minutes == 16) {
romanMinute = "IIII";
} else if (minutes == 17) {
romanMinute = "IIIII";
} else if (minutes == 18) {
romanMinute = "IIIIII";
} else if (minutes == 19) {
romanMinute = "IIIIV";
} else if (minutes == 20) {
romanMinute = "IV";
} else if (minutes == 21) {
romanMinute = "IVI";
} else if (minutes == 22) {
romanMinute = "IVII";
} else if (minutes == 23) {
romanMinute = "IVIII";
} else if (minutes == 24) {
romanMinute = "IVIV";
} else if (minutes == 25) {
romanMinute = "V";
} else if (minutes == 26) {
romanMinute = "VI";
} else if (minutes == 27) {
romanMinute = "VII";
} else if (minutes == 28) {
romanMinute = "VIII";
} else if (minutes == 29) {
romanMinute = "VIV";
} else if (minutes == 30) {
romanMinute = "VI";
} else if (minutes == 31) {
romanMinute = "VII";
} else if (minutes == 32) {
romanMinute = "VIII";
} else if (minutes == 33) {
romanMinute = "VIIII";
} else if (minutes == 34) {
romanMinute = "VIIV";
} else if (minutes == 35) {
romanMinute = "VII";
} else if (minutes == 36) {
romanMinute = "VIII";
} else if (minutes == 37) {
romanMinute = "VIIII";
} else if (minutes == 38) {
romanMinute = "VIIIII";
} else if (minutes == 39) {
romanMinute = "VIIIV";
} else if (minutes == 40) {
romanMinute = "VIII";
} else if (minutes == 41) {
romanMinute = "VIIII";
} else if (minutes == 42) {
romanMinute = "VIIIII";
} else if (minutes == 43) {
romanMinute = "VIIIIII";
} else if (minutes == 44) {
romanMinute = "VIIIIV";
} else if (minutes == 45) {
romanMinute = "IX";
} else if (minutes == 46) {
romanMinute = "IXI";
} else if (minutes == 47) {
romanMinute = "IXII";
} else if (minutes == 48) {
romanMinute = "IXIII";
} else if (minutes == 49) {
romanMinute = "IXIV";
} else if (minutes == 50) {
romanMinute = "X";
} else if (minutes == 51) {
romanMinute = "XI";
} else if (minutes == 52) {
romanMinute = "XII";
} else if (minutes == 53) {
romanMinute = "XIII";
} else if (minutes == 54) {
romanMinute = "XIV";
} else if (minutes == 55) {
romanMinute = "XI";
} else if (minutes == 56) {
romanMinute = "XII";
} else if (minutes == 57) {
romanMinute = "XIII";
} else if (minutes == 58) {
romanMinute = "XIIII";
} else if (minutes == 59) {
romanMinute = "XIIV";
}
console.log(
"Conversion to Roman Numerals: " +
  result +
  " -> " +
  romanHour +
  ":" +
  romanMinute
);

var hour = currDateTime.hours(); /* Returns the hour (from 0-23) */
var minutes =
currDateTime.minutes(); /* Returns the minutes (from 0-59) */

/*############### conversion from local 12 hour time to local military##############################*/

var time_format = "24"; /* FORMAT CAN BE 12 hour (12) OR 24 hour (24)*/
var hour = currDateTime.hours(); /* Returns the hour (from 0-23) */
var minutes =
currDateTime.minutes(); /* Returns the minutes (from 0-59) */
var result2 = hour;
var ext = "";

if (time_format == "12") {
if (hour > 12) {
  ext = "P.M.";
  hour = hour - 12;

  if (hour == 12) {
    hour = "00";
    ext = "A.M.";
  }
} else if (hour < 12) {
  ext = "AM";
} else if (hour == 12) {
  ext = "P.M.";
}
}

if (minutes < 10) {
minutes = "0" + minutes;
}

result2 = result2 + "" + minutes + " " + ext;

console.log(
"Conversion from 12-hour format to Military Time: " +
  result +
  " -> " +
  result2 +
  " Hours"
);

var hour = currDateTime.hours(); /* Returns the hour (from 0-23) */
var minutes =
currDateTime.minutes(); /* Returns the minutes (from 0-59) */

/*###########################################UTC time conversion################################################################################################*/

var currUtcDateTime = moment().utc(); //current utc time
var utcHour = currUtcDateTime.hours(); /* current utc hour */
var utcMinutes = currUtcDateTime.minutes(); /* current utc minute */
var utcOffset =
moment().utcOffset(); /* this is the offset from the local timezone to UTC time in minutes */

var result3 = utcHour;
var minutes = utcMinutes;
var ext = "";

if (utcHour > 12) {
ext = "P.M.";
utcHour = utcHour - 12;
if (utcHour == 12) {
  hour = "00";
  ext = "A.M.";
}
} else if (utcHour < 12) {
ext = "AM";
} else if (utcHour == 12) {
ext = "P.M.";
}

if (minutes < 10) {
minutes = "0" + minutes;
}

result3 = utcHour;
result3 = result3 + ":" + minutes + " " + ext;

console.log(
"Conversion from the Current Time Zone to UTC:",
result,
currTimeZoneAbbr + " -> " + result3
);

//############################################################################# This converts from one timezone to another. In this case users time to Eastern(US) time.
// convert local time to desired time
var currTime = new Date(); //get local time

/*timezone desired to convert to, this is based on time zone names from the "tz database" 
ie: Eastern time zone: America/New_York, Central time zone: America/Chicago, Mountain time zone: America/Denver, Pacific time zone: America/Los_Angeles */
var desiredTimeZone = "America/New_York";
var desiredTime = currTime.toLocaleTimeString("en-US", {
timeZone: desiredTimeZone,
}); // convert to desired timezone
var desiredTimeZoneAbbre = moment().tz(desiredTimeZone).zoneAbbr(); // list abbreviation for desired timezone
var desiredTimeSplit = desiredTime.split(":"); // split on colon
var desiredHourMinute = desiredTimeSplit.slice(0, 2); // remove seconds, and am/pm and store for use
var desiredTimeZone12HourSplit = desiredTime.slice(8, 10); //slice out am/pm
var desiredtimeZone12HourSplitAmPM = desiredTimeZone12HourSplit.split("");

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

console.log(
"Conversion one Time Zone to Another",
result,
currTimeZoneAbbr +
  " -> " +
  desiredHourMinute[0] +
  ":" +
  desiredHourMinute[1],
desiredtimeZone12HourSplitAmPM[0] +
  "." +
  desiredtimeZone12HourSplitAmPM[1] +
  ".",
desiredTimeZoneAbbre
);

/* ######################################################## hand angle calc ########################*/
function angleClock(hour, minutes) {
const minuteAngle = minutes * 6;
const hourAngle = hour * 30 + minutes * 0.5;
const angle = Math.abs(hourAngle - minuteAngle);
return Math.min(angle, 360 - angle);
}

var hour = currDateTime.hours(); /* Returns the hour (from 0-23) */
var minutes = currDateTime.minutes(); /* Returns the minutes (from 0-59)*/

var currentClockHandAngle = angleClock(hour, minutes);
console.log(
"Return the angle between the Clock Hands:",
result,
"->",
currentClockHandAngle,
"degrees"
);

/* some time quotes*/
//store the quotations in arrays
quotes = [];
authors = [];
quotes[0] = "We must use time as a tool, not as a couch.";
authors[0] = "John F. Kennedy";
quotes[1] = "Time is what we want most but what we use the worst.";
authors[1] = "William Penn";
quotes[2] = "Better three hours too soon than a minute too late.";
authors[2] = "William Shakespeare";
quotes[3] =
"Time will not slow down when something unpleasant lies ahead.";
authors[3] = "Harry Potter";
quotes[4] =
"The clock is running. Make the most of today. Time waits for no man. Yesterday is history. Tomorrow is a mystery. Today is a gift. That's why it is called the present.";
authors[4] = "Alice Morse Earle";
quotes[5] =
"The mind is like a clock that is constantly running down and must be wound up daily with good thoughts.";
authors[5] = "Fulton J Sheen";
//calculate a random index number
index = Math.floor(Math.random() * quotes.length);
//display the quotation
console.log('"' + quotes[index] + '"' + " - " + authors[index]);
//done