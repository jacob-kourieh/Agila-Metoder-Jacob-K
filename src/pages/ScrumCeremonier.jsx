function ScrumCeremonier() {
    let img = "https://metier.dk/media/3i2fgsj2/scrum-framework-full.png?mode=max&width=1440&height=1080&upscale=false&format=webp&quality=90"
    return (
        <section className="ScrumCeremonierContainer">
            <h1>Roller och aktiviteter i Scrum</h1>
            <img src={img} alt="" />

            <article className="itemContainer">
                <h3>Utvecklingsteamet</h3>
                <p>Om Scrum implementeras på en IT-funktion, så är ”Teamet” ofta just ett utvecklingsteam.
                    Dock kan metodiken egentligen tillämpas på vilken grupp av tätt samarbetande människor som helst.
                    Scrum följer den Agila tanken om teamsammansätting, men har i stort inga långtgående åsikter om hur teamet organiseras.
                    Man förordar är att det till exempel ska bestå av kompetenser nog för att kunna skapa s.k. inkrement.
                    Begreppet symboliserar utveckling av slutprodukten i varje iterations slut.
                    Dessutom bör teamet i sig vara en självorganiserande enhet.</p>
            </article>

            <article className="itemContainer">
                <h3>Scrum Master</h3>
                <p>En Scrum Master faciliterar att ramverket för Scrum följs och driver teamets ständiga förbättring och utveckling.
                    Det innebär åtaganden både mot ett eller flera utvecklingsteam, men också mot Produktägarna.
                    Detta kan låta trivialt, men rollen är både vital och djup.</p>
            </article>

            <article className="itemContainer">
                <h3>Produktägaren</h3>
                <p>Om man kokar ned produktägarens egentliga uppdrag, så är det att maximera det värde som utkommer av det utvecklingsteamet levererar.
                    Detta görs genom att prioritera rätt saker i rätt tid, genom en s.k. Produktbacklog.
                    Eftersom Utvecklingsteamet är autonomt är det extremt viktigt att Produktägaren kan motstå frestelsen att detaljstyra.
                    Dessutom behöver hon vara villig att släppa ifrån sig visst ansvar och mandat till Teamet.</p>
            </article>

            <article className="itemContainer">
                <h3>Sprint</h3>
                <p>Det den Agila filosofin kallar iteration, kallas inom Scrum för Sprint.
                    En Sprint är alltid tidsbestämd (t ex tre veckor) och inom den ryms planering, utveckling och utvärdering.
                    <br />
                    Fördelen med korta iterationer är att en tidsrymd mindre än fyra veckor ofta är lättare att överblicka än en längre.
                    Det gör både planering lättare och möjligheten att förändra större.
                    Dessutom blir den finansiella risken mindre, eftersom man kan välja att avbryta eller byta inriktning inom ramen för nästa Sprint.
                    Sprintar avlöser varandra och efter varje Sprint skall en ny och fungerande version av produkten finnas tillgänglig.</p>
            </article>

            <article className="itemContainer">
                <h3>Sprintplanering</h3>
                <p>En Sprint inleds alltid med en tidsbestämd Sprintplanering.
                    Här går Utvecklingsteamet igenom Produktbacklogen tillsammans med Produktägaren.
                    Utifrån denna dialog beslutas vad som kan genomföras och hur.
                    Viktigt att påpeka är att det är Utvecklingsteamet som besvarar frågorna om vad och hur.
                    Produktägarens roll är att svara på eventuella frågor som kan uppstå kring specifika uppgifter i Produktbacklogen.
                    <br />
                    Under Sprintplaneringen skapas även ett Sprintmål.
                    Sprintmålet är vad utvecklingsarbetet i denna Sprint ska leda till.
                    Ett exempel är ”Efter denna Sprint skall användare kunna betala i vår webshop med sitt kreditkort”.
                    Utkomsten av en Sprintplanering är en prognos för hur mycket man tror sig kunna hinna.
                    Detta blir dokumenterat till en Sprintbacklog.</p>
            </article>

            <article className="itemContainer">
                <h3>Daily Scrum</h3>
                <p>Daily Scrum är ett dagligt återkommande planeringsmöte för Utvecklingsteamet.
                    Mötet får inte överstiga 15 minuter i längd.
                    För att ingen ska bli för bekväm och dra ut på tiden måste deltagarna stå upp under hela mötets längd.
                    <br />
                    Varje deltagare svarar under mötet på tre frågor.
                    ”Vad har jag gjort sedan senaste mötet?”, ”Vad planerar jag att göra idag?” och ”Har jag några hinder?”.
                    Baserat på detta kan Teamet planera tiden till nästa Daily Scrum. Man kan också snabbt och gemensamt identifiera hinder och hur man tillsammans ska hantera dessa.
                    Observera att Scrum Master och Produktägare är välkomna på mötet, men att ingen av dem bör ha en aktiv roll.
                    <br />
                    Daily Scrum görs med fördel vid en visualisering av Sprintbackloggen, en s.k. scrumtavla.</p>
            </article>

            <article className="itemContainer">
                <h3>Sprint Review/Sprint Demo</h3>
                <p>För att kommunicera den utveckling som skett under en Sprint, anordnar teamet en Sprint Review i slutet av Sprinten.
                    Ibland kallas denna ceremoni även för Sprint Demo.
                    Närvarande, förutom Utvecklingsteamet, Scrum Master och Produktägare är alla andra intressenter till arbetet som teamet utfört.
                    Detta är ett informellt möte med syfte att förklara vad som teamet gör, vad man inte gör och hur resultatet påverkar nästa Sprint.
                    Detta är även ett bra tillfälle för övriga intressenter att komma med input till hur vi bör planera nästa Sprint.</p>
            </article>

            <article className="itemContainer">
                <h3>Sprint Retrospective</h3>
                <p>Ingen Agil metod utan retrospektiv! I detta möte samlar vi enbart det agila teamet (dvs Utvecklingsteamet, Scrum Master och Produktägare).
                    Tillsammans utvärderar vi den senaste Sprinten utifrån arbetssätt, verktyg, relationer och annat värdefullt.
                    Detta är ett bra sätt att tidigt upptäcka och åtgärda problem innan de blivit för stora, men också ett utmärkt tillfälle att uppmärksamma och förstärka positiva erfarenheter inom Scrumteamet.
                    Retrospektiv kan tendera att hamna i skymundan, men är väldigt viktiga möten för att kunna utveckla och förstärka arbetssätt, kvalitet och effektivitet.
                    Resultatet från ett retrospektiv bör vara små och konkreta förändringar.</p>
            </article>


        </section>
    );
}

export default ScrumCeremonier;