import "@styles/globals.css";
import Nav from "@components/Nav.jsx";
import Provider from "@components/Provider";

export const metadata = {
  title: "promptopia",
  description: "Share ai prompts",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient"></div>
          </div>

          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
