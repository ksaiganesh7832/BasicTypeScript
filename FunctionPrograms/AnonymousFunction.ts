function PlayerName(name : string) : void
{
    console.log(name)   // To know name value we are printing it
}

PlayerName("Ganesh");

function PlayerGame(Game : (name : string) => void) : void  // (name : string) => void)--It's a unnamed function
{
    Game("Football")   // To know Game, we are calling the function
}

PlayerGame(PlayerName)  //Calling function under another function