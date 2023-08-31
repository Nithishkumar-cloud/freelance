
let b="";
async function service(){
//      let a=document.querySelectorAll('input[name="request"]:checked').map(()=>{
//           b=this.value;
//      });
//      
//            console.log(b);
  var elems= document.querySelectorAll('input[name="request"]:checked');
                for (var i=0;i<elems.length;i++)
                {
                    var Checkedvalue =elems[i].value;
                    b+=","+Checkedvalue;
                    
                }
                let c=b.substring(1);
                console.log(c);
                localStorage.setItem('requesttype', c);
                location.assign('/formrequest');

}
