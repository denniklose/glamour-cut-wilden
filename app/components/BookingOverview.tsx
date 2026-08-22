import { bookingHref, bookingLabel, hasOnlineBooking } from "../site-data";

const bookingSteps = ["1. Wunsch und Leistungsbereich besprechen", "2. Passenden Terminweg wählen", "3. Termin gemeinsam bestätigen"];

export default function BookingOverview() {
  return <div className="booking-overview"><p className="planner-kicker">Termin anfragen</p><h3>Ihr Weg zum Termin.</h3><p>Besprechen Sie Ihren Wunsch und finden Sie den passenden nächsten Schritt – online oder direkt über den Salon.</p><ol>{bookingSteps.map((step) => <li key={step}>{step}</li>)}</ol><a className="button button-primary planner-submit" href={bookingHref}>{bookingLabel}</a><p className="form-privacy">{hasOnlineBooking ? "Der bestätigte Online-Terminlink ist hinterlegt." : "Der verbindliche Terminweg wird im finalen Kundenprofil hinterlegt."}</p></div>;
}
