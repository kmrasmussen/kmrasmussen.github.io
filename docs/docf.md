# Weekendnoter om sekvenser af hjerne- og sindstilstande

## $M$
Lad $M$ være en mængde af mulige oplevelser. Hvis $M$ er en begrænset mængde eller tælleligt uendelig, så kan vi skrive følgende.

$M = \{e_1, e_2, e_3, ...\}$

En endelig sekvens af oplevelser er en ordnet række af elementer fra $M$. Vi kan enten vælge at definere den diskret som $E_t$ hvor $t \in \{0, 1,2, ..\}$ og $E_t \in M$. Denne diskrete model er fordelagtig fra en neurovidenskabelig vinkel, fordi vores måleapperater altid vil have en frekvens af billeder per sekund.

Alternativt kan man af teoretiske grunde være interesseret i at tænke på kontinuitet. De reele tal $\mathcal{R}$ består af utælleligt mange elementer, der kan give os en uendelig præcision i tid. I stedet for at have $t$ i diskrete tal tænker vi at der mellem to sekunder er en uendelig mængde af associerede oplevelser. Vi siger at $E(t)$ er en funktion, der for et tal $t$ i en delmænge af de reelle tal kan gives en oplevelse $e \in M$.

## Kontinuitet for $E(t)$

At en funktion er kontinuert kan løst sagt forstås som at den ikke hopper, den er glidende graf, den kan godt have kanter men ingen løft. Kontinuitet er interessant at tale om, fordi det er vores egen oplevelse at der er en sammenhæng mellem vores oplevelse i $t$ og i $t + 1$ sekunder. Vi har ikke et sekund oplevelsen af at være foran en computer og i dt næste en oplevelse af at være i bad.

En dag er en sådan funktion $E(t)$ hvor $t$ er antal sekunder efter 6AM. Så er vores domæne ikke alle de reelle tal, men en delmængde, der dog består af utælleligt mange oplevelser.

Bemærk, at det ikke er muligt at tale om kontinuitet uden et begreb om metrik, der definerer en distance mellem to elementer $a, b \in M$.

## Metrik

Vi har et begreb om afstand i 2D, der bygger på Pythagoras, og det er blevet udviddet til $n$ dimensioner. I stedet for at tale om to punkter $a$ og $b$ bruger vi ordet *vektorer*. Hvis vi lader $M$ være et n-dimensionelt euklidisk vektorrum

$\mathbf{e} = \langle e_1, e_2, e_3, ..., e_n \rangle$

hvor $e_i$ for $i \in \{1, ..., n\}$ er et reelt tal.

Hvad er disse enkelte komponenter af en oplevelsesvektor? Vi vil have alle tallene i vektoren til at være en repræsentation af indholdet i vores oplevelse på et givent tidspunkt. Siger vi dermed at mængden at vores oplevelse er begrænset? Da $M$ er $n$-dimensionelt er der en begrænset mængde af reelle tal, der beskriver oplevelsen, men disse reelle tal er også uendeligt præcise.

Nu er der en kompleks tanke, hvis vi skal tænke det diskretiserede ind. Hvis vi skal have en diskret sekvens af oplevelser, vil vi arbejde med approximationer, derved bliver der lavet en mængde $M'$, der er et approximeret vektorrum, vi vil aldrig arbejde direkte med det, men operationerne i den diskrete og digitale version er det bedste vi kan gøre i praksis i neurovidenskab. Vi vil blot have at hvis vi har $a, b \in M$ og to digitale repræsentationer $a'$ og $b'$, at distancen mellem $a'$ og $b'$ skal være tæt den digitale repræsentation af $a - b$. 

## Algebra på $M$
Skriv noget om at lægge oplevelser sammen, trække fra, identitetsvektor

## Hjerner

På et fysisk niveau er en hjerne en mængde neutroner, protoner og elektroner, med position, retning, acceleration osv. En hjerne på et givent tidspunkt $t$ er et element i et højdimensionelt rum, hvor hver dimension svarer til en parameter, der beskriver tilstanden for hver enkelt partikel. Lad os kalde dette rum for $P$ for *physical*.

