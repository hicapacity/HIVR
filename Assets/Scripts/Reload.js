//Spacebar = Reload Scene
var projectile : Rigidbody;
var projectile2 : Rigidbody;
var projectile3 : Rigidbody;
var table : GameObject;
var water : GameObject;
var toggleTable = 0;
function Update () {

		if (Input.GetKeyDown ("1"))
				{
					//Debug.LogError("1 Pressed");
					Application.LoadLevel (0);  //Loads Level 0 (Normal)
				}
		if (Input.GetKeyDown ("2"))
				{
					//Debug.LogError("2 Pressed");
					Application.LoadLevel (1);  //Loads level 1 (oculus)
				}
		if (Input.GetKeyDown ("3")) //Toggles Table Water
				{
					
					
					if(toggleTable == 0)
					{
					table.SetActive (false);
					water.SetActive (true);
					 toggleTable = 1;
					 
					}
					else if(toggleTable == 1)
						{
					water.SetActive (false);		
					table.SetActive (true);				
					 toggleTable = 0;
				
					}


				}

		if(Input.GetButtonDown("Fire1"))
				{
					var clone : Rigidbody;
			clone = Instantiate(projectile, transform.position, transform.rotation);
			
			// Give the cloned object an initial velocity along the current 
			// object's Z axis
			clone.velocity = transform.TransformDirection (Vector3.forward * 13);
				}
	
		if(Input.GetButtonDown("Jump") || Input.GetButtonDown("Fire2"))
				{
					var clone2 : Rigidbody;
			clone2 = Instantiate(projectile2, transform.position, transform.rotation);
			
			// Give the cloned object an initial velocity along the current 
			// object's Z axis
			clone2.velocity = transform.TransformDirection (Vector3.forward * 13);
				}
		
		if(Input.GetButtonDown("Jump") && Input.GetButtonDown("Fire1") || Input.GetButtonDown("Fire2") && Input.GetButtonDown("Fire1") ||  Input.GetKeyDown("up"))
				{
					var clone3 : Rigidbody;
			clone3 = Instantiate(projectile3, transform.position, transform.rotation);
			
			// Give the cloned object an initial velocity along the current 
			// object's Z axis
			clone3.velocity = transform.TransformDirection (Vector3.forward * 20);
				}
		

	
	}