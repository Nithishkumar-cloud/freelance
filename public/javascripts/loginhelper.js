  let Type="";
  let ge="";
  let req="";
  let id="";

        window.onload = function load() {
            login();
        };

         function login() {
            document.querySelector('.register').style.display='none';
            document.querySelector('.login').style.display='block';
            document.getElementById('errhelp').style.display="none";
        }
        function register(){
            document.querySelector('.register').style.display='block ';
            document.querySelector('.login').style.display='none';
            document.getElementById('err').style.display="none";
        }

        function voterid(n){
           
           let extra=document.querySelector('input[name="id"]:checked').value;
           Type=extra+":"+n;
           console.log(Type);
           
        }
        function chooseid(){
            id=document.querySelector('input[name="id"]:checked').value;
            if(id===""){
                errordisplay("Please Enter Your Id");
            }
        }
        function choosege(){
            ge=document.querySelector('input[name="gender"]:checked').value;
        }
        function choosere(){
            req=document.querySelector('input[name="requesttypehelp"]:checked').value;
        }

        async function register2(){
                   
               const detail={
                   name:document.getElementById('formname').value,
                   address:document.getElementById('add1').value,
                   phone:document.getElementById('formphone').value,
                   ge,
                   dob:document.getElementById('dob').value,
                   pincode:document.getElementById('pincode').value,
                   pin:document.getElementById('pin').value,
                   req,
                   Type
               };
               console.log(detail.type);
               if(detail.name===""){
                 errordisplay("Please Enter Your Name");
               }
               else if(id===""){
                   errordisplay("Please Enter Your Id");
               }
               else if(detail.ge===""){
                   errordisplay("Please Enter Your Gender");
               } 
               else if(detail.address===""){
                   errordisplay("Please Enter Your Address");
               }
               else if(detail.phone===""){
                   errordisplay("Please Enter Your Phonenumber");
               }
               
               else if(detail.pin===""){
                   errordisplay("Please Enter Your PIN");
               }
                else if(detail.dob===""){
                   errordisplay("Please Enter Your DateofBirth");
               }
               else if(detail.pincode===""){
                   errordisplay("Please Enter Your Pincode");
               }
               else if(detail.Type===""){
                   errordisplay("Please Enter Your Id");
               }
               else if(detail.req===""){
                   errordisplay("Please Enter Your RequestType");
               }
               else{
                 let a=await axios.post("https://attractive-pear-apron.cyclic.app/reghelper",{data:detail});
               console.log(a.data);
                  const timeout=setTimeout(()=>{
            let date = new Date();
            let expDays = 2;
            date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
            const expires = "expires=" + date.toUTCString();
            document.cookie = ("token=" + a.data.token + ";" + expires);
            localStorage.setItem('sessionidhelper',a.data.ids.sessionIdHelper);
               location.assign("/formrequesthelper");
            },2000);

        }
        }

        async function login2(){
            const details={
                a:document.getElementById('num').value,
               b:document.getElementById('pass').value
           };
           if(details.a===""){
             errordisplaylog("Please Enter Your Number");
        }
        else if(details.b===""){
            errordisplaylog("Please Enter Your PIN");
        }
           else{
            var c=await axios.post("https://attractive-pear-apron.cyclic.app/loghelper",{data:details});
            //console.log(c.data.userlog.Pin);
            if(c.data.message===""){
                localStorage.setItem('sessionidhelper',c.data.ids.sessionIdHelper);
             let date=new Date();
             let expDays=2;
             date.setTime(date.getTime()+(expDays * 24 * 60 * 60 * 1000));
             const expires = "expires=" + date.toUTCString();
             document.cookie=("tokenhelper="+c.data.token+";"+expires);
             location.assign("/formrequesthelper");
            }
            else{
                errordisplay(c.data.message);
            }
        }
    }
          function errordisplay(value){
              document.getElementById('err').style.display="block";
               document.getElementById('err').innerHTML=value;
             
                // let speech = new SpeechSynthesisUtterance(value);
                // //  speech.lang = 'ta-IN';
                //  speechSynthesis.speak(speech);
//                let speech1 = new SpeechSynthesisUtterance("thayavuseithu ungal ennai ullidavum");
//                //  speech.lang = 'ta-IN';
//                 speechSynthesis.speak(speech1);
                 console.log("work");
                 const timeout=setTimeout(()=>{
                     document.getElementById("err").style.display="none";
                 },5000);      
              
          }
        function errordisplaylog(value){
              document.getElementById('errhelp').style.display="block";
               document.getElementById('errhelp').innerHTML=value;
             
               
                 console.log("work");
                 const timeout=setTimeout(()=>{
                     document.getElementById("errhelp").style.display="none";
                 },5000);      
              
          }
        
        
