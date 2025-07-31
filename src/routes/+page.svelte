<script lang="ts">
    import { Separator } from "$lib/components/ui/separator/index.js";
    import * as Accordion from "$lib/components/ui/accordion/index.js";
    import { fade } from "svelte/transition";
    import { quartOut } from "svelte/easing";
</script>

<!-- Navigation Bar -->

<nav
    class="fixed top-0 left-0 right-0 z-50 bg-card backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b"
>
    <div class="flex items-center justify-between h-16 max-w-4xl px-8 mx-auto">
        <div class="font-bold">
            <a href="/" class="text-xl">Ãleuet</a>
        </div>
        <div class="flex items-center gap-4">
            <a
                href="https://wa.me/+77012803322"
                class="hover:text-primary"
                aria-label="WhatsApp"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-whatsapp"
                    viewBox="0 0 16 16"
                >
                    <path
                        d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"
                    />
                </svg>
            </a>
            <a
                href="https://instagram.com/aleuet.education"
                class="hover:text-primary"
                aria-label="Instagram"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
            </a>
        </div>
    </div>
</nav>

<!-- Main Title -->

<div
    class="h-[60vh] px-8 mx-auto text-center bg-gradient-to-b from-muted to-background flex items-center justify-center"
    transition:fade={{ duration: 1200, easing: quartOut }}
>
    <div class="flex flex-col items-center pt-16">
        <h1 class="text-6xl font-bold tracking-tight">Ãleuet</h1>
        <div class="flex flex-col items-center">
            <p class="text-2xl">менторлық бағдарламасы</p>
        </div>
    </div>
</div>

<!-- Description -->

<div class="max-w-4xl p-8 mx-auto center-grid">
    <p class="flex flex-col gap-4 text-balance">
        Ãleuet — халықаралық байқаулар мен олимпиадалар жеңімпаздары, стартап
        авторлары құрастырған 7–9 сынып оқушыларына арналған бірегей 9 айлық
        менторлық бағдарлама. Біз әрбір оқушы мектепте оқып жүріп-ақ мықты
        портфолио жинап, әлемнің үздік университеттеріне түсе алады деп сенеміз.
    </p>
</div>

<!-- Frequently Asked Questions -->

