import Icon from "@mdi/react";
import { mdilLightbulb, mdilLightbulbOn, mdilMonitor } from "@mdi/light-js";

import { useTheme } from "../hooks/useTheme";

function Footer() {
  const { theme, setTheme, effectiveTheme } = useTheme();

  const baseStyles =
    "ml-auto p-2 flex justify-center items-center border border-transparent rounded-full scale-75 group";

  const nextTheme = effectiveTheme === "dark" ? "light" : "dark";
  const nextIcon = effectiveTheme === "dark" ? mdilLightbulbOn : mdilLightbulb;
  const nextLabel =
    effectiveTheme === "dark"
      ? "Switch to light theme"
      : "Switch to dark theme";

  return (
    <footer>
      <div className="mx-auto mb-2.5 w-11/12 max-w-6xl flex flex-col justify-center items-center gap-2.5">
        <div className="ml-auto flex items-center">
          <button
            onClick={() => setTheme(nextTheme)}
            aria-label={nextLabel}
            title={nextLabel}
            className={`${baseStyles} ${
              theme !== "system"
                ? "bg-green-600"
                : "bg-zinc-500 hover:bg-green-600"
            }`}
          >
            <Icon path={nextIcon} size={1} className="text-zinc-100" />
          </button>
          <button
            onClick={() => setTheme("system")}
            aria-label="Use system theme"
            title="Use system theme"
            className={`${baseStyles} ${
              theme === "system"
                ? "bg-green-600"
                : "bg-zinc-500 hover:bg-green-600"
            }`}
          >
            <Icon path={mdilMonitor} size={1} className="text-zinc-100" />
          </button>
        </div>
        <p className="text-center text-xs font-bold">
          <a
            href="https://github.com/NibboNi/quotes"
            target="_blank"
            className="text-blue-500"
          >
            Repo
          </a>
          <span className="font-thin">__&copy;2025</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
