const data = [
    {
   
        imgIceCream:'./img/Rectangle 74.png',
        people:'',
         amer:"",
        titleIceCream:'Brown bread',
        title:'Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.',
        price:'$19.55',
        price2:'$22.55',
        buyNow:'Buy Now',


    },
    {
       
        imgIceCream:'./img/Rectangle 78.png',
        people:'',
        amer:"",
        titleIceCream:'Cayenne chocolate',
        title:'Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.',
        price:'$19.55',
        price2:'$22.55',
        buyNow:'Buy Now',


    },
    {
       
        imgIceCream:'./img/Rectangle 79.png',
        people:'',
        amer:"",
        titleIceCream:'Sweet corn',
        title:'Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.',
        price:'$19.55',
        price2:'$22.55',
        buyNow:'Buy Now',


    },
    {
       
        imgIceCream:'./img/uLkF7xc5W6-removebg-preview 1.png',
        people:'./img/Group 114.png',
        amer:'AMIRICAN',
        titleIceCream:'Adele A. McNeill',
        title:'Thanks a lot for the prompt service. Really appreciate. Excellence taste in Every Bite.Add a joy of best Taste. Foodie Moments.',
        price:'$19.55',
        price2:'$22.55',
        buyNow:'Buy Now',


    },
]
const container = document.getElementById('root');


data.map((item, index) => {
    const productElement = `
        <div class="product justify-items-center">
            <div class="flex gap-[100px] ${index % 2 === 0 ? '' : 'flex-row-reverse'}">
             <div>
             <img src="${item.imgIceCream}" alt="Ice Cream" class="w-[580px]">
                </div>
                <div class="mt-[70px]  ${index % 2 === 0 ? '' : 'text-right	'}	">
                    <p class="w-[300px] ${index % 2 === 0 ? '' : 'ml-[150px]	'} text-[26px] font-[700]">${item.titleIceCream}</p>
                    <p class="w-[454px] text-[16px] font-[400] leading-[24px] font-Roboto mt-[11px]">${item.title}</p>
                    <p class="mt-[34px]">
                        <strong class="w-[71px] text-[26px] font-[500]">${item.price}</strong>
                        <del class="w-[58px] text-[20px] opacity-[70%] Strikethrough font-[500]">${item.price2}</del></p>
                    <button class="mt-[10px] w-[165px] h-[49px] bg-[#D64374] rounded-[5px] text-white font-[500] text-[16px]">${item.buyNow}<button>
                </div>
             </div>
        </div>
    `;
    container.innerHTML += productElement;
});
