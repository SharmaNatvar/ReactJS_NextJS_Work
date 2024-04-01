export default function navbarLayout({ children, mobilenav, normalnav }) {
  const value = false;
  return (
    <section>
      {children}
      {value ? mobilenav : normalnav}
    </section>
  );
}
