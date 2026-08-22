import { appointmentHref, appointmentLabel, hasOnlineBooking, site } from "../site-data";

const bookingSteps = ["1. Wunsch und Leistungsbereich besprechen", "2. Passenden Terminweg wählen", "3. Termin gemeinsam bestätigen"];

export default function BookingOverview() {
  return <div className="booking-overview"><p className="planner-kicker">Termin anfragen</p><h3>Ihr Weg zum Termin.</h3><p>Besprechen Sie Ihren Wunsch direkt mit Glamour Cut und stimmen Sie den passenden Termin persönlich ab.</p><ol>{bookingSteps.map((step) => <li key={step}>{step}</li>)}</ol><a className="button button-primary planner-submit" href={appointmentHref}>{appointmentLabel}</a><p className="form-privacy">{hasOnlineBooking ? "Der bestätigte Online-Terminlink ist hinterlegt." : `Telefonische Terminabstimmung unter ${site.phoneDisplay}.`}</p></div>;
}
