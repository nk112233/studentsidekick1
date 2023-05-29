let availableKeywords = ['COEP', 'PICT'];

const resultBox = document.querySelector(".resultBox");
const inputBox = document.getElementById("inputBox");

inputBox.onkeyup = function(){
    let result = [];
    let input = inputBox.value;
    if(input.length){
        result = availableKeywords.filter((keyword)=>{
          return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    display(result);
}


function display(result){
    const content = result.map((list)=>{
        if (list != []) {
            return "<a href= '/" + list + ".html'> <li class = ' flex w-full'>"+list+"</li></a>";
        }
        
    });
    resultBox.innerHTML = "<ul>" + content.join('') + "</ul>"; 
}