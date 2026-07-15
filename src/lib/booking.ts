const BOOKING_EMAIL = "info@pensionliebl.de";
const BOOKING_SUBJECT = "Buchungsanfrage – Apartments Liebl";
const BOOKING_BODY = `Sehr geehrte Damen und Herren,

ich möchte gern folgendes Anfragen:

Anreise:
Abreise:
Anzahl Personen:
Gewünschtes Apartment/Zimmer:

Mit freundlichen Grüßen`;

export const BOOKING_URL = `mailto:${BOOKING_EMAIL}?subject=${encodeURIComponent(BOOKING_SUBJECT)}&body=${encodeURIComponent(BOOKING_BODY)}`;
