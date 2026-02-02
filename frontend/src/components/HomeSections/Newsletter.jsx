const Newsletter = () => {
  return (
    <section className="newsletter">
      <div className="container">
        <h2>Subscribe to our Newsletter</h2>

        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in
        </p>

        <form className="newsletter-form">
          <input
            type="email"
            placeholder="Enter email address"
          />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
