
function Awake()
{
    Death();
}
function Death()
{
	  yield WaitForSeconds (.8);
  Destroy(gameObject);
}