På et kemisk niveau er en hjerne en mængde af molekyler og bånd og varme, hvert element har sine egenskaber der er parametre for en beskrivelse af en hjernes tilstand i $t$. Vi kan kalde den $C$, og vi mener at der en funktion $P \to C$, der for en fysisk hjerne giver den tilsvarende kemiske hjerne.

Denne måde at beskrive det på giver en mulighed for at formalisere ideen om *reduktionisme*. At en kemisk hjerne kan reduceres til en kemisk hjerne er at hævde at der findes en funktion $C \to P$ som er injektiv. Den omtalte funktion fra $P \to C$ må være mindre kontroversiel.

(Man kan overveje om denne påstand kan bevises ved en konstruktion af en algoritme, der for en kemisk hjerne udregner den fysiske hjerne, og ved hjælp af typeteori kan lave nogle beviser.)

Vi bevæger os til $B$ en hvor en hjerne er en fuldstændig beskrivelse af alle biokemiske og molekylære elementer. Vi forventer at vi på det niveau har sammenfattet store dele af den information der måtte ligge på et lavere fysisk, således at denne beskrivelse er mindre. Hvis man blev bedt om at gå fra $B$ til $K$, så vil beskrivelsen af et stykke RNA på en given position og med en given kurvatur kunne blive beskrevet kortere end beskrivelsen af RNA stykket beskrevet ud fra alle dets molekylær og protoner.

Det er imidlertid et faktum, at der foregår kvantemekanik kan spille en rolle i nogle aspekter af proteiner, derfor ville man miste information hvis den biologiske beskrivelse ikke bestod af disse. I så fald ville vi ikke sige at en biologisk hjerne kan reduceres til en bestemt kemisk hjerne eller en bestemt fysisk hjerne, fordi flere forskellige fysiske hjerner kunne resultere i den samme beskrivelse på biologisk niveau. Alt dette betyder ikke at man ikke i den empiriske kan mene at en hjerne altid har en bestemt fysisk hjerne. Så længe der ikke er bijektion er der informationstab fra $P \to C \to B$.

Lad $n$ være antallet af fMRI voxels i et billede. Vi har da et rum af mulige billeder $\mathcal{R}^n$, vi kalder det $F$. Der er en delmængde af $F$ som er aktualiserede i vores verden efter målinger og eksisterer på harddiske. Andre er blot mulige. De beskriver en hjerne på et givent tidspunkt $t$.
$B \to F$ er naturligvis ikke bijektiv, da informationen blot er blood oxygen level dependent (BOLD) signal. Electroencephalogram EEG målinger i tidsintervallet fra $t_1$ til $t_2$ er også en beskrivelse af en hjerne og den "aktivitet".

## Fra $P$ til $M$

Med en atomar beskrivelse af vores planet i hele dens levetid, siger vi at en *funktionel designation* for et objekt $o$ er en funktion $f$, der givet en tilstand af jorden på et givent tidspunkt kan demarkere en område hvor objektet befinder sig.

Med dette værktøj kan behøver vi ikke diskutere objekters ontologiske status, vi har ikke problemer med at beskrive en bestemt organisme på trods af at den ikke består af de samme atomer over tid.

Givet at der findes en funktion, der kan designere min hjerne $h$ for alle tidspunkter i min levetid kan vi tale om min hjernes tilstande i mit liv og om forholdet mellem min hjernes tilstande $h(t)$ og mine fænomenologiske oplevelser $E(t)$.

Med det begrebssæt vi har indtil videre mener jeg at man kan beskrive Advaita og andre ikke-dualistiske filosofier som den position at $M$ er det eneste der eksisterer, og derfor er tid ikke et element.

Både $M$ og $P$ er teoretiske, det er ikke muligt at observere dem i praksis. Alligevel arbejder den materialistiske position med blot det fysiske univers

  er en funktion der for en tilstand af verden kan angive området af hvor 


##

Som sagt bør vi også huske på de diskrete versioner, fordi det er disse vores eksperimentelle undersøgelser bygger. Her kan vi sige, at 



