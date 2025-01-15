import Link from "next/link";
import "../auth.css";
import { login } from "../action";

export default function LoginForm() {
  return (
    <>
      <form action={login} className="form-container">
        <div>
          <label htmlFor="email" name="email" class="label">
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

        <div>
          <label for="password" name="password" class="label">
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
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.98 8.32a9.716 9.716 0 000 7.36m16.04-7.36a9.716 9.716 0 010 7.36m-2.04-5.94a3 3 0 11-4.92 3.77 3 3 0 014.92-3.77zM12 7.5v.008M12 16.5v.008"
                />
              </svg>
            </button>
          </div>
        </div>

        <div class="form-footer">
          <label className="remember" for="remember">
            <input type="checkbox" id="remember" class="checkbox" />
            Beni Hatırla
          </label>
          <a href="#" class="link">
            Şifremi Unuttum
          </a>
        </div>

        <button type="submit" class="button">
          Giriş Yap
        </button>

        <p class="footer-text">
          Hala hesabın yok mu?
          <Link href="/auth/signup" class="footer-link">
            Kayıt Ol
          </Link>
        </p>
      </form>
    </>
  );
}
