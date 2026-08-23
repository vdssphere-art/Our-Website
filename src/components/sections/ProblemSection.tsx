"use client";

import React, { useEffect, useRef, useState } from "react";

type Step = {
  number: number;
  title: string;
};

const steps: Step[] = [
  { number: 1, title: "You ask" },
  { number: 2, title: "We do the rest" },
  { number: 3, title: "You choose" },
];

const jobs = [
  "Full-stack developer",
  "Back-end developer",
  "Front-end Developer",
  "AI Engineer",
  "Data Scientist",
  "Mobile Developer",
  "DevOps",
  "AI Developer",
];

export default function ProblemSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!sectionRef.current) {
            ticking = false;
            return;
          }

          const rect = sectionRef.current.getBoundingClientRect();
          const sectionHeight = sectionRef.current.offsetHeight;
          const viewportHeight = window.innerHeight;
          const scrollableDistance = sectionHeight - viewportHeight;

          if (scrollableDistance <= 0) {
            setProgress(0);
          } else {
            let value = -rect.top / scrollableDistance;
            value = Math.max(0, Math.min(1, value));
            setProgress(value);
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /*
    Divide the scroll into 3 non-overlapping windows:
    Step 0: progress 0.00 -> 0.33
    Step 1: progress 0.33 -> 0.66
    Step 2: progress 0.66 -> 1.00
  */
  const activeStep =
    progress < 0.33
      ? 0
      : progress < 0.66
      ? 1
      : 2;

  /*
    Card 1: Fully visible from 0 to 0.28.
    Card 1 exits upward & fades from 0.28 to 0.35.
  */
  const card1Exit = Math.max(0, Math.min(1, (progress - 0.28) / 0.07));

  /*
    Card 2: Enters from bottom & fades in from 0.33 to 0.40.
    Remains static until 0.61.
    Exits upward & fades out from 0.61 to 0.68.
  */
  const card2Enter = Math.max(0, Math.min(1, (progress - 0.33) / 0.07));
  const card2Exit = Math.max(0, Math.min(1, (progress - 0.61) / 0.07));

  /*
    Card 3: Enters from bottom & fades in from 0.66 to 0.73.
    Remains static until end (1.00).
  */
  const card3Enter = Math.max(0, Math.min(1, (progress - 0.66) / 0.07));

  return (
    <>
      <section
        ref={sectionRef}
        className="problem-section"
      >
        <div className="problem-sticky">

          {/* =================================
              BACKGROUND
          ================================= */}

          <div className="background-image" />

          <div className="yellow-glow glow-1" />
          <div className="yellow-glow glow-2" />

          {/* =================================
              CARDS
          ================================= */}

          <div className="cards-wrapper">

            {/* ================================
                CARD 1
            ================================= */}

            <div
              className="problem-card card-1"
              style={{
                transform: `translateY(${-card1Exit * 400}px)`,
                opacity: 1 - card1Exit,
                pointerEvents: card1Exit < 0.5 ? "auto" : "none",
                zIndex: card1Exit < 0.5 ? 10 : 1,
              }}
            >
              <CardTitle
                number={1}
                title="You ask"
              />

              <div className="search-container">

                <div className="search-bar">

                  <span className="search-text">
                    I'm looking for|
                  </span>

                  <span className="search-hint">
                    Shift+Enter
                  </span>

                  <button
                    className="search-button"
                    type="button"
                  >
                    ↑
                  </button>

                </div>

                <div className="chips">

                  {jobs.map((job) => (
                    <span
                      className="chip"
                      key={job}
                    >
                      {job}
                    </span>
                  ))}

                  <span className="chip plus">
                    +
                  </span>

                </div>

              </div>
            </div>

            {/* ================================
                CARD 2
            ================================= */}

            <div
              className="problem-card card-2"
              style={{
                transform: `translateY(${(1 - card2Enter) * 400 - card2Exit * 400}px)`,
                opacity: card2Enter > 0 ? card2Enter * (1 - card2Exit) : 0,
                pointerEvents: card2Enter > 0.5 && card2Exit < 0.5 ? "auto" : "none",
                zIndex: card2Enter > 0.5 && card2Exit < 0.5 ? 10 : 2,
              }}
            >
              <CardTitle
                number={2}
                title="We do the rest"
              />

              <div className="pipeline">

                <PipelineItem
                  active
                  title="Source"
                  subtitle="Talent pool"
                />

                <PipelineItem
                  title="Reach out"
                  subtitle="Candidates ready"
                  avatars
                />

                <PipelineItem
                  title="Test"
                  subtitle="1:1 Interviews"
                />

                <PipelineItem
                  title="Interview"
                  subtitle="1:1 with a senior"
                />

                <PipelineItem
                  title="Match"
                  subtitle="Finding a fit"
                />

              </div>
            </div>

            {/* ================================
                CARD 3
            ================================= */}

            <div
              className="problem-card card-3"
              style={{
                transform: `translateY(${(1 - card3Enter) * 400}px)`,
                opacity: card3Enter,
                pointerEvents: card3Enter > 0.5 ? "auto" : "none",
                zIndex: card3Enter > 0.5 ? 10 : 3,
              }}
            >
              <CardTitle
                number={3}
                title="You choose"
              />

              <Calendar />

            </div>

          </div>

          {/* =================================
              BOTTOM PROGRESS
          ================================= */}

          <ProgressBar
            activeStep={activeStep}
            progress={progress}
          />

        </div>
      </section>

      {/* =====================================
          CONTENT AFTER ANIMATION
      ===================================== */}



      {/* =====================================
          ALL CSS IN SAME FILE
      ===================================== */}

      <style jsx global>{`

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: #ffffff;
          color: #060e15;
          font-family:
            Arial,
            Helvetica,
            sans-serif;
        }


        /* =====================================
           MAIN SECTION
        ===================================== */

        .problem-section {
          position: relative;

          /*
            This creates the scrolling distance.

            The actual content remains pinned
            for this entire duration.
          */

          height: 300vh;

          width: 100%;

          background: #f5f5f2;
        }


        /* =====================================
           STICKY VIEWPORT
        ===================================== */

        .problem-sticky {
          position: sticky;

          top: 0;

          width: 100%;
          height: 100vh;

          overflow: hidden;

          display: flex;

          align-items: center;
          justify-content: center;
        }


        /* =====================================
           BACKGROUND

           This does NOT scroll because it is
           inside the sticky container.
        ===================================== */

        .background-image {
          position: absolute;

          inset: 0;

          z-index: 0;

          background-image: url(
            "https://lemon.io/wp-content/themes/lemonn/assets/images/front-page/problem-blossom.webp"
          );

          background-size: cover;

          background-position: center;

          background-repeat: no-repeat;
        }


        /* =====================================
           YELLOW GLOW
        ===================================== */

        .yellow-glow {
          position: absolute;

          width: 500px;
          height: 500px;

          border-radius: 50%;

          background:
            rgba(
              240,
              255,
              0,
              0.45
            );

          filter: blur(110px);

          pointer-events: none;

          z-index: 1;
        }

        .glow-1 {
          left: 5%;
          top: 30%;
        }

        .glow-2 {
          right: 5%;
          top: 20%;
        }


        /* =====================================
           CARDS WRAPPER
        ===================================== */

        .cards-wrapper {
          position: relative;

          z-index: 5;

          width: min(
            960px,
            90vw
          );

          height: 500px;

          display: flex;

          align-items: center;
          justify-content: center;
        }


        /* =====================================
           CARD
        ===================================== */

        .problem-card {
          position: absolute;

          width: 100%;

          padding: 30px;

          background:
            rgba(
              255,
              255,
              255,
              0.94
            );

          box-shadow:
            0 30px 80px
            rgba(
              0,
              0,
              0,
              0.13
            );

          will-change:
            transform,
            opacity;
        }

        .card-1 {
          max-width: 960px;
        }

        .card-2 {
          max-width: 700px;
        }

        .card-3 {
          max-width: 700px;
        }


        /* =====================================
           CARD TITLE
        ===================================== */

        .card-title {
          display: flex;

          align-items: center;

          gap: 12px;

          margin-bottom: 24px;

          font-size: 17px;

          font-weight: 500;
        }

        .card-number {
          display: flex;

          align-items: center;
          justify-content: center;

          width: 30px;
          height: 30px;

          border-radius: 50%;

          background: #060e15;

          color: #ffffff;

          font-size: 13px;
        }


        /* =====================================
           SEARCH CARD
        ===================================== */

        .search-container {
          width: 100%;

          background: #ffffff;

          border:
            1px solid
            #eeeeee;
        }

        .search-bar {
          position: relative;

          height: 75px;

          display: flex;

          align-items: center;

          padding-left: 25px;

          font-size: 20px;
        }

        .search-text {
          color: #151515;
        }

        .search-hint {
          margin-left: auto;

          margin-right: 95px;

          color: #888888;

          font-size: 13px;
        }

        .search-button {
          position: absolute;

          right: 0;
          top: 0;

          width: 75px;
          height: 75px;

          border: 0;

          background: #060e15;

          color: #ffffff;

          font-size: 30px;

          cursor: pointer;
        }


        /* =====================================
           CHIPS
        ===================================== */

        .chips {
          display: flex;

          flex-wrap: wrap;

          gap: 6px;

          padding: 12px;
        }

        .chip {
          padding:
            11px
            13px;

          background:
            #f5f5f5;

          color: #777777;

          font-size: 13px;

          white-space: nowrap;
        }

        .chip.plus {
          font-size: 21px;

          padding:
            7px
            14px;
        }


        /* =====================================
           PIPELINE
        ===================================== */

        .pipeline {
          position: relative;

          display: flex;

          flex-direction: column;
        }

        .pipeline::before {
          content: "";

          position: absolute;

          left: 8px;

          top: 9px;

          bottom: 9px;

          width: 1px;

          background:
            #d7d7d7;
        }

        .pipeline-item {
          position: relative;

          min-height: 65px;

          display: flex;

          align-items: center;

          gap: 20px;
        }

        .pipeline-node {
          position: relative;

          z-index: 2;

          flex-shrink: 0;

          width: 17px;
          height: 17px;

          border-radius: 50%;

          border:
            1px solid
            #777777;

          background: #ffffff;
        }

        .pipeline-node.active {
          background:
            #eaff00;

          border-color:
            #060e15;
        }

        .pipeline-text {
          display: flex;

          flex-direction: column;

          gap: 4px;
        }

        .pipeline-text strong {
          font-size: 15px;

          font-weight: 500;
        }

        .pipeline-text span {
          color: #888888;

          font-size: 13px;
        }


        /* =====================================
           AVATARS
        ===================================== */

        .pipeline-avatars {
          display: flex;

          margin-left: auto;
        }

        .pipeline-avatars img {
          width: 30px;
          height: 30px;

          border-radius: 50%;

          object-fit: cover;

          border:
            2px solid
            #ffffff;

          margin-left: -7px;
        }


        /* =====================================
           CALENDAR
        ===================================== */

        .calendar-tabs {
          display: flex;

          gap: 25px;

          margin-bottom: 25px;

          font-size: 14px;

          color: #888888;
        }

        .calendar-tabs .selected {
          color: #060e15;

          font-weight: 600;
        }

        .calendar-title {
          margin:
            0 0 20px;

          font-size: 20px;

          font-weight: 500;
        }

        .weekdays {
          display: grid;

          grid-template-columns:
            repeat(7, 1fr);

          margin-bottom: 7px;

          text-align: center;

          color: #888888;

          font-size: 12px;
        }

        .calendar-grid {
          display: grid;

          grid-template-columns:
            repeat(7, 1fr);

          gap: 4px;
        }

        .calendar-day {
          position: relative;

          height: 55px;

          display: flex;

          align-items: center;
          justify-content: center;

          border-radius: 50%;

          font-size: 13px;
        }

        .calendar-day.muted {
          color: #bbbbbb;
        }

        .calendar-day.selected {
          background:
            #eaff00;
        }

        .calendar-day.avatar-day img {
          position: absolute;

          width: 43px;
          height: 43px;

          border-radius: 50%;

          object-fit: cover;
        }

        .calendar-day.avatar-day span {
          position: relative;

          z-index: 2;

          color: #ffffff;

          font-weight: 600;
        }


        /* =====================================
           PROGRESS
        ===================================== */

        .progress-wrapper {
          position: absolute;
          z-index: 30;
          bottom: 28px;
          left: 50%;
          transform: translateX(-50%);
          width: min(800px, 90vw);
          padding: 0 10px;
        }

        .progress-track {
          position: absolute;
          left: 45px;
          right: 45px;
          top: 19px;
          height: 3px;
          background: rgba(6, 14, 21, 0.12);
          border-radius: 2px;
          overflow: hidden;
        }

        .progress-line {
          height: 100%;
          background: #060e15;
          transition: width 0.1s linear;
          border-radius: 2px;
        }

        .progress-items {
          position: relative;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        .progress-step {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          cursor: pointer;
        }

        .marker {
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #ffffff;
          border: 2px solid #cccccc;
          border-radius: 50%;
          font-size: 13px;
          font-weight: 700;
          color: #666666;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
          position: relative;
          z-index: 2;
        }

        .progress-step.active .marker {
          background: #060e15;
          color: #ffffff;
          border-color: #060e15;
          transform: scale(1.15);
          box-shadow: 0 4px 14px rgba(6, 14, 21, 0.3);
        }

        .step-label {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 14px;
          font-weight: 600;
          color: #888888;
          transition: color 0.3s ease;
        }

        .progress-step.active .step-label {
          color: #060e15;
        }

        .step-icon {
          width: 25px;

          font-size: 21px;

          text-align: center;
        }


        /* =====================================
           AFTER SECTION
        ===================================== */

        .after-section {
          min-height: 100vh;

          display: flex;

          flex-direction: column;

          align-items: center;
          justify-content: center;

          background: #ffffff;

          text-align: center;
        }

        .after-section h2 {
          margin: 0 0 10px;

          font-size: 50px;
        }

        .after-section p {
          color: #777777;
        }


        /* =====================================
           MOBILE
        ===================================== */

        @media (max-width: 768px) {

          .problem-section {
            height: 300vh;
          }

          .cards-wrapper {
            width: 92vw;

            height: 450px;
          }

          .problem-card {
            padding: 20px;
          }

          .search-bar {
            font-size: 16px;
          }

          .search-hint {
            display: none;
          }

          .chip {
            padding:
              8px
              10px;

            font-size: 10px;
          }

          .progress-wrapper {
            bottom: 25px;
          }

          .step-label {
            font-size: 11px;
          }

          .step-icon {
            display: none;
          }

          .marker {
            width: 30px;
            height: 30px;
          }

          .calendar-day {
            height: 40px;
          }

        }

      `}</style>
    </>
  );
}