Et liv eller en dag er en afbildning fra de positive reelle tal ind i en mængde af mulige oplevelser. Vi behøver endnu ikke tillægge hele kodomænet for denne funktion nogen ontologisk status, så længe vi holder os på det formelle plan, hvor vi med hensyn til en teori beskriver det som mulige oplevelser. Det er nu min egen oplevelse på dette tidspunkt, at der er et bestemt element i denne mængde af mulige oplevelser som er aktuelt. Om vi kan kaldem mængden af mulige oplevelser for et matematisk rum, afgøres af hvilke funktioner vi definerer på rummet.


Her kan man tale om, hvorvidt paradigmet fra fysik med en variabel t, der repræsenterer tid, er i stand til at håndtere den situation at vi ønsker at skelne mellem det virkelige nu og tidligere og fremtidige tilstande af systemet. Det tror jeg umiddelbart godt den kan klare.

På et givent tidspunkt er der en oplevelse. Yogacaraskolen indenfor buddhisme ser bevidstheden som en sekvens af diskrete momenter af bevidsthed, og det vil også være indsigtsmeditationens funktion at øge precisionen, således at man er i stand til at se de kvaliteterne ved de forskellige momenter og hvordan de skifter over tid.

Selvom der kan være både fysiske, filosofiske og psykologiske håndteringer af begrebet om tid, betyder det ikke at vi bliver sat i en fastlåst position, hvor vi ikke kan vælge nogen vinkel på beskrivelsen af tid før en bestemt forståelse har nået universel konsensus. Fra en nærmest praktisk vinkel giver det mening at vi fra en tredje-persons vinkel kan lave hjernescanninger på fx millisekundniveau og have det som en multivariat tidsserie. På et givent tidspunkt t, fx målt i milisekunder efter start af scanningen, vil testsubjektet have en given fænomenal oplevelse. Det er denne afbildning fra tid ind i mulige oplevelser vi kan forholde os til. Min pointe er, at vi derved kan begynde at tale om denne tidsserie uden nødvendigvis at skulle forholde os til alle de ontologiske usikkerheder vi måtte have angående tid.

Hvis domænet nu er de positive reelle tal repræsenteret ved sekunder har vi en given præcision hvor målingerne udgør en diskontinuert begrænset delmængde. Her vil man måske ønske at diskutere, hvorvidt det fysiske system på et ontologisk plan er kontinuert eller diskret. Også her kan vi prøve at bevæge os udenom problemet ved at sige, at hvis systemet er kontinuert, så vil vores disketiserede model være en approximation, hvor vores afbildning af et givent diskret tidspunkt er et gennemsnit eller en smoothing af den utællelige mængde af oplevelser der fandt sted i intervallet fra t til t+1.

Normalt vil man fra en metafysisk vinkel diskutere, hvorvidt hjernens tilstand forårsager en bestemt oplevelse eller ej. Jeg tror ikke vi har de tilstrækkelige formelle værktøjer til at diskutere kausalitet på et sådant metafysisk niveau. Det betyder ikke at vi tager en Leibnizisk vinkel, hvor de to sfærer af fysisk og mentalt blot er synkroniseret, men mere et perspektiv ala Hume, hvor vi siger at vi kan se en korrelation, men at det ikke endnu er muligt at konkludere årsagssammenhænge. Dette argument vil dog kun holde, hvis man ignorerer ideen om intervention. Den matematiske teori, der bliver udviklet angående kausalitet forholder sig til ændringer i sandsynlighedsfordelingerne for stokastiske variable under en intervention i et kausalt netværk. Neurofænomenologiske interventioner, hvor du forsøger at stimulere områder i hjernen og finde sammenhænge med testsubjektets selvrapporterede oplevelse, fx "jeg ser farven rød, når du stimulerer her", er et glimrende eksempel på en en fysisk intervention i det fysiske system, der viser en kausal sammenhæng, og vi kan ovenikøbet tale om denne kausale sammenhæng baseret på en rimelig formaliseret version, der derved gør sig uafhængig af nogle af de udestående filosofiske spørgsmål ved kausalitet.

Er det muligt at overveje det modsatte af det neurofænomenologiske program: Opgiv antagelser om at forestillingsevnen har et neurologisk basis, og undersøg hvordan intentionelle akter af forestilling har effekt på målbare signaler. Her vil vi møde problemer med hvordan vi skal lave vores kausale netværk. Det vil måske kun være relevant, hvis vi mener at det er en reel position at have at det mentale har effekt på det fysiske, men jeg forstår at det er en meget relevant diskussion i bevidsthedsfilosofi.

