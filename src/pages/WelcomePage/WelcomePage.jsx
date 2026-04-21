const WelcomePage = ({ showVenue, setShowVenue }) => {
  
  const handleGetStarted = () => {
    setShowVenue(true);
  };

  return (
    <header className="first_page">
      <div className="main_event">
        <div className="first_page_name_btn">
          <h1 className="budget_heading">Conference Expense Planner</h1>
          <p className="budget_sentence">
            {" "}
            Plan your next major event with us!
          </p>
          <div className="getstarted_btn">
            <button
              onClick={() => handleGetStarted()}
              className="get-started-btn"
            >
              Get Started
            </button>
          </div>
        </div>
        <div className="aboutus_main">
          <div className="aboutus_container">
            <p>
              Welcome to BudgetEase Solutions, your trusted partner in
              simplifying budget management and financial solutions. At
              BudgetEase, we understand the importance of effective budget
              planning and strive to provide intuitive, user-friendly solutions
              to meet the diverse needs of our clients.
            </p>
            <p>
              With a commitment to efficiency and innovation, we empower
              individuals and businesses to take control of their finances and
              achieve their goals with ease.
            </p>
            <p>
              At BudgetEase Solutions, our mission is to make budgeting
              effortless and accessible for everyone. Whether you're a small
              business owner, a busy professional, or an individual looking to
              manage your personal finances, we offer tailored solutions to
              streamline your budgeting process.
            </p>
            {/* <p>                Our team of experts is dedicated to providing exceptional service and support, guiding you every step of the way to financial success. With BudgetEase Solutions, you can trust us to simplify your finances and pave the way for a brighter financial future.
            </p> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default WelcomePage;
