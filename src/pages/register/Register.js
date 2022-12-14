import React, { Component } from "react";
import { connect } from "react-redux";
import authAction from "../../redux/action/auth";
import styles from "./Register.module.css";
import withNavigate from "../../helpers/withNavigate";
import { signup } from "../../utils/api";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../../components/loading/Loading";

import asideImg from "../../assets/img/aside-img.png";
import coffee from "../../assets/img/coffee-1.png";
import google from "../../assets/img/google.png";
import facebook from "../../assets/img/facebook.png";
import twitter from "../../assets/img/twitter.png";
import instagram from "../../assets/img/instagram.png";
import eyeSlash from "../../assets/img/eyeSlash.png";
import eye from "../../assets/img/eye.png";

class Register extends Component {
  state = {
    isPwdShown: false,
    isLoading: false,
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const body = {
      email: event.target.email.value,
      password_user: event.target.password.value,
      phone_number: event.target.phone.value,
    };
    // console.log(body);
    try {
      let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
      if (regex.test(body.email) === false) {
        return toast.warning("Format email wrong", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
        });
      }
      if (body.email > 0 && body.phone_number > 0) {
        return toast.warning("Email/phone number has been registered", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
        });
      }
      // const result = await signup(body);
      await this.props.dispatch(authAction.signUpAction(body));
      toast.success("Register success", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
      setTimeout(() => {
        this.props.navigate("/login");
      }, 3000);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.status, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
    }
  };

  render() {
    const isPending = this.state.isLoading;
    return (
      <>
        <main className={styles.container}>
          <aside className={styles["side-content"]}>
            <img
              className={`${styles["side-image"]} ${styles["full-width"]}`}
              src={asideImg}
              alt="dian-coffeeshop"
            />
          </aside>
          <section className={styles["form-content"]}>
            <section className={styles["wrapper-form"]}>
              <header
                className={`${styles["header-content"]} ${styles["full-width"]}`}
              >
                <section className={styles["logo-coffeeshop"]}>
                  <img
                    className={styles.logo}
                    src={coffee}
                    alt="dian-coffeeshop"
                  />
                  <div
                    onClick={() => this.props.navigate("/")}
                    className={styles["text-logo"]}
                  >
                    Coffee Shop
                  </div>
                </section>
                <section className={styles["text-signup"]}>
                  <p>Sign Up</p>
                </section>
              </header>
              <section
                className={`${styles["register-form"]} ${styles["full-width"]}`}
              >
                <form
                  className={`${styles["full-width"]} ${styles.form}`}
                  onSubmit={this.handleSubmit}
                >
                  <div className={styles["input-div"]}>
                    <label className={styles.label}>Email Address:</label>
                    <input
                      className={`${styles["full-width"]} ${styles.input}`}
                      type="text"
                      name="email"
                      required
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div className={styles["input-div"]}>
                    <label className={styles.label}>Password:</label>
                    <div className={`${styles.pwd} ${styles["full-width"]}`}>
                      <input
                        className={styles.inputPwd}
                        type={this.state.isPwdShown ? "text" : "password"}
                        name="password"
                        required
                        placeholder="Enter your password"
                      />
                      <img
                        className={styles["icon-eye"]}
                        src={this.state.isPwdShown ? eye : eyeSlash}
                        alt=""
                        onClick={() => {
                          const isShown = this.state.isPwdShown;
                          this.setState({ isPwdShown: !isShown });
                          console.log(this.state.isPwdShown);
                        }}
                      />
                    </div>
                  </div>
                  <div className={styles["input-div"]}>
                    <label className={styles.label}>Phone Number:</label>
                    <input
                      className={`${styles["full-width"]} ${styles.input}`}
                      type="number"
                      name="phone"
                      required
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <button
                    className={`${styles.button} ${styles.primary} ${styles.cursor}`}
                    type="submit"
                  >
                    {isPending ? (
                      <div>
                        <Loading />
                      </div>
                    ) : (
                      <p className={styles["btn-text1"]}>Sign Up</p>
                    )}
                  </button>
                  <ToastContainer />
                  <div
                    className={`${styles.button} ${styles.secondary} ${styles.cursor}`}
                  >
                    <img
                      className={styles["logo-google"]}
                      src={google}
                      alt=""
                    />
                    <p className={styles["btn-text2"]}>Sign up with Google</p>
                  </div>
                </form>
              </section>
              <section
                className={`${styles["other-content"]} ${styles["flex-center"]}`}
              >
                <p className={styles["text-login"]}>Already have an account?</p>
                <div
                  onClick={() => this.props.navigate("/login")}
                  className={`${styles.button} ${styles.login} ${styles.cursor}`}
                >
                  <div className={styles["btn-text3"]}>Login Here</div>
                </div>
              </section>
            </section>
            <footer className={`${styles["footer-content"]} ${styles.footer}`}>
              <aside className={styles["about-coffeeshop"]}>
                <section className={styles["logo-coffeeshop"]}>
                  <img
                    className={styles.logo}
                    src={coffee}
                    alt="dian-coffeeshop"
                  />
                  <div
                    onClick={() => this.props.navigate("/")}
                    className={styles["text-logo"]}
                  >
                    Coffee Shop
                  </div>
                </section>
                <p className={styles.coffeeshop}>
                  Coffee Shop is a store that sells some good meals, and
                  especially coffee. We provide high quality beans
                </p>
                <div className={styles["oauth-btn"]}>
                  <img
                    className={`${styles.cursor} ${styles["bg-sosmed"]}`}
                    src={facebook}
                    alt="google"
                  />
                  <img
                    className={`${styles.cursor} ${styles["bg-sosmed"]}`}
                    src={twitter}
                    alt="facebook"
                  />
                  <img
                    className={`${styles.cursor} ${styles["bg-sosmed"]}`}
                    src={instagram}
                    alt="twitter"
                  />
                </div>
                <p className={styles.copyright}>&#169;2020CoffeeStore</p>
              </aside>
              <aside className={styles["app-info"]}>
                <div className={styles.app}>
                  <p className={styles["text-app"]}>Product</p>
                  <div className={styles.text}>
                    <div className={styles.text1}>
                      <p className={styles["text-info"]}>Download</p>
                      <p className={styles["text-info"]}>Locations</p>
                      <p className={styles["text-info"]}>Blog</p>
                    </div>
                    <div className={styles.text2}>
                      <p className={styles["text-info"]}>Pricing</p>
                      <p className={styles["text-info"]}>Contries</p>
                    </div>
                  </div>
                  <p className={styles["text-app"]}>Engage</p>
                  <div className={styles.text}>
                    <div className={styles.text1}>
                      <p className={styles["text-info"]}>Coffee Shop?</p>
                      <p className={styles["text-info"]}>FAQ</p>
                      <p className={styles["text-info"]}>Term of Service</p>
                    </div>
                    <div className={styles.text2}>
                      <p className={styles["text-info"]}>About Us</p>
                      <p className={styles["text-info"]}>Privacy Policy</p>
                    </div>
                  </div>
                </div>
              </aside>
            </footer>
          </section>
        </main>
      </>
    );
  }
}
const mapStateToProps = (reduxState) => {
  return reduxState;
};

export default connect(mapStateToProps)(withNavigate(Register));
