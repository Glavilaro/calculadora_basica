function agregar(valor){
    document.getElementById('pantalla').value += valor
}

function borrar(){
    document.getElementById('pantalla').value = ''
}

function calcular(){
   const ValorPantalla = document.getElementById('pantalla').value
   const resultado = eval(ValorPantalla)
   document.getElementById('pantalla').value = resultado
}