function lodadEvent() {

  let dog = {
    "Profile" : 'media/twerk.jpg',
    "Név" : "Twerk",
    "Nem" : "Szuka",
    "Született" : "2021.12.09.",
    "Bekerült" : "2022.02.03.",
    "Szőrhossz" : "közepes",
    "Story" : `Extra SOS segítségkérés érkezett a Befogad-lak Törökszentmiklósi Állatvédő Alapítványtól egy csodaszép 2021. decemberi születésű kislány babának, akinek durván előesett a végbele. Sokat nem gondolkoztunk, hiszen egy ilyen bajnál szó szerint minden óra számít. A gyors segítségen az ÉLETe, a jövője dőlhet el. Röptében érkezett meg Budapestre, azonnal a Délpesti Állatgyógyászati Központ és Sebészeti Centrumba, ahol megkezdték a kivizsgálását. Egyrészről visszahelyezték és rögzítették az előesett bélszakaszt. Vizsgálatok során kiderült giardia fertözőtt, amely hasmenéssel járó betegség. Feltételezhető, hogy a sok hasmenés kövezketésben esett elő a végbele. Kezelését erre is megkezdtük.

    Twerk lett a kislány neve és reméljük hamarosan már nem a betegsége, hanem a babás popsirázása miatt illik majd rá ez név. Olyan csodaszép a felemás szemeivel és a kedves, bájos arcával.
    
    Jelenleg még nem örökbefogadható, de gyógyulása után és oltási programjának megkezdése után, annak folytatásával (új protokollként a parvo vírus elleni szérummal kezdjük), chipezve, 8 hetes kortól ivartalanítási kötelezettséggel adjuk örökbe, melyet a megadott időre el kell végeztetni és ezt nagyon szigorúan ellenőrizzük! Kölyök kutyákat Budapesten és 30 km-es körzetében adjuk örökbe.
    `,
    "Méret": "közepes"
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
        <img class="twa" src="${dog.Profile}"></img>
        <img class="twb" src="${dog.Profile}"></img>
        <img class="twc" src="${dog.Profile}"></img>
        <img class="twd" src="${dog.Profile}"></img>
        <div class="buttons">
          <button class= "a">Légy a Virtuális gazdim</button>
          <button class= "b">Támogatás</button>
        </div>
      </div>
      
        <div class="box">
          <p>Név : ${dog.Név}</p>
          <p>Nem : ${dog.Nem}</p>
          <p>Született : ${dog.Született}</p>
          <p>Bekerült : ${dog.Bekerült}</p>
        </div>
        <h2 class="background">Történet</h2>
        <p class="story">${dog.Story}</p}
      `)
    };

    createOneDogPage();
}
window.addEventListener("load", lodadEvent);