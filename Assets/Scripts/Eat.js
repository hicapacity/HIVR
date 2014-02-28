var nomParticles : Transform;


function OnTriggerEnter(other : Collider)
{
  if (other.gameObject.tag == "food")
     {
    
     audio.Play();
     Instantiate(nomParticles, other.gameObject.transform.position, other.gameObject.transform.rotation);
     yield WaitForSeconds (0.8); 
     if (other.gameObject != null)
     {
     	Destroy(other.gameObject);
 	 
     }
     

      }
}
