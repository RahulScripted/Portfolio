import LegalLayout, { LegalSection } from "./LegalLayout";
import { contact } from "@types/contact";

export default function Terms() {
  return (
    <LegalLayout
      eyebrow="Legal Desk | Terms"
      title="Terms & Conditions"
      updated="September 8, 2026"
    >
      <p>
        By accessing and using this website you agree to the following terms.
        If you do not agree, please do not use the site.
      </p>

      <LegalSection heading="Use of the site">
        <p>
          This is a personal portfolio provided for informational purposes. You
          may browse and share links freely. You agree not to misuse the site,
          attempt to disrupt it, or use automated systems to abuse the forms.
        </p>
      </LegalSection>

      <LegalSection heading="Intellectual property">
        <p>
          All content on this site — including text, design, code, and images —
          is owned by Rahul Goswami unless otherwise credited. You may not
          reproduce or republish substantial portions without permission.
          Company names and logos referenced belong to their respective owners.
        </p>
      </LegalSection>

      <LegalSection heading="Submissions">
        <p>
          Information you send through the contact or booking forms should be
          accurate and your own. Submitting a form does not create any
          contractual or employment relationship — it's simply a way to start a
          conversation.
        </p>
      </LegalSection>

      <LegalSection heading="External links">
        <p>
          The site links to external resources (such as GitHub and LinkedIn). I
          am not responsible for the content or practices of those third-party
          sites.
        </p>
      </LegalSection>

      <LegalSection heading="Disclaimer">
        <p>
          The site is provided "as is" without warranties of any kind. While I
          aim to keep everything accurate and available, I don't guarantee the
          site will be error-free or uninterrupted.
        </p>
      </LegalSection>

      <LegalSection heading="Contact">
        <p>
          Questions about these terms? Email me at{" "}
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
