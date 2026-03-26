import { useEffect, useMemo, useState } from "react";
import "./App.css";

const SITE_PASSWORD = "fatma";

function TypingText({ text, speed = 35, className = "" }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let index = 0;
    setDisplayed("");

    const interval = setInterval(() => {
      index += 1;
      setDisplayed(text.slice(0, index));
      if (index >= text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <p className={className}>{displayed}</p>;
}

export default function App() {
  const [enteredPassword, setEnteredPassword] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [error, setError] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [showLoader, setShowLoader] = useState(true);
  const [counter, setCounter] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const content = useMemo(
    () => ({
      heroName: "فاطمة",
      heroSub: "Birthday Queen 👑🎂",
      heroText:
        "كل سنة وانتي أجمل بنت في الدنيا، وألطف قلب، وأحلى نعمة ربنا رزقني بيها. وجودك في حياتي مخلّي كل حاجة أحلى بكتير ❤️",
      cuteText: "H.B.D لأحلى واحدة تمت الـ 24 🥹😘🫶🏻",
      birthdayTitle: "عيد ميلاد أجمل فاطمة في الدنيا 🎉",
      birthdayDate: "2002-03-26",
      timerTitle: "عدّاد من يوم ميلاد الملكة 👑",
      timerText:
        "كل ثانية في اليوم ده مميزة عشان هو يوم ميلاد أحلى وأغلى واحدة في قلبي ❤️",
      longMessage:
        "حبيبة قلبي وعمر أيامي، انتي أحلى حاجة حصلتلي في حياتي. ربنا رزقني بأحلى بنت في الدنيا، مالية عليا حياتي ودنيتي، وضحكتك لوحدها بتخلّي اليوم عيد. كل سنة وانتي طيبة يا بطتي يا روح قلبي، وربنا يخليكي ليا يا رب وما يحرمنيش منك أبدًا يا ملكتي الجميلة 👑❤️",
      extraMessage:
        "النهارده مش مجرد يوم عادي، النهارده اليوم اللي الدنيا نورت فيه أكتر، عشان اتولدت فيه أجمل وأحن وأطّيب واحدة. يا رب أشوفك دايمًا مبسوطة، ناجحة، وضحكتك ما تفارقش وشك أبدًا 🎂💖",
      footerText: "بحبك يا فاطمة ❤️🎂",
    }),
    []
  );

  const memoryCards = useMemo(
    () => [
      ...Array.from({ length: 30 }, (_, index) => ({
        id: index + 1,
        title: `الذكرى ${index + 1}`,
        image: `/${index + 1}.jpg`,
        date: "أحلى لحظة",
        text:
          index % 3 === 0
            ? "كل صورة فيهم بتفكرني قد إيه انتي أجمل حاجة حصلتلي ❤️"
            : index % 3 === 1
            ? "كل سنة وانتي طيبة يا روح قلبي ويا أجمل عيد ميلاد في الدنيا 🎂💖"
            : "ضحكتك في كل صورة بتخلّي قلبي يقع في حبك من أول وجديد 🥹🫶🏻",
      })),
    ],
    []
  );

  const timelineItems = useMemo(
    () => [
      {
        title: "يوم ميلاد الملكة",
        date: "26 مارس",
        text: "اليوم اللي الدنيا خدت فيه شكل أجمل عشان اتولدت فاطمة.",
      },
      {
        title: "24 سنة جمال",
        date: "24th Birthday",
        text: "24 سنة من الجمال والضحكة والطيبة والدلع الحلو.",
      },
      {
        title: "أمنية السنة الجديدة",
        date: "2026",
        text: "سنة كلها فرحة ونجاح وتحقيق لكل اللي نفسك فيه.",
      },
      {
        title: "وكل سنة أكتر",
        date: "دايمًا",
        text: "وكل سنة تبقي أقرب لقلبي وأغلى عندي من اللي قبلها.",
      },
    ],
    []
  );

  const cuteFacts = useMemo(
    () => [
      { title: "العمر", value: "24" },
      { title: "الجمال", value: "∞" },
      { title: "الدلع", value: "100%" },
      { title: "مكانتها", value: "ملكة" },
    ],
    []
  );

  const reasons = useMemo(
    () => [
      "ضحكتك",
      "طيبتك",
      "ملامحك",
      "دلعك",
      "قلبك",
      "صوتك",
      "وجودك",
      "حنانك",
    ],
    []
  );

  useEffect(() => {
    const timeout = setTimeout(() => setShowLoader(false), 2200);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const startDate = new Date("2002-03-26T00:00:00");

    const updateCounter = () => {
      const now = new Date().getTime();
      const start = startDate.getTime();
      const difference = now - start;

      if (difference <= 0) {
        setCounter({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setCounter({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    };

    updateCounter();
    const interval = setInterval(updateCounter, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!isUnlocked) return;

    const audio = document.getElementById("loveAudio");
    if (!audio) return;

    const playAudio = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    };

    playAudio();
  }, [isUnlocked]);

  const handleUnlock = async (e) => {
    e.preventDefault();

    if (enteredPassword === SITE_PASSWORD) {
      setIsUnlocked(true);
      setError("");

      setTimeout(async () => {
        const audio = document.getElementById("loveAudio");
        if (!audio) return;
        try {
          await audio.play();
          setIsPlaying(true);
        } catch {
          setIsPlaying(false);
        }
      }, 250);
    } else {
      setError("الباسورد غلط يا روحي");
    }
  };

  const toggleMusic = async () => {
    const audio = document.getElementById("loveAudio");
    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  if (showLoader) {
    return (
      <div className="loader-page" dir="rtl">
        <div className="loader-hearts">
          <span>🎂</span>
          <span>🎉</span>
          <span>👑</span>
        </div>
        <div className="loader-circle"></div>
        <h1>جارِ تجهيز مفاجأة عيد ميلاد فاطمة 💖</h1>
      </div>
    );
  }

  if (!isUnlocked) {
    return (
      <div className="password-page" dir="rtl">
        <audio id="loveAudio" loop preload="auto">
          <source src="/love.mp3" type="audio/mpeg" />
        </audio>

        <div className="bg-orb orb-1"></div>
        <div className="bg-orb orb-2"></div>
        <div className="bg-orb orb-3"></div>

        <div className="floating-hearts" aria-hidden="true">
          <span>🎂</span>
          <span>🎉</span>
          <span>💖</span>
          <span>👑</span>
          <span>✨</span>
          <span>🫶🏻</span>
        </div>

        <div className="password-card glass">
          <div className="password-top-image">
            <img src="/profile.jpg" alt="فاطمة" />
            <div className="password-image-overlay"></div>
          </div>

          <div className="lock-icon">🎁</div>
          <div className="cute-badge">💖 Surprise for Fatma</div>

          <h1>اكتبي كلمة السر يا أجمل Birthday Girl</h1>

          <p className="password-subtext">
            المفاجأة دي معمولالك إنتي وبس، ومش هتتفتح غير بكلمة السر 🎂❤️
          </p>

          <form onSubmit={handleUnlock} className="password-form">
            <input
              type="password"
              placeholder="اكتبي كلمة السر هنا"
              value={enteredPassword}
              onChange={(e) => setEnteredPassword(e.target.value)}
            />
            <button type="submit">افتحي المفاجأة 🎉</button>
          </form>

          {error && <div className="error-text">{error}</div>}
        </div>
      </div>
    );
  }

  return (
    <div className="page" dir="rtl">
      <audio id="loveAudio" loop preload="auto">
        <source src="/love.mp3" type="audio/mpeg" />
      </audio>

      <div className="bg-orb orb-1"></div>
      <div className="bg-orb orb-2"></div>
      <div className="bg-orb orb-3"></div>

      <div className="floating-hearts" aria-hidden="true">
        <span>🎂</span>
        <span>🎉</span>
        <span>💖</span>
        <span>👑</span>
        <span>✨</span>
        <span>🫶🏻</span>
        <span>🥳</span>
        <span>🎈</span>
      </div>

      <main className="container">
        <section className="hero-banner glass">
          <div className="hero-banner-text">
            <span className="small-badge">🎉 Happy Birthday</span>
            <h1>
              {content.heroName}
              <span>{content.heroSub}</span>
            </h1>
            <TypingText text={content.cuteText} className="typing-line" />
            <p>{content.heroText}</p>

            <div className="top-actions">
              <button className="btn btn-primary" onClick={toggleMusic}>
                {isPlaying ? "إيقاف الأغنية" : "تشغيل الأغنية"}
              </button>

              <button
                className="btn btn-secondary"
                onClick={() =>
                  document
                    .getElementById("gallerySection")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                شوفي الصور 🎞️
              </button>
            </div>
          </div>

          <div className="hero-banner-image">
            <img src="/profile.jpg" alt="فاطمة" />
            <div className="hero-banner-overlay"></div>
          </div>
        </section>

        <section className="stats-grid">
          <div className="stat-card glass">
            <strong>24</strong>
            <span>سنة جمال</span>
          </div>
          <div className="stat-card glass cute-counter-card">
            <div className="pulse-ring"></div>
            <strong>{memoryCards.length}</strong>
            <span>صورة</span>
          </div>
          <div className="stat-card glass">
            <strong>∞</strong>
            <span>حب</span>
          </div>
          <div className="stat-card glass">
            <strong>1</strong>
            <span>ملكة قلبي</span>
          </div>
        </section>

        <section className="cute-facts-grid">
          {cuteFacts.map((item, index) => (
            <div className="cute-fact-card glass" key={index}>
              <h4>{item.title}</h4>
              <strong>{item.value}</strong>
            </div>
          ))}
        </section>

        <section className="full-cover-section glass">
          <div className="full-cover-image">
            <img src="/profile.jpg" alt="فاطمة" />
            <div className="full-cover-overlay"></div>
          </div>

          <div className="full-cover-content">
            <div className="scene-pill">{content.birthdayTitle}</div>
            <div className="scene-date">24th Birthday 🎂</div>
            <h2>{content.heroName}</h2>
            <h3>{content.heroSub}</h3>
            <p>{content.longMessage}</p>
          </div>
        </section>

        <section className="huge-counter-section glass" id="counterSection">
          <span className="small-badge">⏳ From Her Birthday</span>
          <h2>{content.timerTitle}</h2>
          <p>{content.timerText}</p>

          <div className="huge-counter-grid">
            <div className="huge-counter-box animated-counter">
              <strong>{counter.days}</strong>
              <span>يوم</span>
            </div>
            <div className="huge-counter-box animated-counter">
              <strong>{counter.hours}</strong>
              <span>ساعة</span>
            </div>
            <div className="huge-counter-box animated-counter">
              <strong>{counter.minutes}</strong>
              <span>دقيقة</span>
            </div>
            <div className="huge-counter-box animated-counter">
              <strong>{counter.seconds}</strong>
              <span>ثانية</span>
            </div>
          </div>

          <div className="music-mini-bar giant-music-bar">
            <div className="music-mini-left">
              <div className={`disc ${isPlaying ? "spin" : ""}`}>🎵</div>
              <div>
                <strong>أغنية عيد الميلاد</strong>
                <small>هتشتغل لو المتصفح سمح</small>
              </div>
            </div>

            <button className="mini-play-btn" onClick={toggleMusic}>
              {isPlaying ? "Pause" : "Play"}
            </button>
          </div>
        </section>

        <section className="wide-message glass">
          <span className="small-badge">💌 رسالة ليكي</span>
          <h2>كل الكلام ده عشانك انتي</h2>
          <p>{content.longMessage}</p>
          <p>{content.extraMessage}</p>
        </section>

        <section className="love-columns">
          <div className="love-column-card glass">
            <h3>حاجات مميزة فيكي</h3>
            <ul>
              {reasons.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="love-column-card glass">
            <h3>أتمنالك السنة دي</h3>
            <ul>
              <li>فرحة من قلبك</li>
              <li>نجاح كبير</li>
              <li>راحة بال</li>
              <li>أيام حلوة</li>
              <li>ضحك كتير</li>
              <li>كل اللي نفسك فيه</li>
            </ul>
          </div>
        </section>

        <section className="timeline-section glass">
          <div className="section-head">
            <h3>Timeline يومك الجميل</h3>
            <p>محطات رمزية ليوم ميلاد أحلى واحدة</p>
          </div>

          <div className="timeline-list">
            {timelineItems.map((item, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <small>{item.date}</small>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="reels-section glass">
          <div className="section-head slider-head">
            <div>
              <h3>ألبوم الذكريات</h3>
              <p>30 صورة ليكي بشكل سلايدر شيك وجميل</p>
            </div>

            <div className="slider-buttons">
              <button
                className="slider-btn"
                onClick={() => {
                  const slider = document.getElementById("cardsSlider");
                  slider?.scrollBy({ left: 360, behavior: "smooth" });
                }}
              >
                ←
              </button>
              <button
                className="slider-btn"
                onClick={() => {
                  const slider = document.getElementById("cardsSlider");
                  slider?.scrollBy({ left: -360, behavior: "smooth" });
                }}
              >
                →
              </button>
            </div>
          </div>

          <div className="cards-slider" id="cardsSlider">
            {memoryCards.map((card, index) => (
              <button
                key={card.id}
                className="animated-text-card slider-card"
                onClick={() => setSelectedCard(card)}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="animated-card-image">
                  <img src={card.image} alt={card.title} />
                </div>

                <div className="animated-card-body">
                  <small>{card.date}</small>
                  <h4>{card.title}</h4>
                  <p>{card.text}</p>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section className="big-quotes-section glass">
          <div className="quote-box">
            “H.B.D لأحلى واحدة تمت الـ 24 🥹😘🫶🏻”
          </div>
          <div className="quote-box">
            “حبيبة قلبي وعمر أيامي انتي أحلى حاجة حصلتلي في حياتي ❤️”
          </div>
          <div className="quote-box">
            “ربنا يخليكي ليا وما يحرمنيش منك أبدًا يا ملكتي 👑💋”
          </div>
        </section>

        <section className="gallery-grid-section glass" id="gallerySection">
          <div className="section-head">
            <h3>جاليري الـ 30 صورة</h3>
            <p>ضيف صورك من 1.jpg لحد 30.jpg وهتظهر هنا تلقائيًا</p>
          </div>

          <div className="big-gallery-grid">
            {memoryCards.map((item) => (
              <button
                key={item.id}
                className="big-gallery-card"
                onClick={() => setSelectedCard(item)}
              >
                <img src={item.image} alt={item.title} />
                <div className="big-gallery-overlay">
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section className="extra-love-section glass">
          <div className="extra-love-card glass">
            <h3>يا أحلى سنة</h3>
            <p>السنة دي لازم تكون كلها فرح وضحك وتحقيق أحلام 🎉</p>
          </div>
          <div className="extra-love-card glass">
            <h3>يا أجمل بنت</h3>
            <p>مفيش حد شبهك في الجمال والطيبة وخفة الروح 💖</p>
          </div>
          <div className="extra-love-card glass">
            <h3>يا ملكتي</h3>
            <p>كل سنة وانتي منورة حياتي ودنيتي كلها 👑❤️</p>
          </div>
        </section>

        <section className="final-cute-section glass">
          <h2>وفي الآخر… Happy Birthday Fatma 🎂</h2>
          <p>
            كل سنة وانتي طيبة يا بطتي يا روح قلبي، وعقبال مليون سنة وانتي معايا
            ومبسوطة ومنورة الدنيا كلها ❤️
          </p>
        </section>

        <button
          className="back-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          ↑
        </button>
      </main>

      {selectedCard && (
        <div className="modal" onClick={() => setSelectedCard(null)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedCard(null)}>
              ×
            </button>

            <div className="modal-image">
              <img src={selectedCard.image} alt={selectedCard.title} />
            </div>

            <div className="modal-content">
              <span className="modal-chip">🎂 صورة مختارة</span>
              <small>{selectedCard.date || "ذكرى جميلة"}</small>
              <h3>{selectedCard.title}</h3>
              <p>{selectedCard.text}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
