  let Type="";

        window.onload = function load() {
            register();
        };

        function login() {
            document.querySelector('.register').style.display='none ';
            document.querySelector('.login').style.display='block ';
        }
        function register(){
            document.querySelector('.register').style.display='block ';
            document.querySelector('.login').style.display='none';
        }

        function voterid(n){
           
           let extra=document.querySelector('input[name="id"]:checked').value;
           Type=extra+":"+n;
           console.log(Type);
           
        }

        async function register2(){
                   
               const detail={
                   name:document.getElementById('formname').value,
                   address:document.getElementById('add1').value,
                   phone:document.getElementById('formphone').value,
                   gender:document.querySelector('input[name="gender"]:checked').value,
                   dob:document.getElementById('dob').value,
                   pincode:document.getElementById('pincode').value,
                   pin:document.getElementById('pin').value,
                   requesttypehelp:document.querySelector('input[name="requesttypehelp"]:checked').value,
                   type:Type
               };
               console.log(detail.type);
               if(name===""){
                 errordisplay("Please enter your name");
               }
               
               
               let a=await axios.post("https://attractive-pear-apron.cyclic.app/reghelper",{data:detail});
               console.log(a.data);
               localStorage.setItem('sessionidhelper',a.data.ids.sessionIdHelper);
               location.assign("/formrequesthelper");

        }

        async function login2(){
            const details={
                a:document.getElementById('num').value,
               b:document.getElementById('pass').value
           };
           if(details.a===""){
             errordisplay("Please Enter Your Number");
        }
        else if(details.b===""){
            errordisplay("Please Enter Your PIN");
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
              document.getElementById('errhelp').style.display="block";
               document.getElementById('errhelp').innerHTML=value;
             
                // let speech = new SpeechSynthesisUtterance(value);
                // //  speech.lang = 'ta-IN';
                //  speechSynthesis.speak(speech);
//                let speech1 = new SpeechSynthesisUtterance("thayavuseithu ungal ennai ullidavum");
//                //  speech.lang = 'ta-IN';
//                 speechSynthesis.speak(speech1);
                 console.log("work");
                 const timeout=setTimeout(()=>{
                     document.getElementById("errhelp").style.display="none";
                 },6000);      
              
          }
        