/* =====================================================
   CARD TITLE
===================================================== */

function CardTitle({
  number,
  title,
}: {
  number: number;
  title: string;
}) {
  return (
    <div className="card-title">
      <span className="card-number">
        {number}
      </span>

      <span>{title}</span>
    </div>
  );
}


/* =====================================================
   PIPELINE ITEM
===================================================== */

function PipelineItem({
  active = false,
  title,
  subtitle,
  avatars = false,
}: {
  active?: boolean;
  title: string;
  subtitle: string;
  avatars?: boolean;
}) {
  return (
    <div className="pipeline-item">

      <span
        className={`pipeline-node ${
          active ? "active" : ""
        }`}
      />

      <div className="pipeline-text">

        <strong>{title}</strong>

        <span>{subtitle}</span>

      </div>

      {avatars && (
        <div className="pipeline-avatars">

          <img
            src="https://lemon.io/wp-content/themes/lemonn/assets/images/front-page/problem-avatar-1.webp"
            alt=""
          />

          <img
            src="https://lemon.io/wp-content/themes/lemonn/assets/images/front-page/problem-avatar-2.webp"
            alt=""
          />

          <img
            src="https://lemon.io/wp-content/themes/lemonn/assets/images/front-page/problem-avatar-3.webp"
            alt=""
          />

        </div>
      )}

    </div>
  );
}


