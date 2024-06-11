window.addEventListener("load",checkinternetconnection);
function checkinternetconnection()
{
    const statusText=document.getElementById('statusText');
    const ipaddressText=document.getElementById('ipaddressText');
    const networkstrengthText=document.getElementById('networkstrengthText');
    statusText.textContent='checking....';
    if(navigator.onLine){

        fetch('https://api.ipify.org?format=json')
        .then((response)=>response.json())
        .then((data)=>{

            ipaddressText.textContent = data.ip;
            statusText.textContent='connected'

            const connection = navigator.connection;
            const networkstrength = connection ? connection.downlink + 'Mbps' :'Unknown';
            networkstrengthText.textContent = networkstrength;

        })
        .catch(()=>{
        statusText.textContent='Disconnected';
        ipaddressText.textContent= '-';
        networkstrengthText.textContent= '-';

        }

        )

    }else{
        statusText.textContent='Disconnected';
        ipaddressText.textContent= '-';
        networkstrengthText.textContent= '-';

    }

}