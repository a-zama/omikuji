'use strict'

{
    const btn = document.getElementById('btn');
    const p = document.getElementById('p');

    btn.addEventListener('click' , () => {
        p.textContent = null;
        const n = Math.random();

        if (n < 0.05) {
            document.getElementById('result').src ="image/omikuji_daikichi.png";
        } else if (n < 0.2) {
            document.getElementById('result').src ="image/omikuji_chuukichi.png";
        } else if (n < 0.5) {
            document.getElementById('result').src ="image/omikuji_syoukichi.png";
        } else {
            document.getElementById('result').src ="image/omikuji_kyou.png";
        }
      
    });
}