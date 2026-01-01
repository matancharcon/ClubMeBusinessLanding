import "./App.css";
const SCREENS = {
  home: "https://res.cloudinary.com/dh0tlhtib/image/upload/v1766762196/Screen_1_6_l6ioe9.jpg",
  business: "https://res.cloudinary.com/dh0tlhtib/image/upload/v1766762196/Screen_2_3_yhygsr.jpg",
  redeem: "https://res.cloudinary.com/dh0tlhtib/image/upload/v1766762197/Screen_4_3_etnccr.jpg",
};
import { useState } from "react";
export default function App() {
  const [submitted, setSubmitted] = useState(false);
  const [activeImage, setActiveImage] = useState(null);
  return (
    <div className="page">

      {/* HERO */}
      <section className="hero">
        <h1>
          יותר לקוחות חוזרים<br />
          בלי כאב ראש
        </h1>

        <p className="hero-sub">
          ClubMe מחזירה לקוחות לעסק שלך —<br />
          בלי כרטיסיות, בלי מערכות מסובכות, ובלי התעסקות יומיומית
        </p>

        <a href="#screens" className="cta-button">
          תראה איך זה נראה בפועל
        </a>
      </section>

      {/* PROBLEM */}
      <section className="section light">
        <h2>המצב היום בעסקים</h2>
        <p>
          לקוחות באים פעם אחת — ונעלמים.<br />
          גם כשיש מועדון לקוחות, רובם שוכחים שהוא קיים.<br />
          ובסוף? אתה משקיע — וההטבות לא מחזירות לקוחות.
        </p>
      </section>

      {/* SOLUTION */}
      <section className="section">
        <h2>איך clubMe פותרת את זה</h2>
        <p className="solution-text">
          clubMe מרכזת ללקוח את כל מועדוני הלקוחות שלו באפליקציה אחת. <br />
          הלקוח תמיד רואה את ההטבות שלך ואתה רואה יותר חזרות לעסק.
        </p>

        <p className="highlight">
          אתה רק מגדיר הטבות —<br />
          האפליקציה עושה את השאר.
        </p>
      </section>

      {/* SCREENS */}
      <section className="section light" id="screens">
        <h2>איך זה נראה בפועל</h2>
        <div className="screen-card join-card">
          <h3>סריקת QR והצטרפות</h3>

          <div className="join-visual">
            <span className="join-icon">📲</span>
            <span className="join-arrow">➜</span>
            <span className="join-icon">🏪</span>
          </div>

          <p>
            הלקוח סורק קוד QR בעסק שלך.<br />
            העסק מתווסף לרשימת מועדוני הלקוחות שלו —<br />
            ומופיע אצלו במסך הבית בכל כניסה לאפליקציה.
          </p>
        </div>

        <div className="screens-grid">
          <div className="screen-card">
            <h3>מסך הבית ללקוח</h3>
            <div className="screen-media">
              <img
                src={SCREENS.home}
                alt="מסך הבית ללקוח"
                className="screen-image clickable"
                onClick={() => setActiveImage(SCREENS.home)}
              />
            </div>
            <p>
              הלקוח רואה את כל מועדוני הלקוחות שלו במקום אחד.
              זה מזכיר לו לחזור אליך
            </p>
          </div>

          <div className="screen-card">
            <h3>עמוד העסק</h3>
            <div className="screen-media">
             <img
                src={SCREENS.business}
                alt="מסך העסק ללקוח"
                className="screen-image clickable"
                onClick={() => setActiveImage(SCREENS.business)}
              />
              </div>
            <p>
              מציג הטבות, צבירה ופרסים בצורה ברורה.<br />
              בלי בלבול, בלי שאלות.
            </p>
          </div>

          <div className="screen-card">
            <h3>מימוש הטבות</h3>
            <div className="screen-media">
             <img
                src={SCREENS.redeem}
                alt="מסך מימוש הטבה"
                className="screen-image clickable"
                onClick={() => setActiveImage(SCREENS.redeem)}
              />
              </div>
            <p>
              קוד מימוש מהיר בקופה.<br />
              לחיצה אחת — וההטבה מומשה.
            </p>
          </div>

          <div className="screen-card">
            <div className="screen-placeholder">📊</div>
            <h3>סטטיסטיקות</h3>
            <p>
              רואה כמה לקוחות נרשמו,<br />
              ואיזה הטבות באמת עובדות.
            </p>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="section">
        <h2>למה עסקים מצטרפים עכשיו</h2>

        <ul className="benefits">
          <li>✔ שימוש חינמי בתקופת ההשקה</li>
          <li>✔ קדימות בחשיפה ללקוחות באזור</li>
          <li>✔ יתרון מול עסקים מתחרים</li>
          <li>✔ השפעה על הפיתוח והפיצ’רים</li>
        </ul>
      </section>

      {/* FORM */}
      <section className="section light">
      <h2>רוצה לבדוק אם זה מתאים לעסק שלך?</h2>
    {submitted ? (
      <p className="form-sub success">
        תודה! 🙌<br />
        קיבלנו את הפרטים ונחזור אליך בהקדם.
      </p>
    ) : (
      <form
        className="lead-form"
        onSubmit={async (e) => {
          e.preventDefault();
          const formData = new FormData(e.target);

          await fetch("https://formspree.io/f/xbdjgzkk", {
            method: "POST",
            body: formData,
            headers: { Accept: "application/json" },
          });

          setSubmitted(true);
        }}
      >
        <input name="businessName" placeholder="שם העסק" required />
        <input name="fullName" placeholder="שם מלא" required />
        <input name="phone" placeholder="טלפון" required />
        <button type="submit">דבר איתי</button>
      </form>
    )}

    </section>

      {/* FOOTER */}
      <footer className="footer">
        clubMe © {new Date().getFullYear()}
      </footer>

      {activeImage && (
        <div
          className="image-overlay"
          onClick={() => setActiveImage(null)}
        >
          <img src={activeImage} alt="תצוגה מוגדלת" />
        </div>
      )}
    </div>
  );
}
