function rollDice(){
    const noofdice=document.getElementById("noofdice").value;
    const result=document.getElementById("result");
    const image=document.getElementById("img");
    const values=[];
    const imag=[];
    for(let i=0;i<noofdice;i++){
        const value=Math.floor(Math.random()*6)+1;
        values.push(value);
        imag.push(`<img src="${value}.png">`);
    }
    result.textContent=`Dice : ${values.join(', ')}`;
    img.innerHTML=imag.join('');
}
