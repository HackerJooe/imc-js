function calcular(){
    let altura = document.getElementById('altura').value
    let peso = document.getElementById('peso').value
    let img = document.getElementById('img')

    let imc = peso / (altura * altura).toFixed(2)
    let res = document.getElementById('res')
        

        if(imc >= 0 && imc < 18.5){
            img.src = '../img/magro.jfif'
            document.body.style.background = '#5bd9ab'
            res.innerHTML = 'Você precisa se alimentar melhor, o seu mc está: ' + imc
        }else if (imc >= 18.6 && imc < 24.9){
            img.src = '../img/ideal.jfif'
            document.body.style.background = '#1ba673'
            res.innerHTML = 'Você está no peso ideal, continue sendo saudavel, o seu imc é: ' + imc
        }else if (imc >= 25 && imc < 30){
            img.src = '../img/acima.jfif'
            document.body.style.background = '#f28f79'
            res.innerHTML = 'Você precisa se alertar a sua alimentação, possivel sobrepeso, o seu mc está: ' + imc
        }else if (imc >= 30.1 && imc < 35){
            img.src = '../img/gordo.jfif'
            document.body.style.background = '#f2637e'
            res.innerHTML = 'Atenção, é bom começar uma dieta mais saudavel, e o seu imc está: ' + imc
        }else if (imc >= 35.1 && imc < 99){
            img.src = '../img/obeso.jfif'
            document.body.style.background = '#d94e4e'
            res.innerHTML = 'Perigo Alimentar, deve imediatamente ir a um médico, o seu imc esta muito alto, seu imc atual é: ' + imc
        }else{imc}
    
    
}
let button = document.getElementById('button')
button.addEventListener('click', calcular).


document.documentElement.className = 'light';
            var theme = "light";
            function switchTheme(){
                if(theme === 'dark'){
                    document.documentElement.className = 'light';
                    theme = 'light';
                } else {
                    document.documentElement.className = 'dark';
                    theme = 'dark';
                }

            }

window.addEventListener
            