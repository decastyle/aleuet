<script lang="ts">
 import { Separator } from "$lib/components/ui/separator/index.js";
 import * as Accordion from "$lib/components/ui/accordion/index.js";
</script>
 

<div class="center-grid p-8 max-w-4xl mx-auto">
 <h1 class="w-full scroll-m-20 text-balance text-4xl font-extrabold tracking-tight flex flex-col gap-4 mb-4">
  Жиі қойылатын сұрақтар
 </h1>
 <Separator />
 <Accordion.Root type="single" class="w-full sm:max-w-[100%]" value="item-1">
  <Accordion.Item value="item-1">
   <Accordion.Trigger class="text-2xl font-bold">Бұл үйірме ме?</Accordion.Trigger>
   <Accordion.Content class="flex flex-col gap-4 text-balance">
    <p>
     Жоқ. <strong>Ãleuet</strong> – бұл жай ғана үйірме емес, бұл саған болашағың үшін нақты жобалар, жетістіктер мен тәжірибе беретін даму жүйесі. Мұнда сен жай ғана "қатысып қоймайсың", өз портфолиоңды құрып, нақты нәтижені көресің.
    </p>
   </Accordion.Content>
  </Accordion.Item>
  <Accordion.Item value="item-2">
   <Accordion.Trigger class="text-2xl font-bold">Кімдер қатыса алады?</Accordion.Trigger>
   <Accordion.Content class="flex flex-col gap-4 text-balance">
    <p>
     Жобаға келесі талаптарға сай келетін барлық 7-9 сынып оқушылары қатыса алады:
    </p>
    <p>
     - сабақтан тыс уақытта өзін дамытқысы келетіндер<br>
     - жаңа нәрсені байқап көруден қорықпайтындар<br>
     - шетелде оқуды немесе жай ғана өмірдегі өз бағытын табуды армандайтындар.
    </p>
    <p>
     Бұрын олимпиадаларға немесе жобаларға қатысқан болуың міндетті емес. Ең бастысы – өсуге және әрекет етуге деген ынтаң!
    </p>
   </Accordion.Content>
  </Accordion.Item>
  <Accordion.Item value="item-3">
   <Accordion.Trigger class="text-2xl font-bold">Ұзақтығы қанша?</Accordion.Trigger>
   <Accordion.Content class="flex flex-col gap-4 text-balance">
    <p>
     Бағдарлама қыркүйектен мамыр айына дейін, яғни <strong>9 айға</strong> созылады. Бұл – толыққанды оқу жылы сияқты, бірақ мұнда бағаға емес, дағдыларға, жетістіктерге және портфолиоға баса назар аударылады.
    </p>
   </Accordion.Content>
  </Accordion.Item>
  <Accordion.Item value="item-4">
   <Accordion.Trigger class="text-2xl font-bold">Неше бағыт таңдауға болады?</Accordion.Trigger>
   <Accordion.Content class="flex flex-col gap-4 text-balance">
    <p>
     Нақты нәтижеге қол жеткізу үшін және бірнеше нәрсеге шашырап кетпеу үшін 1-2 бағыт таңдауға болады. Егер басында қай бағытты таңдайтыныңды білмесең, қорықпа. Қыркүйекте барлық бағыттармен танысып, өзіңе ұнағанын таңдауға мүмкіндік беретін кіріспе сессиясы болады.
    </p>
   </Accordion.Content>
  </Accordion.Item>
  <Accordion.Item value="item-5">
   <Accordion.Trigger class="text-2xl font-bold">Қай бағыт маған сәйкес келетінін қалай түсінуге болады?</Accordion.Trigger>
   <Accordion.Content class="flex flex-col gap-4 text-balance">
    <p>
     Біз саған таңдау жасауға көмектесеміз! Бағдарламаның басында сен mini-тест пен воркшоптан өтесің, соның нәтижесінде:
    </p>
    <p>
     - өзіңнің мықты тұстарыңды.<br>
     - саған шынымен не қызық екенін.<br>
     - қай салада көбірек өсе алатыныңды білесің.
    </p>
    <p>
     Сонымен қатар, бағдарлама басталмас бұрын әр бағыттың менторларымен сөйлесіп, таңдаған бағытыңның өзіңе толықтай сәйкес келетініне көз жеткізе аласың!
    </p>
   </Accordion.Content>
  </Accordion.Item>
  <Accordion.Item value="item-6">
   <Accordion.Trigger class="text-2xl font-bold">Менторлар деген кімдер?</Accordion.Trigger>
   <Accordion.Content class="flex flex-col gap-4 text-balance">
    <p>
     Менторлар – бұл 12-сынып оқушылары, олардың тәжірибесі мол:
    </p>
    <p>
     - олимпиадаларда, хакатондарда және ғылыми жобалар байқауларында жеңіске жеткен.<br>
     - тағылымдамадан өтіп, өз бағытын A-дан Я-ға дейін зерттеген.<br>
     - стартаптар мен медиа жобалар құрып, код жазған.
    </p>
    <p>
     Олар арнайы іріктеуден, оқытудан өтіп, оқу жылы бойы саған қолдау көрсетуге дайын!
    </p>
   </Accordion.Content>
  </Accordion.Item>
  <Accordion.Item value="item-7">
   <Accordion.Trigger class="text-2xl font-bold">Нәтижесінде мен не аламын?</Accordion.Trigger>
   <Accordion.Content class="flex flex-col gap-4 text-balance">
    <p>
     Бағдарлама соңында сен:
    </p>
    <p>
     - өз бағытың бойынша құнды білім аласың,<br>
     - шағын портфолио жасайсың (бағытқа байланысты: мақала, сайт, жоба, сұхбат және т.б.),<br>
     - ментордан пікір (отзыв) аласың,<br>
     - болашағыңды қалай құру керектігін және өз күшіңнің неде екенін түсінесің,<br>
     - пікірлес достардан құралған команда табасың.
    </p>
    <p>
     Ең бастысы – жоба барысында алған білімің мен тәжірибеңнің арқасында өзіңді және өз қызығушылықтарыңды тереңірек түсіне бастайсың!
    </p>
   </Accordion.Content>
  </Accordion.Item>
  <Accordion.Item value="item-8">
   <Accordion.Trigger class="text-2xl font-bold">Бұл шетелде оқуға түсуге көмектесе ме?</Accordion.Trigger>
   <Accordion.Content class="flex flex-col gap-4 text-balance">
    <p>
     Иә! Шетелде грантқа тапсыратындар әрқашан оқудан тыс белсенділігін (extracurricular activities), көшбасшылық қасиеттерін (leadership), қоғамға тигізген әсерін (impact) және жобаларын көрсетеді. Біз саған осының бәрін дәл қазірден бастап, асықпай, күйзеліссіз, жүйелі түрде құруға көмектесеміз.
    </p>
   </Accordion.Content>
  </Accordion.Item>
  <Accordion.Item value="item-9">
   <Accordion.Trigger class="text-2xl font-bold">Сабақтармен және басқа үйірмелермен қатар алып жүруге бола ма?</Accordion.Trigger>
   <Accordion.Content class="flex flex-col gap-4 text-balance">
    <p>
     Әрине! Ментормен кездесулер, топтық сабақтар мен бағыт бойынша жиналыстар аптасына жалпы 3 рет, 60 минуттан өтеді, оған қоса өз жобаңды жасауға және тапсырмаларды орындауға уақыт арнайсың. Егер уақытты дұрыс жоспарлай білсең (ал біз оны да үйретеміз), сабаққа да, демалысқа да, өз шаруаларыңа да уақытың жеткілікті болады.
    </p>
   </Accordion.Content>
  </Accordion.Item>
  <Accordion.Item value="item-10">
   <Accordion.Trigger class="text-2xl font-bold">Егер мен Ақтауда/Қазақстанда тұрмасам, қатыса аламын ба?</Accordion.Trigger>
   <Accordion.Content class="flex flex-col gap-4 text-balance">
    <p>
     Иә! Бізде сабақтар онлайн форматта өтеді, сондықтан, қай аймақтан екеніңе қарамастан, біздің бағдарламаға қатыса аласың.
    </p>
   </Accordion.Content>
  </Accordion.Item>
 </Accordion.Root>
</div>