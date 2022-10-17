<template>
  <aside class="w-64 shadow-xl" aria-label="Sidebar">
    <div
      class="
        overflow-y-auto
        py-4
        px-3
        h-screen
        bg-gray-50
        text-xs
        rounded
        dark:bg-gray-800
      "
    >
      <div class="mb-5">
        <a href="/" class="flex items-center">
          <img
            src="../assets/images/logoDigilearn.png"
            class="mr-3 h-6 sm:h-9"
            alt="Digilearn Logo"
          />
          <span
            class="
              self-center
              text-xl text-[#D2000F]
              whitespace-nowrap
              dark:text-white
            "
            >Digilearn</span
          >
        </a>
      </div>
      <ul class="space-y-2">
        <li>
          <router-link
            to="/"
            class="
              flex
              items-center
              p-2
              font-normal
              text-gray-900
              rounded-lg
              dark:text-white
              hover:bg-cb-20
              dark:hover:bg-gray-700
            "
            ><svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M21.6 8.2168L12.6 1.22474C12.2 0.925085 11.7 0.925085 11.4 1.22474L2.4 8.2168C2.1 8.41657 2 8.71623 2 9.01589V20.0034C2 21.7015 3.3 23 5 23H19C20.7 23 22 21.7015 22 20.0034V9.01589C22 8.71623 21.9 8.41657 21.6 8.2168ZM14 13.0114V21.0023H10V13.0114H14ZM19 21.0023C19.6 21.0023 20 20.6027 20 20.0034V9.51532L12 3.32236L4 9.51532V20.0034C4 20.6027 4.4 21.0023 5 21.0023H8V12.0125C8 11.4132 8.4 11.0136 9 11.0136H15C15.6 11.0136 16 11.4132 16 12.0125V21.0023H19Z"
                fill="#1F2855"
              />
              <mask
                id="mask0_794_3024"
                style="mask-type: alpha"
                maskUnits="userSpaceOnUse"
                x="2"
                y="1"
                width="20"
                height="22"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M21.6 8.2168L12.6 1.22474C12.2 0.925085 11.7 0.925085 11.4 1.22474L2.4 8.2168C2.1 8.41657 2 8.71623 2 9.01589V20.0034C2 21.7015 3.3 23 5 23H19C20.7 23 22 21.7015 22 20.0034V9.01589C22 8.71623 21.9 8.41657 21.6 8.2168ZM14 13.0114V21.0023H10V13.0114H14ZM19 21.0023C19.6 21.0023 20 20.6027 20 20.0034V9.51532L12 3.32236L4 9.51532V20.0034C4 20.6027 4.4 21.0023 5 21.0023H8V12.0125C8 11.4132 8.4 11.0136 9 11.0136H15C15.6 11.0136 16 11.4132 16 12.0125V21.0023H19Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask0_794_3024)">
                <rect width="24" height="24" fill="#1F2855" />
              </g>
            </svg>

            <span class="ml-3">Dashboard</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.7 12.7L9.7 18.7C9.5 18.9 9.3 19 9 19C8.7 19 8.5 18.9 8.3 18.7C7.9 18.3 7.9 17.7 8.3 17.3L13.6 12L8.3 6.7C7.9 6.3 7.9 5.7 8.3 5.3C8.7 4.9 9.3 4.9 9.7 5.3L15.7 11.3C16.1 11.7 16.1 12.3 15.7 12.7Z"
                fill="#1F2855"
              />
              <mask
                id="mask0_794_3036"
                style="mask-type: alpha"
                maskUnits="userSpaceOnUse"
                x="8"
                y="5"
                width="8"
                height="14"
              >
                <path
                  d="M15.7 12.7L9.7 18.7C9.5 18.9 9.3 19 9 19C8.7 19 8.5 18.9 8.3 18.7C7.9 18.3 7.9 17.7 8.3 17.3L13.6 12L8.3 6.7C7.9 6.3 7.9 5.7 8.3 5.3C8.7 4.9 9.3 4.9 9.7 5.3L15.7 11.3C16.1 11.7 16.1 12.3 15.7 12.7Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask0_794_3036)">
                <rect width="24" height="24" fill="#1F2855" />
              </g>
            </svg>
          </router-link>
        </li>

        <div class="uppercase text-xs text-cb-40 ml-2">Clone management</div>
        <li>
          <div v-if="active">
            <button
              type="button"
              class="
                flex
                items-center
                p-2
                w-full
                bg-cb-20
                shadow-lg
                font-normal
                text-gray-900
                rounded-lg
                transition
                duration-75
                group
                hover:bg-cb-20
                dark:text-white dark:hover:bg-gray-700
              "
              @click="toggle"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.3 0.599988L21.3 4.59999C22.4 5.09999 23 6.09999 23 7.19999V16.7C23 17.9 22.3 18.9 21.3 19.4L13.3 23.4C12.9 23.6 12.5 23.7 12 23.7C11.6 23.7 11.1 23.6 10.7 23.4L2.7 19.4C1.6 18.9 1 17.8 1 16.7V7.19999C1 6.09999 1.6 5.09999 2.6 4.59999L10.6 0.599988C11.5 0.199988 12.5 0.199988 13.3 0.599988ZM12 2.19999C11.9 2.19999 11.7 2.19999 11.6 2.29999L4.2 5.99999L12 9.89999L19.8 5.99999L12.4 2.29999C12.3 2.19999 12.2 2.19999 12 2.19999ZM3.5 17.7C3.2 17.5 3 17.1 3 16.8V7.59999L11 11.6V21.4L3.5 17.7ZM13 21.4L20.4 17.7C20.8 17.5 21 17.2 21 16.8V7.59999L13 11.6V21.4Z"
                  fill="#457B9D"
                />
                <mask
                  id="mask0_794_3046"
                  style="mask-type: alpha"
                  maskUnits="userSpaceOnUse"
                  x="1"
                  y="0"
                  width="22"
                  height="24"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.3 0.599988L21.3 4.59999C22.4 5.09999 23 6.09999 23 7.19999V16.7C23 17.9 22.3 18.9 21.3 19.4L13.3 23.4C12.9 23.6 12.5 23.7 12 23.7C11.6 23.7 11.1 23.6 10.7 23.4L2.7 19.4C1.6 18.9 1 17.8 1 16.7V7.19999C1 6.09999 1.6 5.09999 2.6 4.59999L10.6 0.599988C11.5 0.199988 12.5 0.199988 13.3 0.599988ZM12 2.19999C11.9 2.19999 11.7 2.19999 11.6 2.29999L4.2 5.99999L12 9.89999L19.8 5.99999L12.4 2.29999C12.3 2.19999 12.2 2.19999 12 2.19999ZM3.5 17.7C3.2 17.5 3 17.1 3 16.8V7.59999L11 11.6V21.4L3.5 17.7ZM13 21.4L20.4 17.7C20.8 17.5 21 17.2 21 16.8V7.59999L13 11.6V21.4Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask0_794_3046)">
                  <rect width="24" height="24" fill="#457B9D" />
                </g>
              </svg>

              <span class="flex-1 ml-3 text-left whitespace-nowrap text-cb-100"
                >Content</span
              >
            </button>
          </div>
          <div v-else>
            <button
              type="button"
              class="
                flex
                items-center
                p-2
                w-full
                font-normal
                text-gray-900
                rounded-lg
                transition
                duration-75
                group
                hover:bg-cb-20
                dark:text-white dark:hover:bg-gray-700
              "
              @click="toggle"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.3 0.599988L21.3 4.59999C22.4 5.09999 23 6.09999 23 7.19999V16.7C23 17.9 22.3 18.9 21.3 19.4L13.3 23.4C12.9 23.6 12.5 23.7 12 23.7C11.6 23.7 11.1 23.6 10.7 23.4L2.7 19.4C1.6 18.9 1 17.8 1 16.7V7.19999C1 6.09999 1.6 5.09999 2.6 4.59999L10.6 0.599988C11.5 0.199988 12.5 0.199988 13.3 0.599988ZM12 2.19999C11.9 2.19999 11.7 2.19999 11.6 2.29999L4.2 5.99999L12 9.89999L19.8 5.99999L12.4 2.29999C12.3 2.19999 12.2 2.19999 12 2.19999ZM3.5 17.7C3.2 17.5 3 17.1 3 16.8V7.59999L11 11.6V21.4L3.5 17.7ZM13 21.4L20.4 17.7C20.8 17.5 21 17.2 21 16.8V7.59999L13 11.6V21.4Z"
                  fill="#457B9D"
                />
                <mask
                  id="mask0_794_3046"
                  style="mask-type: alpha"
                  maskUnits="userSpaceOnUse"
                  x="1"
                  y="0"
                  width="22"
                  height="24"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.3 0.599988L21.3 4.59999C22.4 5.09999 23 6.09999 23 7.19999V16.7C23 17.9 22.3 18.9 21.3 19.4L13.3 23.4C12.9 23.6 12.5 23.7 12 23.7C11.6 23.7 11.1 23.6 10.7 23.4L2.7 19.4C1.6 18.9 1 17.8 1 16.7V7.19999C1 6.09999 1.6 5.09999 2.6 4.59999L10.6 0.599988C11.5 0.199988 12.5 0.199988 13.3 0.599988ZM12 2.19999C11.9 2.19999 11.7 2.19999 11.6 2.29999L4.2 5.99999L12 9.89999L19.8 5.99999L12.4 2.29999C12.3 2.19999 12.2 2.19999 12 2.19999ZM3.5 17.7C3.2 17.5 3 17.1 3 16.8V7.59999L11 11.6V21.4L3.5 17.7ZM13 21.4L20.4 17.7C20.8 17.5 21 17.2 21 16.8V7.59999L13 11.6V21.4Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask0_794_3046)">
                  <rect width="24" height="24" fill="#457B9D" />
                </g>
              </svg>

              <span class="flex-1 ml-3 text-left whitespace-nowrap text-cb-100"
                >Content</span
              >
            </button>
          </div>

          <div>
            <ul v-if="active">
              <li>
                <button
                  class="
                    flex
                    items-center
                    p-2
                    w-full
                    font-normal
                    text-cb-100
                    rounded-lg
                    transition
                    duration-75
                    group
                    hover:bg-rc-100
                  "
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.583496 6.99998C0.583496 3.44165 3.44183 0.583313 7.00016 0.583313C10.5585 0.583313 13.4168 3.44165 13.4168 6.99998C13.4168 10.5583 10.5585 13.4166 7.00016 13.4166C3.44183 13.4166 0.583496 10.5583 0.583496 6.99998ZM1.75016 6.99998C1.75016 9.91665 4.0835 12.25 7.00016 12.25C9.91683 12.25 12.2502 9.91665 12.2502 6.99998C12.2502 4.08331 9.91683 1.74998 7.00016 1.74998C4.0835 1.74998 1.75016 4.08331 1.75016 6.99998Z"
                      fill="#457B9D"
                    />
                    <mask
                      id="mask0_794_3067"
                      style="mask-type: alpha"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="14"
                      height="14"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.583496 6.99998C0.583496 3.44165 3.44183 0.583313 7.00016 0.583313C10.5585 0.583313 13.4168 3.44165 13.4168 6.99998C13.4168 10.5583 10.5585 13.4166 7.00016 13.4166C3.44183 13.4166 0.583496 10.5583 0.583496 6.99998ZM1.75016 6.99998C1.75016 9.91665 4.0835 12.25 7.00016 12.25C9.91683 12.25 12.2502 9.91665 12.2502 6.99998C12.2502 4.08331 9.91683 1.74998 7.00016 1.74998C4.0835 1.74998 1.75016 4.08331 1.75016 6.99998Z"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask0_794_3067)">
                      <rect width="14" height="14" fill="#457B9D" />
                    </g>
                  </svg>
                  <p class="flex-1 ml-3 text-left whitespace-nowrap">
                    Assignment
                  </p>
                </button>
              </li>
              <li>
                <button
                  class="
                    flex
                    items-center
                    p-2
                    w-full
                    font-normal
                    text-cb-100
                    rounded-lg
                    transition
                    duration-75
                    group
                    hover:bg-rc-100
                  "
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.583496 6.99998C0.583496 3.44165 3.44183 0.583313 7.00016 0.583313C10.5585 0.583313 13.4168 3.44165 13.4168 6.99998C13.4168 10.5583 10.5585 13.4166 7.00016 13.4166C3.44183 13.4166 0.583496 10.5583 0.583496 6.99998ZM1.75016 6.99998C1.75016 9.91665 4.0835 12.25 7.00016 12.25C9.91683 12.25 12.2502 9.91665 12.2502 6.99998C12.2502 4.08331 9.91683 1.74998 7.00016 1.74998C4.0835 1.74998 1.75016 4.08331 1.75016 6.99998Z"
                      fill="#457B9D"
                    />
                    <mask
                      id="mask0_794_3067"
                      style="mask-type: alpha"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="14"
                      height="14"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.583496 6.99998C0.583496 3.44165 3.44183 0.583313 7.00016 0.583313C10.5585 0.583313 13.4168 3.44165 13.4168 6.99998C13.4168 10.5583 10.5585 13.4166 7.00016 13.4166C3.44183 13.4166 0.583496 10.5583 0.583496 6.99998ZM1.75016 6.99998C1.75016 9.91665 4.0835 12.25 7.00016 12.25C9.91683 12.25 12.2502 9.91665 12.2502 6.99998C12.2502 4.08331 9.91683 1.74998 7.00016 1.74998C4.0835 1.74998 1.75016 4.08331 1.75016 6.99998Z"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask0_794_3067)">
                      <rect width="14" height="14" fill="#457B9D" />
                    </g>
                  </svg>
                  <p class="flex-1 ml-3 text-left whitespace-nowrap">Webinar</p>
                </button>
              </li>
              <li>
                <button
                  class="
                    flex
                    items-center
                    p-2
                    w-full
                    font-normal
                    text-cb-100
                    rounded-lg
                    transition
                    duration-75
                    group
                    hover:bg-rc-100
                  "
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.583496 6.99998C0.583496 3.44165 3.44183 0.583313 7.00016 0.583313C10.5585 0.583313 13.4168 3.44165 13.4168 6.99998C13.4168 10.5583 10.5585 13.4166 7.00016 13.4166C3.44183 13.4166 0.583496 10.5583 0.583496 6.99998ZM1.75016 6.99998C1.75016 9.91665 4.0835 12.25 7.00016 12.25C9.91683 12.25 12.2502 9.91665 12.2502 6.99998C12.2502 4.08331 9.91683 1.74998 7.00016 1.74998C4.0835 1.74998 1.75016 4.08331 1.75016 6.99998Z"
                      fill="#457B9D"
                    />
                    <mask
                      id="mask0_794_3067"
                      style="mask-type: alpha"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="14"
                      height="14"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.583496 6.99998C0.583496 3.44165 3.44183 0.583313 7.00016 0.583313C10.5585 0.583313 13.4168 3.44165 13.4168 6.99998C13.4168 10.5583 10.5585 13.4166 7.00016 13.4166C3.44183 13.4166 0.583496 10.5583 0.583496 6.99998ZM1.75016 6.99998C1.75016 9.91665 4.0835 12.25 7.00016 12.25C9.91683 12.25 12.2502 9.91665 12.2502 6.99998C12.2502 4.08331 9.91683 1.74998 7.00016 1.74998C4.0835 1.74998 1.75016 4.08331 1.75016 6.99998Z"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask0_794_3067)">
                      <rect width="14" height="14" fill="#457B9D" />
                    </g>
                  </svg>
                  <p class="flex-1 ml-3 text-left whitespace-nowrap">Video</p>
                </button>
              </li>
              <li>
                <button
                  class="
                    flex
                    items-center
                    p-2
                    w-full
                    font-normal
                    text-cb-100
                    rounded-lg
                    transition
                    duration-75
                    group
                    hover:bg-rc-100
                  "
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.583496 6.99998C0.583496 3.44165 3.44183 0.583313 7.00016 0.583313C10.5585 0.583313 13.4168 3.44165 13.4168 6.99998C13.4168 10.5583 10.5585 13.4166 7.00016 13.4166C3.44183 13.4166 0.583496 10.5583 0.583496 6.99998ZM1.75016 6.99998C1.75016 9.91665 4.0835 12.25 7.00016 12.25C9.91683 12.25 12.2502 9.91665 12.2502 6.99998C12.2502 4.08331 9.91683 1.74998 7.00016 1.74998C4.0835 1.74998 1.75016 4.08331 1.75016 6.99998Z"
                      fill="#457B9D"
                    />
                    <mask
                      id="mask0_794_3067"
                      style="mask-type: alpha"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="14"
                      height="14"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.583496 6.99998C0.583496 3.44165 3.44183 0.583313 7.00016 0.583313C10.5585 0.583313 13.4168 3.44165 13.4168 6.99998C13.4168 10.5583 10.5585 13.4166 7.00016 13.4166C3.44183 13.4166 0.583496 10.5583 0.583496 6.99998ZM1.75016 6.99998C1.75016 9.91665 4.0835 12.25 7.00016 12.25C9.91683 12.25 12.2502 9.91665 12.2502 6.99998C12.2502 4.08331 9.91683 1.74998 7.00016 1.74998C4.0835 1.74998 1.75016 4.08331 1.75016 6.99998Z"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask0_794_3067)">
                      <rect width="14" height="14" fill="#457B9D" />
                    </g>
                  </svg>
                  <p class="flex-1 ml-3 text-left whitespace-nowrap">Podcast</p>
                </button>
              </li>
              <li>
                <button
                  class="
                    flex
                    items-center
                    p-2
                    w-full
                    font-normal
                    text-cb-100
                    rounded-lg
                    transition
                    duration-75
                    group
                    hover:bg-rc-100
                  "
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.583496 6.99998C0.583496 3.44165 3.44183 0.583313 7.00016 0.583313C10.5585 0.583313 13.4168 3.44165 13.4168 6.99998C13.4168 10.5583 10.5585 13.4166 7.00016 13.4166C3.44183 13.4166 0.583496 10.5583 0.583496 6.99998ZM1.75016 6.99998C1.75016 9.91665 4.0835 12.25 7.00016 12.25C9.91683 12.25 12.2502 9.91665 12.2502 6.99998C12.2502 4.08331 9.91683 1.74998 7.00016 1.74998C4.0835 1.74998 1.75016 4.08331 1.75016 6.99998Z"
                      fill="#457B9D"
                    />
                    <mask
                      id="mask0_794_3067"
                      style="mask-type: alpha"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="14"
                      height="14"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.583496 6.99998C0.583496 3.44165 3.44183 0.583313 7.00016 0.583313C10.5585 0.583313 13.4168 3.44165 13.4168 6.99998C13.4168 10.5583 10.5585 13.4166 7.00016 13.4166C3.44183 13.4166 0.583496 10.5583 0.583496 6.99998ZM1.75016 6.99998C1.75016 9.91665 4.0835 12.25 7.00016 12.25C9.91683 12.25 12.2502 9.91665 12.2502 6.99998C12.2502 4.08331 9.91683 1.74998 7.00016 1.74998C4.0835 1.74998 1.75016 4.08331 1.75016 6.99998Z"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask0_794_3067)">
                      <rect width="14" height="14" fill="#457B9D" />
                    </g>
                  </svg>
                  <p class="flex-1 ml-3 text-left whitespace-nowrap">Files</p>
                </button>
              </li>
              <li>
                <button
                  class="
                    flex
                    items-center
                    p-2
                    w-full
                    font-normal
                    text-cb-100
                    rounded-lg
                    transition
                    duration-75
                    group
                    hover:bg-rc-100
                  "
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.583496 6.99998C0.583496 3.44165 3.44183 0.583313 7.00016 0.583313C10.5585 0.583313 13.4168 3.44165 13.4168 6.99998C13.4168 10.5583 10.5585 13.4166 7.00016 13.4166C3.44183 13.4166 0.583496 10.5583 0.583496 6.99998ZM1.75016 6.99998C1.75016 9.91665 4.0835 12.25 7.00016 12.25C9.91683 12.25 12.2502 9.91665 12.2502 6.99998C12.2502 4.08331 9.91683 1.74998 7.00016 1.74998C4.0835 1.74998 1.75016 4.08331 1.75016 6.99998Z"
                      fill="#457B9D"
                    />
                    <mask
                      id="mask0_794_3067"
                      style="mask-type: alpha"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="14"
                      height="14"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.583496 6.99998C0.583496 3.44165 3.44183 0.583313 7.00016 0.583313C10.5585 0.583313 13.4168 3.44165 13.4168 6.99998C13.4168 10.5583 10.5585 13.4166 7.00016 13.4166C3.44183 13.4166 0.583496 10.5583 0.583496 6.99998ZM1.75016 6.99998C1.75016 9.91665 4.0835 12.25 7.00016 12.25C9.91683 12.25 12.2502 9.91665 12.2502 6.99998C12.2502 4.08331 9.91683 1.74998 7.00016 1.74998C4.0835 1.74998 1.75016 4.08331 1.75016 6.99998Z"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask0_794_3067)">
                      <rect width="14" height="14" fill="#457B9D" />
                    </g>
                  </svg>
                  <p class="flex-1 ml-3 text-left whitespace-nowrap">
                    Certificate
                  </p>
                </button>
              </li>
              <li>
                <router-link
                  class="
                    flex
                    items-center
                    p-2
                    w-full
                    font-normal
                    text-cb-100
                    rounded-lg
                    transition
                    duration-75
                    group
                    hover:bg-rc-100
                  "
                  to="/course/add-course"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.583496 6.99998C0.583496 3.44165 3.44183 0.583313 7.00016 0.583313C10.5585 0.583313 13.4168 3.44165 13.4168 6.99998C13.4168 10.5583 10.5585 13.4166 7.00016 13.4166C3.44183 13.4166 0.583496 10.5583 0.583496 6.99998ZM1.75016 6.99998C1.75016 9.91665 4.0835 12.25 7.00016 12.25C9.91683 12.25 12.2502 9.91665 12.2502 6.99998C12.2502 4.08331 9.91683 1.74998 7.00016 1.74998C4.0835 1.74998 1.75016 4.08331 1.75016 6.99998Z"
                      fill="#457B9D"
                    />
                    <mask
                      id="mask0_794_3067"
                      style="mask-type: alpha"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="14"
                      height="14"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.583496 6.99998C0.583496 3.44165 3.44183 0.583313 7.00016 0.583313C10.5585 0.583313 13.4168 3.44165 13.4168 6.99998C13.4168 10.5583 10.5585 13.4166 7.00016 13.4166C3.44183 13.4166 0.583496 10.5583 0.583496 6.99998ZM1.75016 6.99998C1.75016 9.91665 4.0835 12.25 7.00016 12.25C9.91683 12.25 12.2502 9.91665 12.2502 6.99998C12.2502 4.08331 9.91683 1.74998 7.00016 1.74998C4.0835 1.74998 1.75016 4.08331 1.75016 6.99998Z"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask0_794_3067)">
                      <rect width="14" height="14" fill="#457B9D" />
                    </g>
                  </svg>
                  <p class="flex-1 ml-3 text-left whitespace-nowrap">Course</p>
                </router-link>
              </li>
              <li>
                <button
                  class="
                    flex
                    items-center
                    p-2
                    w-full
                    font-normal
                    text-cb-100
                    rounded-lg
                    transition
                    duration-75
                    group
                    hover:bg-rc-100
                  "
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.583496 6.99998C0.583496 3.44165 3.44183 0.583313 7.00016 0.583313C10.5585 0.583313 13.4168 3.44165 13.4168 6.99998C13.4168 10.5583 10.5585 13.4166 7.00016 13.4166C3.44183 13.4166 0.583496 10.5583 0.583496 6.99998ZM1.75016 6.99998C1.75016 9.91665 4.0835 12.25 7.00016 12.25C9.91683 12.25 12.2502 9.91665 12.2502 6.99998C12.2502 4.08331 9.91683 1.74998 7.00016 1.74998C4.0835 1.74998 1.75016 4.08331 1.75016 6.99998Z"
                      fill="#457B9D"
                    />
                    <mask
                      id="mask0_794_3067"
                      style="mask-type: alpha"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="14"
                      height="14"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.583496 6.99998C0.583496 3.44165 3.44183 0.583313 7.00016 0.583313C10.5585 0.583313 13.4168 3.44165 13.4168 6.99998C13.4168 10.5583 10.5585 13.4166 7.00016 13.4166C3.44183 13.4166 0.583496 10.5583 0.583496 6.99998ZM1.75016 6.99998C1.75016 9.91665 4.0835 12.25 7.00016 12.25C9.91683 12.25 12.2502 9.91665 12.2502 6.99998C12.2502 4.08331 9.91683 1.74998 7.00016 1.74998C4.0835 1.74998 1.75016 4.08331 1.75016 6.99998Z"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask0_794_3067)">
                      <rect width="14" height="14" fill="#457B9D" />
                    </g>
                  </svg>
                  <p class="flex-1 ml-3 text-left whitespace-nowrap">
                    Pathways
                  </p>
                </button>
              </li>
              <li>
                <button
                  class="
                    flex
                    items-center
                    p-2
                    w-full
                    font-normal
                    text-cb-100
                    rounded-lg
                    transition
                    duration-75
                    group
                    hover:bg-rc-100
                  "
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.583496 6.99998C0.583496 3.44165 3.44183 0.583313 7.00016 0.583313C10.5585 0.583313 13.4168 3.44165 13.4168 6.99998C13.4168 10.5583 10.5585 13.4166 7.00016 13.4166C3.44183 13.4166 0.583496 10.5583 0.583496 6.99998ZM1.75016 6.99998C1.75016 9.91665 4.0835 12.25 7.00016 12.25C9.91683 12.25 12.2502 9.91665 12.2502 6.99998C12.2502 4.08331 9.91683 1.74998 7.00016 1.74998C4.0835 1.74998 1.75016 4.08331 1.75016 6.99998Z"
                      fill="#457B9D"
                    />
                    <mask
                      id="mask0_794_3067"
                      style="mask-type: alpha"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="14"
                      height="14"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.583496 6.99998C0.583496 3.44165 3.44183 0.583313 7.00016 0.583313C10.5585 0.583313 13.4168 3.44165 13.4168 6.99998C13.4168 10.5583 10.5585 13.4166 7.00016 13.4166C3.44183 13.4166 0.583496 10.5583 0.583496 6.99998ZM1.75016 6.99998C1.75016 9.91665 4.0835 12.25 7.00016 12.25C9.91683 12.25 12.2502 9.91665 12.2502 6.99998C12.2502 4.08331 9.91683 1.74998 7.00016 1.74998C4.0835 1.74998 1.75016 4.08331 1.75016 6.99998Z"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask0_794_3067)">
                      <rect width="14" height="14" fill="#457B9D" />
                    </g>
                  </svg>
                  <p class="flex-1 ml-3 text-left whitespace-nowrap">Voucher</p>
                </button>
              </li>
              <li>
                <button
                  class="
                    flex
                    items-center
                    p-2
                    w-full
                    font-normal
                    text-cb-100
                    rounded-lg
                    transition
                    duration-75
                    group
                    hover:bg-rc-100
                  "
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.583496 6.99998C0.583496 3.44165 3.44183 0.583313 7.00016 0.583313C10.5585 0.583313 13.4168 3.44165 13.4168 6.99998C13.4168 10.5583 10.5585 13.4166 7.00016 13.4166C3.44183 13.4166 0.583496 10.5583 0.583496 6.99998ZM1.75016 6.99998C1.75016 9.91665 4.0835 12.25 7.00016 12.25C9.91683 12.25 12.2502 9.91665 12.2502 6.99998C12.2502 4.08331 9.91683 1.74998 7.00016 1.74998C4.0835 1.74998 1.75016 4.08331 1.75016 6.99998Z"
                      fill="#457B9D"
                    />
                    <mask
                      id="mask0_794_3067"
                      style="mask-type: alpha"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="14"
                      height="14"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.583496 6.99998C0.583496 3.44165 3.44183 0.583313 7.00016 0.583313C10.5585 0.583313 13.4168 3.44165 13.4168 6.99998C13.4168 10.5583 10.5585 13.4166 7.00016 13.4166C3.44183 13.4166 0.583496 10.5583 0.583496 6.99998ZM1.75016 6.99998C1.75016 9.91665 4.0835 12.25 7.00016 12.25C9.91683 12.25 12.2502 9.91665 12.2502 6.99998C12.2502 4.08331 9.91683 1.74998 7.00016 1.74998C4.0835 1.74998 1.75016 4.08331 1.75016 6.99998Z"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask0_794_3067)">
                      <rect width="14" height="14" fill="#457B9D" />
                    </g>
                  </svg>
                  <p class="flex-1 ml-3 text-left whitespace-nowrap">Quiz</p>
                </button>
              </li>
              <li>
                <button
                  class="
                    flex
                    items-center
                    p-2
                    w-full
                    font-normal
                    text-cb-100
                    rounded-lg
                    transition
                    duration-75
                    group
                    hover:bg-rc-100
                  "
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.583496 6.99998C0.583496 3.44165 3.44183 0.583313 7.00016 0.583313C10.5585 0.583313 13.4168 3.44165 13.4168 6.99998C13.4168 10.5583 10.5585 13.4166 7.00016 13.4166C3.44183 13.4166 0.583496 10.5583 0.583496 6.99998ZM1.75016 6.99998C1.75016 9.91665 4.0835 12.25 7.00016 12.25C9.91683 12.25 12.2502 9.91665 12.2502 6.99998C12.2502 4.08331 9.91683 1.74998 7.00016 1.74998C4.0835 1.74998 1.75016 4.08331 1.75016 6.99998Z"
                      fill="#457B9D"
                    />
                    <mask
                      id="mask0_794_3067"
                      style="mask-type: alpha"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="14"
                      height="14"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.583496 6.99998C0.583496 3.44165 3.44183 0.583313 7.00016 0.583313C10.5585 0.583313 13.4168 3.44165 13.4168 6.99998C13.4168 10.5583 10.5585 13.4166 7.00016 13.4166C3.44183 13.4166 0.583496 10.5583 0.583496 6.99998ZM1.75016 6.99998C1.75016 9.91665 4.0835 12.25 7.00016 12.25C9.91683 12.25 12.2502 9.91665 12.2502 6.99998C12.2502 4.08331 9.91683 1.74998 7.00016 1.74998C4.0835 1.74998 1.75016 4.08331 1.75016 6.99998Z"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask0_794_3067)">
                      <rect width="14" height="14" fill="#457B9D" />
                    </g>
                  </svg>
                  <p class="flex-1 ml-3 text-left whitespace-nowrap">
                    Category
                  </p>
                </button>
              </li>
              <li>
                <button
                  class="
                    flex
                    items-center
                    p-2
                    w-full
                    font-normal
                    text-cb-100
                    rounded-lg
                    transition
                    duration-75
                    group
                    hover:bg-rc-100
                  "
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.583496 6.99998C0.583496 3.44165 3.44183 0.583313 7.00016 0.583313C10.5585 0.583313 13.4168 3.44165 13.4168 6.99998C13.4168 10.5583 10.5585 13.4166 7.00016 13.4166C3.44183 13.4166 0.583496 10.5583 0.583496 6.99998ZM1.75016 6.99998C1.75016 9.91665 4.0835 12.25 7.00016 12.25C9.91683 12.25 12.2502 9.91665 12.2502 6.99998C12.2502 4.08331 9.91683 1.74998 7.00016 1.74998C4.0835 1.74998 1.75016 4.08331 1.75016 6.99998Z"
                      fill="#457B9D"
                    />
                    <mask
                      id="mask0_794_3067"
                      style="mask-type: alpha"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="14"
                      height="14"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.583496 6.99998C0.583496 3.44165 3.44183 0.583313 7.00016 0.583313C10.5585 0.583313 13.4168 3.44165 13.4168 6.99998C13.4168 10.5583 10.5585 13.4166 7.00016 13.4166C3.44183 13.4166 0.583496 10.5583 0.583496 6.99998ZM1.75016 6.99998C1.75016 9.91665 4.0835 12.25 7.00016 12.25C9.91683 12.25 12.2502 9.91665 12.2502 6.99998C12.2502 4.08331 9.91683 1.74998 7.00016 1.74998C4.0835 1.74998 1.75016 4.08331 1.75016 6.99998Z"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask0_794_3067)">
                      <rect width="14" height="14" fill="#457B9D" />
                    </g>
                  </svg>
                  <p class="flex-1 ml-3 text-left whitespace-nowrap">
                    Competicies
                  </p>
                </button>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <a
            href="#"
            class="
              flex
              items-center
              p-2
              font-normal
              text-gray-900
              rounded-lg
              dark:text-white
              hover:bg-cb-20
              dark:hover:bg-gray-700
            "
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7 7C7 4.2 9.2 2 12 2C14.8 2 17 4.2 17 7C17 9.8 14.8 12 12 12C9.2 12 7 9.8 7 7ZM21 19V21C21 21.6 20.6 22 20 22C19.4 22 19 21.6 19 21V19C19 17.3 17.7 16 16 16H8C6.3 16 5 17.3 5 19V21C5 21.6 4.6 22 4 22C3.4 22 3 21.6 3 21V19C3 16.2 5.2 14 8 14H16C18.8 14 21 16.2 21 19ZM12 10C10.3 10 9 8.7 9 7C9 5.3 10.3 4 12 4C13.7 4 15 5.3 15 7C15 8.7 13.7 10 12 10Z"
                fill="#1F2855"
              />
              <mask
                id="mask0_794_3201"
                style="mask-type: alpha"
                maskUnits="userSpaceOnUse"
                x="3"
                y="2"
                width="18"
                height="20"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7 7C7 4.2 9.2 2 12 2C14.8 2 17 4.2 17 7C17 9.8 14.8 12 12 12C9.2 12 7 9.8 7 7ZM21 19V21C21 21.6 20.6 22 20 22C19.4 22 19 21.6 19 21V19C19 17.3 17.7 16 16 16H8C6.3 16 5 17.3 5 19V21C5 21.6 4.6 22 4 22C3.4 22 3 21.6 3 21V19C3 16.2 5.2 14 8 14H16C18.8 14 21 16.2 21 19ZM12 10C10.3 10 9 8.7 9 7C9 5.3 10.3 4 12 4C13.7 4 15 5.3 15 7C15 8.7 13.7 10 12 10Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask0_794_3201)">
                <rect width="24" height="24" fill="#1F2855" />
              </g>
            </svg>

            <span class="flex-1 ml-3 whitespace-nowrap">Account </span>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="
              flex
              items-center
              p-2
              font-normal
              text-gray-900
              rounded-lg
              dark:text-white
              hover:bg-cb-20
              dark:hover:bg-gray-700
            "
            ><svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.3 15.4C20.4 15.2 20.6 15 21 15C22.7 15 24 13.7 24 12C24 10.3 22.7 9 21 9H20.8C20.6 9 20.4 8.9 20.3 8.7C20.3 8.6 20.3 8.6 20.2 8.5C20.1 8.3 20.1 8 20.4 7.7C21.6 6.5 21.6 4.6 20.4 3.5C19.8 2.9 19.1 2.6 18.3 2.6C17.5 2.6 16.7 2.9 16.1 3.5C15.9 3.7 15.6 3.7 15.4 3.6C15.2 3.6 15 3.3 15 3C15 1.3 13.7 0 12 0C10.3 0 9 1.3 9 3V3.2C9 3.4 8.9 3.6 8.7 3.7C8.6575 3.7 8.63307 3.7 8.61134 3.70767C8.58194 3.71806 8.5575 3.7425 8.5 3.8C8.3 3.9 8 3.8 7.7 3.6C6.5 2.4 4.6 2.4 3.5 3.6C2.3 4.8 2.3 6.7 3.6 7.9C3.8 8.1 3.8 8.4 3.7 8.7C3.6 8.9 3.3 9.1 3 9.1C1.3 9.1 0 10.4 0 12.1C0 13.8 1.3 15.1 3 15.1H3.2C3.5 15.1 3.7 15.3 3.8 15.5C3.9 15.7 3.9 16 3.6 16.3C3 16.9 2.7 17.6 2.7 18.4C2.7 19.2 3 19.9 3.6 20.5C4.8 21.7 6.7 21.7 7.9 20.4C8.1 20.2 8.4 20.2 8.7 20.3C9 20.4 9.1 20.6 9.1 21C9.1 22.7 10.4 24 12.1 24C13.8 24 15.1 22.7 15.1 21V20.8C15.1 20.5 15.3 20.3 15.5 20.2C15.7 20.1 16 20.1 16.3 20.4C17.5 21.6 19.4 21.6 20.5 20.4C21.7 19.2 21.7 17.3 20.4 16.1C20.3 15.9 20.2 15.6 20.3 15.4ZM8 12C8 9.8 9.8 8 12 8C14.2 8 16 9.8 16 12C16 14.2 14.2 16 12 16C9.8 16 8 14.2 8 12ZM10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10C10.9 10 10 10.9 10 12ZM19.1 17.6C18.3 16.7 18.1 15.6 18.5 14.6C18.9 13.6 19.9 13 20.9 13C21.6 13 22 12.6 22 12C22 11.4 21.6 11 21 11H20.8C19.8 11 18.8 10.4 18.4 9.4C18.3 9.3 18.3 9.2 18.3 9.1C18 8.2 18.2 7.1 18.9 6.4C19.4 5.9 19.4 5.3 19 4.9C18.8 4.7 18.6 4.6 18.3 4.6C18 4.6 17.8 4.7 17.6 4.9C16.7 5.7 15.6 5.9 14.6 5.5C13.6 5.1 13 4.2 13 3.1C13 2.4 12.6 2 12 2C11.4 2 11 2.4 11 3V3.2C11 4.2 10.4 5.2 9.4 5.6C9.3 5.7 9.2 5.7 9.1 5.7C8.2 6 7.1 5.8 6.4 5.1C5.9 4.6 5.3 4.6 4.9 5C4.5 5.4 4.5 6 4.9 6.4C5.7 7.3 5.9 8.4 5.5 9.4C5.1 10.4 4.2 11.1 3.1 11.1H3C2.4 11.1 2 11.5 2 12.1C2 12.7 2.4 13.1 3 13.1H3.2C4.2 13.1 5.2 13.7 5.6 14.7C6.1 15.7 5.9 16.8 5.1 17.6C4.8 17.9 4.7 18.1 4.7 18.4C4.7 18.7 4.8 18.9 5 19.1C5.4 19.5 6 19.5 6.4 19.1C6.9 18.6 7.6 18.3 8.3 18.3C8.7 18.3 9.1 18.3 9.4 18.5C10.4 18.9 11.1 19.8 11.1 20.9V21C11.1 21.6 11.5 22 12.1 22C12.7 22 13.1 21.6 13.1 21V20.8C13.1 19.8 13.7 18.8 14.7 18.4C15.7 17.9 16.8 18.1 17.6 18.9C17.9 19.2 18.1 19.3 18.4 19.3C18.7 19.3 18.9 19.2 19.1 19C19.3 18.8 19.4 18.6 19.4 18.3C19.4 18 19.3 17.8 19.1 17.6Z"
                fill="#1F2855"
              />
              <mask
                id="mask0_794_3222"
                style="mask-type: alpha"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="24"
                height="24"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M20.3 15.4C20.4 15.2 20.6 15 21 15C22.7 15 24 13.7 24 12C24 10.3 22.7 9 21 9H20.8C20.6 9 20.4 8.9 20.3 8.7C20.3 8.6 20.3 8.6 20.2 8.5C20.1 8.3 20.1 8 20.4 7.7C21.6 6.5 21.6 4.6 20.4 3.5C19.8 2.9 19.1 2.6 18.3 2.6C17.5 2.6 16.7 2.9 16.1 3.5C15.9 3.7 15.6 3.7 15.4 3.6C15.2 3.6 15 3.3 15 3C15 1.3 13.7 0 12 0C10.3 0 9 1.3 9 3V3.2C9 3.4 8.9 3.6 8.7 3.7C8.6575 3.7 8.63307 3.7 8.61134 3.70767C8.58194 3.71806 8.5575 3.7425 8.5 3.8C8.3 3.9 8 3.8 7.7 3.6C6.5 2.4 4.6 2.4 3.5 3.6C2.3 4.8 2.3 6.7 3.6 7.9C3.8 8.1 3.8 8.4 3.7 8.7C3.6 8.9 3.3 9.1 3 9.1C1.3 9.1 0 10.4 0 12.1C0 13.8 1.3 15.1 3 15.1H3.2C3.5 15.1 3.7 15.3 3.8 15.5C3.9 15.7 3.9 16 3.6 16.3C3 16.9 2.7 17.6 2.7 18.4C2.7 19.2 3 19.9 3.6 20.5C4.8 21.7 6.7 21.7 7.9 20.4C8.1 20.2 8.4 20.2 8.7 20.3C9 20.4 9.1 20.6 9.1 21C9.1 22.7 10.4 24 12.1 24C13.8 24 15.1 22.7 15.1 21V20.8C15.1 20.5 15.3 20.3 15.5 20.2C15.7 20.1 16 20.1 16.3 20.4C17.5 21.6 19.4 21.6 20.5 20.4C21.7 19.2 21.7 17.3 20.4 16.1C20.3 15.9 20.2 15.6 20.3 15.4ZM8 12C8 9.8 9.8 8 12 8C14.2 8 16 9.8 16 12C16 14.2 14.2 16 12 16C9.8 16 8 14.2 8 12ZM10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10C10.9 10 10 10.9 10 12ZM19.1 17.6C18.3 16.7 18.1 15.6 18.5 14.6C18.9 13.6 19.9 13 20.9 13C21.6 13 22 12.6 22 12C22 11.4 21.6 11 21 11H20.8C19.8 11 18.8 10.4 18.4 9.4C18.3 9.3 18.3 9.2 18.3 9.1C18 8.2 18.2 7.1 18.9 6.4C19.4 5.9 19.4 5.3 19 4.9C18.8 4.7 18.6 4.6 18.3 4.6C18 4.6 17.8 4.7 17.6 4.9C16.7 5.7 15.6 5.9 14.6 5.5C13.6 5.1 13 4.2 13 3.1C13 2.4 12.6 2 12 2C11.4 2 11 2.4 11 3V3.2C11 4.2 10.4 5.2 9.4 5.6C9.3 5.7 9.2 5.7 9.1 5.7C8.2 6 7.1 5.8 6.4 5.1C5.9 4.6 5.3 4.6 4.9 5C4.5 5.4 4.5 6 4.9 6.4C5.7 7.3 5.9 8.4 5.5 9.4C5.1 10.4 4.2 11.1 3.1 11.1H3C2.4 11.1 2 11.5 2 12.1C2 12.7 2.4 13.1 3 13.1H3.2C4.2 13.1 5.2 13.7 5.6 14.7C6.1 15.7 5.9 16.8 5.1 17.6C4.8 17.9 4.7 18.1 4.7 18.4C4.7 18.7 4.8 18.9 5 19.1C5.4 19.5 6 19.5 6.4 19.1C6.9 18.6 7.6 18.3 8.3 18.3C8.7 18.3 9.1 18.3 9.4 18.5C10.4 18.9 11.1 19.8 11.1 20.9V21C11.1 21.6 11.5 22 12.1 22C12.7 22 13.1 21.6 13.1 21V20.8C13.1 19.8 13.7 18.8 14.7 18.4C15.7 17.9 16.8 18.1 17.6 18.9C17.9 19.2 18.1 19.3 18.4 19.3C18.7 19.3 18.9 19.2 19.1 19C19.3 18.8 19.4 18.6 19.4 18.3C19.4 18 19.3 17.8 19.1 17.6Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask0_794_3222)">
                <rect width="24" height="24" fill="#1F2855" />
              </g>
            </svg>

            <span class="flex-1 ml-3 whitespace-nowrap">Setting</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="
              flex
              items-center
              p-2
              font-normal
              text-gray-900
              rounded-lg
              dark:text-white
              hover:bg-cb-20
              dark:hover:bg-gray-700
            "
            ><svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M23 12C23 12.6 22.5999 13 21.9997 13H11.9969C11.3968 13 10.9966 12.6 10.9966 12V2C10.9966 1.4 11.3968 1 11.9969 1C18.0986 1 23 5.9 23 12ZM22.0997 16.3C20.3993 20.5 16.2981 23 11.9969 23C10.5965 23 9.09612 22.7 7.69572 22.1C2.09416 19.7 -0.506567 13.3 1.8941 7.7C2.99441 5.1 4.99497 3 7.5957 1.9C8.09584 1.7 8.696 1.9 8.89606 2.4C9.09612 2.9 8.89606 3.5 8.39592 3.7C6.29533 4.7 4.59486 6.4 3.69461 8.5C1.79408 13.1 3.89466 18.4 8.49595 20.3C13.0972 22.2 18.3987 20.1 20.2992 15.5C20.4993 15 21.0995 14.8 21.5996 15C22.0997 15.2 22.2998 15.8 22.0997 16.3ZM12.9972 3.1C17.0984 3.5 20.3993 6.8 20.8994 11H12.9972V3.1Z"
                fill="#1F2855"
              />
              <mask
                id="mask0_794_3245"
                style="mask-type: alpha"
                maskUnits="userSpaceOnUse"
                x="1"
                y="1"
                width="22"
                height="22"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M23 12C23 12.6 22.5999 13 21.9997 13H11.9969C11.3968 13 10.9966 12.6 10.9966 12V2C10.9966 1.4 11.3968 1 11.9969 1C18.0986 1 23 5.9 23 12ZM22.0997 16.3C20.3993 20.5 16.2981 23 11.9969 23C10.5965 23 9.09612 22.7 7.69572 22.1C2.09416 19.7 -0.506567 13.3 1.8941 7.7C2.99441 5.1 4.99497 3 7.5957 1.9C8.09584 1.7 8.696 1.9 8.89606 2.4C9.09612 2.9 8.89606 3.5 8.39592 3.7C6.29533 4.7 4.59486 6.4 3.69461 8.5C1.79408 13.1 3.89466 18.4 8.49595 20.3C13.0972 22.2 18.3987 20.1 20.2992 15.5C20.4993 15 21.0995 14.8 21.5996 15C22.0997 15.2 22.2998 15.8 22.0997 16.3ZM12.9972 3.1C17.0984 3.5 20.3993 6.8 20.8994 11H12.9972V3.1Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask0_794_3245)">
                <rect width="24" height="24" fill="#1F2855" />
              </g>
            </svg>

            <span class="flex-1 ml-3 whitespace-nowrap">Analytic</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="
              flex
              items-center
              p-2
              font-normal
              text-gray-900
              rounded-lg
              dark:text-white
              hover:bg-cb-20
              dark:hover:bg-gray-700
            "
            ><svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M23 12C23 14.4 22.2 16.6 20.9 18.4C20.9 18.5 20.8 18.6 20.7 18.7C18.7 21.4 15.5 23.1 11.9 23.1C11.7 23.1 11.5 23.075 11.3 23.05C11.1 23.025 10.9 23 10.7 23H10.6C6.7 22.5 3.4 19.9 1.9 16.5V16.4C1.3 15 1 13.5 1 12C1 9.6 1.8 7.4 3.1 5.6C3.1 5.55 3.125 5.525 3.15 5.5C3.175 5.475 3.2 5.45 3.2 5.4C5.2 2.7 8.4 1 12 1C12.4 1 12.8 1 13.2 1.1H13.3C17.3 1.6 20.6 4.1 22.1 7.6V7.7C22.7 9 23 10.5 23 12ZM10.2 15H13.7L15.4 12L13.7 9H10.2L8.5 12L10.2 15ZM3 12C3 10.6 3.3 9.2 3.9 8L7.9 15H3.5C3.2 14.1 3 13.1 3 12ZM20.4 9H16L20 16C20.6 14.8 20.9 13.4 20.9 12C20.9 10.9 20.7 9.9 20.4 9ZM19.5 7H11.4L13.6 3.2C16.1 3.6 18.2 5 19.5 7ZM7.4 10L11.4 3C8.9 3.2 6.7 4.4 5.2 6.2L7.4 10ZM4.5 17H12.6L10.4 20.8C7.9 20.4 5.8 19 4.5 17ZM16.6 14L12.6 21C15.1 20.8 17.3 19.6 18.8 17.8L16.6 14Z"
                fill="#1F2855"
              />
              <mask
                id="mask0_794_3266"
                style="mask-type: alpha"
                maskUnits="userSpaceOnUse"
                x="1"
                y="1"
                width="22"
                height="23"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M23 12C23 14.4 22.2 16.6 20.9 18.4C20.9 18.5 20.8 18.6 20.7 18.7C18.7 21.4 15.5 23.1 11.9 23.1C11.7 23.1 11.5 23.075 11.3 23.05C11.1 23.025 10.9 23 10.7 23H10.6C6.7 22.5 3.4 19.9 1.9 16.5V16.4C1.3 15 1 13.5 1 12C1 9.6 1.8 7.4 3.1 5.6C3.1 5.55 3.125 5.525 3.15 5.5C3.175 5.475 3.2 5.45 3.2 5.4C5.2 2.7 8.4 1 12 1C12.4 1 12.8 1 13.2 1.1H13.3C17.3 1.6 20.6 4.1 22.1 7.6V7.7C22.7 9 23 10.5 23 12ZM10.2 15H13.7L15.4 12L13.7 9H10.2L8.5 12L10.2 15ZM3 12C3 10.6 3.3 9.2 3.9 8L7.9 15H3.5C3.2 14.1 3 13.1 3 12ZM20.4 9H16L20 16C20.6 14.8 20.9 13.4 20.9 12C20.9 10.9 20.7 9.9 20.4 9ZM19.5 7H11.4L13.6 3.2C16.1 3.6 18.2 5 19.5 7ZM7.4 10L11.4 3C8.9 3.2 6.7 4.4 5.2 6.2L7.4 10ZM4.5 17H12.6L10.4 20.8C7.9 20.4 5.8 19 4.5 17ZM16.6 14L12.6 21C15.1 20.8 17.3 19.6 18.8 17.8L16.6 14Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask0_794_3266)">
                <rect width="24" height="24" fill="#1F2855" />
              </g>
            </svg>

            <span class="flex-1 ml-3 whitespace-nowrap">Branding</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="
              flex
              items-center
              p-2
              font-normal
              text-gray-900
              rounded-lg
              dark:text-white
              hover:bg-cb-20
              dark:hover:bg-gray-700
            "
            ><svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.6049 14.7719C17.9073 14.5713 18.1088 14.3706 18.3104 14.1699L21.3339 11.1596C23.6519 8.85177 23.5512 4.93843 21.0316 2.7309C18.7135 0.423033 14.9846 0.423033 12.6665 2.7309L10.9532 4.43672C10.5501 4.83808 10.5501 5.44014 10.9532 5.84151C11.3563 6.24287 11.961 6.24287 12.3642 5.84151L14.0775 4.13569C15.69 2.63056 18.1088 2.63056 19.7214 4.13569C21.3339 5.64082 21.3339 8.14937 19.8222 9.75485L16.7987 12.7651C16.6979 12.9658 16.5971 13.0661 16.3955 13.1665C14.5814 14.4709 12.0618 14.1699 10.7516 12.3637C10.4493 11.9624 9.7438 11.862 9.34067 12.1631C8.93753 12.4641 8.83675 13.1665 9.1391 13.5678C10.3485 15.1733 12.1626 15.9761 13.9767 15.9761C15.2869 15.9761 16.4963 15.5747 17.6049 14.7719ZM9.7438 19.7891L11.4571 18.0832C11.8603 17.6819 12.5657 17.7822 12.9689 18.1836C13.372 18.5849 13.372 19.187 12.9689 19.5884L11.2556 21.2942C10.0462 22.3979 8.5344 23 7.02264 23C5.51089 23 3.99913 22.3979 2.78973 21.2942C0.471707 18.9863 0.370924 15.1733 2.68895 12.7651L5.71246 9.75485L6.31716 9.15279C7.62735 8.14937 9.23988 7.748 10.7516 8.04903C12.2634 8.24971 13.6744 9.05245 14.6822 10.3569C14.9846 10.7583 14.8838 11.4607 14.4806 11.7617C14.0775 12.0627 13.372 11.9624 13.0697 11.561C12.465 10.6579 11.5579 10.1562 10.4493 9.95553C9.34067 9.85519 8.33283 10.1562 7.42578 10.7583L7.02264 11.1596L3.99913 14.1699C2.48738 15.675 2.48738 18.2839 4.09992 19.7891C5.71246 21.2942 8.13126 21.2942 9.7438 19.7891Z"
                fill="#1F2855"
              />
              <mask
                id="mask0_794_3296"
                style="mask-type: alpha"
                maskUnits="userSpaceOnUse"
                x="1"
                y="1"
                width="22"
                height="22"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.6049 14.7719C17.9073 14.5713 18.1088 14.3706 18.3104 14.1699L21.3339 11.1596C23.6519 8.85177 23.5512 4.93843 21.0316 2.7309C18.7135 0.423033 14.9846 0.423033 12.6665 2.7309L10.9532 4.43672C10.5501 4.83808 10.5501 5.44014 10.9532 5.84151C11.3563 6.24287 11.961 6.24287 12.3642 5.84151L14.0775 4.13569C15.69 2.63056 18.1088 2.63056 19.7214 4.13569C21.3339 5.64082 21.3339 8.14937 19.8222 9.75485L16.7987 12.7651C16.6979 12.9658 16.5971 13.0661 16.3955 13.1665C14.5814 14.4709 12.0618 14.1699 10.7516 12.3637C10.4493 11.9624 9.7438 11.862 9.34067 12.1631C8.93753 12.4641 8.83675 13.1665 9.1391 13.5678C10.3485 15.1733 12.1626 15.9761 13.9767 15.9761C15.2869 15.9761 16.4963 15.5747 17.6049 14.7719ZM9.7438 19.7891L11.4571 18.0832C11.8603 17.6819 12.5657 17.7822 12.9689 18.1836C13.372 18.5849 13.372 19.187 12.9689 19.5884L11.2556 21.2942C10.0462 22.3979 8.5344 23 7.02264 23C5.51089 23 3.99913 22.3979 2.78973 21.2942C0.471707 18.9863 0.370924 15.1733 2.68895 12.7651L5.71246 9.75485L6.31716 9.15279C7.62735 8.14937 9.23988 7.748 10.7516 8.04903C12.2634 8.24971 13.6744 9.05245 14.6822 10.3569C14.9846 10.7583 14.8838 11.4607 14.4806 11.7617C14.0775 12.0627 13.372 11.9624 13.0697 11.561C12.465 10.6579 11.5579 10.1562 10.4493 9.95553C9.34067 9.85519 8.33283 10.1562 7.42578 10.7583L7.02264 11.1596L3.99913 14.1699C2.48738 15.675 2.48738 18.2839 4.09992 19.7891C5.71246 21.2942 8.13126 21.2942 9.7438 19.7891Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask0_794_3296)">
                <rect width="24" height="24" fill="#1F2855" />
              </g>
            </svg>

            <span class="flex-1 ml-3 whitespace-nowrap">Integrasi</span>
          </a>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
export default {
  data() {
    return {
      active: false,
    };
  },
  methods: {
    toggle() {
      this.active = !this.active;
    },
  },
};
</script>

<style>
</style>