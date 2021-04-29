//Variáveis usadas.
var slider; 
var xMinBotao = 150
var larguraBotao = 200
var xMaxBotao = xMinBotao + larguraBotao

var yMinBotao1 = 220
var alturaBotao = 60
var yMaxBotao1 = yMinBotao1 + alturaBotao

var yMinBotao2 = 300
var yMaxBotao2 = yMinBotao2 + alturaBotao

var yMinBotao3 = 140
var yMaxBotao3 = yMinBotao3 + alturaBotao

var yMinBotao4 = 410
var yMaxBotao4 = yMinBotao4 + alturaBotao

var yMinBotao5 = 50
var alturaBotao = 60
var yMaxBotao5 = yMinBotao5 + alturaBotao
var tela = 0;


//Função do mouse e cores dos botões.
function menuBotao(texto, yMin, yMax, opcao) {
    // Botão 2 
    if (mouseX > xMinBotao && mouseX < xMaxBotao && mouseY > yMin && mouseY < yMax) {
        fill(150);
        if (mouseIsPressed) {
            tela = opcao;
            
        }
    }
    else {
        noFill();
    }
    rect(xMinBotao, yMin, larguraBotao, alturaBotao, 15);
    textSize(26);
    fill(900);
    text(texto, xMinBotao + 35, yMin + 40);
  
    }
 

//Tela de créditos.
function telaCreditos() {
    background(creditos);
    menuBotao("Voltar", yMinBotao4, yMaxBotao4, 0);
}

//Tela de instruções.
function telaInstrucoes() {
    background(instrucoes);
      menuBotao("Voltar", yMinBotao4, yMaxBotao4, 0);
           
  }

//Telas "Prosseguir", com explicação.
  function prosseguindo1(){
    background(prosseguir1);  
    menuBotao("Prosseguir", yMinBotao4, yMaxBotao4, 7);
       
  }

function prosseguindo2(){
if(tela==8){
    background(prosseguir2);
    menuBotao("Prosseguir", yMinBotao4, yMaxBotao4, 9);
}}

  function prosseguindo3(){
    background(prosseguir3);
    menuBotao("Prosseguir", yMinBotao4, yMaxBotao4, 11);
    
  }
  function prosseguindo4(){
    background(prosseguir4);
    menuBotao("Prosseguir", yMinBotao4, yMaxBotao4, 13);
    
  }
   function prosseguindo5(){
    background(prosseguir5);
    menuBotao("Prosseguir", yMinBotao4, yMaxBotao4, 15);
    
  }
   function prosseguindo6(){
    background(prosseguir6);
    menuBotao("Prosseguir", yMinBotao4, yMaxBotao4, 17);
      }
   function prosseguindo7(){
    background(prosseguir7);
    menuBotao("Prosseguir", yMinBotao4, yMaxBotao4, 19);
      }
  
//Tela de fim de jogo.
function fimdejogo(){
     background(zeramento);
menuBotao("    Menu", yMinBotao5, yMaxBotao5, 0);   }
     
//Todas as mídias do jogo. 
function preload() {
    
  primeiraquestao = loadImage("Q1.png") 
  segundaquestao = loadImage("Q2.png") 
  terceiraquestao = loadImage("Q3.png") 
  quartaquestao = loadImage("Q4.png") 
  quintaquestao = loadImage("Q5.png") 
  sextaquestao = loadImage("Q6.png") 
  setimaquestao = loadImage("Q7.png") 
  prosseguir1 = loadImage("PQ1.png") 
  prosseguir2 = loadImage("PQ2.png") 
  prosseguir3 = loadImage("PQ3.png") 
  prosseguir4 = loadImage("PQ4.png") 
  prosseguir5 = loadImage("PQ5.png") 
 prosseguir6 = loadImage("PQ6.png")  
  prosseguir7 = loadImage("PQ7.png")
  questaoerrada = loadImage("ERROU.png")
  zeramento = loadImage("ZEROU.png")
  instrucoes = loadImage("INSTRUÇÕES.png")
  creditos = loadImage("CRÉDITOS.png")
  menuprincipal = loadImage("INICIAL.png")
  musicajogo = loadSound("MUSICAJOGO1.mp3")
   
}

//Função setup, com o slider e a música. 
function setup() {

    createCanvas(500, 500);
    musicajogo.loop();
    
    slider = createSlider(0, 1, 0.5, 0.01);
}


//Função draw, com menu e as fases do jogo.
function draw() {
    
    musicajogo.setVolume(slider.value())
    if (tela == 0) {
        background(menuprincipal);
        
        menuBotao("   Jogue!", yMinBotao3, yMaxBotao3, 3);

        menuBotao("Sobre o jogo", yMinBotao1, yMaxBotao1, 1);

        menuBotao("  Créditos", yMinBotao2, yMaxBotao2, 2);
      
        
    }
    if (tela == 1) {
        telaInstrucoes();
    }
    if (tela == 2) {
        telaCreditos();
    }
    if (tela == 3) {
       background(primeiraquestao);
        menuBotao("(a) Verdadeiro", yMinBotao1, yMaxBotao1, 100);
        menuBotao("(b) Falso.", yMinBotao2, yMaxBotao2, 6);
    }  
  if (tela == 100){
      background(questaoerrada);
        menuBotao("    Menu", yMinBotao5, yMaxBotao5, 0);    musicajogo.stop();
    musicajogo.play();
      }
    if(tela==6){
      prosseguindo1()
            
    }
  if (tela==7){
      background(segundaquestao)
      menuBotao("(a) Verdadeiro", yMinBotao1, yMaxBotao1, 8);
      menuBotao("(b) Falso.", yMinBotao2, yMaxBotao2, 100);
   
   }
  if(tela==8){
    prosseguindo2()
  }
    
       if (tela==9){
      background(terceiraquestao)
      menuBotao("(a) Verdadeiro", yMinBotao1, yMaxBotao1, 10);
      menuBotao("(b) Falso.", yMinBotao2, yMaxBotao2, 100);
    } 
  
    if (tela==10){
      prosseguindo3();
    }
      
      if(tela==11){
        background(quartaquestao)
          menuBotao("(a) Verdadeiro", yMinBotao1, yMaxBotao1, 100);
         menuBotao("(b) Falso.", yMinBotao2, yMaxBotao2, 12);
       
        }
         if(tela==12){
           prosseguindo4();
                    }  
  
        if(tela==13){
          background(quintaquestao)
          menuBotao("(a) Verdadeiro", yMinBotao1, yMaxBotao1, 100);
         menuBotao("(b) Falso.", yMinBotao2, yMaxBotao2, 14);          
        }
  
         if(tela==14){
           prosseguindo5()
    
          }
          if(tela==15){
            background(sextaquestao)
          menuBotao("(a) Verdadeiro", yMinBotao1, yMaxBotao1, 16);
         menuBotao("(b) Falso.", yMinBotao2, yMaxBotao2, 100);
          }
         
          if(tela==16){
          prosseguindo6()          
          }
         if(tela==17){
               background(setimaquestao)
          menuBotao("(a) Verdadeiro", yMinBotao1, yMaxBotao1,100);
         menuBotao("(b) Falso.", yMinBotao2, yMaxBotao2, 18);       
         } 
      if(tela==18){
        prosseguindo7()
        
              }
     if(tela==19){
       fimdejogo()
       musicajogo.stop();
      musicajogo.play();
     }
     }