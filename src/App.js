import Header from "./Components/Header";
import SideNav from "./Components/SideNav";
import Main from "./Components/Main";
import Section from "./Components/Section";
import ServCard from "./Components/ServCard";
import ProjCard from "./Components/ProjCard";
import Skill from "./Components/Skill";
import ContCard from "./Components/ContCard";
import Footer from "./Components/Footer";

import "./Style/style.css";
import "./Style/variables.css";
import "./Style/dark_mode.css";
import "./Style/responsive.css";
import "./Assets/all.min.css";

import { ServCards, ContCards, ProjCards } from "./Data";

function App() {
  const ServCardsDataShow = ServCards.map((item, index) => (
    <ServCard
      key={index}
      iconClass={item.iconClass}
      title={item.title}
      Descrption={item.Descrption}
    />
  ));

  const ContCardsDataShow = ContCards.map((item, index) => (
    <ContCard
      key={index}
      iconClass={item.iconClass}
      title={item.title}
      Descrption={item.Descrption}
    />
  ));

  const ProjCardsDataShow = [];
  for (let i = 0; i < ProjCards.length; i++) {
    let ShowSkills = ProjCards[i].skills.map((item, index) => (
      <Skill key={index} skill={item} />
    ));

    ProjCardsDataShow[i] = (
      <ProjCard
        key={i}
        img={ProjCards[i].img}
        title={ProjCards[i].title}
        category={ProjCards[i].category}
        moreDetails={ProjCards[i].moreDetails}
        skills={ShowSkills}
      />
    );
  }

  return (
    <div className="App">
      <Header />
      <SideNav />
      <Main />
      <Section title="Services" id="services" containt={ServCardsDataShow} />
      <Section
        title="Projects"
        id="projects"
        bgColor="var(--color-primary)"
        containt={ProjCardsDataShow}
      />
      <Section
        title="Let's work together"
        id="contact"
        containt={ContCardsDataShow}
      />
      <Footer />
    </div>
  );
}

export default App;
