/*
---------ex01-------------------- my_first_js_script_with_args.js
let myArg = process.argv.slice(2)
console.log(myArg);
---------------------------------
---------ex02-------------------- my_is_negative.js
function my_is_negative(n){
    if (typeof(n) === "number"){
        if (Math.sign(n) == -1){return 0}
            else{return 1}
    }
}
---------------------------------
---------ex03-------------------- my_abs.js

function my_abs(nbr){
    if (typeof(nbr) === "number"){
        if (Math.sign(nbr) === -1){
            return nbr * -1
        }else{return nbr}
    }
}
---------------------------------
---------ex04-------------------- my_add.js
function my_add(nbr1, nbr2){
    if (typeof(nbr1) === "number" && typeof(nbr2) === "number" ){
        return nbr1 + nbr2
    }
}

---------------------------------
---------ex05--------------------my_sub.js
function my_sub(nbr1, nbr2){
    if (typeof(nbr1) === "number" && typeof(nbr2) === "number" ){
        return nbr1 - nbr2
    }
}
---------------------------------
---------ex06-------------------- my_mult.js
function my_mult(nbr1, nbr2){
    if (typeof(nbr1) === "number" && typeof(nbr2) === "number" ){
        return nbr1 * nbr2
    }
}
---------------------------------
---------ex07--------------------  my_isinteger.js
function my_isinteger(n){
    if (typeof(n) === "number"){
        if (Number.isInteger(n)){
            return 1
        }else{return 0}
    }else {return 0}
}
---------------------------------
---------ex08-------------------- my_isstring
function my_isstring(n){
    if (typeof(n) === "string"){
        return 1
    }else {return 0}
}
---------------------------------
---------ex09-------------------- my_string_formatting.js
function my_string_formatting(firstname, lastname, age){
    return ` ${firstname}, ${lastname}`
}
---------------------------------
---------ex10-------------------- my_string_index.js
function my_string_index(haystack, needle){
    return haystack.indexOf(needle)
}
---------------------------------
---------ex11-------------------- my_upcase.js
function my_upcase(str){
    if (typeof(str) == "string"){return str.toUpperCase()}
    else{return "please enter a string"}
}
---------------------------------
---------ex12-------------------- my_downcase.js
function my_downcase(str){
    if (typeof(str) == "string"){return str.toLowerCase()}
    else{return "please enter a string"}
}
---------------------------------
---------ex13-------------------- my_capitalize.js
function my_capitalize(str){
        if (typeof(str) == "string"){
            return `${str.charAt(0).toUpperCase()}${str.slice(1).toLowerCase()}`
        }
        else{return "please enter a string"}
}
---------------------------------
---------ex14-------------------- my_size.js
function my_size(str){
        if (typeof(str) == "string"){
            return str.length
        }
        else{return "please enter a string"}
}
---------------------------------
---------ex15-------------------- my_array_alphabet.js
function my_array_alphabet(){
    let str= []
    for(let i=97; i<123; i++)
    {
        str.push(String.fromCharCode(i))
    }
    return str
}
---------------------------------
---------ex16-------------------- my_array_numbers.js
function my_array_numbers(){
    let num= []
    for(let i=0; i<15; i++)
    {
        num.push(i)
    }
    return num
}
---------------------------------
---------ex17-------------------- my_each.js
function my_each(array){
    if (typeof(array) == "object"){
        for(let i=0; i<array.length; i++)
        {
            console.log(i);  
        }
    }
}
---------------------------------
---------ex18-------------------- my_map_mult_two.js
function my_map_mult_two(array){
    if (typeof(array) == "object"){
    return array.map((a)=> a*2)
}}
---------------------------------
---------ex19-------------------
function my_count_on_it(array){
    if (typeof(array) == "object"){
    return array.map((a)=> a.length)
}}
---------------------------------
---------ex20-------------------- 
function my_array_uniq(integer_array){
    return integer_array.filter((element,index,array) => array.indexOf(element) === index) }
---------------------------------
*/

// if (typeof(n) === "number"){

let test = (stuff)=> {console.log(stuff)};


// console.log(my_array_alphabet())



