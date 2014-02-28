
function Awake()
{
    Death();
}
function Death()
{
	  yield WaitForSeconds (.8);
  if (gameObject != null)
    	 {
     	Destroy(gameObject);
 	 
    	 }
}