
    function flagCard(zindex)
    {
        if(document.cardDados.cardFlag.value == 'visa')
            document.getElementById('flagArea').innerHTML = '<img src="visaLogo.png">';
        else if(document.cardDados.cardFlag.value == 'mastercard')
            document.getElementById('flagArea').innerHTML = '<img src="masterLogo.jpg">';
        alternarCards(zindex);
        document.cardDados.cardNum0.focus();
    }
    
    function pNumCard(atual,para,n,zindex)
    {
        var x = document.getElementById('cardNum' + n).value;
        document.getElementById('areaNum' + n ).innerHTML = '<p class="cardNum" id="areaNum" '+n + '>' + x + '</p>';
        
        autotab(atual,para);
        alternarCards(zindex);
    }

    function pNomeCard(atual,para,zindex)
    {
        
        var y = document.getElementById('cardNome').value;
        document.getElementById('cardAreaNome').innerHTML =  y;
        autotab(atual,para);
        alternarCards(zindex);
    }

    function pValCard(atual,para,n,zindex)
    {
        
         var z = document.getElementById('dataVal'+n).value;
        document.getElementById('cardVal' + n).innerHTML = z;
        autotab(atual,para);
        alternarCards(zindex);
    }
    function secCod(zindex)
    {
        var c = document.getElementById('cardCodSec').value;
        document.getElementById('codArea').innerHTML = c;
        alternarCards(zindex);
    }

    function autotab(atual,para){
        if(atual.getAttribute && atual.value.length==atual.getAttribute("maxlength")) 
            para.focus(); 
    }

    function alternarCards(zindex)
    {
        if(zindex == 0)
        {
            var elem0 = document.querySelector('#creditCardFrente');
            elem0.style = 'z-index: 3';
            var elem1 = document.querySelector('#creditCardVerso');
            elem1.style = 'z-index: 2';
        }
        else if (zindex == 1)
        {
            var elem0 = document.querySelector('#creditCardFrente');
            elem0.style = 'z-index: 2';
            var elem1 = document.querySelector('#creditCardVerso');
            elem1.style = 'z-index: 3';
        }
            
    }


