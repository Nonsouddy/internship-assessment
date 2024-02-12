import Image from 'next/image'

export default function Login () {
    return (
      <main className="flex flex-col md:flex-row flex items-center justify-center ">
        {/* left section */}
        <section className="">
          <div>
              <h1 className=" text-gray text-3xl block text-center my-2 font-semibold">Welcome back</h1>
              <h2 className=" text-gray text-l block text-center font-sm">Welcome back! Please enter your details.</h2>
          </div>
          <div className="mt-10">
              <form className="space-y-10 py-5 mr-10  ml-10  items-center justify-center action='#" method="POST">
                <div>
                <label htmlfor="email" className="block text-sm font-medium leading-6 text-gray">
                    Email
                </label>
                <div className="mt-2">
                  <input
                  id="email"
                  name="email"
                  autocomplete="email"
                  type="email"
                  placeholder='Enter your email'
                  required
                  className='border w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-insert ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-insert focus:outline-none focus:boder-gray-600 sm:text-sm:leading-6'

                  />

                </div>
                </div>
                <div>
                <label htmlfor="password" className="block text-sm font-medium leading-6 text-gray">
                    Password
                </label>
                <div className="mt-2">
                  <input
                  id="password"
                  name="password"
                  autocomplete="current-password"
                  type="password"
                  required
                  className='border w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-insert ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-insert focus:outline-none focus:boder-gray-600 sm:text-sm:leading-6'

                  />

                </div>

                </div>

                <div className='flex flex-col md:flex-row text-align:center space-x-20'>
                  <div className='flex flex-col md:flex-row  space-x-1'>
                    <input
                    type="checkbox"
                    
                    />
                         <div className="block text-sm font-medium text-gray">Remember for 30 days</div>
                  </div>
                  <div className="text-sm">
                    <a href='#' className="font-semibold text-indigo-600 hover:text-indigo-500">
                       Forgot Password?
                    </a>

                  </div>

                 </div>

                <div>
                  <button
                  type="submit"
                  className=" flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                      Login

                  </button>

                  

                 
                </div>
                <div className='mt-5 text-center '>
                  <div className='text-gray text-m block font-sm'>
                    Don’t have an account? <a href='#' className="font-semibold text-blue-600 hover:text-blue-500">Sign up</a>
                  </div>
                </div>




              </form>
            </div>
                    
          

        
        </section>
        {/* image section */}

        <section className="">
          <Image className='object-cover h-90 w-96'
          src="/image/Login.png"
          alt="side picture"
          width={100}
          height={100}
           />
                

        </section>
        
        
  
      </main>
    )
    }
  