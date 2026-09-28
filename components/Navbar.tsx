"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo, Button } from "./UI";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 30);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        document.getElementById("menu-toggle")?.focus();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);
  return (
    <header className={`navbar ${scrolled || open ? "scrolled" : ""}`}>
      <div className="container nav-inner">
        <Logo />
        <nav
          id="main-navigation"
          aria-label="Main navigation"
          className={open ? "is-open" : ""}
        >
          {[
            ["Properties", "properties"],
            ["Buy", "properties"],
            ["Sell", "expertise"],
            ["Agents", "contact"],
            ["About", "about"],
          ].map(([name, id]) => (
            <a key={name} href={`#${id}`} onClick={() => setOpen(false)}>
              {name}
            </a>
          ))}
        </nav>
        <div className="nav-cta">
          <Button href="#contact">Get in Touch</Button>
        </div>
        <button
          id="menu-toggle"
          className="menu-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
