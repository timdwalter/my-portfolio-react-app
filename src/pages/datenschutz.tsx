import LegalPage from "@/components/LegalPage";
import { site } from "@/content/site";

// Hinweis: Basis-Vorlage für eine Website ohne Cookies, Tracking oder Formulare.
// Bei neuen Diensten (Analytics, Kontaktformular, Einbettungen) muss sie ergänzt werden.
export default function DatenschutzPage() {
  return (
    <LegalPage title="Datenschutzerklärung">
      <h2>1. Verantwortlicher</h2>
      <p>
        {site.fullName}
        <br />
        E-Mail: <a href={`mailto:${site.email}`}>{site.email}</a>
      </p>

      <h2>2. Hosting</h2>
      <p>
        Diese Website wird bei Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA gehostet. Beim Aufruf der
        Website verarbeitet Vercel technisch notwendige Daten (z. B. IP-Adresse, Datum und Uhrzeit des Zugriffs,
        aufgerufene Seite, Browser- und Betriebssysteminformationen) in Server-Logfiles, um die Website auszuliefern und
        ihre Sicherheit zu gewährleisten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an
        einem sicheren und stabilen Betrieb). Vercel ist unter dem EU-US Data Privacy Framework zertifiziert; zudem
        besteht ein Auftragsverarbeitungsvertrag.
      </p>

      <h2>3. Cookies, Tracking und Schriftarten</h2>
      <p>
        Diese Website setzt keine Cookies und verwendet keine Analyse- oder Tracking-Dienste. Schriftarten werden lokal
        vom eigenen Server ausgeliefert; es findet keine Verbindung zu Servern von Google statt.
      </p>

      <h2>4. Kontaktaufnahme per E-Mail</h2>
      <p>
        Wenn Sie mir eine E-Mail schreiben, verarbeite ich Ihre Angaben (E-Mail-Adresse, Name, Inhalt der Nachricht),
        um Ihre Anfrage zu beantworten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) bzw.
        lit. f DSGVO (berechtigtes Interesse an der Beantwortung). Die Daten werden gelöscht, sobald sie für die
        Bearbeitung nicht mehr erforderlich sind und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
      </p>

      <h2>5. Externe Links</h2>
      <p>
        Diese Website enthält Links zu LinkedIn, XING, GitHub und Medium. Erst wenn Sie einen solchen Link anklicken,
        werden Daten an den jeweiligen Anbieter übertragen. Es gelten dann dessen Datenschutzbestimmungen.
      </p>

      <h2>6. Ihre Rechte</h2>
      <p>
        Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der
        Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) und Widerspruch gegen die Verarbeitung (Art. 21 DSGVO).
        Außerdem können Sie sich bei einer Datenschutz-Aufsichtsbehörde beschweren (Art. 77 DSGVO).
      </p>

      <p className="meta mt-xl">Stand: November 2026</p>
    </LegalPage>
  );
}
