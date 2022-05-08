function loadEvent(){
    //example for dog object
    let dog = {
        "Profile" : "media/twerk.jpg",
        "Név" : "Twerk",
        "Nem" : "szuka",
        "Született" : "2021.12.09.",
        "Bekerült:" : new Date(2022, 02, 03),
        "Szőrhossz" : "közepes",
        "Profilepage" : "profile.html",
        "Story" : `Extra SOS segítségkérés érkezett a Befogad-lak Törökszentmiklósi Állatvédő Alapítványtól egy csodaszép 2021. decemberi születésű kislány babának, akinek durván előesett a végbele. Sokat nem gondolkoztunk, hiszen egy ilyen bajnál szó szerint minden óra számít. A gyors segítségen az ÉLETe, a jövője dőlhet el. Röptében érkezett meg Budapestre, azonnal a Délpesti Állatgyógyászati Központ és Sebészeti Centrumba, ahol megkezdték a kivizsgálását. Egyrészről visszahelyezték és rögzítették az előesett bélszakaszt. Vizsgálatok során kiderült giardia fertözőtt, amely hasmenéssel járó betegség. Feltételezhető, hogy a sok hasmenés kövezketésben esett elő a végbele. Kezelését erre is megkezdtük.

        Twerk lett a kislány neve és reméljük hamarosan már nem a betegsége, hanem a babás popsirázása miatt illik majd rá ez név. Olyan csodaszép a felemás szemeivel és a kedves, bájos arcával.
        
        Jelenleg még nem örökbefogadható, de gyógyulása után és oltási programjának megkezdése után, annak folytatásával (új protokollként a parvo vírus elleni szérummal kezdjük), chipezve, 8 hetes kortól ivartalanítási kötelezettséggel adjuk örökbe, melyet a megadott időre el kell végeztetni és ezt nagyon szigorúan ellenőrizzük! Kölyök kutyákat Budapesten és 30 km-es körzetében adjuk örökbe.
        `,
        "Méret": "közepes"
    }

    let dog2 = {
        "Profile" : "media/Maximus.jpg",
        "Név" : "Maximus",
        "Nem" : "kan",
        "Született" : "2010.12.06.",
        "Bekerült:" : new Date(2022, 01, 22),
        "Szőrhossz" : "rövid",
        "Profilepage" : "maximus.html",
        "Story" : `Állatorvosunk kérte segítségünket három, idős, nagytestű kutya elhelyezésében. Egy családi tragédiát követően a szó szoros értelmében a kutyák élete volt veszélyben. Így került a Noé Állatotthon szergényi telephelyére Ginetta, Maximus és Morfojz.
        Maximus (és társai is) emberekkel és állatokkal barátságos és nagyon jóindulatú, nyugodt természetű, Aki nagyon sok örömet és boldogságot tud nyújtani szeretett gazdájának. A pórázt nem ismeri és egy kicsit sokkot kap tőle, de kellő kitartással hozzászoktatható.
        Reméljük eljön az Ő Angyala is, Aki pótolni tudja elveszített imádott családját!
        
        Maximus oltva, cippelve, ivartalanítva fogadható örökbe, érdeklődni róla az info@noeallatotthon.hu email címen lehet!
        `,
        "Méret": "nagy"
    }

    let dog3 = {
        "Profile" : "media/Morfojz.jpg",
        "Név" : "Morfojz",
        "Nem" : "kan",
        "Született" : "2010.07.04.",
        "Bekerült:" : new Date(2022, 01, 22),
        "Szőrhossz" : "rövid",
        "Profilepage" : "morfojz.html",
        "Story" : `Állatorvosunk kérte segítségünket három, idős, nagytestű kutya elhelyezésében. Egy családi tragédiát követően a szó szoros értelmében a kutyák élete volt veszélyben. Így került a Noé Állatotthon szergényi telephelyére Ginetta, Maximus és Morfojz.
        Morfojz (és társai is) emberekkel és állatokkal barátságos és nagyon jóindulatú, nyugodt természetű, Aki nagyon sok örömet és boldogságot tud nyújtani szeretett gazdájának.
        Reméljük eljön az Ő Angyala is, Aki pótolni tudja elveszített imádott családját! Kizárólag olyan otthont keresünk a számára ahol teljes jogú családtag lehet.
        
        Morfojz oltva, cippelve, ivartalanítva fogadható örökbe, érdeklődni róla az info@noeallatotthon.hu email címen lehet!
        `,
        "Méret": "nagy"
    }

    //example for cat object
    let cat ={
        "Profile" : "media/nymeria.jpg",
        "Név" : "Nymeria",
        "Nem" : "nőstény",
        "Született" : "2021.08.20.",
        "Bekerült:" : " 2022.02.01.",
        "Szőrhossz" : "közepes",
        "Profilepage" : "nymeria.html",
        "Story" : `Nymeria 5 hónap körüli kislány, Pásztón szegődött egy állatbarát mellé.
        Barátságos, bújós az emberekkel, más macskával jól kijön.
        
        Chipezve, oltva, további oltási és ivartalanítási kötelezettséggel fogadható örökbe, kizárólag benti tartásra, Budapestre és környékére.
        `,
        "Fajta" : "házimacska"
    }

    //arrays of animals
    let dogs = [cat, dog, dog2, dog3, dog, dog, dog, dog];
    let cats = [cat, cat, cat, cat, cat, cat, cat, cat];

    // if animals is empty null or undefinied, then it creates cards from dogs array, otherwise from animals array
    function createCardGrid(animals){
        let doggies = document.getElementById("container");
        // doggies.insertAdjacentHTML("afterbegin", `<img src="media/twerk.jpg"></img>`);
        // doggies.insertAdjacentHTML("afterbegin", `<img src="${dogs[0].Profile}"></img>`);

        // check animals parameter
        if(animals === null || animals === undefined || animals.length === 0){
            animals = dogs;
        }

        for (const dogItem of animals) {
            // doggies.insertAdjacentHTML("beforeend", `<a href="profile.html"><img src="${dogItem.Profile}"></img></a>`);
            doggies.insertAdjacentHTML("beforeend", `
            <a href=${dogItem.Profilepage}>
                <div class="animalcard">
                    <img src=${dogItem.Profile}>
                    <div class="animaldata">
                        <h2>${dogItem.Név}</h2>
                        <p>${dogItem.Nem}</p>
                        <p>${dogItem.Született}</p>
                    </div>
                </div>
            </a>`);
        }
        console.log(`endcreateCardGrid`);
    }
    createCardGrid();

    //ez még nem fut le csak ha meghivódik
    //toggleActiveEvent = ad egy aktiv class-t a showcase és toggle-re
    function toggleActiveEvent(){ 
        // showcase = <section class="showcase">
        const showcase = document.querySelector(".showcase");
        const doggies = document.getElementById("doggies");
        

        menuToggle.classList.toggle("active");
        showcase.classList.toggle("active");
        doggies.classList.toggle("active");
        
    }

    // menuToggle = <div class="toggle"></div>
    const menuToggle = document.querySelector(".toggle"); 
    //click eseményre meghivja toggleActiveEvent-et
    menuToggle.addEventListener("click", toggleActiveEvent );

    // add dropdown to click event
    const dropButton = document.querySelector(".sex");
    function dropDownFilter(){
        const dropList = document.querySelector(".dropList");
        dropList.classList.toggle("active");
    }

    dropButton.addEventListener("click", dropDownFilter);
    
    // filter female dogs
    function filterFemaleAnimal(){
        const femaleCheckbox = document.querySelector(".female-chbx");
        let filteredAnimals = [];

        if(femaleCheckbox.checked === true){
            // fiteredAnimals = dogs.filter(dog => dog.Nem === "szuka");

            // find "szuka" dogs
            for (const dogItem of dogs) {
                if(dogItem.Nem === "szuka"){
                    filteredAnimals.push(dog);
                }
            }
            // create only the female dogs
            // createCardGrid(filteredAnimals);
            console.dir(filteredAnimals);
            // dogs = filteredAnimals;
            // console.log(dogs);
            // document.location.reload(true);
            // $( "#doggies" ).load(window.location.href + " #doggies" );
        }
        else{
            // console.log(false);
        }
    }

    // filter female dogs when "szuka" checkbox is pressed
    const femaleContainer = document.querySelector(".chbox-container.female");
    femaleContainer.addEventListener("click", filterFemaleAnimal);

    console.log('page is fully loaded');
}

window.addEventListener("load", loadEvent);