<div class="max-w-4xl p-8 mx-auto center-grid">
    <h1
        class="flex flex-col w-full gap-4 mb-4 text-4xl font-extrabold tracking-tight scroll-m-20 text-balance"
    >
        Жиі қойылатын сұрақтар
    </h1>
    <Separator />
    <Accordion.Root type="single" class="w-full" value="item-1">
        <Accordion.Item value="item-1">
            <Accordion.Trigger class="text-2xl font-regular"
                >Бұл үйірме ме?</Accordion.Trigger
            >
            <Accordion.Content class="flex flex-col gap-4 text-balance">
                <p>
                    Жоқ. <strong>Ãleuet</strong> – бұл жай ғана үйірме емес, бұл
                    саған болашағың үшін нақты жобалар, жетістіктер мен тәжірибе
                    беретін даму жүйесі. Мұнда сен жай ғана "қатысып қоймайсың",
                    өз портфолиоңды құрып, нақты нәтижені көресің.
                </p>
            </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-2">
            <Accordion.Trigger class="text-2xl font-regular"
                >Кімдер қатыса алады?</Accordion.Trigger
            >
            <Accordion.Content class="flex flex-col gap-4 text-balance">
                <p>
                    Жобаға келесі талаптарға сай келетін барлық 7-9 сынып
                    оқушылары қатыса алады:
                </p>
                <p>
                    - сабақтан тыс уақытта өзін дамытқысы келетіндер<br />
                    - жаңа нәрсені байқап көруден қорықпайтындар<br />
                    - шетелде оқуды немесе жай ғана өмірдегі өз бағытын табуды армандайтындар.
                </p>
                <p>
                    Бұрын олимпиадаларға немесе жобаларға қатысқан болуың
                    міндетті емес. Ең бастысы – өсуге және әрекет етуге деген
                    ынтаң!
                </p>
            </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-3">
            <Accordion.Trigger class="text-2xl font-regular"
                >Ұзақтығы қанша?</Accordion.Trigger
            >
            <Accordion.Content class="flex flex-col gap-4 text-balance">
                <p>
                    Бағдарлама қыркүйектен мамыр айына дейін, яғни <strong
                        >9 айға</strong
                    >
                    созылады. Бұл – толыққанды оқу жылы сияқты, бірақ мұнда бағаға
                    емес, дағдыларға, жетістіктерге және портфолиоға баса назар аударылады.
                </p>
            </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-4">
            <Accordion.Trigger class="text-2xl font-regular"
                >Неше бағыт таңдауға болады?</Accordion.Trigger
            >
            <Accordion.Content class="flex flex-col gap-4 text-balance">
                <p>
                    Нақты нәтижеге қол жеткізу үшін және бірнеше нәрсеге шашырап
                    кетпеу үшін 1-2 бағыт таңдауға болады. Егер басында қай
                    бағытты таңдайтыныңды білмесең, қорықпа. Қыркүйекте барлық
                    бағыттармен танысып, өзіңе ұнағанын таңдауға мүмкіндік
                    беретін кіріспе сессиясы болады.
                </p>
            </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-5">
            <Accordion.Trigger class="text-2xl font-regular"
                >Қай бағыт маған сәйкес келетінін қалай түсінуге болады?</Accordion.Trigger
            >
            <Accordion.Content class="flex flex-col gap-4 text-balance">
                <p>
                    Біз саған таңдау жасауға көмектесеміз! Бағдарламаның басында
                    сен mini-тест пен воркшоптан өтесің, соның нәтижесінде:
                </p>
                <p>
                    - өзіңнің мықты тұстарыңды.<br />
                    - саған шынымен не қызық екенін.<br />
                    - қай салада көбірек өсе алатыныңды білесің.
                </p>
                <p>
                    Сонымен қатар, бағдарлама басталмас бұрын әр бағыттың
                    менторларымен сөйлесіп, таңдаған бағытыңның өзіңе толықтай
                    сәйкес келетініне көз жеткізе аласың!
                </p>
            </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-6">
            <Accordion.Trigger class="text-2xl font-regular"
                >Менторлар деген кімдер?</Accordion.Trigger
            >
            <Accordion.Content class="flex flex-col gap-4 text-balance">
                <p>
                    Менторлар – бұл 12-сынып оқушылары, олардың тәжірибесі мол:
                </p>
                <p>
                    - олимпиадаларда, хакатондарда және ғылыми жобалар
                    байқауларында жеңіске жеткен.<br />
                    - тағылымдамадан өтіп, өз бағытын A-дан Я-ға дейін зерттеген.<br
                    />
                    - стартаптар мен медиа жобалар құрып, код жазған.
                </p>
                <p>
                    Олар арнайы іріктеуден, оқытудан өтіп, оқу жылы бойы саған
                    қолдау көрсетуге дайын!
                </p>
            </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-7">
            <Accordion.Trigger class="text-2xl font-regular"
                >Нәтижесінде мен не аламын?</Accordion.Trigger
            >
            <Accordion.Content class="flex flex-col gap-4 text-balance">
                <p>Бағдарлама соңында сен:</p>
                <p>
                    - өз бағытың бойынша құнды білім аласың,<br />
                    - шағын портфолио жасайсың (бағытқа байланысты: мақала, сайт,
                    жоба, сұхбат және т.б.),<br />
                    - ментордан пікір (отзыв) аласың,<br />
                    - болашағыңды қалай құру керектігін және өз күшіңнің неде екенін
                    түсінесің,<br />
                    - пікірлес достардан құралған команда табасың.
                </p>
                <p>
                    Ең бастысы – жоба барысында алған білімің мен тәжірибеңнің
                    арқасында өзіңді және өз қызығушылықтарыңды тереңірек түсіне
                    бастайсың!
                </p>
            </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-8">
            <Accordion.Trigger class="text-2xl font-regular"
                >Бұл шетелде оқуға түсуге көмектесе ме?</Accordion.Trigger
            >
            <Accordion.Content class="flex flex-col gap-4 text-balance">
                <p>
                    Иә! Шетелде грантқа тапсыратындар әрқашан оқудан тыс
                    белсенділігін (extracurricular activities), көшбасшылық
                    қасиеттерін (leadership), қоғамға тигізген әсерін (impact)
                    және жобаларын көрсетеді. Біз саған осының бәрін дәл
                    қазірден бастап, асықпай, күйзеліссіз, жүйелі түрде құруға
                    көмектесеміз.
                </p>
            </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-9">
            <Accordion.Trigger class="text-2xl font-regular"
                >Сабақтармен және басқа үйірмелермен қатар алып жүруге бола ма?</Accordion.Trigger
            >
            <Accordion.Content class="flex flex-col gap-4 text-balance">
                <p>
                    Әрине! Ментормен кездесулер, топтық сабақтар мен бағыт
                    бойынша жиналыстар аптасына жалпы 3 рет, 60 минуттан өтеді,
                    оған қоса өз жобаңды жасауға және тапсырмаларды орындауға
                    уақыт арнайсың. Егер уақытты дұрыс жоспарлай білсең (ал біз
                    оны да үйретеміз), сабаққа да, демалысқа да, өз шаруаларыңа
                    да уақытың жеткілікті болады.
                </p>
            </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-10">
            <Accordion.Trigger class="text-2xl font-regular"
                >Егер мен Ақтауда/Қазақстанда тұрмасам, қатыса аламын ба?</Accordion.Trigger
            >
            <Accordion.Content class="flex flex-col gap-4 text-balance">
                <p>
                    Иә! Бізде сабақтар онлайн форматта өтеді, сондықтан, қай
                    аймақтан екеніңе қарамастан, біздің бағдарламаға қатыса
                    аласың.
                </p>
            </Accordion.Content>
        </Accordion.Item>
    </Accordion.Root>
</div>

<!-- Footer -->

<footer class="px-4 py-12 bg-gradient-to-b from-background to-card">
    <div
        class="flex flex-col items-center justify-between max-w-4xl gap-8 p-8 mx-auto sm:flex-row"
    >
        <div class="flex flex-col items-center sm:items-start">
            <h3 class="text-xl font-bold">Ãleuet</h3>
            <p class="text-sm text-muted-foreground">менторлық бағдарламасы</p>
        </div>

        <div class="text-sm">© 2024 Ãleuet. All rights reserved.</div>
    </div>
</footer>
