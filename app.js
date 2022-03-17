function addStyle(styleString) {
    const style = document.createElement('style');
    style.textContent = styleString;
    document.body.append(style);
  }


document.querySelector('.btn').addEventListener('click',function(e){
const y = document.querySelector('#email').value
if (!(y.endsWith('@esi-sba.dz'))) { alert('your email address is invalid.. it does not belong to ESI SBA') }
else { 

//     addStyle(`    .flip-card .allthepage {
//         transform: rotateY(180deg);

//         .tbbdmr {
//             z-index: 10;
//             cursor: pointer;
//         }

//         }
// `)


        const tl = gsap.timeline({defaults: {duration: 1.5}})
        tl.to('.allthepage', {rotationY: 180})
        tl.to('.thefirstCard', {scale:0})

}
    e.preventDefault
})