/* =====================================================
   CALENDAR
===================================================== */

function Calendar() {
  const days = [
    31, 1, 2, 3, 4, 5, 6,
    7, 8, 9, 10, 11, 12, 13,
    14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27,
    28, 29, 30, 1, 2, 3, 4,
  ];

  return (
    <div>

      <div className="calendar-tabs">

        <span>Day</span>

        <span className="selected">
          Week
        </span>

        <span>Month</span>

      </div>

      <h3 className="calendar-title">
        Choose an interview date
      </h3>

      <div className="weekdays">

        {[
          "Sun",
          "Mon",
          "Tue",
          "Wed",
          "Thu",
          "Fri",
          "Sat",
        ].map((day) => (
          <span key={day}>
            {day}
          </span>
        ))}

      </div>

      <div className="calendar-grid">

        {days.map(
          (day, index) => {

            const isSelected =
              index === 8;

            const hasAvatar =
              index === 11 ||
              index === 12 ||
              index === 17;

            const avatarNumber =
              index === 11
                ? 3
                : index === 12
                ? 2
                : 1;

            const isMuted =
              index === 0 ||
              index >= 31;

            return (
              <div
                key={index}
                className={`
                  calendar-day
                  ${
                    isSelected
                      ? "selected"
                      : ""
                  }
                  ${
                    hasAvatar
                      ? "avatar-day"
                      : ""
                  }
                  ${
                    isMuted
                      ? "muted"
                      : ""
                  }
                `}
              >

                {hasAvatar && (
                  <img
                    src={`https://lemon.io/wp-content/themes/lemonn/assets/images/front-page/problem-avatar-${avatarNumber}.webp`}
                    alt=""
                  />
                )}

                <span>{day}</span>

              </div>
            );
          }
        )}

      </div>

    </div>
  );
}


/* =====================================================
   PROGRESS BAR
===================================================== */

function ProgressBar({
  activeStep,
  progress,
}: {
  activeStep: number;
  progress: number;
}) {
  return (
    <div className="progress-wrapper">

      <div className="progress-track">

        <div
          className="progress-line"
          style={{
            width:
              `${progress * 100}%`,
          }}
        />

      </div>

      <div className="progress-items">

        {steps.map(
          (step, index) => (
            <div
              key={step.number}
              className={`
                progress-step
                ${
                  index === activeStep
                    ? "active"
                    : ""
                }
              `}
            >

              <span className="marker">
                {step.number}
              </span>

              <div className="step-label">

                <span className="step-icon">

                  {index === 0 && "✎"}

                  {index === 1 && "✳"}

                  {index === 2 && "↗"}

                </span>

                <span>
                  {step.title}
                </span>

              </div>

            </div>
          )
        )}

      </div>

    </div>
  );
}