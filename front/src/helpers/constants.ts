import DashboardHome from "../pages/DashboardHome";
import DashboardVideo from "../pages/DashboardVideo";
import Landing from "../pages/Landing";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import {
  IaboutCard,
  IangelCard,
  INavList,
  IrouteList,
  ItarifCard,
  IfooterNav,
} from "../utils/interfaces";

const navList: INavList = {
  navSection01: [
    {
      key: "nav01.home",
      sectionId: "home",
    },
    {
      key: "nav01.about",
      sectionId: "about",
    },
    {
      key: "nav01.showcase",
      sectionId: "showcase",
    },
  ],
};

const routeList: IrouteList[] = [
  {
    url: "/",
    component: Landing,
  },
  {
    url: "/login",
    component: Login,
  },
  {
    url: "/signup",
    component: Signup,
  },
  {
    url: "/dashboard/home",
    component: DashboardHome,
  },
  {
    url: "/dashboard/video",
    component: DashboardVideo,
  },
];

const aboutData: IaboutCard[] = [
  {
    image: "/Flow1.json",
    text: "about.soutien.text",
    subtitle: "about.soutien.subtitle",
    col_indice: "col-4",
    id: "soutien",
  },
  {
    image: "/Flow_3.json",
    text: "about.solution.text",
    subtitle: "about.solution.subtitle",
    col_indice: "col-8",
    id: "solution",
  },
  {
    image: "/Flow3.json",
    text: "about.deliver.text",
    subtitle: "about.deliver.subtitle",
    col_indice: "col-8",
    id: "deliver",
  },
  {
    image: "/Flow2.json",
    text: "about.message.text",
    subtitle: "about.message.subtitle",
    col_indice: "col-4",
    id: "message",
  },
];

const footerNav: IfooterNav[] = [
  {
    title: "footer.navigation.text",
    links: [
      "footer.navigation.home",
      "footer.navigation.about",
      "footer.navigation.showcase",
      "footer.navigation.faq",
    ],
  },
  {
    title: "footer.team.text",
    links: [
      "footer.team.sedra",
      "footer.team.fana",
      "footer.team.ema",
      "footer.team.junot",
    ],
  },
  {
    title: "footer.legal.text",
    links: [
      "footer.legal.general",
      "footer.legal.mention",
      "footer.legal.condition",
    ],
  },
  {
    title: "footer.contact.text",
    links: [
      "footer.contact.email",
      "footer.contact.phone",
      "footer.contact.nothing",
      "footer.contact.facebook",
      "footer.contact.linkedin",
      "footer.contact.tweet",
    ],
  },
];

const tarifData: ItarifCard[] = [
  {
    price: 20,
    subtitle: "tarif.essential.subtitle",
    text: "tarif.essential.text",
    engagement: "tarif.essential.engagement",
    button: "tarif.essential.button",
  },
  {
    price: 50,
    subtitle: "tarif.pro.subtitle",
    text: "tarif.pro.text",
    engagement: "tarif.pro.engagement",
    button: "tarif.pro.button",
    id: "pro",
  },
  {
    price: 60,
    subtitle: "tarif.premium.subtitle",
    text: "tarif.premium.text",
    engagement: "tarif.premium.engagement",
    button: "tarif.premium.button",
    id: "premium",
  },
];

const angelData: IangelCard[] = [
  {
    description: "angel.angel1.description",
    image: "/angel1.webp",
    name: "Cupidon",
  },
  {
    description: "angel.angel2.description",
    image: "/angel2.webp",
    name: "Aria",
  },
  {
    description: "angel.angel3.description",
    image: "/angel3.webp",
    name: "Gabriel",
  },
  {
    description: "angel.angel4.description",
    image: "/angel4.webp",
    name: "Sariel",
  },
  {
    description: "angel.angel5.description",
    image: "/angel5.webp",
    name: "Michael",
  },
  {
    description: "angel.angel6.description",
    image: "/angel6.webp",
    name: "Lumielle",
  },
];

const dashboardnavData = [
  {
    icon_active: "/home-active.svg",
    icon: "/home.webp",
    label: "Dashboard",
    url: "/dashboard/home",
  },
  {
    icon: "/star.webp",
    icon_active: "/star-active.webp",
    label: "Messagerie",
    url: "/dashboard/video",
  },
  {
    icon: "/star.webp",
    label: "Discuter avec notre IA",
  },
  {
    icon: "/user.webp",
    label: "Liste des Anges",
  },
];

const brandsData = [
  "brand1.webp",
  "brand2.webp",
  "brand3.webp",
  "brand4.webp",
  "brand5.webp",
  "brand6.webp",
  "brand7.webp",
  "brand8.webp",
  "brand9.webp",
  "brand10.webp",
  "brand11.webp",
  "brand12.webp",
  "brand1.webp",
  "brand2.webp",
  "brand3.webp",
  "brand4.webp",
  "brand5.webp",
  "brand6.webp",
  "brand7.webp",
  "brand8.webp",
  "brand9.webp",
  "brand10.webp",
  "brand11.webp",
  "brand12.webp",
];

export {
  navList,
  routeList,
  aboutData,
  tarifData,
  angelData,
  footerNav,
  dashboardnavData,
  brandsData,
};
