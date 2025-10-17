import { Link } from "../components/Link";

const i18n = {
  es: {
    title: "Sobre nosotros",
    button: "Ir a la home",
    description:
      "¡Hola! Esto es el about de mi proyecto. Este es un clone de React Router.",
  },
  en: {
    title: "About us",
    button: "Go to home page",
    description:
      "Hi! This is the about page of my project. This is a clone of React Router.",
  },
};

const useI18n = (lang) => {
  return i18n[lang] || i18n.ess;
};

export default function AboutPage({ routeParams }) {
  const i18n = useI18n(routeParams.lang ?? "es");

  return (
    <>
      <h1>{i18n.title}</h1>
      <div>
        <p>{i18n.description}</p>
      </div>
      <Link to="/">{i18n.button}</Link>
    </>
  );
}
