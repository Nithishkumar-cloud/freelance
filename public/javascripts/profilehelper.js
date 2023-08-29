 const sessionidhelper=localStorage.getItem('sessionidhelper');
        console.log(sessionidhelper);
       
        
         var x=axios.post("http://localhost:21021/idshelp",{id:sessionidhelper});
            
            x.then(function(result) {
                
                const a=document.getElementById('user').innerHTML=result.data.values.Name; 
                const c=document.getElementById('gen').innerHTML=result.data.values.Gender;
                const d=document.getElementById('add').innerHTML=result.data.values.Address;
                const e=document.getElementById('dob').innerHTML=result.data.values. Dateofbirth;
                const f=document.getElementById('phone').innerHTML=result.data.values.Phone;
             });
    
             async function logout() {
                var c=axios.post("http://localhost:21021/logout",{id:sessionidhelper});
                localStorage.removeItem("sessionidhelper");
               document.cookie = "tokenhelper=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
                location.assign("/");
            }
            async function phoneupdate() {
                const details = {
                    Phone: document.getElementById('phoneinput').value,
                    sessionid: localStorage.getItem('sessionidhelper')
                };
                if(details.Phone===""){
                    return document.getElementById('phoneerr').innerHTML="Please enter your Phone Number";
                  }
                 var c=axios.post("http://localhost:21021/phone", { data: details });
                 c.then(function(result) {
                    console.log(result);
                    const f = document.getElementById('phone').innerHTML = result.data.user.Phone;
                });
            }
            async function genderupdate() {
                const details = {
                    gender: document.querySelector('input[name="gender"]:checked').value,
                    sessionid: localStorage.getItem('sessionidhelper')
                };
                if(details.gender===""){
                    return document.getElementById('generr').innerHTML="Please enter your Gender";
                  }
                 var c=axios.post("http://localhost:21021/gender", { data: details });
                 c.then(function(result) {
             
                    const f = document.getElementById('gen').innerHTML = result.data.user.Gender;
                });
            }
            async function dobupdate() {
                const details = {
                    dob: document.getElementById('dobinput').value,
                    sessionid: localStorage.getItem('sessionidhelper')
                };
                if(details.dob===""){
                    return document.getElementById('doberr').innerHTML="Please enter your DateofBirth";
                  }
                 var c=axios.post("http://localhost:21021/dob", { data: details });
                 c.then(function(result) {
             
                    const f = document.getElementById('dob').innerHTML = result.data.user.Dateofbirth;
                });
            }
            async function addupdate() {
                const details = {
                    address: document.getElementById('addressinput').value,
                    sessionid: localStorage.getItem('sessionidhelper')
                };
                if(details.address===""){
                    return document.getElementById('adderr').innerHTML="Please enter your Address";
                  }
                 var c=axios.post("http://localhost:21021/address", { data: details });
                 c.then(function(result) {
             
                    const f = document.getElementById('add').innerHTML = result.data.user.Address;
                });
            }
            async function pinchange() {
                const details = {
                    oldpass:document.getElementById('oldpass').value,
                    newpass: document.getElementById('newpass').value,
                    sessionid: localStorage.getItem('sessionidhelper')
                };
                if(details.oldpass==="" ||details.newpass===""){
                    return document.getElementById('pinerr').innerHTML="Please enter your oldpass and newpass";
                  }
                 let x=axios.post("http://localhost:21021/pinupdatehelper", { data: details });
                 console.log(x.data.msg);
            }
       
