class Quiz{
    async start(){
     if (gameState==0){
       player=new Player()
       var playrCountRef=await database.ref('playerCount').once("value")
       if( playrCountRef.exists()){
        playerCount=playrCountRef.val()
        player.getCount();
       }                                      
        question=new Question();
        question.Display()
      }
    }
}