## Neurale korrelater

Der findes niveauer af neurale korrelater. De målinger vi har fra fx fMRI giver os 3-dimensionelle billeder hvor hver pixel er en terning kaldet en voxel. Denne voxel repræsenterer et aggregat af neuroner i dette område, men indirekte i form af iltniveauet i det område. Jeg mener at det er gyldigt at kalde fMRI og senere processering af fMRI data for et neuralt korrelat til en given tilstand, men der er ikke blot én type neuralt korrelat. Der er overenstemmende niveauer af neurale korrelater, vi kan have både teoretiske og praktiske. Teoretisk set kan vi tage et niveau af fysisk beskrivelse, fx atomniveau og sige at hjernens tilstand er beskrevet ved alle atomer i dette område af kroppen og vi kan naturligvis bevæge os længere op med kemi og celler. Alle er gyldige beskrivelser, men vi mener at der er et tab af information som vi bevæger os opad. Afbildningen fra det fysiske model af det neurale korrelat ind i den cellebaserede er ikke en-til-en. På den praktiske side er eksempler på typer af neurale korrelater fMRI og EEG. 

Det interessante er, at hvis vi mener at vores nuværende oplevelse har et årsagsgivende neuralt korrelat, så er vi interesseret at beskrive, hvor stor en del af variansen i oplevelser, der kan blive beskrevet fra en given dybde af beskrivelse. Fx vil vi ikke mene at nuværende fMRI-scanninger er tilstrækkelige til at rekonstruere en fænomenal oplevelse. På den anden side ville vi nok også være skeptiske overfor den hypotese, at på et neuron-dendrit niveau, så skal hele min hjerne være i netop denne tilstand og ingen andre for at give mig denne oplevelse. På visse måder er der en sammenhæng med psykofysik her: I psykofysikken har man fx arbejdet med subperceptile stimuli, "hvor høj skal en lyd være for at jeg kan høre den?", men mere relevant er arbejdet med hvor meget kvantiteten af et stimuli skal ændres før subjektet kan registrere en forskel. Hvis jeg spillede musikken en promille lavere, ville du så have en anden oplevelse? Læg mærke til at vi arbejder med kausalitet og der er interessante antagelser om at man kan have et invariant miljø, hvor vi kan holde alle andre elementer faste og kun ændre på denne parameter. Fra en praktisk vinkel giver det mening at stille sådanne spørgsmål. Pointen er dog, at vi kan forestille os to hjerner, hvor forskellen er at den ene får spillet et stykke musik med 250 kpbs og den anden 260 kbps og derfor har forskellig elektrisk aktivitet i deres hjerne men med samme oplevelse.

Der kan være forskellige grunde til at man mener at denne ide om identitet af oplevelser er reel og ikke bare er et udtryk for at de praktisk talt er identiske. Vi kan have den holdning at bevidsthed og fænomenale oplevelser først dannes i et bestemt opmåde af hjernen fx bag panden og at forskellene i de to signaler på neuron-dendrit skala er absolut udvisket, når den neurale årsagskæde når dette område. Da der ikke er bijektioner mellem skalaerne har vi ikke blot informationstab mellem disse men selv hvis vi har reversibilitet i tid på fundamental fysisk skala, så har vi det ikke nødvendigvis, faktisk næsten aldrig, på højere skala.

## Dimensionalitet 

Lad os nu tale om dimensionalitet. Hvis vi tænker fMRI som et sæt af voxels, der måske nu blot har en reel værdi så kan de repræsenteres i et normalt euklidisk vektorrum, hvor dimensionaliteten er antallet af voxels. Hvis vi antager et fast antal partikler på atomniveau i området omrkring hjernen, så er dimensionaliteten det antal variable der ville være nødvendigt for at beskrive hver partikel. Med disse repræsentationer er en sekvens af neurale tilstande en sti i faserummet. Hvis vi tager partikelskalaen, så er det kun en meget lille delmængde af tilstande, der repræsenterer funktionelle hjerner, de allerfleste ville være tilfældig blandinger af atomer, der ikke processerer information på en måde vi på nuværende tidspunkt er i stand til at tænke som bevidst eller intelligent og lignende. Ikke nok med at det kun er en delmængde, der er gyldige hjerner, denne delmængde har en form i det højdimensionelle rum: Hvis der er en gyldig hjerne på et punkt i faserummet u, så er u + epsilon for en meget lille epsilon også en gyldig hjerne. Vi siger, at de gyldige hjerner lever på et manifold, der relativt set er meget lavere end det oprindelige.

