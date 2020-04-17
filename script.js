likes = 0
function adicionarLike(){
  likes = likes + 1
  botao.innerHTML=likes+" Like"
  if (likes ==1){
    botao.innerHTML=likes+" Like"
  }
  else {
    botao.innerHTML=likes+" Likes"
  }
  
}