// my_count_on_it
/*
++++++++++++++++++++++++++++++++QUEST02+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



------------------------------ex00------------------------------------- my_average_mark.js
function my_average_mark(class_results){
    if (typeof(class_results) == "object"){
        class_scores = Object.values(class_results)
        if(class_scores.length == 0){return "0.0"}
        else{
            return class_scores.reduce((acc,ele) => acc + ele, 0)/class_scores.length
        } 
    }
}
let test = (stuff)=> {console.log(stuff)};
samp = {
        "John": 7,
        "Margot": 8,
        "Jules": 4,
        "Marco": 19
       }
test(my_average_mark(samp))

" this ex00 has a script which takes in a hash argument and returns the average of the scores of the students"
----------------------------------------------------------------------
------------------------------ex01------------------------------------- rostring.js
function rostring(string){
    if (typeof(string) == "string"){
        if (string == " "){ return string}
        else if (string.trim().split(" ").length == 1){return string.trim()}
        else{
            string = string.split(" ").filter((item) => item !== " " && item !== "")
            first_item = string.slice(0,1)
            string.push(first_item[0])
            return string.slice(1).join(" ")
        }
    }else{return "please provide string"}
}
let test = (stuff)=> {console.log(stuff)};
samp = "abc "
samp1 = ""
samp2 = ""Que la      lumiere soit et la lumiere fut""
test(rostring(samp))
----------------------------------------------------------------------

------------------------------[   ex02  ]-----------------------------------------
samp = [3,2,1]


function my_is_sort(array){
    if (typeof(array) == "object"){
        const arr = [...array]
        if(`${arr.slice(0)}` === `${array.sort().slice(0)}` || `${arr.slice(0)}` === `${array.sort().reverse().slice(0)}`){return true}
        else{ return  false}
        // console.log("hello");
        
    }
}
// `${array.slice(0)}` === `${array.sort().slice(0)}`)
let test = (stuff)=> {console.log(stuff)};
test(my_is_sort(samp))

---------------------------------------------------------------------------------
------------------------------[   ex03   ]----------------------------------------- my_sort.js
samp = [2,23, 1, -1]


function my_sort(array, order){
    if (typeof(array) == "object"){
    
        if (order === "asc"){
            return array.sort()}
        else if (order === "desc"){
            return array.sort().reverse()
        }else{return array}
    }
}

test(my_sort(samp, "dessc"))
---------------------------------------------------------------------------------
------------------------------[   ex04  ]-----------------------------------------
function my_split(string, charset)
{
    let ch = charset.split(" ").filter(el => el !=="")
    let v =[]
    if(charset[charset.length-1] == " ")
    {
         v = string.split(" ").map(n => v = n == charset.trim() ? n.split('') : n)
         return v.flat()
    }  
    else if(charset[0] == " ")
    {
        return string.replace(ch, ' ').split(' ')
    }
    else{
        let str = string.split(charset)
        let firstEl = str.shift().replace(/\s/g,"") 
        str.unshift(firstEl)
         return str
    }
---------------------------------------------------------------------------------
------------------------------[   ex05   ]----------------------------------------- my_join.js
samp = ["abc", "def", "gh", "!"]


function my_join(array, separator){
    if (typeof(array) == "object"){
        return [array.join(separator)]
    }
}

test(my_join(samp, "\t"))
---------------------------------------------------------------------------------
------------------------------[   ex06   ]----------------------------------------- my_courses_average.js
my_courses_average = (array) => {
        let total_students = array.map( (ele) => Object.values(ele).length ).reduce((acc,ele) => acc+ele, 0)
        let class_scores = array.map( (ele) => Object.values(ele)).flat().reduce((acc,ele) => acc+ele, 0)
        return class_scores/total_students
     }
---------------------------------------------------------------------------------
------------------------------[   ex07   ]-----------------------------------------
function run_robot(instructions){
var x = 0 , y=0;
var dir = "North";
temp = instructions.split("");
for (var i of temp) {
  if(dir=="North"){
     if(i =="R")
     dir ="East";
    else if(i=="A")
     y= y+1;
    else
     dir = "West";
  }
  else if(dir=="West"){
    if(i == "R")
      dir ="North";
    else if(i=="A")
      x = x-1;
    else
     dir = "South";
  }
 else if(dir == "East"){
   if(i == "R")
      dir ="South";
    else if(i=="A")
     x=x+1;
    else
     dir=" North";
 }
 else{
   if(i == "R")
      dir= "West";
    else if(i=="A")
      y=y-1;
    else
    dir ="East";
 }
}
return {x:x ,y:y ,bearing:dir}
}


++++++++++++++++++++++++++++++++++++++++++++[ QUEST 03  ]+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
---------------------------------------------------------------------------------
------------------------------[   ex00   ]----------------------------------------- my_hamming_dna
function hamming_dna(dna_1, dna_2){
    let count = 0
    for(let i = 0; i< dna_1.length; i++){
        if (dna_1[i] !== dna_2[i]){
            count +=1
        }
    }
    return count
}
let test = (stuff)=> {console.log(stuff)};
test = "GGACGGATTCTG" && "AGGACGGATTCT"
test2 = "GGACTGAAATCTG" && "GGACTGAAATCTG"
test3 = ""&""
test(hamming_dna("", ""))
---------------------------------------------------------------------------------
------------------------------[   ex01   ]----------------------------------------- my_roman_numerals_converter.js


---------------------------------------------------------------------------------
------------------------------[   ex   ]-----------------------------------------


---------------------------------------------------------------------------------
------------------------------[   ex   ]-----------------------------------------


---------------------------------------------------------------------------------
------------------------------[   ex   ]-----------------------------------------


---------------------------------------------------------------------------------
*/
// samp = ["abc", "def", "gh", "!"]


