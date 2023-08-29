
let dt = "";
let pr = "";
let rq = "";
let gnd = "";


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

function choosegen(){
     gnd = document.querySelector('input[name="gender"]:checked').value;
     console.log(gnd);let speech = new SpeechSynthesisUtterance("your gender"+gnd+"selected successfully");
      speechSynthesis.speak(speech);
}

function choosepro(){
    pr = document.querySelector('option[name="profession"]:checked').value;
    console.log(pr);
    let speech = new SpeechSynthesisUtterance("your profession"+pr+"selected successfully");
      speechSynthesis.speak(speech);
}
function choosereq(){
      rq = document.querySelector('input[name="requesttype"]:checked').value;
      console.log(rq);
      let speech = new SpeechSynthesisUtterance("your Request Type"+rq+"selected successfully");
      speechSynthesis.speak(speech);
}
function choosechi(){
    dt = document.querySelector('input[name="child"]:checked').value;
    console.log(dt);
    let speech = new SpeechSynthesisUtterance("your Disability Type"+dt+"selected successfully");
      speechSynthesis.speak(speech);
}

     async function register1(){

            const user={
                 a:document.getElementById('formname').value,
                 b:document.getElementById('formphone').value,
                q:document.getElementById('whatsapp').value,
                 c:document.getElementById('form1').value,
                 d:document.getElementById('udid/sdid').value,
                 e:document.getElementById('aadhar').value,
                 f:document.getElementById('dob').value,
                 g:document.getElementById('add1').value,
                  m:document.getElementById('add2').value,
                 // h:document.querySelector('input[name="child"]:checked').value,
                 // k:document.querySelector('option[name="profession"]:checked').value,
                 // rqtype:document.querySelector('input[name="requesttype"]:checked').value,
                 // j:document.querySelector('input[name="gender"]:checked').value,
                   dt,
                   pr,
                   rq,
                   gnd,
                 l:document.getElementById('pass').value,
                 pincode:document.getElementById('pincode').value,
                //p:document.getElementById("certificate").files[0]
            };
            if (user.a === "") {
                   errordisplayreg("Please Enter Your Name");
           } 
          else if (gnd === "") {
             errordisplayreg("Please Enter Your Gender");
         }
        else if (rq === "") {
           errordisplayreg("Please Enter Your Request Type");
       } 
      else if (pr === "") {
          errordisplayreg("Please Enter Your Profession");
       } 
       else if (dt === "") {
           errordisplayreg("Please Enter Your Disability Type");
       }
       else if(user.l===""){
           errordisplayreg("Please Enter Your Password");
       }
       else if(user.pincode===""){
           errordisplayreg("Please Enter Your Pincode");
       }
       else if(user.p===""){
           errordisplayreg("Please Upload Your Certificate");
       }
       else if(user.m===""){
           errordisplayreg("Please Enter Your Permanent Address");
        }
        else if(user.g===""){
            errordisplayreg("Please Enter Your Current Address");
       }
       else if(user.f===""){
           errordisplayreg("Please Enter Your DateOfBirth");
      }
      else if(user.e===""){
          errordisplayreg("Please Enter Your Aadharcard Number");
      }
     else if(user.d===""){
        errordisplayreg("Please Enter Your UDID or SDID Number");
    }
     else if(user.c===""){
        errordisplayreg("Please Enter Your Disability Percentage");
    }
     else if(user.q===""){
        errordisplayreg("Please Enter Your Whatsapp Number");
    }
     else if(user.b===""){
        errordisplayreg("Please Enter Your Phonenumber");
    }
     else{
        let q=await axios.post("https://attractive-pear-apron.cyclic.app/register",{data:user});
            console.log(q.data);
          if (q.data.regmsg === "Registered successfully") {
                 console.log(q.data.regmsg);
                let speech = new SpeechSynthesisUtterance(q.data.regmsg);
                 speechSynthesis.speak(speech);
                 const timeout=setTimeout(()=>{
            
                         localStorage.setItem('sessionid', q.data.ids.sessionId);
                         location.assign("/homepage");
                 },3000);
            
        }
      else{
         errordisplayreg(q.data.regmsg);
      }
           
      }
       
             
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
function errordisplayreg(value) {
    document.getElementById('errreg').style.display = "block";
    document.getElementById('errreg').innerHTML = value;

    let speech = new SpeechSynthesisUtterance(value);
    //  speech.lang = 'ta-IN';
    speechSynthesis.speak(speech);
//                let speech1 = new SpeechSynthesisUtterance("thayavuseithu ungal ennai ullidavum");
//                //  speech.lang = 'ta-IN';
//                 speechSynthesis.speak(speech1);
    console.log("work");
    const timeout = setTimeout(() => {
        document.getElementById("errreg").style.display = "none";
    }, 6000);

}
