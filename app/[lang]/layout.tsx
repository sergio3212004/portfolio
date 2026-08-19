import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import { cookies } from "next/headers";
import "../globals.css";
import { getDictionary, hasLocale } from "./dictionaries";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { notFound } from "next/navigation";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sergio Martínez | Software & Web Developer",
  description:
    "Personal portfolio of Sergio Martínez — Web & Software Developer crafting high-caliber applications.",
};

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "es" }];
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);

  const cookieStore = await cookies();
  const theme = cookieStore.get("theme")?.value;
  const isDark = theme === "dark";

  const navItems = [
    { label: dict.nav.home, href: "#home" },
    { label: dict.nav.about, href: "#about" },
    { label: dict.nav.skills, href: "#skills" },
    { label: dict.nav.projects, href: "#projects" },
    { label: dict.nav.experience, href: "#experience" },
    { label: dict.nav.contact, href: "#contact" },
  ];

  return (
    <html
      lang={lang}
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable}${isDark ? " dark" : ""}`}
    >
      <head>
        <Script
          id="theme-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  var shouldBeDark = saved === 'dark' || (!saved && prefersDark);
                  if (shouldBeDark) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                  if (saved && !document.cookie.includes('theme=')) {
                    document.cookie = 'theme=' + saved + '; path=/; max-age=31536000';
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col bg-background text-foreground selection:bg-vc-500 selection:text-dsg-950">
        <Navbar
          brand={dict.nav.brand}
          greeting={dict.nav.greeting}
          items={navItems}
          lang={lang}
          downloadCvText={dict.nav.downloadCv}
          themeLabels={{
            light: dict.theme.light,
            dark: dict.theme.dark,
          }}
          languageLabels={{
            en: dict.language.en,
            es: dict.language.es,
            toggle: dict.language.toggle,
          }}
        />
        <main className="flex-1">{children}</main>
        <Footer
          brand={dict.nav.brand}
          items={navItems}
          rightsText={dict.footer.rights}
          tagline={dict.footer.tagline}
          lang={lang}
        />
      </body>
    </html>
  );
}