// function my_join(array, separator){
//     if (typeof(array) == "object"){
//         return [array.join(separator)]
//     }
// }

// test(my_join(samp, "\t"))

// function calculate_statistics(...args) {

//     return args.map(  (obj)=> obj )

// }


// function calculate_statistics() {
//    let  class_csci101 = {
//       "margot": 17,
//       "june": 8,
//       "colin": 14,
//       "lewis": 9 }
//    let class_csci102 = {
//       "quentin": 16,
//       "julie": 15,
//       "mark": 8,
//       "stephanie": 13
//     }
//    let class_csci103 = {
//       "quentin": 1,
//       "julie": 10,
//       "mark": 81,
//       "stephanie": 3
//     }
//     let courses = [class_csci101, class_csci102];
    
//     console.log("Average mark for the CSCI courses: "+my_courses_average(courses).toPrecision(2));
//     // console.log(my_courses_average(courses));
    
//   }


// calculate_statistics();


// my_courses_average = (array) => {
//     let total_students = array.map( (ele) => Object.values(ele).length ).reduce((acc,ele) => acc+ele, 0)
//     let class_scores = array.map( (ele) => Object.values(ele)).flat().reduce((acc,ele) => acc+ele, 0)
//     return class_scores/total_students
//  }



  
// `${array.slice(0)}` === `${array.sort().slice(0)}`)
// let test = (stuff)=> {console.log(stuff)};
// calculate_statistics()

function my_roman_numerals(number){
    roman = []
    number = String(number)
    
    let calc = (n, base, middle, peak) => {
        if(n<5 && n!==4){
            return base.repeat(n)
        }
        else if(n === 4){
            return base+middle
        }
        else if (n>5 && n<9){
            return middle + base.repeat((n-5))
        }
        else if(n === 9){
            return base+peak
        }
        else if(n === 5){
            return middle
        }
        else{ return ''}

    }
    switch (number.length) {
        case 4:
            roman.push('M'.repeat(Number(number[0])))
            roman.push(calc(Number(number[1]), 'C','D','M'))
            roman.push(calc(Number(number[2]),'X','L','C'))
            roman.push(calc(Number(number[3]),'I','V','X'))
            break;
        case 3:
            roman.push('M'.repeat(Number(number[0])))
            roman.push(calc(Number(number[1]), 'C','D','M'))
            roman.push(calc(Number(number[2]),'X','L','C'))
            roman.push(calc(Number(number[3]),'I','V','X'))
            break;
        case 2:
            roman.push('M'.repeat(Number(number[0])))
            roman.push(calc(Number(number[1]), 'C','D','M'))
            roman.push(calc(Number(number[2]),'X','L','C'))
            roman.push(calc(Number(number[3]),'I','V','X'))
            break;
        case 1:
            roman.push('M'.repeat(Number(number[0])))
            roman.push(calc(Number(number[1]), 'C','D','M'))
            roman.push(calc(Number(number[2]),'X','L','C'))
            roman.push(calc(Number(number[3]),'I','V','X'))
            break;
    
        default:
            break;
    
            
        }
    console.log(roman.join(''));
}

my_roman_numerals()