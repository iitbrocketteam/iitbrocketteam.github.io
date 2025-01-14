import styles from "./sponsors.module.css";
import Image from "next/image";
import Link from "next/link";

// https://fonts.google.com/?preview.text=TRANSCENDING%20LIMITS%0ADEFYING%20NORMS&preview.size=26&categoryFilters=Appearance:%2FTheme%2FTechno
// Space_Mono, Orbitron

import { Roboto_Mono, Inter, Orbitron } from "next/font/google";

const techno_font = Orbitron({ weight: "400", subsets: ["latin"] });
const roboto_mono = Roboto_Mono({ weight: "400", subsets: ["latin"] });
const inter = Inter({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function Sponsors() {
  return (
    <>
      <div
        className={
          styles.pitch + " " + styles.center_div + " " + roboto_mono.className
        }
      >
        <main className={styles.main + " " + styles.center_div}>
          {/* <Image
            className={styles.background}
            src="/agastya02.jpg"
            width={1403}
            height={2104}
            alt="Logo"
          /> */}

          {/* Support the Team! */}

          <div className={styles.support_heading + " " + techno_font.className}>
            <h2>Transcending Limits</h2>
            <h1>Defying Norms</h1>
          </div>

          <div
            className={styles.button_container + " " + techno_font.className}
          >
            <Link
              className={styles.contact_us}
              href="/contact"
              target="_blank" // open in new tab
            >
              Contact Us
            </Link>
            <Link
              className={styles.contact_us}
              // TODO brochure is too large
              // href="https://1drv.ms/b/s!AvV62ePKU4vKi5BaRrqnnAjQ2IuQGw?e=WplGkc"
              href="/brochure.pdf"
              target="_blank"
            >
              View Brochure
            </Link>
          </div>
          <div className={styles.description}>
            Our team is dedicated to elevating Indian amateur rocketry through
            groundbreaking advancements. Beyond launching rockets, our mission
            is to cultivate technical skills and promote STEM education at all
            levels. Your support will empower us to push the boundaries of
            innovation and inspire the next generation of engineers and
            scientists.
          </div>
        </main>

        <div className={styles.reasons}>
          <h3>&gt; Why you should sponsor us</h3>
          <ol>
            <li>
              <h4>1. CSR and Tax Exemption</h4>
              <p>
                Contributions to the IITB Rocket Team qualify for tax rebates
                under the relevant sections of the Income Tax Act for scientific
                research. This presents an opportunity to support scientific
                innovation and research while benefiting from tax advantages
              </p>
            </li>

            <li>
              <h4>2. Branding Avenues</h4>
              <p>
                As a sponsor, your brand will gain global exposure at the
                Spaceport America Cup, Techfest, and Tech & RnD Expo, reaching
                thousands of attendees and industry professionals. Your logo
                will be featured on our rocket, T-shirts, and banners, plus
                across our website and social media (40k+ followers). You will
                also connect with talented IIT Bombay students for internships.
              </p>
            </li>

            <li>
              <h4>3. Soar 30000 feet high</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis commodi, voluptas, veniam assumenda officiis odio optio
                quae asperiores nisi error nihil modi quos similique quod neque
                delectus vel perspiciatis quas. Recusandae ea aliquam atque
                accusantium corporis ducimus impedit vero animi obcaecati
                aspernatur, neque eum. Ipsam aut quasi hic amet perferendis.
              </p>
            </li>
          </ol>

          {/* separator */}
          <br />

          <h3>&gt; How you can help us</h3>
          <ol>
            <li>
              <h4>1. Financial support</h4>
              <p>
                We seek monetary contributions to cover essential expenses such
                as competition fees, materials, travel allowances, outreach,
                publicity, and event costs. Your support will help us manage
                operational expenses and focus on innovation and success
              </p>
            </li>

            <li>
              <h4>2. Value in Kind</h4>
              <p>
                The IIT Rocket Team designs and builds high-quality engineering
                prototypes. We invite in-kind sponsorships to support our work,
                including the provision of mechanical and electrical components,
                specialized materials, tools, machinery, and other essential
                supplies for rocket manufacturing. Your contribution will
                directly aid in advancing our projects and achieving engineering
                excellence.
              </p>
            </li>

            <li>
              <h4>3. Services and collabs</h4>
              <p>
                We seek services such as shipping, accommodation, travel
                planning, and packaging. Access to your technical experts for
                guidance would greatly support our efforts. We value scientific
                mentorship, assistance in connecting with key stakeholders,
                securing purchase discounts, and collaborating on joint
                marketing initiatives like press releases and social media
                campaigns to maximize visibility and impact.
              </p>
            </li>
          </ol>
        </div>
      </div>

      <div
        className={
          styles.thanks + " " + styles.center_div + " " + inter.className
        }
      >
        <div className={styles.thanks_msg + " " + styles.center_div}>
          <h2>Thanks to our Sponsors!</h2>
        </div>
        <div
          className={
            styles.tier + " " + styles.platinum + " " + styles.center_div
          }
        >
          <h3 className={styles.platinum}>Platinum</h3>

          <div className={styles.logos}>
            <Image
              className={styles.sponsor_logo}
              src="/nextjs-testing/ansys-logo.png"
              width={577}
              height={189}
              alt="Logo"
            />

            <Image
              className={styles.sponsor_logo}
              src="/nextjs-testing/ansys-logo.png"
              width={577}
              height={189}
              alt="Logo"
            />

            <Image
              className={styles.sponsor_logo}
              src="/nextjs-testing/ansys-logo.png"
              width={577}
              height={189}
              alt="Logo"
            />
          </div>
        </div>
        <div className={styles.tier + " " + styles.center_div}>
          <h3 className={styles.gold}>Gold</h3>
        </div>
        <div className={styles.tier + " " + styles.center_div}>
          <h3 className={styles.silver}>Silver</h3>
        </div>
      </div>
    </>
  );
}
