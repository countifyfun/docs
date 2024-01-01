import React from "react";
import styles from "./index.module.css";

function Footer() {
  return (
    <footer aria-labelledby="footer-heading" className={styles.footer}>
      <div>
        <a href="https://countify.fun" className={styles.footer_name_container}>
          <img
            src="https://countify.fun/logo.png"
            alt="Countify Logo"
            width={35}
            height={35}
            className={styles.footer_image}
          />
          <h1 className={styles.footer_name}>Countify</h1>
        </a>
        <p className={styles.footer_copyright}>
          © {new Date().getFullYear()}{" "}
          <a href="https://github.com/countifyfun">Countify Labs</a> (a
          subdivision of{" "}
          <a href="https://youtube.com/@graphifystatistics">Graphify Studios</a>
          ). All rights reserved.
        </p>
      </div>
    </footer>
  );
}
export default React.memo(Footer);
