/*Sign Up*/

let buttonSolution = document.getElementById("signUp");

	
 let listUser = [
    {
    userName : 'Carl',
    surNames : 'Teds Dert',
    email : 'carlteds@gmail.com',
    password : '5412512'
},
];

buttonSolution.addEventListener("click" , function (){
	
    let name = document.getElementById("name")
	let surnames = document.getElementById("surnames")
	let email = document.getElementById("email")
    let password = parseInt(document.getElementById("password")) 

 	if (name.value === null || name.value === ''){        
 		document.getElementById("error_name").innerHTML = "Error Name";
         return false;
        
 	}else {
 		document.getElementById("error_name").style.display = "none";
 	}

 	if (surnames.value === null || surnames.value === ''){
 		document.getElementById("error_surnames").innerHTML = "Error Surnames";
 		return false;
 	} else {
 		document.getElementById("error_surnames").style.display = "none"
 	}

	 if (email.value === null || email.value === ''){
		document.getElementById("error_email").innerHTML = "Error email";
		return false;
	} else {
		document.getElementById("error_email").style.display = "none"
	}

 	if (password.value === null || password.value <= 0){
 		document.getElementById("error_password").innerHTML = "Error password";
 		return false;
 	} else {
 		document.getElementById("error_password").style.display = "none";
 	}
	 
	

    let nameValue = name.value
    let surnamesValue= surnames.value
    let emailValue= email.value
    let passwordValue= password.value
    
    let newUser = {

        userName : nameValue,
        surNames : surnamesValue,
        email : emailValue,
        password : passwordValue
      
      }
    
      listUser.push(newUser);
    
      name.value = ''
      surnames.value = ''  
      email.value = ''
      password.value = ''

      
      console.log(listUser);



	/* box_dashed.style.display="block";

 	var p_name = document.querySelector("#p_name span");
 	var p_surnames = document.querySelector("#p_surnames span");
 	var p_password = document.querySelector("#p_password span");

 	p_name.innerHTML = name;
 	p_surnames.innerHTML = surnames;
 	p_password.innerHTML =password;

    name.value = ''
    surnames.value = ''
    email.value = ''
    password.value = '' 
    password2.value = ''*/
});


/*Contac Us*/
let button = document.getElementById('send')


button.addEventListener('click', () => {

    let emailContact = document.getElementById('emailContact')
    let textContact = document.getElementById('textContact')

    if (emailContact.value <= 0 || emailContact.value === null ){
		document.getElementById("errorEmailContact").innerHTML = "Error emai";
		return false;
	} else {
		document.getElementById("errorEmailContact").style.display = "none"
	}
    if (textContact.value <= 0 || textContact.value === null){
		document.getElementById("errorTextContact").innerHTML = "Error comment";
		return false;
	} else {
		document.getElementById("errorTextContact").style.display = "none"
	}

    let emailsValue = emailContact.value
    let textValue = textContact.value

    let listContacUs = [
        {
            emailContact:'vsdfjhr@gmail.com',
            textContact: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater'
        },
    ];
  
    let comment = {

      emailContact: emailsValue,
      textContact: textValue
    
    }
  
    listContacUs.push(comment);
  
    emailContact.value = ''
    textContact.value = ''
    console.log(listContacUs);
  
  });