Der er noget her vedrørende elektrisk vinkel versus atomisk vinkel, ioner osv. Jeg tænker nemlig på, at selv fra en vinkel, hvor vi har nuværende neuron-dendrit beskrivelse, så er vi stadigvæk afhængig af den elektriske aktivitet i disse celler. Neuron-dendrit skalaen kobles altså til en elektrisk skala, hvor vi beskriver action potentials med et vist niveau af granularitet. På neuron-dendrit niveau har vi det problem, at det ikke på samme måde som tidligere er meningsfuldt at holde antallet af elementer fast, fordi vi gerne vil være i stand til at skelne mellem systemer der har mange neuroner og få neuroner i forskellige områder. Neuron-dendrit skalaen er blevet beskrevet som et neuralt netværk, og man ender altså med at arbejde med en mængde af grafer, hvor vi, hvis vi vil gøre det nemmere for os selv, kan medtage hele nervesystemet og ikke blot hjernen og lade receptorer og bevægelsesnerver være specielt repræsenterede som den ydre kant i disse netværk. Hvis disse grafer inkluderer vægtninger på kanter og knuder, der repræsenterer elektrisk aktivitet, så vil vi mene at det er muligt at definere en metrisk funktion på dette rum, der beskriver afstanden eller ligheden mellem to tilstande af nervesystemet.

For en sekvens af tilstande på elektrisk skala, vil der være en grænse for hvor langt vi kan bevæge os fra t til t+1, altså delta. Dette er en form for diskteriseret approksimation af ideen om kontinuitet. Måske kunne man imidlertid også forestille sig at man på dette niveau allerede har tabt så meget information, at man ikke vil være i stand til at se en dynamik på lavere skala, der ville lede til et hastigt skift i sindstilstand og derved bryde denne øvre grænse for delta. Vi vil dog stadig mene at hvis man havde høj nok temporal resolution på sekvensen, så ville grænsen blive overholdt. Den øvre grænse for delta er naturligvis relateret til den temporale frekvens, tilstande per sekund.

Kan vi på en lignende måde skelne mellem gyldige og ikke-gyldige hjerner på dette niveau? Der er visse af graferne, der er for små eller har en topologi, der gør at der ikke synes at blive processeret nogen information overhovedet. Vi må introducere ideen om tænkt empericisme, det vil sige at vi tænker os at vi havde adgang til målinger af denne slags. På den måde kan vi sige ting som: En givens persons netværk, eller mængden af alle sekvenser af netværk hos alle der har levet. Blandt alle mennesker der har levet er der topologisk lighed mellem strukturen i hjernen, det kan diskuteres hvor meget og hvor lidt, men den er der. For denne topologiske generalitet er der dog også et multidimensionelt spektrum af elektriske tilstande, der har været opnået. Hvor stor og hvor lille varians kan diskuteres, men den er der. Her er det interessant at spørge om hvad de ydre kanter af dette spektrum repræsenterer. Jeg tænker fx på tilstande som baby inden du er blevet født og når du er ved at dø, derudover på ekstreme ændringer i neural dynamisk aktivitet som konsekvens af exogene stoffer, fx DMT. Carhart-Harris der leder psykedelisk forskning på Imperial i London tillægger det stor betydning at de neurale korrelater for psykedeliske tilstande er karakteriseret ved høj entropi sammenlignet med normal resting state.

## Tilstandes bestanddele

