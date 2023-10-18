import { useState, useEffect } from 'react';

const INITIAL_STATE_TIME = '00:00:00';
const INITIAL_STATE_DATE = 'Monday, September 1';
const UPDATE_TIME = 1000;
const DATE_LOCALE = 'en-EN';
const DATE_OPTIONS: Intl.DateTimeFormatOptions = {
  month: 'long',
  day: 'numeric',
  weekday: 'long',
};
const TIME_OPTIONS: Intl.DateTimeFormatOptions = {
  hour: '2-digit',
  minute: '2-digit',
};

export default function Timebar() {
  const [time, setTime] = useState<string>(INITIAL_STATE_TIME);
  const [date, setDate] = useState<string>(INITIAL_STATE_DATE);

  useEffect(() => {
    const showTimeAndDate = () => {
      const date = new Date();
      const timeStr = date.toLocaleTimeString(DATE_LOCALE, TIME_OPTIONS);
      const dateStr = date.toLocaleDateString(DATE_LOCALE, DATE_OPTIONS);

      setTime(timeStr);
      setDate(dateStr);
    };

    showTimeAndDate();
    const timeoutId = setTimeout(() => showTimeAndDate(), UPDATE_TIME);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section className="text-slate-50 text-center mb-10 max-sm:mb-5">
      <p className="text-8xl max-md:text-6xl max-sm:text-5xl mb-5 max-md:mb-3 drop-shadow-md [text-shadow:_0_0_40px_rgb(0_0_0_/_60%)]">
        {time}
      </p>
      <p className="text-5xl max-md:text-3xl max-sm:text-2xl mb-5 max-md:mb-3 drop-shadow-md [text-shadow:_0_0_40px_rgb(0_0_0_/_60%)]">
        {date}
      </p>
    </section>
  );
}
