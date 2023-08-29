 window.onload = function load() {
        register();
    };
    function login() {
        document.querySelector('.register').style.display='none ';
        document.querySelector('.register1').style.display='none ';
        document.querySelector('.log').style.display='block ';
    }
    function register(){
        
        document.querySelector('.register').style.display='block ';
        document.querySelector('.register1').style.display='block ';
        document.querySelector('.log').style.display='none';
    }
    function helpers(){
        location.assign('/helper');
    }

     async function register1(){

            const user={
                 ab:document.getElementById('formname').value,
                 b:document.getElementById('formphone').value,
                q:document.getElementById('whatsapp').value,
                 c:document.getElementById('form1').value,
                 d:document.getElementById('udid/sdid').value,
                 e:document.getElementById('aadhar').value,
                 f:document.getElementById('dob').value,
                 g:document.getElementById('add1').value,
                  m:document.getElementById('add2').value,
                 h:document.querySelector('input[name="child"]:checked').value,
                 k:document.querySelector('option[name="profession"]:checked').value,
                 rqtype:document.querySelector('input[name="requesttype"]:checked').value,
                 j:document.querySelector('input[name="gender"]:checked').value,
                 l:document.getElementById('pass').value,
                 pincode:document.getElementById('pincode').value,
                //p:document.getElementById("certificate").files[0]
            };
           
           console.log(user.ab);
            
            let q=await axios.post("https://attractive-pear-apron.cyclic.app/register",{data:user},{headers:{"Content-Type": "multipart/form-data"}});
            console.log(q.data);
            localStorage.setItem('sessionid',q.data.ids.sessionId);
            location.assign("/homepage");
        }

        async function login1(){
            const details={
                 a:document.getElementById('logphone').value,
                b:document.getElementById('passpin').value
            };
          
            if(details.a===""){
              errordisplay("Please Enter Your PhoneNumber");
            }
            else if(details.b===""){
                errordisplay("please Enter your Pin") ;
            }
            else{
                     var c=await axios.post("https://attractive-pear-apron.cyclic.app/login",{data:details});
                // console.log(c.data.ids.sessionId);
                //console.log(c.data.msg);
                console.log(c.data.msg);
                console.log(c.data);
                if(c.data.msg===""){
                    let date = new Date();
                 let expDays=2;
                 date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
                 const expires = "expires=" + date.toUTCString();
                 document.cookie=("token="+c.data.token+";"+expires);
                 
                  localStorage.setItem('sessionid',c.data.ids.sessionId);
                  location.assign("/homepage");
                }
                else{
                    errordisplay(c.data.msg);
                }
                
                
            }
          
        }
         function errordisplay(value){
              document.getElementById('err').style.display="block";
               document.getElementById('err').innerHTML=value;
             
                let speech = new SpeechSynthesisUtterance(value);
                //  speech.lang = 'ta-IN';
                 speechSynthesis.speak(speech);
//                let speech1 = new SpeechSynthesisUtterance("thayavuseithu ungal ennai ullidavum");
//                //  speech.lang = 'ta-IN';
//                 speechSynthesis.speak(speech1);
                 console.log("work");
                 const timeout=setTimeout(()=>{
                     document.getElementById("err").style.display="none";
                 },6000);      
              
          }
