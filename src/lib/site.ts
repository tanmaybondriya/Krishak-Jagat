// Site-wide configuration. Values come from the live krishakjagat.org header and footer;
// do not add contact details, policies, or social accounts that are not published there.

export const WORDPRESS_ORIGIN =
  process.env.WORDPRESS_ORIGIN ?? "https://www.krishakjagat.org";

export const site = {
  name: "कृषक जगत",
  nameEn: "Krishak Jagat",
  tagline: "राष्ट्रीय कृषि अखबार",
  description:
    "कृषक जगत देता है कृषि, खेती और किसानों से जुड़े ताज़ा समाचार, सरकारी योजनाओं और लेटेस्ट मंडी रेट की जानकारी, फसलों में कीट और रोग प्रबंधन की जानकारी एवं नई बीज किस्में, कीटनाशक, ट्रैक्टर, उर्वरक जैसे नए उत्पादों के बारे में जानकारी।",
  url: WORDPRESS_ORIGIN,
  searchAction: `${WORDPRESS_ORIGIN}/`,
  englishEdition: "https://www.global-agriculture.com/",
};

export type NavLink = { label: string; href: string };

export const primaryNav: NavLink[] = [
  { label: "ई-पेपर", href: `${WORDPRESS_ORIGIN}/kj_epaper/` },
  {
    label: "इवेंट्स",
    href: "https://www.global-agriculture.com/list-of-agriculture-related-events-happening-across-the-world/",
  },
  { label: "सदस्यता", href: `${WORDPRESS_ORIGIN}/subscribe-2/` },
  { label: "विज्ञापन", href: `${WORDPRESS_ORIGIN}/advertisement-on-krishak-jagat-website/` },
  { label: "हमारे बारे में", href: `${WORDPRESS_ORIGIN}/about-us/` },
  { label: "संपर्क", href: `${WORDPRESS_ORIGIN}/contact-us-2/` },
];

export const subscribeLinks: NavLink[] = [
  { label: "न्यूज़लेटर", href: `${WORDPRESS_ORIGIN}/subscribe/` },
  {
    label: "प्रिंट संस्करण की सदस्यता",
    href: `${WORDPRESS_ORIGIN}/krishak-jagat-subscription/index.php`,
  },
  { label: "कृषक जगत डायरी 2026", href: `${WORDPRESS_ORIGIN}/krishak-jagat-diary-2026/` },
];

export const aboutLinks: NavLink[] = [
  { label: "About Krishak Jagat", href: `${WORDPRESS_ORIGIN}/about-krishak-jagat/` },
  { label: "Awards & Recognition", href: `${WORDPRESS_ORIGIN}/awards-recognitions/` },
  { label: "Agriculture in India", href: `${WORDPRESS_ORIGIN}/agriculture-in-india/` },
  { label: "Advertise: Print Edition", href: `${WORDPRESS_ORIGIN}/krishak-jagat-print-edition-advertisement/` },
  { label: "Advertise: Farmer Diary", href: `${WORDPRESS_ORIGIN}/krishak-jagat-farmer-diary-advertisement/` },
  { label: "Privacy Policy", href: `${WORDPRESS_ORIGIN}/privacy-policy/` },
];

export const socialLinks: NavLink[] = [
  { label: "Facebook", href: "https://www.facebook.com/krishakjagatindia" },
  { label: "X", href: "https://x.com/krishakjagat" },
  { label: "Instagram", href: "https://www.instagram.com/krishak_jagat/" },
  { label: "YouTube", href: "https://www.youtube.com/c/krishakjagatindia" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/krishak-jagat" },
];

export const contact = {
  address: ["14 Press Complex, M.P. Nagar, Zone-1", "Bhopal 462011, Madhya Pradesh, India"],
  phone: "(0755) 4248100",
  phoneHref: "tel:+917554248100",
  helpline: "6262166222",
  helplineHref: "tel:+916262166222",
  email: "info@krishakjagat.org",
};