Hvad består en oplevelse af? Selvom vi abstrakt set kan forestille os en oplevelse som et element er sekvensen central. Nogle former for ikke-dualistisk spirituel tænkning vil have os til at se den aktuelle oplevelse som værende i et slags uendeligt nu, hvor alle mulige oplevelser er aktuelle, og fra en sådan vinkel er tiden ligegyldig. Fra denne vinkel giver det ikke mening at tænke i sekvenser af oplevelser. Det temporale aspekt findes fra den subjektive oplevelse kun i form af tanker og i form af forandring. Hvis vi antager at en oplevelse kan bestå af flere forskellige elementer fra forskellige sansemodaliteter på, så har vi når vi husker eller mindes, et element af vores oplevelse, der synes at være et replika af en tidligere fænomenologisk oplevelse der er komprimeret eller mindre detaljeret end hvis den skete på nuværende tidspunkt. Her kan det være interessant at overveje, om vi på nogen måde kan kvantificere opløsningen, mængden af information, der er tilstede i en oplevelse. Der er uden tvivl tilfælde, hvor vi vil sige at vi føler at vores oplevelse har været mere rig, at vi så at sige kunne mærke flere detaljer. Nogle af de føromtalte grænseoplevelser, her tænker jeg på fx nærdødsoplevelser, omtales også af mange folk som virkende mere virkelige end den normale virkelighed.

I mængden af mulige oplevelser er der en meget stor mængde af oplevelser, hvor der som ovenfor er indlejret en anden oplevelse i komprimeret version. Hvis vi antager realisme i den forstand at der findes en eller flere verdener, hvor oplevelserne kan aktualiseres, så der er forskel på mulige og aktuelle oplevelser, så er det de tidligere tilstande i denne verden, der afgør om vi vil dømme den indlejrede oplevelse som et minde om noget der virkelig er sket eller som ren forestilling. Alt derimellem kan også tages ved ideelt set at udregne hvor stor lighed der er mellem den indlejrede oplevelse og den oplevelse der har kortest afstand. Hvis denne afstand er meget stor er der altså ikke nogen tidligere oplevelse, der direkte ligger til grund for den indlejrede oplevelse, og derfor vil vi dømme den til at høre mere til i kategorien forestilling.

## Organismen der er associeret med $E(t)$

Vi er nu trådt ind i et interessant territorium, hvor det er blevet nødvendigt at have et sprog for, hvem der har en given oplevelse, således at vi kan sige at "noget" kan have en oplevelse på tid t og på tid t + 1. Det er et slags identitetsproblem, men det er også basis for spirituelle spørgsmål. Eksempelvis findes der i buddhisme, advaita og andre filosofier diskussioner og problematiseringer af ideen om at oplevelser tilhører bestemte fysiske systemer, at der er et jeg der har oplevelser, at oplevelser er noget der haves, omend det sker på mange forskellige måder og man kan ikke sige at der kun er en sådan position.

Et af problemerne er, at det synes svært at vide, om hele problemet blot er sprogligt. Vi kunne sige, at en hjerne med en given tilstand har en given oplevelse, men vi kunne ligesåvel sige at hjernen instantierer en oplevelse, at en oplevelse er instantieret af en hjerne, af hjernens aktuelle elektriske struktur, fx med netværksrepræsentationens ovenfor, er isomorf med en bestemt oplevelse. Sidstnævnte ide om isomorfi vil dog kræve at vi har en ide om hvordan fænomenologiske oplevelser kan repræsenteres som netværk af de elementer der udgør en fænomenologisk oplevelse.

## Funktionel designation

En hjernes eksistens i en bestemt organisme over organismens livsforløb er noget reelt fra en matematisk vinkel, idet en algoritme kan demarkere hjernen fra omverdenen og følge den gennem det kosmiske faserum i løbet af organismens livsforløb. Dette er et udtryk for et mere generelt forhold, hvor det vi mennesker allerede bruger som ord, der beskriver verden har realitet ikke blot som en menneskelig konstruktion, men som et matematisk mønster i materien. Problemet om clustering i maskinlæring viser at det er muligt at formalisere ideen om at finde grupper af sammenhørende elementer i et større rum. Denne klustering kan ske hierarkisk, så vi både er i stand til at have begrebet om en organisme som et kluster, men ligesåvel hjernen i organismen som et underkluster. Navnet "Kaspers hjerne" har altså en tilhørende funktion, der for et givent tidspunkt kan pege på det område af universet, hvor min hjerne befinder sig. 