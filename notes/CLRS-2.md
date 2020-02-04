# CLRS-2

## 2.1 Insertion sort

Der er forskel på algoritmer og de problemer de løser, det samme problem kan løses af mange forskellige algoritmer. Derfor er et problem også en beskrivelse af en algoritme set som en black box, hvor vi kun beskriver dens adfærd. Fx skal en korrekt sorteringsalgoritme have følgende adfærd: Givet et array af $n$ tal skal den returnere en permutering af arrayet, så $A[i] \leq A[i+1]$ for alle $i \in \{1, .., n\}$. Dette er sorteringsproblemet beskrevet som et forhold mellem input og output uden at tænke på implementering.

Insertion sort består af en for-løkke med en while løkke inden i. CLRS bruger notation for arrays, hvor første element er $A[1]$ og sidste er $A[n]$. For løkken starter med $j = 2$, så det er andet element. Vi siger at $A[j]$ er vores *key*, det er det tal vi skal indsætte på den rigtige plads blandt elementerne til venstre. Vi bruger en while løkke til at bevæge ned gennem elementerne til venstre og vi bliver ved med at kopiere elementet en plads op så længe $A[i] > key$, det vil sige så længe vi ikke har fundet et element der er mindre eller lig med *key*. Siden det er større skal det være på højre side, så vi kopierer en plads op. Læg mærke til at når vi kopierer en plads op, så står det samme tal på to pladser, men i næste iteration bliver tallet under kopieret op
også, så det kun står en gang. Til sidst indsætter vi *key* på den rigtige plads. Det kan også være fordi vi er nået helt til bunds.

Vi hævder at insertion sort er en korrekt algoritme, altså at den løser sorteringsproblemet. Det kan vises ved **løkke-invariant**. For en løkke, der bruger $j$, er en løkke-invariant en proposition, en sætning, der bruger $j$ og som er sand selvom $j$ ændrer sig, deraf ordet invariant. Den er sand på trods selvom $j$ varierer. Løkke-invarianten er som et teorem vi vil vise og vi bruger noget der minder om induktionsbevis, hvor vi har *initialization*, *maintenance* og *termination*.

For insertion sort har vi en løkke-invariant, der lyder sådan her: Inden hver iteration af den ydre for-løkke, hvor $j$ er iteratoren, så består delarrayet $A[1..(j-1)]$ af de oprindelige elementer $A[1..(j-1)]$ men i sorteret (ascending) rækkefølge. Læg mærke til at der er 2 elementer, både det med oprindelige og det med sorteret. Hvis vi kan vise at løkke invarianten holder til slut, hvor $j = n + 1$, så gælder det at hele arrayet er sorteret og består af originale elementer, så insertion sort er korrekt. Det md oprindelige er vigtigt fordi sorteringsproblemet har at gøre med en sorteret *permutation* af arrayet; vi kan ikke bare sætte skrive $1, 2, 3 ..., n$ i arrayet, selvom det også er et sorteret.

## Insertion sort korrekthed

**Initialization**: Vi skal vise at løkke-invarianten gælder når løkken starter. Ved løkkens start er $j = 2$, så $j = 2 -1 = 1$, så delarrayet $A[1 .. 1]$ er bare første element. Det er både det originale element og delarrayet er sorteret fordi der kun er ét element.

**Maintenance**: Vi skal vise at *hvis* løkke-invarianten holder ved begyndelsen af en iteration af løkken, så kommer den også til at holde ved start på næste iteration. Siden vi allerede har vist at den holder helt fra start, hvis vi så også kan vise dette, så må det jo holde efter hver iteration. Bemærk altså at løkke-invarianten ikke skal gælde hele tiden, inde i løkken må den gerne midlertidigt blive brudt.

CLRS viser maintenance "uformelt", for man kunne godt gå i gang med at lave et helt bevis bare for while-løkken, med en helt ny løkke-invariant. Derfor siger de bare, at det iterationen gør er at tage $A[j]$ og rykke elementerne til venstre en plads op indtil *key* kan indsættes på den rigtige plads. Så, *hvis* løkke-invarianten holder ved iterationens start, så må $A[1..(j-1)]$ være både originale og sorteret, og nu er $A[j]$ som er original blevet indsat således at $A[1..j]$ er original og sorteret. Løkke-invarianten siger at $A[1..(j-1)]$ er original og sorteret, så når *$j$ bliver inkrementeret med $1$* til slut i for-løkken, så gælder løkke-invarianten igen.

**Termination**: Termination handler om hvad der sker når løkken slutter. Husk at det er for-løkken vi tænker på og sidste iteration af løkken er $j = n$. Forfatterne tænker på for-løkke ligesom en normal C løkke, hvor vi når at inkrementere $j$, så $j = n + 1$ og så tjekker vi om $j \leq n$ og siger nej og slutter. Det kan være lidt forvirrende med $j \leq n$ fordi vi plejer at have nul-indeksering, hvor vi siger $j < n$. Pointen er at når løkken er færdig, så er $j = n + 1$. Ved at koble initialization og maintenance ved vi, at efter sidste iteration så holder løkke-invarianten for $A[1 .. (j-1)]$. Men $A[1..(j-1)] = A[1..((n +1)-1)] = A[1..n] = A$, så hele arrayet har både originale elementer og er sorteret. Derfor er insertion sort **korrekt**!

