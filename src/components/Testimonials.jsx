import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section
    id="clients"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
  >
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h1 className={styles.heading2}>
        What people are <br className="sm:block hidden" /> saying about us
      </h1>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Discover what our clients are saying about us. Read firsthand
          experiences and positive feedback highlighting our trusted technology
          solutions and our ability to help them achieve their goals.
        </p>
      </div>
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>

    <h1>FeedBack Form</h1>
    <div className="w-[310px] h-[410px] flex flex-col justify-between items-center bg-slate-600 rounded-lg border-2 border-white text-white">
      <form className="h-52 w-full p-4 space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          name="name"
          className="inputClass"
        />
        <input
          type="text"
          placeholder="Your Email"
          name="email"
          className="inputClass"
        />
        <textarea
          type="text"
          placeholder="Your Feedback"
          className="inputClass"
          style={{ textAlign: "center" }}
        ></textarea>
      </form>
      <button
        type="button"
        className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px] mb-[70px]`}
      >
        Submit Feedback
      </button>
    </div>
  </section>
);

export default Testimonials;
