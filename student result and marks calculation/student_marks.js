let pass = "gaurav123";
let password = prompt("Enter the password");

if(password===pass){
//      ************************ class 10th **************************
   
let clas = prompt("enter your class");
clas = parseInt(clas);
if(clas === 10 ){

// hindi marks for class 10th

let hindi_marks_of_10 = prompt("enter hindi marks:");
hindi_marks_of_10 = parseInt(hindi_marks_of_10);

if(hindi_marks_of_10 > 90){
    console.log("Hindi: O");
}
else if(hindi_marks_of_10 >= 80 ){
    console.log("Hindi: A+");
}
else if(hindi_marks_of_10 >= 70 ){
    console.log("Hindi: A");
}
else if(hindi_marks_of_10 >= 60 ){
    console.log("Hindi: B+");
}
else if(hindi_marks_of_10 >= 45 ){
    console.log("Hindi: B");
}
else{
    console.log("Hindi: U")
}

// english marks for class 10

let english_marks_of_10 = prompt("enter english marks:");
english_marks_of_10 = parseInt(english_marks_of_10);

if(english_marks_of_10 > 90){
    console.log("English: O");
}
else if(english_marks_of_10 >= 80 ){
    console.log("English: A+");
}
else if(english_marks_of_10 >= 70 ){
    console.log("English: A");
}
else if(english_marks_of_10 >= 60 ){
    console.log("English: B+");
}
else if(english_marks_of_10 >= 45 ){
    console.log("English: B");
}
else{
    console.log("English: U")
}

// math marks for class 10

let math_marks_of_10 = prompt("enter math marks:");
math_marks_of_10 = parseInt(math_marks_of_10);

if(math_marks_of_10 > 90){
    console.log("Mathematics: O");
}
else if(math_marks_of_10 >= 80 ){
    console.log("Mathematics: A+");
}
else if(math_marks_of_10 >= 70 ){
    console.log("Mathematics: A");
}
else if(math_marks_of_10 >= 60 ){
    console.log("Mathematics: B+");
}
else if(math_marks_of_10 >= 45 ){
    console.log("Mathematics: B");
}
else{
    console.log("Mathematics: U")
}

// science  marks for class 10

let science_marks_of_10 = prompt("enter science marks:");
science_marks_of_10 = parseInt(science_marks_of_10);

if(science_marks_of_10 > 90){
    console.log("Science: O");
}
else if(science_marks_of_10 >= 80 ){
    console.log("Science: A+");
}
else if(science_marks_of_10 >= 70 ){
    console.log("Science: A");
}
else if(science_marks_of_10 >= 60 ){
    console.log("Science: B+");
}
else if(science_marks_of_10 >= 45 ){
    console.log("Science: B");
}
else{
    console.log("Science: U")
}

// socialscience marks for class 10

let socialscience_marks_of_10 = prompt("enter socialscience marks:");
socialscience_marks_of_10 = parseInt(socialscience_marks_of_10);

if(socialscience_marks_of_10 > 90){
    console.log("SocialScience: O");
}
else if(socialscience_marks_of_10 >= 80 ){
    console.log("SocialScience: A+");
}
else if(socialscience_marks_of_10 >= 70 ){
    console.log("SocialScience: A");
}
else if(socialscience_marks_of_10 >= 60 ){
    console.log("SocialScience: B+");
}
else if(socialscience_marks_of_10 >= 45 ){
    console.log("SocialScience: B");
}
 else{
    console.log("SocialScience: U");
}

let total_marks = hindi_marks_of_10 + english_marks_of_10 + math_marks_of_10 + science_marks_of_10 + socialscience_marks_of_10;
console.log("total_marks:"+ total_marks);
let Average = total_marks*100 /500;
console.log("Average:" + Average +" % ");
if(total_marks>=300){
    console.log("Result: Pass");
}else{
    console.log("Result: Failed");
}

}



// *********************** class 12th ***************************


else if(clas === 12 ){

// hindi marks for class 12

let hindi_marks_of_12 = prompt("enter hindi marks:");
hindi_marks_of_12 = parseInt(hindi_marks_of_12);

if(hindi_marks_of_12 > 90){
    console.log("Hindi: O");
}
else if(hindi_marks_of_12 >= 80 ){
    console.log("Hindi: A+");
}
else if(hindi_marks_of_12 >= 70){
    console.log("Hindi: A");
}
else if(hindi_marks_of_12 >= 60 ){
    console.log("Hindi: B+");
}
else if(hindi_marks_of_12 >= 45){
    console.log("Hindi: B");
}
else{
    console.log("Hindi: U")
}

// english marks for class 12

let english_marks_of_12 = prompt("enter english marks:");
english_marks_of_12 = parseInt(english_marks_of_12);

if(english_marks_of_12 > 90){
    console.log("English: O");
}
else if(english_marks_of_12 >= 80 ){
    console.log("English: A+");
}
else if(english_marks_of_12 >= 70){
    console.log("English: A");
}
else if(english_marks_of_12 >=60){
    console.log("English: B+");
}
else if(english_marks_of_12 >= 45){
    console.log("English: B");
}
else{
    console.log("English: U")
}

// Chemistry marks for class 12

let Chemistry_marks_of_12 = prompt("enter Chemistry marks:");
Chemistry_marks_of_12 = parseInt(Chemistry_marks_of_12);

if(Chemistry_marks_of_12 >= 90){
    console.log("Chemistry: O");
}
else if(Chemistry_marks_of_12 >= 80 ){
    console.log("Chemistry: A+");
}
else if(Chemistry_marks_of_12 >= 70 ){
    console.log("Chemistry: A");
}
else if(Chemistry_marks_of_12 >= 60 ){
    console.log("Chemistry: B+");
}
else if(Chemistry_marks_of_12 >= 45){
    console.log("Chemistry: B");
}
else{
    console.log("Chemistry: U")
}

// Physics  marks for class 12

let Physics_Marks_Of_12 = prompt("enter Physics marks:");
PhysicsMarksOf12 = parseInt(Physics_Marks_Of_12);

if(Physics_Marks_Of_12 >= 90){
    console.log("Physics: O");
}
else if(Physics_Marks_Of_12 >=80 ){
    console.log("Physics: A+");
}
else if(Physics_Marks_Of_12 >= 70 ){
    console.log("Physics: A");
}
else if(Physics_Marks_Of_12 >= 60 ){
    console.log("Physics: B+");
}
else if(Physics_Marks_Of_12 >= 45 ){
    console.log("Physics: B");
}
else{
    console.log("Physics: U")
}

// Biology marks for class 12

let Biology_Marks_Of_12 = prompt("enter Biology marks:");
BiologyMarksOf12th = parseInt(Biology_Marks_Of_12);

if(Biology_Marks_Of_12 >= 90){
    console.log("Biology: O");
}
else if(Biology_Marks_Of_12 >= 80){
    console.log("Biology: A+");
}
else if(Biology_Marks_Of_12 >= 70){
    console.log("Biology: A");
}
else if(Biology_Marks_Of_12 >= 60){
    console.log("Biology: B+");
}
else if(Biology_Marks_Of_12 >= 45 ){
    console.log("Biology: B");
}

else{
    console.log("Biology: U")
}
let total_marks = hindi_marks_of_12 + english_marks_of_12 + Chemistry_marks_of_12 + PhysicsMarksOf12 + BiologyMarksOf12th;
total_marks = parseInt(total_marks);
console.log("total_marks:" + total_marks);
let Average = total_marks*100 /500;
console.log("Average:" + Average + " % ");
if(total_marks>=300){
    console.log("Result: Pass");
}else{
    console.log("Result: Failed");
}
}
}else{
    console.log(" ohh!! sorry Incorrect Password try Again.");
}
















