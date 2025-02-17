import styles from "./sponsors.module.css";
import Link from "next/link";

import { Orbitron, Poppins } from "next/font/google";

const techno_font = Orbitron({ weight: "400", subsets: ["latin"] });
const font = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function Sponsors() {
  return (
    <div
      className={styles.pitch + " " + styles.center_div + " " + font.className}
    >
      <main className={styles.main + " " + styles.center_div}>
        <div className={styles.support_heading + " " + techno_font.className}>
          <h2>Transcending Limits</h2>
          <h1>Defying Norms</h1>
        </div>

        <div className={styles.button_container + " " + techno_font.className}>
          <div className={styles.button_holder}>
            <Link
              className={styles.contact_us}
              href="/contact"
              target="_blank" // open in new tab
            >
              Contact Us
            </Link>
          </div>

          <div className={styles.button_holder}>
            <Link
              className={styles.contact_us}
              // TODO brochure is too large, takes time to load
              href="/IITB RT Sponsorship Brochure 2025.pdf"
              target="_blank"
            >
              View Brochure
            </Link>
          </div>
        </div>
        <div className={styles.description}>
          Our team is dedicated to elevating Indian amateur rocketry through
          groundbreaking advancements. Beyond launching rockets, our mission is
          to cultivate technical skills and promote STEM education at all
          levels. Your support will empower us to push the boundaries of
          innovation and inspire the next generation of engineers and
          scientists.
        </div>
      </main>

      <div className={styles.tables}>
        <h3>&gt; Why you should sponsor us</h3>

        <ol className={styles.reasons}>
          <li>
            <h4>CSR and Tax Exemption</h4>
            <p>
              Contributions qualify for tax rebates under the Income Tax Act for
              scientific research. This is an opportunity to support scientific
              innovation and research
            </p>
          </li>

          <li>
            <h4>Branding Avenues</h4>
            <p>
              Your brand will gain global exposure at launch events, reaching
              thousands of attendees. Your logo will be featured on our rocket,
              T-shirts, and social media (40k+ followers). You will also connect
              with talented IITB students for internships.
            </p>
          </li>

          <li>
            <h4>Soar 30000 feet high</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              commodi, voluptas, veniam assumenda officiis odio optio quae
              asperiores nisi error nihil modi quos similique quod neque
              delectus vel perspiciatis quas.
            </p>
          </li>
        </ol>

        {/* separator */}
        <br />

        <h3>&gt; How you can help us</h3>
        <ol className={styles.help}>
          <li>
            <h4>1. Financial support</h4>
            <p>
              We seek monetary contributions to cover essential expenses such as
              competition fees, materials, travel allowances, outreach,
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
              supplies for rocket manufacturing. Your contribution will directly
              aid in advancing our projects and achieving engineering
              excellence.
            </p>
          </li>

          <li>
            <h4>3. Services and collabs</h4>
            <p>
              We seek services such as shipping, accommodation, travel planning,
              and packaging. Access to your technical experts for guidance would
              greatly support our efforts. We value scientific mentorship,
              assistance in connecting with key stakeholders, securing purchase
              discounts, and collaborating on joint marketing initiatives like
              press releases and social media campaigns to maximize visibility
              and impact.
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
}
