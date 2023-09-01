
        const sessionid=localStorage.getItem('sessionid');
        async function Profile(){
          
 
           location.assign('/profile');
        };
           async function logout() {
            var c = axios.post("https://attractive-pear-apron.cyclic.app/logout", { id: sessionid });
            
            c.then(function(result){
                console.log(result.data.logoutmsg);
                let speech = new SpeechSynthesisUtterance(result.data.logoutmsg);
                //  speech.lang = 'ta-IN';
                 speechSynthesis.speak(speech);
                 const timeout=setTimeout(()=>{
                 location.assign("/");
            },2000);
            
            });
            localStorage.removeItem("sessionid");
            document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
            
           
           
        }

     function ser(){
            localStorage.setItem('kindofreq',"Services");
            console.log(localStorage.setItem('kindofreq',"services"));
            location.assign('/services');
        }
        function gui(){
            localStorage.setItem('kindofreq',"Guidance");
            console.log(localStorage.setItem('kindofreq',"Guidance"));
            location.assign('/services');
        }
        function go(){
            localStorage.setItem('kindofreq',"Goods");
            console.log(localStorage.setItem('kindofreq',"Goods"));
            location.assign('/services');
        }
        
         /*   function read(){
                let read={
                    storage: localStorage.getItem('sessionid'),
                    type:document.querySelector('input[name="request"]:checked').value
               }
              console.log(read);
              let x=axios.post("http://localhost:21021/request",{details:read});
            }*/
           
