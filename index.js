let names=[]
function writeCards(gh,io){
    for (let i=0;i<gh.length;i++)
     names.push(`Thank you, ${gh[i]}, for the wonderful ${io} gift!`);return names}
function countDown(number){while (number>-1) {console.log(number--)}}
//console.log(writeCards(['prince','sam','alex']))