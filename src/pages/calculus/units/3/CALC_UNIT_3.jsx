import React from "react";
import exponentImg from "./chainRuleImg/exponent_test.png";
import exponentImg2 from "./chainRuleImg/exponent_test_2.png";
import exponentImg3 from "./chainRuleImg/exponent-test-3.png";
import exponentImg4 from "./chainRuleImg/exponent-test-4.png";
import implicitOne from "./implicitDiffImg/implicitOne.png";
import implicitTwo from "./implicitDiffImg/implicitTwo.png";
import implicitThree from "./implicitDiffImg/implicitThree.png";
import implicitFour from "./implicitDiffImg/implicitFour.png";
import styles from "./CALC_UNIT_3.module.css";

export default function CALC_UNIT_3() {
  return (
    <div>
      <h1 className={styles.title}>
        Differentiation: Composite, Implicit, and Inverse Functions
      </h1>
      <div className={styles.method_container}>
        <h3 className={styles.header}>Chain Rule</h3>
        <h4 className={styles.description} style={{ marginBottom: 40 }}>
          The chain rule is a formula that expresses the derivative of the
          composition of two differentiable functions f and g in terms of the
          derivatives of f and g. Pretty much you look at the exponent, put that
          number to the front of the function, subtract one from the exponent,
          then take derivative of inside function and put it outside and you're
          done.
        </h4>
        <div className={styles.tutorial_container}>
          <img src={exponentImg} alt="exponent" />
          <h6 className={styles.description}>Look at exponent</h6>

          <img src={exponentImg2} alt="exponent2" />
          <h6 className={styles.description}>Move exponent to the front</h6>

          <img src={exponentImg3} alt="exponent3" />
          <h6 className={styles.description}>Subtract 1 from exponent</h6>

          <img src={exponentImg4} alt="exponent3" />
          <h6 className={styles.description}>
            Take derivative of inside function and place it outside
          </h6>
        </div>
      </div>

      <div className={styles.method_container}>
        <h3 className={styles.header}>Implicit Differentiation</h3>
        <h4 className={styles.description} style={{ marginBottom: 40 }}>
          Every single variable you see, you find the derivative of it. Make
          sure you know what variable you are finding the derivative of.
        </h4>

        <div className={styles.tutorial_container}>
          <img src={implicitOne} alt="implicitOne" />
          <h6 className={styles.description}>
            This means all the "y" variables should have y' next to them after
            you take the derivative.
          </h6>

          <img src={implicitTwo} alt="implicitTwo" />
          <h6 className={styles.description}>Take derivatives. y' is the same thing as dy/dx. (That is NOT y to the power of 1)</h6>

          <img src={implicitThree} alt="implicitThree" />
          <h6 className={styles.description}>Isolate y'. Factor if you need to.</h6>

          <img src={implicitFour} alt="implicitFour"/>
          <h6 className={styles.description}>Done. y' is the same as dy/dx so you can use either one.</h6>

        </div>
      </div>

      <div className={styles.method_container}>
        <h3 className={styles.header}>Inverse Functions</h3>
      </div>
    </div>
  );
}
