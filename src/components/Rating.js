import nature from "../assets/nature.jpg";

const Rating = () => {
  return (
    <>
      <section class="h-screen bg-white md:h-fit">
        <div class="w-5/6 mx-auto pt-14 md:py-32">
          <h1 class="text-primary font-medium text-3xl mb-12 text-center">
            Apa Kata Wisatawan?
          </h1>
          <div class="w-5/6 px-4 mx-auto relative ">
            <span class="w-9 absolute -left-2 top-1/2 -translate-y-1/2 z-10  md:-left-8 ">
              <svg
                viewBox="0 0 36 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.3335 2.00007L2.00016 13.8682L15.3335 25.7363"
                  stroke="#018577"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M34 2.00007L20.6667 13.8682L34 25.7363"
                  stroke="#018577"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <div className="lg:hidden">
              <div class="p-4 bg-secondary drop-shadow-md">
                <img
                  class="w-20 h-20 rounded-full mx-auto mb-4"
                  src={nature}
                  alt="foto profil"
                />
                <h3 class="text-center text-lg font-medium mb-1">
                  Bapak Danang
                </h3>
                <h4 class="text-center text-sm font-medium text-primary mb-2">
                  Kepala Desa Sidorejo
                </h4>
                <div class="flex justify-center mx-auto mb-4">
                  <span class="w-4">
                    <svg
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.5 1.25L9.43125 5.1625L13.75 5.79375L10.625 8.8375L11.3625 13.1375L7.5 11.1063L3.6375 13.1375L4.375 8.8375L1.25 5.79375L5.56875 5.1625L7.5 1.25Z"
                        fill="#F3AE5E"
                      />
                    </svg>
                  </span>
                  <span class="w-4">
                    <svg
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.5 1.25L9.43125 5.1625L13.75 5.79375L10.625 8.8375L11.3625 13.1375L7.5 11.1063L3.6375 13.1375L4.375 8.8375L1.25 5.79375L5.56875 5.1625L7.5 1.25Z"
                        fill="#F3AE5E"
                      />
                    </svg>
                  </span>
                  <span class="w-4">
                    <svg
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.5 1.25L9.43125 5.1625L13.75 5.79375L10.625 8.8375L11.3625 13.1375L7.5 11.1063L3.6375 13.1375L4.375 8.8375L1.25 5.79375L5.56875 5.1625L7.5 1.25Z"
                        fill="#F3AE5E"
                      />
                    </svg>
                  </span>
                  <span class="w-4">
                    <svg
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.5 1.25L9.43125 5.1625L13.75 5.79375L10.625 8.8375L11.3625 13.1375L7.5 11.1063L3.6375 13.1375L4.375 8.8375L1.25 5.79375L5.56875 5.1625L7.5 1.25Z"
                        fill="#F3AE5E"
                      />
                    </svg>
                  </span>
                  <span class="w-4">
                    <svg
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.5 1.25L9.43125 5.1625L13.75 5.79375L10.625 8.8375L11.3625 13.1375L7.5 11.1063L3.6375 13.1375L4.375 8.8375L1.25 5.79375L5.56875 5.1625L7.5 1.25Z"
                        fill="#F3AE5E"
                      />
                    </svg>
                  </span>
                </div>
                <p class="text-sm text-center mb-12">
                  Lzorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus nobis explicabo aspernatur, dolor libero tenetur
                  mollitia dolores illo amet natus!
                </p>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="flex gap-6 ">
                <div class="p-6 bg-secondary drop-shadow-md h-96">
                  <div className="flex gap-4">
                    <img
                      class="w-20 h-20 rounded-full "
                      src={nature}
                      alt="foto profil"
                    />
                    <div>
                      <h3 class="text-lg font-medium mb-1">Bapak Danang</h3>
                      <h4 class="text-sm font-medium text-primary mb-2">
                        Kepala Desa Sidorejo
                      </h4>
                      <div class="flex mx-auto mb-4">
                        <span class="w-4">
                          <svg
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.5 1.25L9.43125 5.1625L13.75 5.79375L10.625 8.8375L11.3625 13.1375L7.5 11.1063L3.6375 13.1375L4.375 8.8375L1.25 5.79375L5.56875 5.1625L7.5 1.25Z"
                              fill="#F3AE5E"
                            />
                          </svg>
                        </span>
                        <span class="w-4">
                          <svg
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.5 1.25L9.43125 5.1625L13.75 5.79375L10.625 8.8375L11.3625 13.1375L7.5 11.1063L3.6375 13.1375L4.375 8.8375L1.25 5.79375L5.56875 5.1625L7.5 1.25Z"
                              fill="#F3AE5E"
                            />
                          </svg>
                        </span>
                        <span class="w-4">
                          <svg
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.5 1.25L9.43125 5.1625L13.75 5.79375L10.625 8.8375L11.3625 13.1375L7.5 11.1063L3.6375 13.1375L4.375 8.8375L1.25 5.79375L5.56875 5.1625L7.5 1.25Z"
                              fill="#F3AE5E"
                            />
                          </svg>
                        </span>
                        <span class="w-4">
                          <svg
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.5 1.25L9.43125 5.1625L13.75 5.79375L10.625 8.8375L11.3625 13.1375L7.5 11.1063L3.6375 13.1375L4.375 8.8375L1.25 5.79375L5.56875 5.1625L7.5 1.25Z"
                              fill="#F3AE5E"
                            />
                          </svg>
                        </span>
                        <span class="w-4">
                          <svg
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.5 1.25L9.43125 5.1625L13.75 5.79375L10.625 8.8375L11.3625 13.1375L7.5 11.1063L3.6375 13.1375L4.375 8.8375L1.25 5.79375L5.56875 5.1625L7.5 1.25Z"
                              fill="#F3AE5E"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                  <p class="text-sm ">
                    Lzorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Accusamus nobis explicabo aspernatur, dolor libero tenetur
                    mollitia dolores illo amet natus!
                  </p>
                </div>
                <div class="p-6 bg-secondary drop-shadow-md  ">
                  <div className="flex gap-4">
                    <img
                      class="w-20 h-20 rounded-full "
                      src={nature}
                      alt="foto profil"
                    />
                    <div>
                      <h3 class="text-lg font-medium mb-1">Bapak Danang</h3>
                      <h4 class="text-sm font-medium text-primary mb-2">
                        Kepala Desa Sidorejo
                      </h4>
                      <div class="flex mx-auto mb-4">
                        <span class="w-4">
                          <svg
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.5 1.25L9.43125 5.1625L13.75 5.79375L10.625 8.8375L11.3625 13.1375L7.5 11.1063L3.6375 13.1375L4.375 8.8375L1.25 5.79375L5.56875 5.1625L7.5 1.25Z"
                              fill="#F3AE5E"
                            />
                          </svg>
                        </span>
                        <span class="w-4">
                          <svg
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.5 1.25L9.43125 5.1625L13.75 5.79375L10.625 8.8375L11.3625 13.1375L7.5 11.1063L3.6375 13.1375L4.375 8.8375L1.25 5.79375L5.56875 5.1625L7.5 1.25Z"
                              fill="#F3AE5E"
                            />
                          </svg>
                        </span>
                        <span class="w-4">
                          <svg
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.5 1.25L9.43125 5.1625L13.75 5.79375L10.625 8.8375L11.3625 13.1375L7.5 11.1063L3.6375 13.1375L4.375 8.8375L1.25 5.79375L5.56875 5.1625L7.5 1.25Z"
                              fill="#F3AE5E"
                            />
                          </svg>
                        </span>
                        <span class="w-4">
                          <svg
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.5 1.25L9.43125 5.1625L13.75 5.79375L10.625 8.8375L11.3625 13.1375L7.5 11.1063L3.6375 13.1375L4.375 8.8375L1.25 5.79375L5.56875 5.1625L7.5 1.25Z"
                              fill="#F3AE5E"
                            />
                          </svg>
                        </span>
                        <span class="w-4">
                          <svg
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.5 1.25L9.43125 5.1625L13.75 5.79375L10.625 8.8375L11.3625 13.1375L7.5 11.1063L3.6375 13.1375L4.375 8.8375L1.25 5.79375L5.56875 5.1625L7.5 1.25Z"
                              fill="#F3AE5E"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                  <p class="text-sm ">
                    Lzorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Accusamus nobis explicabo aspernatur, dolor libero tenetur
                    mollitia dolores illo amet natus!
                  </p>
                </div>
                <div class="p-6 bg-secondary drop-shadow-md  ">
                  <div className="flex gap-4">
                    <img
                      class="w-20 h-20 rounded-full "
                      src={nature}
                      alt="foto profil"
                    />
                    <div>
                      <h3 class="text-lg font-medium mb-1">Bapak Danang</h3>
                      <h4 class="text-sm font-medium text-primary mb-2">
                        Kepala Desa Sidorejo
                      </h4>
                      <div class="flex mx-auto mb-4">
                        <span class="w-4">
                          <svg
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.5 1.25L9.43125 5.1625L13.75 5.79375L10.625 8.8375L11.3625 13.1375L7.5 11.1063L3.6375 13.1375L4.375 8.8375L1.25 5.79375L5.56875 5.1625L7.5 1.25Z"
                              fill="#F3AE5E"
                            />
                          </svg>
                        </span>
                        <span class="w-4">
                          <svg
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.5 1.25L9.43125 5.1625L13.75 5.79375L10.625 8.8375L11.3625 13.1375L7.5 11.1063L3.6375 13.1375L4.375 8.8375L1.25 5.79375L5.56875 5.1625L7.5 1.25Z"
                              fill="#F3AE5E"
                            />
                          </svg>
                        </span>
                        <span class="w-4">
                          <svg
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.5 1.25L9.43125 5.1625L13.75 5.79375L10.625 8.8375L11.3625 13.1375L7.5 11.1063L3.6375 13.1375L4.375 8.8375L1.25 5.79375L5.56875 5.1625L7.5 1.25Z"
                              fill="#F3AE5E"
                            />
                          </svg>
                        </span>
                        <span class="w-4">
                          <svg
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.5 1.25L9.43125 5.1625L13.75 5.79375L10.625 8.8375L11.3625 13.1375L7.5 11.1063L3.6375 13.1375L4.375 8.8375L1.25 5.79375L5.56875 5.1625L7.5 1.25Z"
                              fill="#F3AE5E"
                            />
                          </svg>
                        </span>
                        <span class="w-4">
                          <svg
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.5 1.25L9.43125 5.1625L13.75 5.79375L10.625 8.8375L11.3625 13.1375L7.5 11.1063L3.6375 13.1375L4.375 8.8375L1.25 5.79375L5.56875 5.1625L7.5 1.25Z"
                              fill="#F3AE5E"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                  <p class="text-sm ">
                    Lzorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Accusamus nobis explicabo aspernatur, dolor libero tenetur
                    mollitia dolores illo amet natus!
                  </p>
                </div>
              </div>
            </div>
            <span class="w-9 absolute -right-2 top-1/2 -translate-y-1/2 z-10 md:-right-8">
              <svg
                viewBox="0 0 36 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.6665 25.7363L33.9998 13.8681L20.6665 2"
                  stroke="#018577"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2 25.7363L15.3333 13.8681L2 2"
                  stroke="#018577"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </div>
          <div className="hidden lg:hidden">
            <div className="">
              <div className="bg-secondary "></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Rating;
