var Products=[
    {   image:"https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/y/v/m/8-eswhted-8-echor-white-original-imahgaesqjvxuuzk.jpeg?q=70",
        Title:"Echo",
        name: "ESWHTED Sneakers For Men",
        price:"₹367",
        Strikedprice:"₹1,999",
        discount:"81% off"
    },
    {   image:"https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/m/n/z/9-sneaker-9-echor-white-blue-original-imahf9pspg2rttum.jpeg?q=70",
        Title:"Echo",
        name: "Casual White Sneakers for Men",
        price:"₹355",
        Strikedprice:"₹1,999",
        discount:"82% off"
    },
    {   image:"https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/i/r/d/-original-imahd2zfyhdug6mv.jpeg?q=70",
        Title:"aadi",
        name: "Sneakers for Men",
        price:"₹311",
        Strikedprice:"₹1,999",
        discount:"84% off"
    },
    {   image:"https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/9/6/j/-original-imahesyaen3kqyjc.jpeg?q=70",
        Title:"URBANBOX",
        name: "Sneakers for Men",
        price:"₹271",
        Strikedprice:"₹999",
        discount:"72% off"
    },
    {   image:"https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/q/i/l/8-f1rst-full-black-8-hotstyle-navy-original-imahfxcgqzwfaghh.jpeg?q=70",
        Title:"HOTSTYLE",
        name: "FAST Trendy Sneakers for Men",
        price:"₹267",
        Strikedprice:"₹999",
        discount:"73% off"
    },
    {   image:"https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/y/n/5/-original-imahbwg7zhudg9xz.jpeg?q=70",
        Title:"BRUTON",
        name: "Modern Trendy Sneakers for Men",
        price:"₹262",
        Strikedprice:"₹1,299",
        discount:"79% off"
    },
    {   image:"https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/4/q/z/6-outright-1073-green-40-run-seven-green-original-imah6esjugawuq5y.jpeg?q=70",
        Title:"RUN SEVEN",
        name: "(by GO21) Soft insole, Slip-Resistance",
        price:"₹782",
        Strikedprice:"₹3,599",
        discount:"78% off"
    },
    {   image:"https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/s/e/f/-original-imahfmneefzuvkxz.jpeg?q=70",
        Title:"PROVOUGE",
        name: "Sneakers for Men",
        price:"₹747",
        Strikedprice:"₹2,999",
        discount:"75% off"
    }




]

displaydata();
function displaydata(){
    Products.forEach(function(elem){
        image=document.createElement("img");
        image.setAttribute("src",elem.image);
        title=document.createElement("h5");
        title.innerText=elem.Title;
        br=document.createElement("br");
        nam=document.createElement("p");
        nam.innerText=elem.name;
        price=document.createElement("p");
        price.innerText=elem.price;
        sp=document.createElement("p");
        sp.innerText=elem.Strikedprice;
        discount=document.createElement("p");
        discount.innerText=elem.discount;
        
        pricebox=document.createElement("div");
        pricebox.setAttribute("id","pricebox")
        pricebox.append(price,sp,discount);

        div=document.createElement("div");
        div.setAttribute("class","box");
        div.append(image,title,nam,pricebox);
        document.querySelector("#Shoes").append(div);

    }

    )
}