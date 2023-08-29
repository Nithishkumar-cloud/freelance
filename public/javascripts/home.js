
        const sessionid=localStorage.getItem('sessionid');
        async function Profile(){
          
 
           location.assign('/profile');
        };
            async function Logout() {
                var c = axios.post("https://worried-gold-shoulder-pads.cyclic.app/logout", { id:sessionid});
               localStorage.clear();
               document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
                location.assign("/");
            }
        
        
         /*   function read(){
                let read={
                    storage: localStorage.getItem('sessionid'),
                    type:document.querySelector('input[name="request"]:checked').value
               }
              console.log(read);
              let x=axios.post("http://localhost:21021/request",{details:read});
            }*/
           
