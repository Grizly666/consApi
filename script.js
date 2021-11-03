
const url = "https://reqres.in/api/users?page=2";
const p = document.getElementById("p");
const CodeHttp = document.getElementById("code");



fetch(url)


.then(function(res) {
    CodeHttp.innerHTML = res.status ;
  if (res.ok) {
   return res.json()
     
   
   
  }
 
})
.then(function(value) {
  
    
    

    for (let i = 0; i < value.data.length; i++) {
        var html = `<div class="card m-5 shadow" style="width: 18rem;">
        <img src="${value.data[i].avatar}" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text">${value.data[i].first_name} - ${value.data[i].last_name}</p>
          <p class="card-text">${value.data[i].email}</p>
          ${value.data[i].id}
          <div class="row ">
                    <button id="#" type="button" onclick="Update()" class="btn btn-outline-success col-4 mx-auto btn-sm">Modifier</button>
                    <button id="#" type="button" onclick="Delete()" class="btn btn-outline-danger col-4 mx-auto btn-sm">Supprimer</button>

                </div>
        </div>
      </div>`

        
        p.insertAdjacentHTML('afterbegin', html) 
        
    }
})

.catch(function(err) {
  // Une erreur est survenue
});

const Form = document.getElementById('Form');
Form.addEventListener('submit', () => 
{event.preventDefault();
    const dataForm = { 
                  first_name:document.getElementById('first_Name').value,
                  last_name:document.getElementById('last_Name').value,
                  email:document.getElementById('email').value,
                  mdp:document.getElementById('mdp').value,
                  avatar:document.getElementById('avatar').value
                  };

                  const options = {
                    method: 'POST',
                    body: JSON.stringify(dataForm),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }

                 
                fetch('https://reqres.in/api/users', options)
                    
                    .then(res => {
                        if (res.ok) {
                            return CodeHttp.innerHTML = res.status ; 
                        } else {
                            return Promise.reject('Une erreur est survenue');
                        }
                    })
                    .then(res => console.log(res));

               

                    
                    
});  

    function Delete () { 
                const options = {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }

                fetch('https://reqres.in/api/users/2', options)
                    .then(res => {
                        if (res.ok) {
                            return CodeHttp.innerHTML = res.status ; 
                        } else {
                            return Promise.reject('Une erreur est survenue');
                        }
                    })
                    .then(res => console.log(res));
                    
    }




    function Update () { 
       
        const user = {
            first_name: 'John',
            last_name: 'Lilly',
            job_title: 'Software Engineer'
        };
        
        const options = {
            method: 'PUT',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        
        fetch('https://reqres.in/api/users/2', options)
        .then(res => {
            if (res.ok) {
                return CodeHttp.innerHTML = res.status ; 
            } else {
                return Promise.reject('Une erreur est survenue');
            }
        })
        .then(res => console.log(res));

    }

















    const Form3 = document.getElementById('operationForm2');
    function log() 
{ event.preventDefault();



    
    const dataForm = { 
                 
                  email:document.getElementById('email').value,
                  password:document.getElementById('password').value,
                  
                  };
                  console.log(dataForm);
                  const option = {
                    method: 'POST',
                    body: JSON.stringify(dataForm),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
                console.log(fetch('https://reqres.in/api/register',option));
                 
                fetch('https://reqres.in/api/register', option)
                     .then(res => res.json())
                     .then(data => localStorage.setItem("donnees", JSON.stringify(data.token)))
                   
               
                let tokenactual = JSON.parse(localStorage.getItem("donnees"));
                document.getElementById('token').innerHTML = tokenactual;
        } 

        