const sideMenu = document.querySelector("aside")
const menuBtn = document.querySelector("#menu-btn")
const closeBtn = document.querySelector("#close-btn")
const changeTheme = document.querySelector(".change-theme")

// Show Menu
menuBtn.addEventListener('click', ()=>{
    sideMenu.style.display ='block'
})
// Close Menu
closeBtn.addEventListener('click', () => {
    sideMenu.style.display ='none'
})

// Theme Change
changeTheme.addEventListener('click', ()=> {
    document.body.classList.toggle('dark-theme');

    changeTheme.querySelector('span:nth-child(1)').classList.toggle('active')
    changeTheme.querySelector('span:nth-child(2)').classList.toggle('active')
})



Orders.forEach(orders =>{
    const tr = document.createElement('tr');
    const trConteudo = `
    <td>${orders.productName}</td>
    <td>${orders.orderNumber}</td>
    <td>${orders.paymentStatus}</td>
    <td class="${orders.shipping === 'Canceled' ? 'danger': orders.shipping === 'Pendent'?'attention' : 'primary'} ">${orders.shipping}</td>
    <td class="primary">Details</td>
    `
    tr.innerHTML = trConteudo;
    document.querySelector('table tbody').appendChild(tr);
})