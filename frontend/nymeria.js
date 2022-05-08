function lodadEvent() {

  let cat ={
    "Profile" : "media/nymeria.jpg",
    "Név" : "Nymeria",
    "Nem" : "nőstény",
    "Született" : "2021.08.20.",
    "Bekerült" : " 2022.02.01.",
    "Szőrhossz" : "közepes",
    "Profilepage" : "profile.html",
    "Story" : `Nymeria 5 hónap körüli kislány, Pásztón szegődött egy állatbarát mellé.
    Barátságos, bújós az emberekkel, más macskával jól kijön.
    
    Chipezve, oltva, további oltási és ivartalanítási kötelezettséggel fogadható örökbe, kizárólag benti tartásra, Budapestre és környékére.
    `,
    "Fajta" : "házimacska"
}


    function createOneDogPage(){

      let dogPage = document.getElementById("root");
      dogPage.insertAdjacentHTML("afterbegin",`
      <header>
        <a href="index.html"><img class="logoImage" src="media/logo.png" alt="" /></a>
        <h2 class="logotitle">Noé állatotthon alapítvány</h2>
        <div class="open">
          <i class="fa fa-clock-o fa-2x"></i>
          <p>H-Szo: 10:00 - 15:00</p>
        </div>
        <div class="mail">
          <i class="fa fa-envelope fa-2x"></i>
          <p>info@noeallatotthon.hu</p>
        </div>
        <div class="phone">
          <i class="fa fa-phone fa-2x"></i>
          <p>+ 36 30 123 4567</p>
        </div>
      </header>
      <div class="imgbox">
        <img class="twa" src="${cat.Profile}"></img>
        <img class="twb" src="${cat.Profile}"></img>
        <img class="twc" src="${cat.Profile}"></img>
        <img class="twd" src="${cat.Profile}"></img>
      </div>
      <div class="buttons">
          <button class= "a">Légy a Virtuális gazdim</button>
          <button class= "b">Támogatás</button>
        </div>
        <div class="box">
          <p>Név : ${cat.Név}</p>
          <p>Nem : ${cat.Nem}</p>
          <p>Született : ${cat.Született}</p>
          <p>Bekerült : ${cat.Bekerült}</p>
        </div>
        <h2 class="background">Történet</h2>
        <p class="story">${cat.Story}</p}
      `)
    };

    createOneDogPage();
}
window.addEventListener("load", lodadEvent);