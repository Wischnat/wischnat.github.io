import { SiLinkedin, SiGithub } from "react-icons/si";
import i18n from "../assets/i18n/i18n";

export const Footer = () => {
  return (
    <footer>
      <section>
        <ul className="flex items-center justify-end">
          <li>
            <a
              href="www.linkedin.com/in/julian-wischnat"
              className="relative hidden md:inline-flex w-8 h-8 items-center justify-center mx-1 leading-none text-teal-400 border rounded-3xl border-solid border-teal-400 hover:text-gray-900 hover:duration-300 z-0
            before:w-8 before:h-8 before:absolute before:bg-teal-400 before:duration-300 ease-in-out before:rounded-3xl transition-[0.3s] before:scale-0 hover:before:scale-100 before:-z-10"
            >
              <SiLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Wischnat"
              className="relative hidden md:inline-flex w-8 h-8 items-center justify-center mx-1 leading-none text-teal-400 border rounded-3xl border-solid border-teal-400 hover:text-gray-900 hover:duration-300 z-20
            before:w-8 before:h-8 before:absolute before:bg-teal-400 before:duration-300 ease-in-out before:rounded-3xl before:scale-0 hover:before:scale-100 hover:before:-z-10"
            >
              <SiGithub />
            </a>
          </li>
        </ul>
      </section>
      <hr className="my-4" />
      <section className="flex flex-col items-center justify-center text-sm">
        <p>
          {i18n.t("footer.inspiredBy")}{" "}
          <a className="font-bold" href="https://brittanychiang.com/">
            {i18n.t("footer.brittanyChiang")}
          </a>
        </p>
        <details>
          <summary className="flex justify-center font-bold cursor-pointer">
            {i18n.t("footer.privacyPolicy")}
          </summary>
          <p>
            {i18n.t("footer.GitHubPages")}{" "}
            <a
              href="https://docs.github.com/de/site-policy/privacy-policies/github-privacy-statement"
              className="font-bold"
            >
              {i18n.t("footer.here")}
            </a>
          </p>
        </details>
      </section>
    </footer>
  );
};
