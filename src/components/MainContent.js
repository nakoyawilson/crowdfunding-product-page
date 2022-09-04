import "./MainContent.css";
import bookmark from "../images/icon-bookmark.svg";
import mastercraft from "../images/logo-mastercraft.svg";

const MainContent = () => {
  const maxFunding = 100000;
  let currentAmount = 89914;

  return (
    <main className="main">
      <section className="container overview">
        <img src={mastercraft} alt="" className="mastercraft-logo" />
        <h1 className="main-heading">Mastercraft Bamboo Monitor Riser</h1>
        <p className="paragraph">
          A beautiful & handcrafted monitor stand to reduce neck and eye strain.
        </p>
        <div className="btn-wrapper">
          <a href="/" className="btn project-btn">
            Back this project
          </a>
          <button className="bookmark-btn">
            <img src={bookmark} alt="" className="bookmark-icon" />
            <span className="bookmark-text">Bookmark</span>
          </button>
        </div>
      </section>
      <section className="container stats">
        <ul className="stats-wrapper">
          <li className="stat">
            <span className="quantity">$89,914</span> of $100,000 backed
          </li>
          <li className="stat">
            <span className="quantity">5,007</span> total backers
          </li>
          <li className="stat">
            <span className="quantity">56</span> days left
          </li>
        </ul>
        <div class="progress-bar-container">
          <span className="sr-only">
            Project Funding: {(currentAmount / maxFunding) * 100}%
          </span>
          <div class="progress-bar"></div>
        </div>
      </section>
      <section className="container about">
        <h2 className="section-heading">About this project</h2>
        <p className="paragraph">
          The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
          that elevates your screen to a more comfortable viewing height.
          Placing your monitor at eye level has the potential to improve your
          posture and make you more comfortable while at work, helping you stay
          focused on the task at hand.
        </p>
        <p className="paragraph">
          Featuring artisan craftsmanship, the simplicity of design creates
          extra desk space below your computer to allow notepads, pens, and USB
          sticks to be stored under the stand.
        </p>
        <section className="reward">
          <h3 className="reward-heading">Bamboo Stand</h3>
          <h4 className="reward-subheading">Pledge $25 or more</h4>
          <p className="paragraph">
            You get an ergonomic stand made of natural bamboo. You've helped us
            launch our promotional campaign, and you’ll be added to a special
            Backer member list.
          </p>
          <span className="quantity-wrapper">
            <span className="quantity">101</span> left
          </span>
          <button className="btn select-btn">Select Reward</button>
        </section>
        <section className="reward">
          <h3 className="reward-heading">Black Edition Stand</h3>
          <h4 className="reward-subheading">Pledge $75 or more</h4>
          <p className="paragraph">
            You get a Black Special Edition computer stand and a personal thank
            you. You’ll be added to our Backer member list. Shipping is
            included.
          </p>
          <span className="quantity-wrapper">
            <span className="quantity">64</span> left
          </span>
          <button className="btn select-btn">Select Reward</button>
        </section>
        <section className="reward out-of-stock">
          <h3 className="reward-heading">Mahogany Special Edition</h3>
          <h4 className="reward-subheading">Pledge $200 or more</h4>
          <p className="paragraph">
            You get two Special Edition Mahogany stands, a Backer T-Shirt, and a
            personal thank you. You’ll be added to our Backer member list.
            Shipping is included.
          </p>
          <span className="quantity-wrapper">
            <span className="quantity">0</span> left
          </span>
          <button className="btn select-btn btn-disabled">Out of Stock</button>
        </section>
      </section>
    </main>
  );
};

export default MainContent;
