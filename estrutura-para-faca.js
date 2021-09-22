   function acaoBotao() {
   var numero,  fatorial, contador
   numero = prompt("Digite o numero p c fatorial")
   fatorial = 1    
   for (contador = 1; contador <= numero; contador++) {
       fatorial = fatorial * contador 
   }
   document.getElementById("paragrafo").innerText = "O Fatorial de " + numero + " e: " + fatorial
}

