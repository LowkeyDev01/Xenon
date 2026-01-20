const buyUser = document.getElementById('onek')
const buyCreator = document.getElementById('threek')
const emaila = document.getElementById('email')

buyUser.addEventListener('click', ()=>{
    if(!emaila.value){
        alert ('brahh')
        return;
    }
    const handler = PaystackPop.setup({
        key: "pk_test_fc09796ab382f6d3c6e1390f6ea930c60fe0bb2a",
        email: emaila.value,
        currency: 'NGN',
        amount: 1000 * 100,

        callback: function(response){
            window.location.href = `/success.html?reference=${response.reference}&role=USER`
        },
        onclose: function(){
            alert('Payment cancelled')
        }
    })
    handler.openIframe()
})
buyCreator.addEventListener('click', ()=>{
    if(!emaila.value){
        alert ('brahh')
        return;
    }
    const handler = PaystackPop.setup({
        key: "pk_test_fc09796ab382f6d3c6e1390f6ea930c60fe0bb2a",
        email: emaila.value,
        currency: 'NGN',
        amount: 3000 * 100,

        callback: function(response){
            window.location.href = `/success.html?reference=${response.reference}&role=CREATOR`
        },
        onclose: function(){
            alert('Payment cancelled')
        }
    })
    handler.openIframe()
})
