import React from 'react'

const SignIn = () => {
  return (
    <>
        <section>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative flex items-end  pb-10 pt-60 justify-center align-middle ">
          <div className="">
            <img
              className="-mt-40 rounded-md object-cover object-top"
              src="https://img.freepik.com/premium-vector/vector-menu-illustration-food-meat-meal-restaurant-popular-set-lunch-icon-dinner-snack_1013341-56750.jpg?size=626&ext=jpg&ga=GA1.1.1451435111.1705928925&semt=ais_user"
              alt=""
            />
          </div>
         
        </div>
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Sign In</h2>
            <p className="mt-2 text-base text-gray-600">
            Already have an account? {' '}
              <a
                href="#"
                title=""
                className="font-medium text-black transition-all duration-200 hover:underline"
              >
                Log In
              </a>
            </p>
            <form action="#" method="POST" className="mt-8">
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="mb-1 text-base float-left font-medium text-gray-900">
                    {' '}
                    Full Name{' '}
                  </label>
                  <div className="">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="Full Name"
                      id="name"
                    ></input>
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className=" mb-1 text-base float-left font-medium text-gray-900">
                    {' '}
                    Email address{' '}
                  </label>
                  <div className="">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      placeholder="Email"
                      id="email"
                    ></input>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="mb-1 text-base font-medium text-gray-900">
                      {' '}
                      Password{' '}
                    </label>
                  </div>
                  <div className="">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      placeholder="Password"
                      id="password"
                    ></input>
                  </div>
                </div>
                <div>
                  <button
                    type="button"
                    className="inline-flex w-32 fl items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                  >
                    Sign In 
                  </button>
                </div>
              </div>
            </form>
            
          </div>
        </div>
      </div>
    </section>

    </>
  ) 
}

export default SignIn;
