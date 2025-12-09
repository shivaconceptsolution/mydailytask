let s = "abcdefgh"
console.log(s[3]);
console.log(s.charAt(3))
console.log(s);
let countvowel=0
let countconsonant=0
for(let i=0;i<s.length;i++)
{
   if(s.charAt(i)== 'a' || s.charAt(i)== 'e' || s.charAt(i)== 'i' || s.charAt(i)== 'o' || s.charAt(i)== 'u') 
     countvowel++;
   else
     countconsonant++;
}
console.log(`Total Vowel is ${countvowel} and Consonant is ${countconsonant} `)


