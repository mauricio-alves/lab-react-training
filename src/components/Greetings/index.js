import style from './greetings.module.css';

export function Greetings({ lang, children }) {
  if (lang === 'en') {
    lang = 'Hello';
  } else if (lang === 'es') {
    lang = 'Hola';
  } else if (lang === 'fr') {
    lang = 'Bonjour';
  } else if (lang === 'de') {
    lang = 'Hallo';
  }

  return (
    <div className={style.container}>
      <p>{lang + ' ' + children}</p>
    </div>
  );
}
