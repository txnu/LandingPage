import Footer from "../components/Footer/footer";

import Dashboard from "./Dashboard";
import FrameworkLanguage from "./FrameworkLanguage";
import Partner from "./Partner";
import Project from "./Project";

const Section = () => {
  return (
    <>
      <div className="w-full px-4 sm:px-20">
        <section id="dashboard" className="pt-10">
          <Dashboard />
        </section>
        <section id="framework" className="pt-10">
          <FrameworkLanguage />
        </section>
        <section id="project" className="pt-10">
          <Project />
        </section>
        <section id="partner" className="pt-10">
          <Partner />
        </section>
      </div>
      <Footer />
    </>
  );
};
export default Section;