## Insertion sort tidskompleksitet

RAM-modellen giver en model for køretid, der minder om en virkelig computer. Hver linje $i$ i INSERTION-SORT tager en konstant tid $c_i$. Og hver linje kode kommer til at køre et bestemt antal gange. Når vi ved cost og antal gange for linjerne kan vi beskrive hvor lang tid hele proceduren tager som en funktion af disse costs. Antal gange per linje er ofte afhængig af antal iterationer af løkkerne, og iterationerne af løkkerne er afhængige af størrelsen af arrayet $n$.

While-løkken kører hver gang vi skal finde den rigtige plads til element $A[j]$. Det dårligste tilfælde er, når vi får et omvendt sorteret array, for så skal vi hver gang gå helt til venstre. Første gang, når vi har fat i element nummer 2, evaluerer vi while-statementet 2 gange og er inde i while-løkken 1 gang fordi vi skal flytte et element op. For element nummer 3 evalurer vi while-statementet 3 gange og er inde i while-løkken 2 gange fordi vi skal flytte to elementer op.

Hvis man vil have summen $1 + 2 + 3 ... + n$ så giver det $\frac{n(n+1)}{2}$. I de værste tilfælde køres linje 5 altså så mange gange: $2 + 3 + ... + n = \sum_{j = 2}^{n} j = \frac{n(n+1)}{2} - 1$, hvor vi trækker $1$ fra fordi vi starter med $2$. Linje 6 og 7 inde i while løkken køres begge $1 + 2 + 3 ... + (n - 1) = \sum_{j = 2}^{n}(j - 1) = \frac{(n-1)(n)}{2}$. Det bliver $(n-1)(n)$, fordi vi kun vil op til $(n - 1)$.

Da $n(n+1) = n^2 + n$ kommer udtrykket for vores funktion for køretiden $T(n)$ til at indeholde $n^2$ og derfor er *værstefaldskøretiden kvadratisk*.

## Divide-and-conquer
Divide-and-conquer er et *paradigme*, en måde at lave algoritmer på. Her deler problemet op i mindre dele. Hver del løses for sig og løsnignerne kombineres. Men hver af disse mindre problemer løses på samme måde, altså rekursivt. Vi har så et slags basistilfælde, hvor problemerne er blevet så små at de kan løses uden at dele dem mere op. Der er altså 3 dele: *Divide*, *conquer* and *combine*.

## Mergesort
Merge sort løser sorteringsproblemet med divide-and-conquer: Divide arrayet op i to halvdele, left and right, conquer ved at bruge merge sort til at sortere dem hver for sig og combine ved at brug en metode der bare hedder merge til at få de to sorterede left and right til at blive et samlet sorteret array.

Notationen i CLRS er lidt besværlig. Merge-sort er $MERGESORT(A, p, r)$ sorterer $A[p..r]$, så når vi skal divide i left og right skal vi have "gennemsnittet", $q = floor((p+r)/2)$. Hvis arrayet har et ulige antal elementer bliver left altså en mindre end right. Når vi har fundet $q$ er vi færdig med divide. Så kalder vi $MERGESORT(A, p, q)$ og $MERGESORT(A, q + 1, r)$ hvilket er vores conquer-step. Til sidst kombinerer vi med $MERGE(A, p, q, r)$, hvor $p, q, r$ bruges til at vide hvad der er left og right.

Left er $A[p ..q]$ og right er $A[(p + 1) .. r]$. Hvor stor er left? Hvis $q = 5$ og $p = 2$ består left af elementerne på plads $2, 3, 4, 5$, så $n_1 = p - q + 1$. På samme måde for right $n_2 = r - (q + 1) + 1 = r - q$. $MERGE$ laver arrays 1-indekserede kopier af de to halvdele og de hedder $L$ og $R$ men de slutter begge med et ekstra element der har værdien $\infty$, en sentinel, og den gør proceduren mere simpel.

I linje 12-17 af MERGE bruges $k$ til at løbe vi fra $p$ til $r$, altså over alle pladserne hvor vi skal indsætte tallene fra left og right i sorteret rækkefølge. Vi bruger $i$ og $j$ til at holde styr på det mindste element vi endnu ikke har kopieret over i $A$ (forestil dig at vi nærmest har slettet denne del af $A$). Vi sammenligner de to mindste ikke-kopierede og kopierer den mindste over og husker at inkrementere *enten* $i$ eller $j$. Det giver mening at køretiden for hele MERGE er proportional med $n_1 + n_2$, fordi vi skal igennem alle elementer i left og right før vi er færdige. Man kan også vise at MERGE er korrekt vha. en løkke-invariant.

## Køretid for merge sort
Da merge sort er rekursiv er det ikke lige så simpelt at finde køretiden som ved insertion sort. Vi beskriver køretiden $T(n)$ som en rekursiv funktion med et $\Theta(1)$ base case og en rekursiv case med flere termer. Først er der to dele, der hver har halv så stor størrelse, så det er $2T(n/2)$, derudover skal vi lave divide som var $\Theta(1)$ bare at finde gennemsnit og så skal vi combine, hvilket var $\Theta(n)$.