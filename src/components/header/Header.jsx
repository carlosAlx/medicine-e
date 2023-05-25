import "./header.css";
import Medicine from "../../assets/images/Medicine.svg";
import { AiOutlineSearch } from "react-icons/ai";
import { Card } from "./Card";
import { User } from "./User";

export const Header = () => {
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header");
    header.classList.toggle("active", this.window.scrollY > 100);
  });
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  return (
    <header className="header">
      <div className="scontainer flex">
        <div className="logo">
          <img src={Medicine} alt="medicine" />
        </div>
        <div className="serach flex">
          <AiOutlineSearch className="searchIcon" />
          <input type="text" placeholder="search" />
        </div>
        <div className="acount flexCenter">
          <Card />
          <User />
        </div>
      </div>
    </header>
  );
};
