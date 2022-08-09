import Logo from '../assets/Fill 213.svg'

function JournalHeader() {

  return (
    <header>
      <img src={Logo} alt="Logo" />
      <span>my travel journal.</span>
    </header>
  );
}

export default JournalHeader