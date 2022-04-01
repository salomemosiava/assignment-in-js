/* მოგესალმებით მეგობრებო ეს არის დავალება ნომერი 2. დავალების ყველა ეტაპი აღწერილია კომენტარის სახით
 * 1) შედარება
 * 3) If პირობები
 * 4) ლოგიკური ოპერატორები
 * 5) Switch 
 */



// <------- შედარება ---------#### //

const num1 = 0;
const boolean1 = false;
const num2 = 5;
const emptyString = "";
const boolean2 = false;
const text = "I'm Text";
const text2 = "0";

// ჩამოწერეთ ცვლადები რომელი არის true რომელი false
// ჩამოწერეთ ზეპირად!
// მაგ. [1, 2, 3, 4]

// >>> კოდი დაწერეთ აქ 
const isFalse = [ boolean1, boolean2];
const isTrue = [ num1, num2, emptyString,  text, text2];

//


// შეცვალეთ ერთი ასო რომ მიიღოთ ჭეშმარიტი დებულება
// მოკლედ ახსენით მუშაობის პრინციპი თუ რატომ იმოქმედა

console.log("ahc" > "ah")
console.log(2 !== "004")



// <------- ლოგიკური ოპერატორები ---------#### //

// შეამოწმეთ სრულ წლოვნებაზე და თუ მეტი ან ტოლია
// 18 წელზე შესთავაზეთ სასმელი

// >>> კოდი დაწერეთ აქ 
let age = prompt("რამდენი წლის ხარ?")
if (age >= 18 && age < 100 ) {
  alert( 'ჩვენი ბოტი გთავაზობს სასმელს' );
}
console.log(alert)

//


// მოიფიქრეთ 2 if else-ის მაგალითი თქვენით

// >>> კოდი დაწერეთ აქ
let person = prompt("მარველის საყვარელი პერსონაჟი")
if (person ==="რკინის კაცი") {
  alert ("შემოდი");
} else {
  alert( 'კიდევ ერთი ცდა გაქვს' );
}
console.log(alert)

let code = prompt("ახლა დაასახელე კოდი")
if (code ==="კოდი") {
  alert ("შეგიძლია შესვლა");
} else {
  alert( 'პაკააააა' );
}
console.log(alert)
//


// გადაიყვანეთ If ternary operator-ში მაგ. (true ? 1 : 2) 

// >>> კოდი დაწერეთ აქ

let result = (person === "რკინის კაცი" ) ? 'Right!' : 'Wrong.';
console.log(result)
//



/*
  ჩვენ გვაქვს ოთხი ფერი რომელთაც აქვთ
  კონკრეტული ციფრები მინიჭებული (თეთრი=4, 
  წითელი=3, მწვანე=2, ლურჯი=1, შავი=0, 
  სხვა ყველა ფერი=undefinde)
*/

let colorId = 3;

// დაწერეთ if ისე, რომ როდესაც ჩვენ
// შევცვლით მაღლა განსაზღვრულ ცვლადს გავიგოთ
// ამ აიდის ფერი (ფერი გამოიტანეთ კონსოლში ტექსტის
// სახით)


// >>> კოდი დაწერეთ აქ
if (colorId == 4) {
  message = 'თეთრი';
} else if (colorId == 3) {
  message = 'წითელი';
} else if (colorId == 1) {
  message = 'ლურჯი';
} else if (colorId == 0) {
  message = 'შავი';
} else {message = 'undefinde'}
console.log(message)
//



// გადაიყვანეთ If ternary operator-ში მაგ. (true ? 1 : 2) 

// >>> კოდი დაწერეთ აქ
let color = 
  (colorId === 4) ? 'თეთრი' :
  (colorId === 3) ? 'წითელი':
  (colorId === 1) ? 'ლურჯი':
  (colorId === 0) ? 'შავი' : 'undefinde';

  console.log(color)





// <------- დავალება Switch ---------#### //

// ცადეთ იგივე გააკეთოთ რაც წინა დავალებაში
// ოღონდ ამჯერად Switch-ის დახმარებით


// >>> კოდი დაწერეთ აქ
switch (colorId) {
  case 0:
    color = "შავი";
    break;
  case 1:
    color = "ლურჯი";
    break;
  case 3:
    color = "წითელი";
    break;
  case 4:
    day = "თეთრი";
    break;
  default: 
    color = "undefinde";
}
console.log(color)

//



//  ||
//  ||
//  ||
// \  /
//  \/

/*
    ეს დავალება რომ ნახოთ გამოიყენეთ HTML,
    ჩვენი მიზანია ავაწყოთ ჩეთ ბოტი რომელთანაც ვისაუბრებთ
    როგორც ხედავთ დაბლა გამზადებული მაქვს კოდის გარკვეული
    ნაწილი ეს არის ფუნქცია რომელსაც მომავალში გავივლით
    კონკრეტულად ეს ფუნქცია არის რეკურსიული, რეკურსია
    არის პროცესი როდესაც ფუნქცია თავის თავს იძახებს ჩვენ კი
    იმიტომ ვიყენებთ ამას, რომ ყოველ ჯერზე როდესად რაღაცის თქმა
    დაგვჭირდება მზად იყოს სასაუბროდ ჩვენი ბოტი

    // კოდში მოათავსეთ Switch რომლითაც დააპროგნოზებთ სასაუბრო
    // სიტყვებს ააწყობთ მინი ჩათ ბოტს.
    მაგ. 
    """"
      case "გამარჯობა":
        alert("გამარჯობა");
        break;
    """"
*/
const bot = document.getElementById("bot")
bot.addEventListener("click", myFun())

function myFun() {
  let x = prompt("მე მზად არ ვარ პასუხისათვის")

  // >>> კოდი დაწერეთ აქ გამოიყენეთ Switch
  
  switch (x) {
    case "a":
      answer = "ჰეი";
      break;
    case "b":
      answer = "ჰაი";
      break;
    case "c":
      answer = "გამარჯობა";
      break;
    default:
      answer = "??";
      return
  }

  //

  // რეკურსიული ფუნქცია
  myFun()
}