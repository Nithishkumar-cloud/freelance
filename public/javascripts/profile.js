const sessionid = localStorage.getItem('sessionid');

        var x = axios.post("/ids", { id: sessionid });
        

        x.then(function (result) {
           
            const a = document.getElementById('user').innerHTML = result.data.values.Name;
            const b = document.getElementById('per').innerHTML = result.data.values.Disabilityper;
            const c = document.getElementById('pro').innerHTML = result.data.values.Profession;
            const d = document.getElementById('add').innerHTML = result.data.values.Address;
            const g=document.getElementById('peradd').innerHTML=result.data.values.PermanentAdd;
            const e = document.getElementById('dob').innerHTML = result.data.values.Dateofbirth;
            const f = document.getElementById('phone').innerHTML = result.data.values.Phone;
            const h=document.getElementById('whatphone').innerHTML=result.data.values.Whatsapp;
        });
        

        async function logout() {
            var c = axios.post("/logout", { id: sessionid });
            
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
        async function phone() {
            const details = {
                Phone: document.getElementById('phoneinput').value,
                sessionid: localStorage.getItem('sessionid')
            };
            if(details.Phone===""){
                document.getElementById('phoneerr').style.display="block";
                 document.getElementById('phoneerr').innerHTML="Please Enter Your Phone Number";
                 let speech = new SpeechSynthesisUtterance("Please Enter Your Phone Number");
                //  speech.lang = 'ta-IN';
                 speechSynthesis.speak(speech);
                 const timeout=setTimeout(()=>{
                     document.getElementById('phoneerr').style.display="none";
                 },3000);
                 
              }
              else{
                  var c=await axios.post("/phoneupdate", { data: details });
                  console.log(c.data.user.Phone);
                  console.log(c.data.phonemsg);
                
                document.getElementById('phoneerrmsg').innerHTML=c.data.phonemsg;
                let speech = new SpeechSynthesisUtterance(c.data.phonemsg);
                //  speech.lang = 'ta-IN';
                 speechSynthesis.speak(speech);
                const f = document.getElementById('phone').innerHTML = c.data.user.Phone;
                const timeout=setTimeout(()=>{
                     location.assign('/profile');
                 },3000);
              };
          }
             
        
        async function whatphone() {
            const details = {
                WhatsappPhone: document.getElementById('whatphoneinput').value,
                sessionid: localStorage.getItem('sessionid')
            };
            
            if(details.WhatsappPhone===""){
                 document.getElementById('whaterr').style.display="block";
                 document.getElementById('whaterr').innerHTML="Please Enter Your Whatsapp Number";
                 let speech = new SpeechSynthesisUtterance("Please Enter Your Whatsapp Number");
                //  speech.lang = 'ta-IN';
                 speechSynthesis.speak(speech);
                 const timeout=setTimeout(()=>{
                     document.getElementById('whaterr').style.display="none";
                 },3000);
              }
              else{
                   var d=await axios.post("/WhatsappPhoneUpdate", { data: details });
                   
                  
                document.getElementById('whaterrmsg').innerHTML=d.data.whatmsg;
                let speech = new SpeechSynthesisUtterance(d.data.whatmsg);
                //  speech.lang = 'ta-IN';
                 speechSynthesis.speak(speech);
                const f = document.getElementById('whatphone').innerHTML = d.data.user.Whatsapp;
                const timeout=setTimeout(()=>{
                     location.assign('/profile');
                 },3000);
            
              }
            
        }
        async function dob() {
            const details = {
                dob: document.getElementById('dobinput').value,
                sessionid: localStorage.getItem('sessionid')
            };
            if(details.dob===""){
                document.getElementById('doberr').style.display="block";
                 document.getElementById('doberr').innerHTML="Please Enter your DateofBirth";
                 let speech=new SpeechSynthesisUtterance("Please Enter Your Dateofbirth");
                 speechSynthesis.speak(speech);
                 const timeout=setTimeout(()=>{
                     document.getElementById('doberr').style.display="none";
                 },3000);
              }
              else{
                   var c=await axios.post("/dobupdate", { data: details });
             console.log(c.data.dobmsg);
                document.getElementById('doberrmsg').innerHTML=c.data.dobmsg;
                let speech = new SpeechSynthesisUtterance(c.data.dobmsg);
                //  speech.lang = 'ta-IN';
                 speechSynthesis.speak(speech);
                
                
                const f = document.getElementById('dob').innerHTML = c.data.user.Dateofbirth;
                const timeout=setTimeout(()=>{
                     location.assign('/profile');
                 },3000);
              }
            
        }
        async function address() {
            const details = {
                address: document.getElementById('address').value,
                sessionid: localStorage.getItem('sessionid')
            };
            if(details.address===""){
                document.getElementById('adderr').style.display="block";
                 document.getElementById('adderr').innerHTML="Please Enter your Current Address";
                 let speech=new SpeechSynthesisUtterance("Please Enter Your Current Address");
                 speechSynthesis.speak(speech);
                 const timeout=setTimeout(()=>{
                     document.getElementById('adderr').style.display="none";
                 },3000);
              }
              else{
                   var c=await axios.post("/addressupdate", { data: details });
             
                 document.getElementById('adderrmsg').innerHTML=c.data.cuaddmsg;
                let speech = new SpeechSynthesisUtterance(c.data.cuaddmsg);
                //  speech.lang = 'ta-IN';
                 speechSynthesis.speak(speech);
                
                const f = document.getElementById('add').innerHTML = c.data.user.Address;
             const timeout=setTimeout(()=>{
                     location.assign('/profile');
                 },3000);
              }
              
            
            
        }
        async function peraddress() {
            const details = {
                peraddress: document.getElementById('peraddress').value,
                sessionid: localStorage.getItem('sessionid')
            };
            if(details.peraddress===""){
                  document.getElementById('peradderr').style.display="block";
                 document.getElementById('peradderr').innerHTML="Please Enter Your Permanent Address";
                 let speech=new SpeechSynthesisUtterance("Please Enter Your Permanent Address");
                 speechSynthesis.speak(speech);
                 const timeout=setTimeout(()=>{
                     document.getElementById('peradderr').style.display="none";
                 },3000);
              }
              else{
                  var c=await axios.post("/PermanentAddressChange", { data: details });
             document.getElementById('peradderrmsg').innerHTML=c.data.permanentaddmsg;
                let speech = new SpeechSynthesisUtterance(c.data.permanentaddmsg);
                //  speech.lang = 'ta-IN';
                 speechSynthesis.speak(speech);
                
                const f = document.getElementById('peradd').innerHTML = c.data.user.PermanentAdd;
                const timeout=setTimeout(()=>{
                     location.assign('/profile');
                 },3000);
            
              }
 
        }
        async function percentage() {
            const details = {
                Disabilityper: document.getElementById('perinput').value,
                sessionid: localStorage.getItem('sessionid')
            };
            if(details.Disabilityper===""){
                document.getElementById('diserr').style.display="block";
                 document.getElementById('diserr').innerHTML="Please Enter Your Disability percentage";
                  let speech=new SpeechSynthesisUtterance("Please Enter Your Disability percentage");
                 speechSynthesis.speak(speech);
                 const timeout=setTimeout(()=>{
                     document.getElementById('diserr').style.display="none";
                 },3000);
              }
              else{
                   var c=await axios.post("/disperupdate", { data: details });
             document.getElementById('diserrmsg').innerHTML=c.data.percentagemsg;
                 let speech = new SpeechSynthesisUtterance(c.data.percentagemsg);
                //  speech.lang = 'ta-IN';
                 speechSynthesis.speak(speech);
                
                const f = document.getElementById('per').innerHTML = c.data.user.Disabilityper;
                 
                const timeout=setTimeout(()=>{
                     location.assign('/profile');
                 },3000);
              }
            
            
        }

        async function profession(){
            const details={
                sessionid:localStorage.getItem('sessionid'),
                profession:document.querySelector('option[name="profession"]:checked').value
            };
            if(details.profession===""){
                document.getElementById('proerr').style.display="block";
                 document.getElementById('proerr').innerHTML="Please Enter Your Profession";
                 let speech=new SpeechSynthesisUtterance("Please Enter Your Profession");
                 speechSynthesis.speak(speech);
                 const timeout=setTimeout(()=>{
                     document.getElementById('proerr').style.display="none";
                 },3000);
              }
              else{
                  var c=await axios.post("/profession",{data:details});
           
              document.getElementById('proerrmsg').innerHTML=c.data.professionmsg;
                 let speech = new SpeechSynthesisUtterance(c.data.professionmsg);
                //  speech.lang = 'ta-IN';
                 speechSynthesis.speak(speech);
                const f = document.getElementById('pro').innerHTML = c.data.user.Profession;
                 const timeout=setTimeout(()=>{
                     location.assign('/profile');
                 },3000);
            
              }
            
        }
        async function pinchange() {
            const details = {
                oldpass:document.getElementById('oldpass').value,
                newpass: document.getElementById('newpass').value,
                sessionid: localStorage.getItem('sessionid')
            };
            if(details.oldpass === ""){
                document.getElementById('pinerr').style.display="block";
              document.getElementById('pinerr').innerHTML="Please Enter Your Oldpin";
              let speech=new SpeechSynthesisUtterance("Please Enter Your oldpin");
                 speechSynthesis.speak(speech);
                 const timeout=setTimeout(()=>{
                     document.getElementById('pinerr').style.display="none";
                 },3000);
            }
            else if(details.newpass===""){
                document.getElementById('pinerr').style.display="block";
                document.getElementById('pinerr').innerHTML="Please Enter Your Newpin";
                 let speech=new SpeechSynthesisUtterance("Please Enter Your Newpin");
                 speechSynthesis.speak(speech);
                 const timeout=setTimeout(()=>{
                     document.getElementById('pinerr').style.display="none";
                 },3000);
            }
            else{
               let x=await axios.post("/pinupdate", { data: details });
               console.log(x.data.pinmsg);
             document.getElementById('pinerrmsg').innerHTML=x.data.pinmsg;
                 let speech = new SpeechSynthesisUtterance(x.data.pinmsg);
                //  speech.lang = 'ta-IN';
                 speechSynthesis.speak(speech);
               const timeout=setTimeout(()=>{
                     location.assign('/profile');
                 },3000);
            }
             
             
        }
