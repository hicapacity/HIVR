function OnCollisionEnter(myCol: Collision){
 
    if(myCol.gameObject.name == "death_plane"){
       Destroy(gameObject);
       }


}
function Awake()
{
    Death();
}
function Death()
{
	  yield WaitForSeconds (10);
  if (gameObject != null)
    	 {
     	Destroy(gameObject);
 	 
    	 }
}