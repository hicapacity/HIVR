
 var projectile : Rigidbody;
function OnCollisionEnter(myCol: Collision){
 




    if(myCol.gameObject.name == "death_plane"){
       Destroy(gameObject);
       }
     if(myCol.gameObject.name == "Sphere"){
    		var clone : Rigidbody;
			clone = Instantiate(projectile, transform.position, transform.rotation);
			
			// Give the cloned object an initial velocity along the current 
			// object's Z axis
			clone.velocity = transform.TransformDirection (Vector3.forward * 10);
			   Destroy(gameObject);
    }

}
