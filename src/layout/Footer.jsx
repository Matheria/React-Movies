export const Footer = () => {
  return (
    <footer className="page-footer grey darken-4">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} React Movies
          <a
            className="grey-text text-lighten-4 right"
            href="https://github.com/Matheria"
          >
            Repository
          </a>
        </div>
      </div>
    </footer>
  );
};
