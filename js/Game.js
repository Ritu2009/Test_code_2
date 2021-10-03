class Game{     
    constructor(){}
    getState(){
        var gameStateRef= database.ref('gameState')
        gameStateRef.on("value",(data)=>{
            gameState=data.val()
        })
    }

    update(state){
        database.ref('/').update({
            gameState: state
        })
    }


    start(){
        if(gameState==="init"){
        player=new Player();
        player.getCount();
        form = new Form() ;
        form.display();
    }
}
};