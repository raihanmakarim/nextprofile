//import
import s from "./style.module.scss";
import "./globals.css";

import Navbar from "./Navbar/page";
export default function RootLayout({ children }) {
  return (
    <html>
      <head> </head>
      <body className={s.wrapper}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
