import LegalLayout, { LegalSection } from "./LegalLayout";
import { contact } from "@types/contact";

export default function Privacy() {
  return (
    <LegalLayout
      eyebrow="Legal Desk | Privacy"
      title="Privacy Policy"
      updated="September 8, 2026"
    >
      <p>
        This website is a personal portfolio operated by Rahul Goswami. This
        policy explains what limited information is collected when you visit,
        how it is used, and the choices you have. In short: no accounts, no
        tracking profiles, no selling of data.
      </p>

      <LegalSection heading="Information I collect">
        <p>
          The site is largely static. The only personal information collected is
          what you voluntarily submit through the contact or booking forms —
          typically your name, email address, and the message you send.
        </p>
        <p>
          Basic, aggregated analytics (such as page views and general region)
          may be collected to understand traffic. This data is not used to
          identify individuals.
        </p>
      </LegalSection>

      <LegalSection heading="How I use it">
        <p>
          Form submissions are used solely to respond to your enquiry. They are
          delivered to me by email via a third-party form service (Web3Forms)
          and are not added to any marketing list.
        </p>
      </LegalSection>

      <LegalSection heading="Cookies">
        <p>
          The site uses minimal cookies or local storage — for example, to
          remember that you have already seen the intro animation, or to record
          your cookie-consent choice. You can decline non-essential cookies via
          the consent banner.
        </p>
      </LegalSection>

      <LegalSection heading="Third-party services">
        <p>
          Fonts are loaded from Google Fonts, and form submissions are processed
          by Web3Forms. These providers may process limited technical data (such
          as IP address) as part of delivering their service, under their own
          privacy policies.
        </p>
      </LegalSection>

      <LegalSection heading="Your rights">
        <p>
          You can request access to, correction of, or deletion of any personal
          information you have submitted. Just reach out and I'll take care of it.
        </p>
      </LegalSection>

      <LegalSection heading="Contact">
        <p>
          Questions about this policy? Email me at{" "}
          <a
            href={`mailto:${contact.email}`}
            className="text-stamp underline underline-offset-2 hover:text-ink transition-colors"
          >
            {contact.email}
          </a>
          .
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
