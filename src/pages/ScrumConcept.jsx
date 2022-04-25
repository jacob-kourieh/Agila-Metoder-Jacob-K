function ScrumConcept() {
    let img = "https://www.ntaskmanager.com/wp-content/uploads/2019/08/Programmer-reviewing-task-management-flow.jpg"
    return (
        <section className="ScrumConceptContainer">
            <h1>Scrum Begrepp</h1>
            <img src={img} alt="Scrum concept" width="850px" height="500px" />

            <article className="itemContainer">
                <h3>Produktbacklog</h3>
                <p>Produktbacklogen är en ordnad lista som innehåller alla utvecklingspunkter som vi i nuläget vet att vi vill förändra på vår produkt.
                    Det är ett levande dokument och Produktägaren håller ansvaret för dess innehåll och ordning.
                    Både prioritering och innehåll kan och bör skifta över tid, men det är alltså enbart Produktägaren som tillåter dessa ändringar.</p>
            </article>

            <article className="itemContainer">
                <h3>Sprintbacklog</h3>
                <p>Innehållet i en Sprintbacklog är de uppgifter som Utvecklingsteamet bedömt att de kommer att leverera inom ramen för en Sprint.
                    Varje enskild uppgift måste vara tydligt definierad. Detta både i vilka förväntningar finns på uppgiftens utkomst, men också hur teamet själva definierar den som färdig.
                    Genom att följa Sprintbacklogen under Sprintens gång, visar vi hur Utvecklingsteamet gör framsteg. Den visar också vilka problem som uppstår och när.</p>
            </article>

            <article className="itemContainer">
                <h3>Inkrement</h3>
                <p>Ett inkrement är den samlade produkt som uppstår efter en Sprint, då vi uppdaterar produkten med Sprintens uppgifter.</p>
            </article>

            <article className="itemContainer">
                <h3>Agil coach</h3>
                <p>En organisation med många Scrumteam har troligtvis intresse av följa Scrum under liknande former över flera team.
                    En Agil coach kan då gå in för att stödja och synkronisera teamen och teamens Scrum Masters i sitt Agila arbete.</p>
            </article>

            <article className="itemContainer">
                <h3>Definition of Done</h3>
                <p>För att hålla en jämn kvalitet i leverans enas Scrumteamet om en s.k. Defintion of Done.
                    Denna definition ser till vad som måste vara uppfyllt för att en uppgift ska kunna definieras som ”klar”.
                    Ett exempel ur IT-perspektiv kan vara att koden måste vara skriven på ett korrekt sätt och att vissa typer av tester måste vara genomförda och godkända innan uppgiften får kallas klar.</p>
            </article>

            <article className="itemContainer">
                <h3>Backlog Refinement</h3>
                <p>För att effektivisera Sprintplaneringen träffas Scrumteamet under Sprintens gång och ser över uppgifter inför kommande Sprint.
                    Man ser då till att uppgifterna är tillräckligt definierade och klara att startas.
                    Detta för att slippa ha några frågetecken när Sprinten efter ska planeras.</p>
            </article>

            <article className="itemContainer">
                <h3>User stories</h3>
                <p>Det finns hur mycket som helst att säga om User Stories.
                    Den korta versionen är att man helt enkelt definierar en önskad funktion utifrån affärs- eller kundvärde.
                    User Stories är ett bra format att bygga upp uppgifter i sin Produkt- eller Sprintbacklog.</p>
            </article>

            <article className="itemContainer">
                <h3>Estimering</h3>
                <p>När teamet planerar en Sprint måste det finnas en gemensam uppfattning om hur mycket teamet kan prestera under kommande iteration.
                    För att kunna ge en sådan uppfattning, bör man för varje uppgift kunna Estimera hur pass komplex uppgiften är.
                    Team som har jobbat mycket länge tillsammans inom samma område skapar hyfsade Estimat på känn. Detta är dock en våt dröm för de flesta.
                    För oss dödliga finns det många olika sätt att bäst strukturera uppskattningsförmågan, såsom Planning Poker och Velocity.</p>
            </article>

        </section>
    );
}

export default ScrumConcept;