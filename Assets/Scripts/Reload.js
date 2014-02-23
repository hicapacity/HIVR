//Spacebar = Reload Scene
var projectile : Rigidbody;
var projectile2 : Rigidbody;

function Update () {
		if (Input.GetKey ("1"))
				{
					Application.LoadLevel (0);
				}
		if(Input.GetButtonDown("Fire1"))
				{
					var clone : Rigidbody;
			clone = Instantiate(projectile, transform.position, transform.rotation);
			
			// Give the cloned object an initial velocity along the current 
			// object's Z axis
			clone.velocity = transform.TransformDirection (Vector3.forward * 10);
				}
	
		if(Input.GetButtonDown("Jump"))
				{
					var clone2 : Rigidbody;
			clone2 = Instantiate(projectile2, transform.position, transform.rotation);
			
			// Give the cloned object an initial velocity along the current 
			// object's Z axis
			clone2.velocity = transform.TransformDirection (Vector3.forward * 10);
				}
	


	
	}