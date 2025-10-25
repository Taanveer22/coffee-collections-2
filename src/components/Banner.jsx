const Banner = () => {
  return (
    <>
      <div className="hero min-h-screen mb-12 bg-[url(./assets/banner.jpg)]">
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5 text-justify">
              Where stories are brewed and magic is poured. In our enchanted
              space, every drink is a potion and every visit is an adventure.
              Discover whimsical lattes, mystical herbal teas, and a selection
              of treats from another world. Escape the mundane and enter a realm
              of delicious fantasy.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
