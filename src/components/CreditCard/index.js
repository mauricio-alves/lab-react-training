import style from './creditcard.module.css';
import visaLogo from '../../assets/images/visa.png';
import masterCardLogo from '../../assets/images/master-card.svg';

export function CreditCard({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) {
  const divBack = { backgroundColor: bgColor };
  const fontColor = { color: color };

  let img = { type };
  if (type === 'Visa') {
    img = visaLogo;
  } else if (type === 'Master Card') {
    img = masterCardLogo;
  }

  const password = number;
  const lastFourDigits = password.slice(12, 16);
  const maskedPassword = password.replace(/./g, '•');
  const firstTwelveDigits = maskedPassword.slice(0, 12);
  const newPassword = firstTwelveDigits + lastFourDigits;
  const displayPassword = newPassword.match(/.{1,4}/g).join(' ');

  return (
    <div className={style.section}>
      <div className={style.container} style={divBack}>
        <div style={fontColor}>
          <img src={img} alt="bank logo" />
          <p className={style.password}>{displayPassword}</p>
          <p>
            Expires 0{expirationMonth}/{expirationYear} {bank}
          </p>
          <p>{owner}</p>
        </div>
      </div>
    </div>
  );
}
