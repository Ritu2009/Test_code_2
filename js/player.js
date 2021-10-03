class Player{
    constructor(){
        this.index= null;
        this.name=null;

    }

    getCount(){
    var playerCountRef= database.ref('PlayersCount')
    playerCountRef.on("value",(data)=>{
        playerCount= data.val()
    })
    }
    updateCount(count){
        database.ref('/').update({
            PlayersCount:count
        })
    }
    update(){
        var playerIndex= "player"+ playerCount;
        database.ref(playerIndex).update({
            name: this.name,
        })
    }
}