let topNav = () => {
    return `<div class="logo">
    <a href="index.html"><img src="https://cdn.shopify.com/s/files/1/0266/6276/4597/files/ezgif.com-gif-maker_316c42d2-0897-40bc-81d1-5119f87bfef7.png?v=1605964743" height="100%" width="100%"></a>
</div>
<div class="searchdiv">
    <input type="text" class="searchbar" placeholder="Search">
    <button class="search"><i class="fas fa-search"></i></button>
</div>
<div class="corner">
    <p class="signin">Sign In</p>
    <i class="far fa-heart"></i>
    <i class="fas fa-shopping-cart"></i>
    <div class="cartq">0</div>
</div>`
}

let leftNav = () => {
    return `<ul type="none">
    <li class="sale"><h2>SALE</h2></li>
        <ul class="saleList" type="none">
            <li>WOMAN</li>
            <li>MAN</li>
            <li>KIDS</li>
            <li>SHOES & BAGS</li>
            <li>HOME</li>
            <li>BEAUTY</li>
        </ul>
</ul>
<ul type="none" class="list">
    <li class="winter"><h2>WINTERSHOP</h2></li>
        <ul class="winterList" type="none">
            <li>WOMAN</li>
            <li>MAN</li>
            <li>KIDS</li>
        </ul>
    <li class="online"><h2>ONLINE ONLY</h2></li>
        <ul class="onlineList" type="none">
            <li>WOMAN</li>
            <li>MAN</li>
            <li>KIDS</li>
            <li>SHOES</li>
            <li>HOME</li>
        </ul>
    <li class="women"><h2>WOMAN</h2></li>
        <ul class="womenList" type="none">
            <li class="ethinic">ETHINIC WEAR</li>
                <ul type="none" class="ethinicList">
                    <li class="brands">BRANDS</li>
                        <ul type="none" class="brandsList">
                            <li>BOMBAY PAISLEY</li>
                            <li>UTSA</li>
                            <li>VARK</li>
                            <li>ZUBA</li>
                        </ul>
                    <li class="collect">COLLECTION</li>
                        <ul type="none" class="collectList">
                            <li>KURTAS</li>
                            <li>KURTIS</li>
                            <li>TOPS</li>
                            <li>SUITS</li>
                            <li>PAINTS</li>
                            <li>SKIRTS</li>
                        </ul>
                </ul>
            <li>WESTREN WEAR</li>
            <li>CURVY WOMEN</li>
            <li>LINGERIE | SLEEPWEAR |LOUNGEWEAR</li>
        </ul>
    <li class="man"><h2>MAN</h2></li>
        <ul class="manList" type="none">
        <li class="mbrands">BRANDS</li>
        <ul type="none" class="mbrandsList">
            <li>ASCOT</li>
            <li>ETA</li>
            <li>KALA BY ETA</li>
            <li>NUON</li>
            <li>STUDIOFIT</li>
            <li>WES CASUALS</li>
            <li>WES FORMALS</li>
            <li>WAS LOUNGE</li>
        </ul>
    <li class="mcollect">COLLECTION</li>
        <ul type="none" class="mcollectList">
            <li>ONLINE ONLY</li>
            <li>CASUAL SHIRTS</li>
            <li>FORMAL SHIRTS</li>
            <li>T SHIRTS</li>
            <li>POLOS</li>
            <li>JEANS</li>
        </ul>
        </ul>   
    <li><h2>KIDS</h2></li>
    <li><h2>SHOES & BAGS</h2></li>
    <li><h2>HOME</h2></li>
    <li><h2>BEAUTY</h2></li>
    <li><h2>ESSENTIAL SHOP</h2></li>
    <li><h2>STORIES</h2></li>
    <li><h2>MEMBERSHIP</h2></li>
    <li><h2>W-STYLE</h2></li>
</ul>
<hr class="hr">
<ul class="list2" type="none">
    <li>GIFT CARD</li>
    <li>CONTACT US</li>
    <li>STORE LOCATOR</li>
    <li>+CORPORATE</li>
</ul>`
}

let footer = () => {
    return`<div class="up">
    <div>
        <ul type="none">
            <li><h4>SHOP</h4></li>
            <li>WOMAN</li>
            <li>MAN</li>
            <li>KIDS</li>
            <li>SHOES & BAGS</li>
            <li>HOME</li>   
            <li>STUDIOWEST</li>
        </ul>
    </div>
    <div>
        <ul type="none">
            <li><h4>SITES AND STORES</h4></li>
            <li>ABOUT US</li>
            <li>CONTACT US</li>
            <li>STORE LOCATOR</li>
            <li>MEDIA CENTER</li>
            <li>MEMBERSHIP</li>
        </ul>
    </div>
    <div>
        <ul type="none">
            <li><h4>POLICIES</h4></li>
            <li>TERMS & CONDITIONS</li>
            <li>PRIVACY POLICY</li>
            <li>RETURN POLICY</li>
        </ul>
    </div>
    <div class="subs">
        <H2>JOIN OUR NEWSLETTER</H2>
        <div>
            <input type="email" placeholder="Your email address">
            <button>SUBSCRIBE</button>
        </div>
        <div>

        </div>
    </div>
</div>
<div class="down">
    <div>COPYRIGHT@2020 TRENT LIMITED.</div>
    <div>Accepted payment methods</div>
</div>`
}

let navButtons = () => {
    document.querySelector(".sale").addEventListener("click",()=>{
        document.querySelector(".saleList").classList.toggle("show");
    })
    document.querySelector(".winter").addEventListener("click",()=>{
        document.querySelector(".winterList").classList.toggle("show");
    })
    document.querySelector(".online").addEventListener("click",()=>{
        document.querySelector(".onlineList").classList.toggle("show");
    })
    document.querySelector(".women").addEventListener("click",()=>{
        document.querySelector(".womenList").classList.toggle("show");
    })
    document.querySelector(".man").addEventListener("click",()=>{
        document.querySelector(".manList").classList.toggle("show");
    })
    document.querySelector(".ethinic").addEventListener("click",()=>{
        document.querySelector(".ethinicList").classList.toggle("show");
    })
    document.querySelector(".brands").addEventListener("click",()=>{
        document.querySelector(".brandsList").classList.toggle("show");
    })
    document.querySelector(".collect").addEventListener("click",()=>{
        document.querySelector(".collectList").classList.toggle("show");
    })
    document.querySelector(".mbrands").addEventListener("click",()=>{
        document.querySelector(".mbrandsList").classList.toggle("show");
    })
    document.querySelector(".mcollect").addEventListener("click",()=>{
        document.querySelector(".mcollectList").classList.toggle("show");
    })
}

export {topNav,leftNav,navButtons,footer};