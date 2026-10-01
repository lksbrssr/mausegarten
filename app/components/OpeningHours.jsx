const days = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag"];

export default function OpeningHours() {
  const todayIdx = new Date().getDay() - 1; // Mon = 0
  return (
    <div className="panel">
      <h3>Öffnungszeiten</h3>
      <ul className="hours">
        {days.map((d, i) => (
          <li key={d} className={i === todayIdx ? "today" : ""}>
            <span>{d}</span>
            <span>8:00 – 15:00</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
