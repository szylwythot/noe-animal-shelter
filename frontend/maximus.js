function lodadEvent() {

  let dog2 = {
    "Profile" : "media/Maximus.jpg",
    "Név" : "Maximus",
    "Nem" : "Kan",
    "Született" : "2010.12.06.",
    "Bekerült" : "2022.01.22.",
    "Profilepage" : "profile.html",
    "Story" : `Állatorvosunk kérte segítségünket három, idős, nagytestű kutya elhelyezésében. Egy családi tragédiát követően a szó szoros értelmében a kutyák élete volt veszélyben. Így került a Noé Állatotthon szergényi telephelyére Ginetta, Maximus és Morfojz.
    Maximus (és társai is) emberekkel és állatokkal barátságos és nagyon jóindulatú, nyugodt természetű, Aki nagyon sok örömet és boldogságot tud nyújtani szeretett gazdájának. A pórázt nem ismeri és egy kicsit sokkot kap tőle, de kellő kitartással hozzászoktatható.
    Reméljük eljön az Ő Angyala is, Aki pótolni tudja elveszített imádott családját!
    
    Maximus oltva, cippelve, ivartalanítva fogadható örökbe, érdeklődni róla az info@noeallatotthon.hu email címen lehet!
    `,
    "Méret": "nagy"
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
        <img class="twa" src="${dog2.Profile}"></img>
        <img class="twb" src="${dog2.Profile}"></img>
        <img class="twc" src="${dog2.Profile}"></img>
        <img class="twd" src="${dog2.Profile}"></img>
      </div>
      <div class="buttons">
          <button class= "a">Légy a Virtuális gazdim</button>
          <button class= "b">Támogatás</button>
        </div>
        <div class="box">
          <p>Név : ${dog2.Név}</p>
          <p>Nem : ${dog2.Nem}</p>
          <p>Született : ${dog2.Született}</p>
          <p>Bekerült : ${dog2.Bekerült}</p>
        </div>
        <h2 class="background">Történet</h2>
        <p class="story">${dog2.Story}</p}
      `)
    };

    createOneDogPage();
}
window.addEventListener("load", lodadEvent);