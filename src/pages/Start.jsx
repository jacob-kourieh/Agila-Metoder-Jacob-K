import { Link } from "react-router-dom";

function Start() {

    let img = "https://s3.ap-southeast-2.amazonaws.com/april9.com.au/files/pvj0l1IuMXsXUklQ"


    return (
        <section className="container">
            <img src={img} alt="" width="1000px" height="600px" />


            <article className="ScrumInfo">
                <h2>Vad är Scrum?</h2>
                <ul>
                    <li>Scrum är ett av flera ramverk som implementerar det Agila tankesättet.</li>
                    <li>Ramverket är lättviktigt och lätt att förstå.</li>
                    <li>Arbetet är uppdelat i korta iterationer, s.k. Sprintar.</li>
                    <li>Människorna inom ett Scrumteam är uppdelade i tre roller: Produktägare, Scrum Master och Utvecklingsteam.</li>
                    <li>Genom ett antal definierade artefakter kan Utvecklingsteamet strukturera, kommunicera och visualisera sitt arbete i realtid.</li>
                    <li>För att effektivisera processen, definierar Scrum de ceremonier och möten som behövs för att arbetet ska flöda.</li>
                    <li>Buzzwords för att verka insatt: Sprint, Scrum Master, riskminimering, backlog, snabb TTM, Daily standup, ceremonier.</li>
                </ul>
            </article>


            <article className="scrumHeading">
                <h2> Roller, Begrepp och Aktiviteter</h2>
                <p> Det Agila manifestet i sig specificerar inte några direkt konkreta krokar att hänga upp sitt arbetssätt på.
                    Däremot finns det ett antal konkretiseringar och implementationer som tillämpar den Agila filosofin, såsom Scrum, Kanban eller DevOps.
                    En populär ingång till att få igång sitt Agila arbete är att man helt enkelt inför just Scrum som metodik, i stor eller liten skala.
                    <br />
                    Det finns många anledningar till att Scrum blivit så populärt.
                    En av dem är att de praktiska delar som utgör ramverket är relativt okomplexa och konkreta.
                    <br />
                    Vidare är en av de stora skillnaderna från traditionell projektmetodik är att Scrums ramverk är uppbyggt på empirism.
                    Det innebär att man tar beslut utifrån tidigare erfarenheter och information man faktiskt kan bekräfta.
                    Inga “vi är helt säkra på att det här är det bästa sedan skivat bröd, så vi bygger allt på en gång”-projekt, alltså.
                    Tvärtom vill vi skapa en kultur som inlemmar “vi tror att det här är en grym idé, men vi utvecklar lite i taget”.</p>
            </article>


            <article className="AgilaTeam">
                <h2> Att Arbeta i Agila Team</h2>
                <ul>
                    <li>Identifiera, informera och tillsätt en Produktägare</li>
                    <li>Organisation, team och roller</li>
                    <li>Utveckla det självstyrande teamet</li>
                    <li>Sätta grundregler för arbetet</li>
                    <li>Utveckla ledarskapet</li>
                    <li>Skala av och förenkla</li>
                    <li>Lär ut de nya rutinerna</li>
                    <Link to="/agila-team"> <button>mer info</button> </Link>
                </ul>
            </article>


            <article className="scrumCeremonier">
                <h2>Roller och aktiviteter i Scrum </h2>
                <ul>
                    <li>Utvecklingsteamet</li>
                    <li>Scrum Master</li>
                    <li>Produktägaren</li>
                    <li>Sprint</li>
                    <li>Sprintplanering</li>
                    <li>Daily Scrum</li>
                    <li>Sprint Review/Sprint Demo</li>
                    <li>Sprint Retrospective</li>
                    <Link to="/scrum-ceremonier"> <button>mer info</button> </Link>
                </ul>
            </article>


            <article className="scrumConcept">
                <h2>Scrum Begrepp</h2>
                <ul>
                    <li>Produktbacklog</li>
                    <li>Sprintbacklog</li>
                    <li>Inkrement</li>
                    <li>Agil coach</li>
                    <li>Definition of Done</li>
                    <li>Backlog Refinement</li>
                    <li>User stories</li>
                    <li>Estimering</li>
                    <Link to="/scrum-concept"> <button>mer info</button> </Link>
                </ul>
            </article>


        </section>
    );
}

export default Start;