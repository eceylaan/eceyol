import Link from "next/link";
import "./signup.css";
import { signup } from "../action";
export default function Signup() {
  return (
    <>
      <form action={signup} class="form-containerr">
        <div class="grid">
          <div class="input-group">
            <label for="firstName" class="label">
              Ad
            </label>
            <div class="input-container">
              <svg
                class="input-icon"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 2.25c1.242 0 2.25 1.008 2.25 2.25s-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25 1.008-2.25 2.25-2.25zm0 3.75c.414 0 .75-.336.75-.75s-.336-.75-.75-.75-.75.336-.75.75.336.75.75.75zm0 4.5c-2.484 0-4.5 2.016-4.5 4.5v2.25h9v-2.25c0-2.484-2.016-4.5-4.5-4.5z"
                />
              </svg>

              <input type="text" id="firstName" name="firstName" class="input" placeholder="Ad" required />
            </div>
          </div>

          <div class="input-group">
            <label for="lastName" class="label">
              Soyad
            </label>
            <div class="input-container">
              <svg
                class="input-icon"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 2.25c1.242 0 2.25 1.008 2.25 2.25s-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25 1.008-2.25 2.25-2.25zm0 3.75c.414 0 .75-.336.75-.75s-.336-.75-.75-.75-.75.336-.75.75.336.75.75.75zm0 4.5c-2.484 0-4.5 2.016-4.5 4.5v2.25h9v-2.25c0-2.484-2.016-4.5-4.5-4.5z"
                />
              </svg>

              <input type="text" id="lastName" name="lastName" class="input" placeholder="Soyad" required />
            </div>
          </div>
        </div>

        <div class="input-group">
          <label for="email" class="label">
            E-posta
          </label>
          <div class="input-container">
            <svg
              class="input-icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.75 8.25v8.567c0 .9-.729 1.633-1.629 1.633H3.879c-.9 0-1.629-.733-1.629-1.633V8.25m0 0l9 5.25 9-5.25m-18 0V6.682c0-.9.729-1.633 1.629-1.633h16.242c.9 0 1.629.733 1.629 1.633V8.25"
              />
            </svg>
            <input type="email" id="email" name="email" class="input" placeholder="E-posta adresinizi girin" required />
          </div>
        </div>

        <div class="input-group">
          <label for="phone" class="label">
            Telefon
          </label>
          <div class="input-container">
            <svg class="input-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
              />
            </svg>
            <input type="tel" id="phone" name="phone" class="input" placeholder="0(5--) --- -- --" required />
          </div>
        </div>

        <div class="input-group">
          <label for="password" class="label">
            Şifre
          </label>
          <div class="input-container">
            <svg
              class="input-icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.5 10.5V9a4.5 4.5 0 00-9 0v1.5m-2.25 0h13.5a2.25 2.25 0 012.25 2.25v6a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18.75v-6a2.25 2.25 0 012.25-2.25z"
              />
            </svg>
            <input type="password" id="password" name="password" class="input" placeholder="Şifrenizi girin" required />
            <button type="button" class="password-toggle">
              {/* <svg><!-- Eye icon SVG here --></svg> */}
            </button>
          </div>
        </div>

        <div class="checkbox-container">
          <input type="checkbox" id="terms" class="checkbox" required />
          <label for="terms" class="checkbox-label">
            <a href="#" class="link">
              Hizmet Koşulları
            </a>{" "}
            ve{" "}
            <a href="#" class="link">
              Gizlilik Politikası'nı
            </a>{" "}
            kabul ediyorum
          </label>
        </div>

        <button type="submit" class="button">
          Kayıt Ol
        </button>

        <p class="footer">
          Zaten hesabın var mı?{" "}
          <Link href="/auth/login" class="link">
            Giriş Yap
          </Link>
        </p>
      </form>
    </>
  );
}
