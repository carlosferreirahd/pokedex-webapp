import HeartIcon from "@components/ui/icons/heart";

export function Footer() {

  return (
    <footer className="w-full bg-base-300 text-base-content z-10">
      <hr className="divider m-0 border-none h-auto" />
      <div className="container">
        <div className="footer footer-center p-4 animate-fade animate-once">
          <aside className="font-semibold">
            <p>
              Made with
              {" "}
              <HeartIcon
                className="inline-block align-middle size-6 text-red-600"
                aria-label="love"
              />
              {" "}
              by
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
