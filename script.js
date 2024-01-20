// JavaScript Document
   let loader = document.querySelector(".loader")
   window.addEventListener("load", vanish)
   
   function vanish(){
	   loader.classList.add("disapper");
	   }
  const URL = "https://api.github.com/users/johnpapa/repos";
  const repoPara = document.querySelector("#repo")

  const getRepo = async ()=>{
	  console.log("getting data....");
	  let response = await fetch(URL);
      console.log(response);
	  let data = await response.json();
	  repoPara.innerText = data.map((user)=>
									 `
									 NAME:${user.name}
									 DESCRIPTION:${user.description}
								     
									 `
									 ).join("");
	  }
	  getRepo();
