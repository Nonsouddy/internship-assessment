import Image from 'next/image'

export default function Signup() {
    return (
        <section className='  flex flex-col md:flex-row flex items-center justify-center'>
           {/* Signup right col */}

          <div className=" bg-[#312297] mr-10 createBackground">
          
            <div className='m-10'>
                <svg width="60" height="50" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 40C25.4247 40 40 25.4247 40 0C40 25.4247 54.5753 40 80 40C54.5753 40 40 54.5753 40 80C40 54.5753 25.4247 40 0 40Z" fill="white"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 12C7.62742 12 12 7.62742 12 0C12 7.62742 16.3726 12 24 12C16.3726 12 12 16.3726 12 24C12 16.3726 7.62742 12 0 12Z" fill="#FEC84B"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M64 24C69.0849 24 72 21.0849 72 16C72 21.0849 74.9151 24 80 24C74.9151 24 72 26.9151 72 32C72 26.9151 69.0849 24 64 24Z" fill="#FEC84B"/>
                 </svg>
            </div>
            <div className='mr-10 ml-10  items-center justify-center text-white text-4xl block text-center my-2 font-bold'>
                <div>Start turning your </div>
                       <div className='mt-2'> ideas into reality.</div>
                
            </div>
            <div className=' mr-10 ml-10  items-center justify-center text-white text-m  text-center my-2 font-light'>
              <div>Create a free account and get full access to all features for 30-days.<div>
              No credit card needed. Trusted by over 4,000 professionals.</div></div>
            </div>
          
           
 


          </div>
          {/* Signup left col */}
          <div className='mt-40'>
            
              <h1 className='text-black text-2xl block  my-2 font-semibold'>
              Sign up
              </h1>
              <div>
                <form>
                <div className="mt-5">
                  <lable htmlfor="name" className="block text-sm font-medium leading-6 text-gray-700" >
                    Name*
                  </lable>
                  
                  < input
                      id="text"
                      name="name"
                      autocomplete="name"
                      placeholder="Enter your name"
                      required
                      className='border w-full rounded-md border-0 py-1 pl-2 text-gray-900 shadow-sm ring-1 ring-insert ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-insert focus:outline-none focus:boder-gray-600 sm:text-sm:leading-6'
                   />
                  </div>
                  <div className="mt-5">
                    <lable htmlfor="email" className="block text-sm font-medium leading-6 text-gray-700">
                      Email*
                    </lable>
                    
                    < input
                        id="email"
                        name="email"
                        autocomplete="email"
                        placeholder="Enter your email"
                        required
                        className='border w-full rounded-md border-0 py-1 pl-2 text-gray-900 shadow-sm ring-1 ring-insert ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-insert focus:outline-none focus:boder-gray-600 sm:text-sm:leading-6'
                    />
                  </div>
                  <div className="mt-5">
                    <lable htmlfor="password" className="block text-sm font-medium leading-6 text-gray-700">
                      Password*
                    </lable>
                  
                    < input
                        id="password"
                        name="password"
                        autocomplete="password"
                        placeholder="Create a password"
                        required
                        className='border w-full rounded-md border-0 py-1 pl-2 text-gray-900 shadow-sm ring-1 ring-insert ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-insert focus:outline-none focus:boder-gray-600 sm:text-sm:leading-6'
                    />
                    <div className='"block text-sm font-medium leading-6 text-gray-700'>Must be at least 8 characters.</div>
                  
                  </div>
                

                </form>
                

              </div>

              <div className='mt-20'>
                <button
                  type="submit"
                  className=" flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                     Get started

                  </button>
                </div>
              <div className='mt-10 text-center '>
                  <div className='text-gray text-m block font-sm'>
                    Already have an account? <a href='#' className="font-semibold text-blue-600 hover:text-blue-500">Login</a>
                  </div>
                </div>
            
          </div>
          
  
      </section>
    )
  }
  