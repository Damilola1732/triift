import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();

  return (
    <div className="space-y-6">
      <div
        className={`md:hidden items-center flex items-center space-x-7 pt-8 md:px-6 text-2xs font-medium capitalize`}
      >
        {/* <div
          onClick={() => router.push("http://www.bit.ly/TriiftCapital")}
          className="cursor-pointer border-purple-one hover:bg-purple-one text-purple-one hover:border-purple-one btn btn-outline px-6 capitalize"
        >
          Get capital
        </div> */}

        <div>
          <a
            href="https://paystack.com/pay/consulttriiftafrica"
            className="hover:opacity-80 cursor-pointer"
            target="_blank"
            rel="noreferrer"
          >
            Book a session
          </a>
        </div>

        <div
          onClick={() => router.push("/about")}
          className={
            router.pathname === "/about"
              ? `border-b border-purple-one border-opacity-20 text-purple-one`
              : `hover:opacity-80 cursor-pointer`
          }
        >
          about us
        </div>

        <a
          href="https://medium.com/triift-africa"
          className="hover:opacity-80 cursor-pointer"
          target="_blank"
          rel="noreferrer"
        >
          blog
        </a>
        <a
          href="https://selar.co/m/TriiftAfrica"
          className="hover:opacity-80 cursor-pointer"
          target="_blank"
          rel="noreferrer"
        >
          resources
        </a>
      </div>

      <div className={`flex justify-between items-center`}>
        <div className="text-purple-one flex items-center space-x-5">
          <a
            href="http://www.facebook.com/TriiftAfrica"
            target="_blank"
            rel="noreferrer"
          >
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 cursor-pointer fill-current hover:opacity-90 md:w-7"
              viewBox="0 0 22 22"
            >
              <path d="M 16.65625 3 C 13.860304 3 12.876953 4.415375 12.876953 6.796875 L 12.876953 8.4121094 L 11 8.4121094 L 11 11.470703 L 12.876953 11.470703 L 12.876953 19 L 16.363281 19 L 16.363281 11.470703 L 18.691406 11.470703 L 19 8.4121094 L 16.363281 8.4121094 L 16.369141 7.0898438 C 16.369141 6.3282437 16.440711 5.9199219 17.529297 5.9199219 L 18.984375 5.9199219 L 18.984375 3 L 16.65625 3 z "></path>
            </svg> */}

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              className="w-5 -mr-2 -ml-1.5 cursor-pointer fill-current hover:opacity-90 md:w-6"
            >
              <path d="M16.4,23.9v-8.1h2.7l0.4-3.2h-3.1v-2c0-0.9,0.3-1.5,1.6-1.5l1.7,0V6.2c-0.3,0-1.3-0.1-2.4-0.1  c-2.4,0-4.1,1.5-4.1,4.2v2.3h-2.7v3.2h2.7v8.1H16.4z" />
            </svg>
          </a>

          <a
            href="http://www.instagram.com/triiftafrica/"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 cursor-pointer fill-current hover:opacity-90 md:w-5"
              id="Layer_1"
              x="0px"
              y="0px"
              viewBox="0 0 54 54"
            >
              <rect x="-0.2" y="0.1" fill="none" />
              <path d="M48.1,26.3c0,4.3,0,7.2-0.1,8.8c-0.2,3.9-1.3,6.9-3.5,9s-5.1,3.3-9,3.5c-1.6,0.1-4.6,0.1-8.8,0.1c-4.3,0-7.2,0-8.8-0.1   c-3.9-0.2-6.9-1.3-9-3.5c-2.1-2.1-3.3-5.1-3.5-9c-0.1-1.6-0.1-4.6-0.1-8.8s0-7.2,0.1-8.8c0.2-3.9,1.3-6.9,3.5-9   c2.1-2.1,5.1-3.3,9-3.5c1.6-0.1,4.6-0.1,8.8-0.1c4.3,0,7.2,0,8.8,0.1c3.9,0.2,6.9,1.3,9,3.5s3.3,5.1,3.5,9   C48,19.1,48.1,22,48.1,26.3z M28.8,8.7c-1.3,0-2,0-2.1,0c-0.1,0-0.8,0-2.1,0c-1.3,0-2.3,0-2.9,0c-0.7,0-1.6,0-2.7,0.1   c-1.1,0-2.1,0.1-2.9,0.3c-0.8,0.1-1.5,0.3-2,0.5c-0.9,0.4-1.7,0.9-2.5,1.6c-0.7,0.7-1.2,1.5-1.6,2.5c-0.2,0.5-0.4,1.2-0.5,2   s-0.2,1.7-0.3,2.9c0,1.1-0.1,2-0.1,2.7c0,0.7,0,1.7,0,2.9c0,1.3,0,2,0,2.1s0,0.8,0,2.1c0,1.3,0,2.3,0,2.9c0,0.7,0,1.6,0.1,2.7   c0,1.1,0.1,2.1,0.3,2.9s0.3,1.5,0.5,2c0.4,0.9,0.9,1.7,1.6,2.5c0.7,0.7,1.5,1.2,2.5,1.6c0.5,0.2,1.2,0.4,2,0.5   c0.8,0.1,1.7,0.2,2.9,0.3s2,0.1,2.7,0.1c0.7,0,1.7,0,2.9,0c1.3,0,2,0,2.1,0c0.1,0,0.8,0,2.1,0c1.3,0,2.3,0,2.9,0   c0.7,0,1.6,0,2.7-0.1c1.1,0,2.1-0.1,2.9-0.3c0.8-0.1,1.5-0.3,2-0.5c0.9-0.4,1.7-0.9,2.5-1.6c0.7-0.7,1.2-1.5,1.6-2.5   c0.2-0.5,0.4-1.2,0.5-2c0.1-0.8,0.2-1.7,0.3-2.9c0-1.1,0.1-2,0.1-2.7c0-0.7,0-1.7,0-2.9c0-1.3,0-2,0-2.1s0-0.8,0-2.1   c0-1.3,0-2.3,0-2.9c0-0.7,0-1.6-0.1-2.7c0-1.1-0.1-2.1-0.3-2.9c-0.1-0.8-0.3-1.5-0.5-2c-0.4-0.9-0.9-1.7-1.6-2.5   c-0.7-0.7-1.5-1.2-2.5-1.6c-0.5-0.2-1.2-0.4-2-0.5c-0.8-0.1-1.7-0.2-2.9-0.3c-1.1,0-2-0.1-2.7-0.1C31.1,8.7,30.1,8.7,28.8,8.7z    M34.4,18.5c2.1,2.1,3.2,4.7,3.2,7.8s-1.1,5.6-3.2,7.8c-2.1,2.1-4.7,3.2-7.8,3.2c-3.1,0-5.6-1.1-7.8-3.2c-2.1-2.1-3.2-4.7-3.2-7.8   s1.1-5.6,3.2-7.8c2.1-2.1,4.7-3.2,7.8-3.2C29.7,15.3,32.3,16.3,34.4,18.5z M31.7,31.3c1.4-1.4,2.1-3.1,2.1-5s-0.7-3.7-2.1-5.1   c-1.4-1.4-3.1-2.1-5.1-2.1c-2,0-3.7,0.7-5.1,2.1s-2.1,3.1-2.1,5.1s0.7,3.7,2.1,5c1.4,1.4,3.1,2.1,5.1,2.1   C28.6,33.4,30.3,32.7,31.7,31.3z M39.9,13c0.5,0.5,0.8,1.1,0.8,1.8c0,0.7-0.3,1.3-0.8,1.8c-0.5,0.5-1.1,0.8-1.8,0.8   s-1.3-0.3-1.8-0.8c-0.5-0.5-0.8-1.1-0.8-1.8c0-0.7,0.3-1.3,0.8-1.8c0.5-0.5,1.1-0.8,1.8-0.8S39.4,12.5,39.9,13z" />
            </svg>
          </a>

          <a
            href="https://twitter.com/triiftafrica"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              className="w-3 cursor-pointer fill-current hover:opacity-90 md:w-5"
              viewBox="0 0 248 204"
            >
              <path d="M221.95,51.29c0.15,2.17,0.15,4.34,0.15,6.53c0,66.73-50.8,143.69-143.69,143.69v-0.04   C50.97,201.51,24.1,193.65,1,178.83c3.99,0.48,8,0.72,12.02,0.73c22.74,0.02,44.83-7.61,62.72-21.66   c-21.61-0.41-40.56-14.5-47.18-35.07c7.57,1.46,15.37,1.16,22.8-0.87C27.8,117.2,10.85,96.5,10.85,72.46c0-0.22,0-0.43,0-0.64   c7.02,3.91,14.88,6.08,22.92,6.32C11.58,63.31,4.74,33.79,18.14,10.71c25.64,31.55,63.47,50.73,104.08,52.76   c-4.07-17.54,1.49-35.92,14.61-48.25c20.34-19.12,52.33-18.14,71.45,2.19c11.31-2.23,22.15-6.38,32.07-12.26   c-3.77,11.69-11.66,21.62-22.2,27.93c10.01-1.18,19.79-3.86,29-7.95C240.37,35.29,231.83,44.14,221.95,51.29z" />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/company/triiftafrica/"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="w-3 cursor-pointer fill-current hover:opacity-90 md:w-4"
            >
              <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
            </svg>
          </a>

          <a
            href="https://wa.me/message/ZJ7GKTAQOKNYA1"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 fill-current md:w-5"
              viewBox="0 0 54 54"
            >
              <rect x="-0.2" y="0.1" fill="none" />
              <path d="M18.9,6.3c2.6-1.1,5.3-1.7,8.2-1.7c2.8,0,5.6,0.6,8.2,1.7c2.6,1.1,4.8,2.6,6.7,4.5c1.9,1.9,3.4,4.1,4.5,6.7   c1.1,2.6,1.7,5.3,1.7,8.2c0,2.8-0.6,5.6-1.7,8.2s-2.6,4.8-4.5,6.7c-1.9,1.9-4.1,3.4-6.7,4.5s-5.3,1.7-8.2,1.7   c-3.6,0-7-0.9-10.2-2.6L5.2,47.9L9,36.6c-2-3.3-3-6.9-3-10.9c0-2.8,0.6-5.6,1.7-8.2c1.1-2.6,2.6-4.8,4.5-6.7   C14,8.9,16.3,7.5,18.9,6.3z M27,43.2c2.4,0,4.6-0.5,6.8-1.4c2.2-0.9,4-2.2,5.6-3.7s2.8-3.4,3.7-5.6s1.4-4.4,1.4-6.8   s-0.5-4.6-1.4-6.8c-0.9-2.2-2.2-4-3.7-5.6s-3.4-2.8-5.6-3.7c-2.2-0.9-4.4-1.4-6.8-1.4c-2.4,0-4.6,0.5-6.8,1.4   c-2.2,0.9-4,2.2-5.6,3.7s-2.8,3.4-3.7,5.6c-0.9,2.2-1.4,4.4-1.4,6.8c0,3.8,1.1,7.2,3.3,10.3l-2.2,6.5l6.8-2.1   C20.3,42.3,23.6,43.2,27,43.2z M31.2,29.8c0.7-0.9,1.2-1.4,1.5-1.4c0.2,0,1.1,0.4,2.7,1.2c1.6,0.8,2.4,1.3,2.5,1.5   c0,0.1,0.1,0.2,0.1,0.4c0,0.6-0.2,1.3-0.5,2.1c-0.3,0.7-1,1.3-2,1.8c-1,0.5-2,0.7-2.8,0.7c-1.1,0-2.8-0.6-5.3-1.7   c-1.8-0.8-3.4-1.9-4.7-3.3c-1.3-1.4-2.7-3.1-4.1-5.2c-1.3-2-2-3.8-2-5.4v-0.2c0.1-1.7,0.7-3.2,2.1-4.4c0.4-0.4,0.9-0.6,1.5-0.6   c0.1,0,0.3,0,0.5,0c0.2,0,0.4,0,0.5,0c0.4,0,0.6,0.1,0.7,0.2c0.1,0.1,0.3,0.4,0.4,0.8c0.1,0.4,0.5,1.2,0.9,2.5   c0.5,1.3,0.7,2,0.7,2.1c0,0.4-0.3,0.9-1,1.6c-0.6,0.7-1,1.1-1,1.3c0,0.1,0,0.3,0.1,0.4c0.6,1.4,1.6,2.6,2.8,3.8   c1,1,2.4,1.9,4.2,2.8c0.2,0.1,0.4,0.2,0.6,0.2C30,31.1,30.5,30.7,31.2,29.8z" />
            </svg>
          </a>

          <a
            href="https://medium.com/triift-africa"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 fill-current md:w-5"
              viewBox="0 0 493.32 280.17"
            >
              <path d="M139.13,0C62.29,0,0,62.7,0,140.08S62.29,280.17,139.13,280.17s139.13-62.72,139.13-140.09S216,0,139.13,0Z" />
              <ellipse cx="361.33" cy="140.08" rx="69.57" ry="131.87" />
              <path d="M468.86,21.94c-13.52,0-24.47,52.91-24.47,118.14s10.95,118.15,24.47,118.15,24.46-52.89,24.46-118.15S482.38,21.94,468.86,21.94Z" />
            </svg>
          </a>

          <a href="http://t.me/triiftafrica" target="_blank" rel="noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 fill-current md:w-5"
              viewBox="0 0 240.2 240.2"
            >
              <path d="M120.1,0A120.1,120.1,0,1,0,240.2,120.1,120.1,120.1,0,0,0,120.1,0Zm55.6,81.6c-1.8,19-9.6,65.1-13.6,86.3-1.7,9-5,12-8.2,12.3-7,.6-12.3-4.6-19-9-10.6-6.9-16.5-11.2-26.8-18-11.9-7.8-4.2-12.1,2.6-19.1,1.8-1.8,32.5-29.8,33.1-32.3a2.38,2.38,0,0,0-.6-2.1,2.75,2.75,0,0,0-2.5-.2c-1.1.2-17.9,11.4-50.6,33.5-4.8,3.3-9.1,4.9-13,4.8-4.3-.1-12.5-2.4-18.7-4.4-7.5-2.4-13.5-3.7-13-7.9.3-2.2,3.3-4.4,8.9-6.7q52.5-22.8,70-30.2c33.3-13.9,40.3-16.3,44.8-16.4a8,8,0,0,1,4.7,1.4,5.29,5.29,0,0,1,1.7,3.3A17.28,17.28,0,0,1,175.7,81.6Z" />
            </svg>
          </a>
        </div>
        <div className="text-xs md:text-sm">&copy; Triift Africa.</div>
      </div>
    </div>
  );
}
