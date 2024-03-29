import HeartIcon from "@components/ui/icons/heart";

export function Footer() {

  return (
    <footer className="w-full bg-base-300 text-base-content">
      <hr className="divider m-0 border-none h-auto" />
      <div className="container">
        <div className="footer footer-center p-4">
          <aside className="font-semibold">
            <p>
              Feito com
              {" "}
              <HeartIcon
                className="inline-block align-middle size-6 text-red-600"
                aria-label="amor"
              />
              {" "}
              por
              {" "}
              <a
                className="link link-hover hover:link-primary"
                href="https://github.com/carlosferreirahd"
                target="_blank"
                rel="noopener noreferrer"
              >
                @carlosferreirahd
              </a>
            </p>
          </aside>
        </div>
      </div>
    </footer>
  );
}
