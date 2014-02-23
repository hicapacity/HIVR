function OnCollisionEnter(myCol: Collision){
 
    if(myCol.gameObject.name == "death_plane"){
       Destroy(gameObject);
       }

}
