let altura = document.getElementById('ialtura')
let res =  document.getElementById('resposta')
let pesos = document.getElementById('ipesos')

function caucular(){
    let altura = document.getElementById('ialtura')
    let pesos = document.getElementById('ipesos')
    let res =  document.getElementById('resposta')
    

    let num1 = Number(altura.value)
    let num2 = Number(pesos.value)


    let imc = Math.trunc(num2/(num1*num1)).toFixed(2)


    if(imc <= 16.9){
        res.innerText = `Seu IMC é ${imc} (Muito Abaixo do peso)`
    }else if(imc >=17 &&  imc <=18.4){
        res.innerText = `Seu IMC é ${imc} (Abaixo do peso)`
    }else if(imc >=18.5 && imc <= 24.9){
        res.innerText = `Seu IMC é ${imc} (Peso Normal)`
    }else if(imc >=25 && imc <= 29.9){
        res.innerText = `Seu IMC é ${imc} (Acima do Peso)`
    }else if(imc >= 30 && imc <= 34.9){
        res.innerText = `Seu IMC é ${imc} (Obesidade Grau 1)`
    }else if(imc >= 35 && imc <= 40){
        res.innerText = `Seu IMC é ${imc} (Obesidade Grau 2)`
    }else if (imc > 40){
        res.innerText = `Seu IMC é ${imc} (Obesidade Grau 3) `
    }
}