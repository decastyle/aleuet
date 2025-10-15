<script lang="ts">
    import { Separator } from "$lib/components/ui/separator/index.js";
    import * as Accordion from "$lib/components/ui/accordion/index.js";
    import { fade } from "svelte/transition";
    import { quartOut } from "svelte/easing";

    import SunIcon from "@lucide/svelte/icons/sun";
    import MoonIcon from "@lucide/svelte/icons/moon";

    import { toggleMode } from "mode-watcher";
    import { Button } from "$lib/components/ui/button/index.js";

    import * as Card from "$lib/components/ui/card/index.js";
    import { Badge } from "$lib/components/ui/badge/index.js";

    import { onMount } from "svelte";
    import * as Carousel from "$lib/components/ui/carousel/index.js";

    import * as Avatar from "$lib/components/ui/avatar/index.js";

    import * as Dialog from "$lib/components/ui/dialog/index.js";

    import { images } from "$lib/images/index";

    import * as Pagination from "$lib/components/ui/pagination/index.js";

    import * as HoverCard from "$lib/components/ui/hover-card/index.js";

    import karakat_md from "$lib/about/karakat.md?raw";
    import sara_md from "$lib/about/sara.md?raw";
    import arsen_md from "$lib/about/arsen.md?raw";
    import nurila_md from "$lib/about/nurila.md?raw";
    import erkebulan_md from "$lib/about/erkebulan.md?raw";
    import zeinep_md from "$lib/about/zeinep.md?raw";
    import amira_md from "$lib/about/amira.md?raw";
    import akku_md from "$lib/about/akku.md?raw";

    let days = $state(0);
    let hours = $state(0);
    let minutes = $state(0);

    const targetDate: Date = new Date("2025-11-01T00:00:00");

    function updateCountdown() {
        const now = new Date();
        const timeDiff = targetDate.getTime() - now.getTime();

        if (timeDiff <= 0) {
            days = 0;
            hours = 0;
            minutes = 0;
            return;
        }

        days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        hours = Math.floor(
            (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    }

    const mentors = [
        {
            name: "Балғабеков Еркебұлан",
            image: images["erkebulan.webp"],
            pfp: images["erkebulan_pfp.jpg"],
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            username: "ba1gabekov",
            badge: "CEO",
            secondary: "Coding",
            about: erkebulan_md,
            gpa: "5.0",
        },
        {
            name: "Нұрмұхаммет Қарақат",
            image: images["karakat.jpg"],
            pfp: images["karakat_pfp.jpg"],
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            username: "knarrahaz",
            badge: "Journalism",
            secondary: "Media",
            about: karakat_md,
            gpa: "4.9",
        },
        {
            name: "Сайранова Сара",
            image: images["sara.jpg"],
            pfp: images["sara_pfp.jpg"],
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            username: "sara.sairanova",
            badge: "Innovation",
            secondary: "Startup",
            about: sara_md,
            gpa: "5.0",
        },
        {
            name: "Закуова Амира",
            image: images["amira.jpg"],
            pfp: images["amira_pfp.jpg"],
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            username: "zak_amira",
            badge: "Business",
            secondary: "Economist",
            about: amira_md,
            gpa: "4.5",
        },
        {
            name: "Серік Зейнеп",
            image: images["zeinep-h.webp"],
            pfp: images["zeinep_pfp.jpg"],
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            username: "zweesq_",
            badge: "Debates",
            secondary: "Economist",
            about: zeinep_md,
            gpa: "4.7",
        },
        {
            name: "Нурила Худайберген",
            image: images["default.jpg"],
            pfp: images["nurila_pfp.jpg"],
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            username: "nurkhus_",
            badge: "Social",
            secondary: "Economist",
            about: nurila_md,
            gpa: "5.0",
        },
        {
            name: "Есқожа Аққу",
            image: images["default.jpg"],
            pfp: images["default.jpg"],
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            username: "kkrywi",
            badge: "Primary",
            secondary: "Secondary",
            about: akku_md,
            gpa: "5.0",
        },
        {
            name: "Азизбек Арсен",
            image: images["default.jpg"],
            pfp: images["arsen_pfp.jpg"],
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            username: "decastyled",
            badge: "3D Graphics",
            secondary: "Artist",
            about: arsen_md,
            gpa: "4.6",
        },
    ];

    const cardData = [
        {
            title: "Журналистика және медиа",
            description:
                "Мақала, сценарий жазу; сұқбат алу; репортаж түсіру; аудитория алдында сөйлеуді үйрену",
            link: "https://en.wikipedia.org/wiki/Journalism",
            username: "Journalism",
            bio: "Journalism is the production and distribution of reports on the interaction of events, facts, ideas, and people that are the news of the day and that informs society to at least some degree of accuracy.",
            joinedDate: "September 2022",
        },
        {
            title: "Инновация және стартап",
            description:
                "Жаңа идеяларды әзірлеу; бизнес-жоспар жазу; технологиялық шешімдер құру",
            link: "https://en.wikipedia.org/wiki/Innovation",
            username: "Innovation",
            bio: "Building the future through innovation.",
            joinedDate: "January 2023",
        },
        {
            title: "Бизнес және экономика",
            description:
                "Бизнес-стратегиялар; экономикалық талдау; инвестициялық жоспарлау",
            link: "https://en.wikipedia.org/wiki/Business",
            username: "Business",
            bio: "Empowering entrepreneurs worldwide.",
            joinedDate: "March 2023",
        },
        {
            title: "Дебаттар және сөйлесу",
            description:
                "Сөйлеу өнерін дамыту; дәлелді дәлелдеу; сұхбат техникалары",
            link: "https://en.wikipedia.org/wiki/Debate",
            username: "Debate",
            bio: "Mastering the art of communication.",
            joinedDate: "June 2023",
        },
        {
            title: "Әлеуметтік қызмет",
            description:
                "Қоғамдық жобалар; волонтерлік қызмет; әлеуметтік өзгерістер",
            link: "https://en.wikipedia.org/wiki/Society",
            username: "Society",
            bio: "Creating positive social impact.",
            joinedDate: "August 2023",
        },
        {
            title: "Бастапқы білім",
            description:
                "Негізгі пәндер; оқу материалдары; білім беру технологиялары",
            link: "https://en.wikipedia.org/wiki/Knowledge",
            username: "Knowledge",
            bio: "Foundations for lifelong learning.",
            joinedDate: "October 2023",
        },
    ];

    const skillsData = [
        {
            title: "Hard skills",
            items: [
                "Әр бағыт бойынша арнайы стратегия арқылы жұмыстанып, даму",
                "Жеке дайын жоба/стартап",
                "Мықты портфолио құру",
                "Зерттеу және аналитика",
                "Қаржылық сауаттылық",
                "Python-ға кіріспе, логика",
            ],
            link: "https://en.wikipedia.org/wiki/Skill#=Hard_skills",
            username: "Hard skills",
            bio: "Foundations for lifelong learning.",
            joinedDate: "October 2023",
        },
        {
            title: "Soft skills",
            items: [
                "Өзін-өзі тану дағдылары мен мақсаттары",
                "Презентация дағдылары",
                "Критикалық ойлау",
                "Академиялық жазу және зерттеу дағдылары",
                "Көшбасшылық және командамен жұмыс",
                "Эмоционалды интеллект",
            ],
            link: "https://en.wikipedia.org/wiki/Soft_skills",
            username: "Soft skills",
            bio: "Foundations for lifelong learning.",
            joinedDate: "October 2023",
        },
    ];

    const resultsData = [
        "Кәсіптік бағдар беру (профориентация) бойынша көмек",
        "Жеке даму жолы",
        "Жеке жобалар, байқаулар мен тәжірибеден құралған дайын портфолио",
        "Жарыстарға, олимпиадаларға, шараларға қатысу",
        "Тәлімгерлермен (менторлармен) тұрақты жеке консультациялар",
        "Бағдарламаны бітіргені туралы сертификат",
    ];

    onMount(() => {
        updateCountdown();
        const interval = setInterval(updateCountdown, 60000); // Update every minute
        return () => clearInterval(interval);
    });

    import type { EmblaCarouselType } from "embla-carousel"; // Import the type from embla-carouse

    // Carousel logic
    let currentIndex = $state(0);
    let api = $state<EmblaCarouselType | null>(null);

    const count = $derived(api ? api.scrollSnapList().length : 0);

    // Sync carousel with currentIndex
    $effect(() => {
        if (api && currentIndex >= 0 && currentIndex < count) {
            api.scrollTo(currentIndex, false); // Scroll to exact slide, no animation for instant sync
        }
    });

    // Update currentIndex when carousel selection changes
    $effect(() => {
        if (api) {
            api.on("select", () => {
                currentIndex = api!.selectedScrollSnap(); // Update to current slide index
            });
            api.on("reInit", () => {
                currentIndex = api!.selectedScrollSnap(); // Re-sync on re-initialization (e.g., resize)
            });
        }
    });
</script>

<!-- Navigation Bar -->

<nav
    class="fixed top-0 left-0 right-0 z-50 bg-card backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b"
>
    <div class="flex items-center justify-between h-16 max-w-4xl px-8 mx-auto">
        <div>
            <a href="/" class="text-xl font-regular hover:underline">Ãleuet</a>
        </div>
        <div class="flex items-center gap-4">
            <Button
                variant="ghost"
                size="icon"
                href="https://wa.me/77762803322?text=%D0%A1%D0%B0%D0%BB%D0%B0%D0%BC%D0%B0%D1%82%D1%81%D1%8B%D0%B7%20%D0%B1%D0%B0%3F!%20%D0%9A%D1%83%D1%80%D1%81%20%D0%B6%D0%B0%D0%B9%D0%BB%D1%8B%20%D1%82%D0%BE%D0%BB%D1%8B%D2%93%D1%8B%D1%80%D0%B0%D2%9B%20%D0%B0%D2%9B%D0%BF%D0%B0%D1%80%D0%B0%D1%82%20%D0%B1%D0%B5%D1%80%D0%B5%D1%81%D1%96%D0%B7%20%D0%B1%D0%B5%3F"
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
            </Button>

            <Button
                variant="ghost"
                size="icon"
                href="https://instagram.com/aleuet.education"
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
            </Button>
            <Button onclick={toggleMode} variant="ghost" size="icon">
                <SunIcon
                    class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 !transition-all dark:-rotate-90 dark:scale-0"
                />
                <MoonIcon
                    class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 !transition-all dark:rotate-0 dark:scale-100"
                />
                <span class="sr-only">Toggle theme</span>
            </Button>
        </div>
    </div>
</nav>

<!-- Main Title -->

<div
    class="h-[40vh] px-8 mx-auto text-center bg-gradient-to-b from-muted to-background flex items-center justify-center"
    transition:fade={{ duration: 1100, easing: quartOut }}
>
    <div class="flex flex-col items-center pt-16">
        <h1 class="text-6xl font-bold tracking-tight">Ãleuet</h1>
        <div class="flex flex-col items-center tracking-tight">
            <p class="text-2xl">менторлық бағдарламасы</p>
        </div>
        <Button
            variant="outline"
            size="sm"
            href="https://wa.me/77762803322?text=%D0%A1%D0%B0%D0%BB%D0%B0%D0%BC%D0%B0%D1%82%D1%81%D1%8B%D0%B7%20%D0%B1%D0%B0%3F!%20%D0%9A%D1%83%D1%80%D1%81%20%D0%B6%D0%B0%D0%B9%D0%BB%D1%8B%20%D1%82%D0%BE%D0%BB%D1%8B%D2%93%D1%8B%D1%80%D0%B0%D2%9B%20%D0%B0%D2%9B%D0%BF%D0%B0%D1%80%D0%B0%D1%82%20%D0%B1%D0%B5%D1%80%D0%B5%D1%81%D1%96%D0%B7%20%D0%B1%D0%B5%3F"
            class="flex items-center px-4 py-2 mt-4 font-bold transition duration-300 ease-in-out transform hover:bg-green-400 dark:hover:bg-green-500"
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
            Орынды брондау
        </Button>
    </div>
</div>

<!-- Countdown -->
<div class="max-w-4xl px-8 pb-8 mx-auto center-grid">
    <h1
        class="flex flex-col items-center w-full text-2xl tracking-tight text-center scroll-m-20"
    >
        Курсқа жазылу үшін 1 қыркүйекке дейін небәрі
    </h1>
    <Separator class="m-4" />
    <div class="flex space-x-4">
        <div class="text-center">
            <span class="block text-6xl">{days}</span>
            <span class="block">күн</span>
        </div>
        <div class="text-center">
            <span class="block text-6xl">{hours}</span>
            <span class="block">сағат</span>
        </div>
        <div class="text-center">
            <span class="block text-6xl">{minutes}</span>
            <span class="block">минут</span>
        </div>
    </div>
    <Separator class="m-4" />
    <p
        class="flex flex-col items-center w-full text-2xl tracking-tight text-balance"
    >
        қалды!
    </p>
</div>

<div class="max-w-4xl p-4 mx-auto center-grid">
    <h1
        class="flex flex-col w-full text-4xl font-extrabold tracking-tight scroll-m-20 text-balance"
    >
        Ãleuet
    </h1>
    <Separator class="m-4" />
    <p class="flex-col gap-4 text-balance">
        — халықаралық байқаулар мен олимпиадалар жеңімпаздары, стартап авторлары
        құрастырған 7–9 сынып оқушыларына арналған бірегей <span
            style="text-decoration: underline;"
        >
            9 айлық
        </span>
        менторлық бағдарлама. Біз әрбір оқушы мектепте оқып жүріп-ақ мықты портфолио
        жинап, әлемнің үздік университеттеріне түсе алады деп сенеміз.
    </p>
</div>

<!-- Mentors and Speakers -->

<div class="max-w-4xl p-4 mx-auto center-grid">
    <h1
        class="flex flex-col w-full text-4xl font-extrabold tracking-tight scroll-m-20 text-balance"
    >
        Бағдарлама менторлары мен спикерлері
    </h1>

    <Separator class="my-4" />

    <div class="flex flex-col gap-4 pb-4 text-balance">
        <p>
            Біздегі әр ментор — Республикалық, Халықаралық байқаулар мен
            олимпиадалардың жүлдегерлері, мықты бағдарламалардың қатысушылары
            және белсенді, тәжірибелі оқушы.
        </p>
        <p>
            Біз сіз енді бастап жатқан жолдан өттік және сізге әдетте орын
            алатын қателіктерді болдырмауға көмектесеміз!
        </p>
    </div>

    <Carousel.Root
        setApi={(emblaApi: EmblaCarouselType | undefined) => {
            api = emblaApi ?? null;
        }}
        class="w-full"
    >
        <Carousel.Content class="-ml-4">
            {#each mentors as mentor, i (i)}
                <Carousel.Item class="pl-4 basis-full md:basis-1/3">
                    <Dialog.Root>
                        <Dialog.Trigger class="w-full">
                            <Card.Root
                                class="p-0 overflow-hidden cursor-pointer"
                            >
                                <Card.Content
                                    class="p-0 w-full h-[32rem] sm:h-[20rem] md:h-[24rem] relative overflow-hidden"
                                >
                                    <enhanced:img
                                        src={mentor.image}
                                        alt={mentor.name}
                                        class="w-full h-full object-cover absolute top-0 left-0 transition hover:scale-105 duration-300 ease-in-out"
                                        loading="lazy"
                                    />
                                    <div
                                        class="absolute bottom-0 left-0 w-full text-white p-4 text-left"
                                    >
                                        <div
                                            class="absolute inset-0 bg-gradient-to-t from-black to-transparent"
                                        ></div>
                                        <a
                                            class="relative flex items-center gap-2 font-bold z-10 pb-2"
                                            href="https://instagram.com/{mentor.username}"
                                            onclick={(e) => e.stopPropagation()}
                                        >
                                            <Avatar.Root
                                                class="h-6 w-6 text-foreground"
                                            >
                                                <!-- <Avatar.Image
                                                    src={mentor.image}
                                                    alt={mentor.name}
                                                />
                                                
                                                <Avatar.Fallback>
                                                    {mentor.name
                                                        .split(" ")
                                                        .map((n) => n[0])
                                                        .join("")}
                                                </Avatar.Fallback> -->

                                                <enhanced:img
                                                    src={mentor.pfp}
                                                    alt={mentor.name}
                                                    class="w-full h-full object-cover absolute top-0 left-0"
                                                    loading="lazy"
                                                />
                                            </Avatar.Root>
                                            <p class="hover:underline">
                                                {mentor.name}
                                            </p>
                                        </a>
                                        <div
                                            class="flex w-full flex-wrap gap-2 relative pb-2"
                                        >
                                            <Badge variant="secondary">
                                                {mentor.badge}
                                            </Badge>
                                            <Badge variant="secondary">
                                                {mentor.secondary}
                                            </Badge>
                                            <Badge variant="secondary">
                                                GPA {mentor.gpa}
                                            </Badge>
                                        </div>
                                        <p
                                            class="relative font-regular text-left line-clamp-4"
                                        >
                                            {mentor.about}
                                        </p>
                                    </div>
                                </Card.Content>
                            </Card.Root>
                        </Dialog.Trigger>

                        <Dialog.Content
                            class="max-h-[90vh] overflow-y-auto p-4 box-border !max-w-5xl"
                        >
                            <div class="flex flex-col sm:flex-row gap-4">
                                <!-- Left Column: Mentor Info and Image -->
                                <div class="w-full sm:w-2/5 flex flex-col">
                                    <Dialog.Header class="mb-4">
                                        <Dialog.Title>
                                            <p class="text-4xl text-left">
                                                {mentor.name}
                                            </p>
                                        </Dialog.Title>
                                        <div
                                            class="flex w-full flex-wrap gap-2 relative"
                                        >
                                            <Badge variant="default">
                                                {mentor.badge}
                                            </Badge>
                                            <Badge variant="secondary">
                                                {mentor.secondary}
                                            </Badge>
                                            <Badge variant="secondary">
                                                GPA {mentor.gpa}
                                            </Badge>
                                        </div>
                                        <!-- <Dialog.Description
                                        ></Dialog.Description> -->
                                    </Dialog.Header>
                                    <div
                                        class="relative rounded-2xl overflow-hidden min-h-[50vh]"
                                    >
                                        <enhanced:img
                                            src={mentor.image}
                                            alt={mentor.name}
                                            class="w-full h-full object-cover absolute inset-0"
                                            loading="lazy"
                                        />
                                        <div
                                            class="absolute bottom-0 left-0 w-full p-4 text-white font-regular text-2xl text-left"
                                        >
                                            <!-- <div
                                                class="absolute inset-0 bg-gradient-to-t from-black to-transparent"
                                            ></div> -->
                                            <!-- <p
                                                class="relative font-regular text-left"
                                            >
                                                {mentor.description}
                                            </p> -->
                                        </div>
                                    </div>
                                </div>

                                <Separator
                                    orientation="vertical"
                                    class="hidden sm:block"
                                />
                                <Separator
                                    orientation="horizontal"
                                    class="sm:hidden"
                                />
                                <div class="w-full sm:w-3/5 flex flex-col">
                                    <h2 class="text-2xl font-regular mb-4">
                                        Мен туралы
                                    </h2>
                                    <div
                                        class="flex-1 overflow-y-auto pr-2 box-border sm:max-h-[52.5vh] flex flex-col gap-4 text-left"
                                    >
                                        <p class="whitespace-pre-wrap">
                                            {mentor.about
                                                ? mentor.about
                                                : "Бұл ментор туралы ақпарат жоқ."}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Dialog.Content>
                    </Dialog.Root>
                </Carousel.Item>
            {/each}
        </Carousel.Content>

        <Carousel.Previous
            class="hidden sm:flex sm:items-center sm:justify-center sm:-left-12 sm:top-1/2 sm:-translate-y-1/2"
        />
        <Carousel.Next
            class="hidden sm:flex sm:items-center sm:justify-center sm:-right-12 sm:top-1/2 sm:-translate-y-1/2"
        />
        <div class="pb-2"></div>
    </Carousel.Root>

    <Pagination.Root
        count={mentors.length}
        perPage={1}
        page={currentIndex + 1}
        onPageChange={(newPage) => {
            // Check if we're on mobile (single card view) or desktop (3 cards view)
            const isMobile = window.innerWidth < 768; // md breakpoint

            if (isMobile) {
                // On mobile: each page shows exactly one card
                currentIndex = newPage - 1;
            } else {
                // On desktop: handle the 3-card view logic
                if (newPage >= mentors.length - 2) {
                    // Pages 6, 7, 8 should all show the last group of cards
                    currentIndex = Math.max(0, mentors.length - 3);
                } else {
                    currentIndex = newPage - 1;
                }
            }
        }}
    >
        {#snippet children({ pages, currentPage })}
            <Pagination.Content>
                <Pagination.Item></Pagination.Item>
                {#each pages as page (page.key)}
                    {#if page.type === "ellipsis"}
                        <Pagination.Item>
                            <Pagination.Ellipsis />
                        </Pagination.Item>
                    {:else}
                        <Pagination.Item>
                            <Pagination.Link
                                {page}
                                isActive={currentPage === page.value}
                            >
                                {page.value}
                            </Pagination.Link>
                        </Pagination.Item>
                    {/if}
                {/each}
                <Pagination.Item></Pagination.Item>
            </Pagination.Content>
        {/snippet}
    </Pagination.Root>
</div>

<!-- Program Areas -->

<div class="max-w-4xl p-4 mx-auto center-grid">
    <h1
        class="flex flex-col w-full text-4xl font-extrabold tracking-tight scroll-m-20 text-balance"
    >
        Бағдарлама бағыттары
    </h1>
    <Separator class="m-4" />
    <p class="flex-col gap-4 pb-4 text-balance">
        Әр оқушы 1 немесе 2 бағыттан таңдай алады. Біз әр бағыт бойынша талантты
        ашып, жобалар мен байқауларда тәжірибе жинауға және жаңа деңгейге
        көтерілуге көмектесеміз.
    </p>
    <div class="grid gap-4 md:grid-cols-3">
        {#each cardData as card}
            <HoverCard.Root>
                <HoverCard.Trigger
                    href={card.link}
                    target="_blank"
                    rel="noreferrer noopener"
                    class="rounded-sm underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-black h-full"
                >
                    <Card.Root class="h-full flex flex-col">
                        <Card.Header>
                            <Card.Title>{card.title}</Card.Title>
                        </Card.Header>
                        <Card.Content>
                            <p class="text-balance">
                                {card.description}
                            </p>
                        </Card.Content>
                    </Card.Root>
                </HoverCard.Trigger>
                <HoverCard.Content class="">
                    <div class="flex justify-between space-x-4">
                        <Avatar.Root class="">
                            <Avatar.Image
                                src="https://github.com/wikipedia.png"
                            />
                            <Avatar.Fallback></Avatar.Fallback>
                        </Avatar.Root>
                        <div class="flex justify-between space-x-4">
                            <div class="space-y-1">
                                <h4 class="text-sm font-semibold">
                                    {card.username}
                                </h4>
                                <!-- <p class="text-sm">{card.bio}</p> -->
                                <div class="flex items-center">
                                    <span
                                        class="text-muted-foreground text-xs wrap-anywhere"
                                    >
                                        {card.link}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </HoverCard.Content>
            </HoverCard.Root>
        {/each}
    </div>
</div>

<!-- What skills will we learn? -->

<div class="max-w-4xl p-4 mx-auto center-grid">
    <h1
        class="flex flex-col w-full text-4xl font-extrabold tracking-tight scroll-m-20 text-balance"
    >
        Біз нені үйретеміз?
    </h1>
    <Separator class="m-4" />

    <div class="grid gap-4 md:grid-cols-2 w-full">
        {#each skillsData as skill}
            <HoverCard.Root>
                <HoverCard.Trigger
                    href={skill.link}
                    target="_blank"
                    rel="noreferrer noopener"
                    class="rounded-sm underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-black h-full"
                >
                    <Card.Root class="h-full flex flex-col">
                        <Card.Header>
                            <Card.Title
                                class="flex flex-col items-center justify-between text-4xl font-medium"
                            >
                                {skill.title}
                            </Card.Title>
                        </Card.Header>
                        <Card.Content>
                            <p class="text-balance">
                                {#each skill.items as item, index}
                                    - {item}
                                    {#if index < skill.items.length - 1}<br
                                        />{/if}
                                {/each}
                            </p>
                        </Card.Content>
                    </Card.Root>
                </HoverCard.Trigger>
                <HoverCard.Content class="">
                    <div class="flex justify-between space-x-4">
                        <div class="flex justify-between space-x-4">
                            <Avatar.Root class="">
                                <Avatar.Image
                                    src="https://github.com/wikipedia.png"
                                />
                                <Avatar.Fallback></Avatar.Fallback>
                            </Avatar.Root>
                            <div class="flex justify-between space-x-4">
                                <div class="space-y-1">
                                    <h4 class="text-sm font-semibold">
                                        {skill.username}
                                    </h4>
                                    <!-- <p class="text-sm">{skill.bio}</p> -->
                                    <div class="flex items-center">
                                        <span
                                            class="text-muted-foreground text-xs wrap-anywhere"
                                        >
                                            {skill.link}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </HoverCard.Content>
            </HoverCard.Root>
        {/each}
    </div>
</div>

<!-- What results will you get? -->
<div class="max-w-4xl mx-auto p-4 text-left">
    <h1
        class="text-4xl font-extrabold tracking-tight scroll-m-20 text-balance mb-6"
    >
        Бағдарлама нәтижесінде қатысушы не алады
    </h1>
    <Separator class="my-4" />
    <ul class="grid gap-3 leading-relaxed list-none">
        {#each resultsData as result}
            <li class="flex items-start gap-2">
                <span class="">→</span>
                <span>{result}</span>
            </li>
        {/each}
    </ul>
</div>
<!-- Pricing -->
<div class="max-w-4xl mx-auto p-4 text-left">
    <h1
        class="text-4xl font-extrabold tracking-tight scroll-m-20 text-balance mb-6"
    >
        Бағдарлама құны мен шарттары
    </h1>
    <Separator class="my-4" />

    <div class="grid gap-4 leading-relaxed">
        <div class="flex items-center gap-2">
            <span class="font-bold">Толық курс:</span>
            <span>9 ай × 40,000 теңге = 360,000 теңге</span>
            <span class="text-sm text-muted-foreground">
                (ай сайын бөлеп төлеу мүмкіндігі)
            </span>
        </div>
        <div class="flex items-center gap-2">
            <span class="font-bold">Жеңілдік:</span>
            <span>3 ай бірден төлегенде 10% жеңілдік</span>
            <span class="text-sm text-muted-foreground">
                (360,000 × 0.9 = 324,000 теңге)
            </span>
        </div>
    </div>
</div>

<!-- Frequently Asked Questions -->

<div class="max-w-4xl p-4 mx-auto center-grid">
    <h1
        class="flex flex-col w-full gap-4 mb-4 text-4xl font-extrabold tracking-tight scroll-m-20 text-balance"
    >
        Жиі қойылатын сұрақтар
    </h1>
    <Separator />
    <Accordion.Root type="single" class="w-full" value="item-1">
        <Accordion.Item value="item-1">
            <Accordion.Trigger class="text-2xl font-regular">
                Бұл үйірме ме?
            </Accordion.Trigger>
            <Accordion.Content class="flex flex-col gap-4 text-balance">
                <p>Жоқ.</p>
                <p>
                    <strong>Ãleuet</strong>
                    – бұл жай ғана үйірме емес, бұл саған болашағың үшін нақты жобалар,
                    жетістіктер мен тәжірибе беретін даму жүйесі. Мұнда сен жай ғана
                    "қатысып қоймайсың", өз портфолиоңды құрып, нақты нәтижені көресің.
                </p>
            </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-2">
            <Accordion.Trigger class="text-2xl font-regular">
                Кімдер қатыса алады?
            </Accordion.Trigger>
            <Accordion.Content class="flex flex-col gap-4 text-balance">
                <p>
                    Жобаға келесі талаптарға сай келетін барлық 7-9 сынып
                    оқушылары қатыса алады:
                </p>
                <p>
                    - сабақтан тыс уақытта өзін дамытқысы келетіндер
                    <br />
                    - жаңа нәрсені байқап көруден қорықпайтындар
                    <br />
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
            <Accordion.Trigger class="text-2xl font-regular">
                Ұзақтығы қанша?
            </Accordion.Trigger>
            <Accordion.Content class="flex flex-col gap-4 text-balance">
                <p>
                    Бағдарлама қыркүйектен мамыр айына дейін, яғни <strong>
                        9 айға
                    </strong>
                    созылады. Бұл – толыққанды оқу жылы сияқты, бірақ мұнда бағаға
                    емес, дағдыларға, жетістіктерге және портфолиоға баса назар аударылады.
                </p>
            </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-4">
            <Accordion.Trigger class="text-2xl font-regular">
                Неше бағыт таңдауға болады?
            </Accordion.Trigger>
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
            <Accordion.Trigger class="text-2xl font-regular">
                Қай бағыт маған сәйкес келетінін қалай түсінуге болады?
            </Accordion.Trigger>
            <Accordion.Content class="flex flex-col gap-4 text-balance">
                <p>
                    Біз саған таңдау жасауға көмектесеміз! <br />
                    Бағдарламаның басында сен mini-тест пен воркшоптан өтесің, соның
                    нәтижесінде:
                </p>
                <p>
                    - өзіңнің мықты тұстарыңды.
                    <br />
                    - саған шынымен не қызық екенін.
                    <br />
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
            <Accordion.Trigger class="text-2xl font-regular">
                Менторлар деген кімдер?
            </Accordion.Trigger>
            <Accordion.Content class="flex flex-col gap-4 text-balance">
                <p>
                    Менторлар – бұл 12-сынып оқушылары, олардың тәжірибесі мол:
                </p>
                <p>
                    - олимпиадаларда, хакатондарда және ғылыми жобалар
                    байқауларында жеңіске жеткен.
                    <br />
                    - тағылымдамадан өтіп, өз бағытын A-дан Я-ға дейін зерттеген.
                    <br />
                    - стартаптар мен медиа жобалар құрып, код жазған.
                </p>
                <p>
                    Олар арнайы іріктеуден, оқытудан өтіп, оқу жылы бойы саған
                    қолдау көрсетуге дайын!
                </p>
            </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-7">
            <Accordion.Trigger class="text-2xl font-regular">
                Нәтижесінде мен не аламын?
            </Accordion.Trigger>
            <Accordion.Content class="flex flex-col gap-4 text-balance">
                <p>Бағдарлама соңында сен:</p>
                <p>
                    - өз бағытың бойынша құнды білім аласың,
                    <br />
                    - шағын портфолио жасайсың (бағытқа байланысты: мақала, сайт,
                    жоба, сұхбат және т.б.),
                    <br />
                    - ментордан пікір (отзыв) аласың,
                    <br />
                    - болашағыңды қалай құру керектігін және өз күшіңнің неде екенін
                    түсінесің,
                    <br />
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
            <Accordion.Trigger class="text-2xl font-regular">
                Бұл шетелде оқуға түсуге көмектесе ме?
            </Accordion.Trigger>
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
            <Accordion.Trigger class="text-2xl font-regular">
                Сабақтармен және басқа үйірмелермен қатар алып жүруге бола ма?
            </Accordion.Trigger>
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
            <Accordion.Trigger class="text-2xl font-regular">
                Егер мен Ақтауда/Қазақстанда тұрмасам, қатыса аламын ба?
            </Accordion.Trigger>
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

<footer class="px-4 py-4 bg-gradient-to-b from-background to-card">
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
