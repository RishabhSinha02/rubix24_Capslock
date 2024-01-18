"use client"
import { redirect } from 'next/navigation'
import { useState } from 'react'
export default function Login() {
    const [isLogin, setIsLogin] = useState(false);
    // function myFunction() {
    //     console.log("Function executed after 3 seconds");
    //     redirect('/home');
    //   }
      
      // Using setTimeout to delay the execution of myFunction by 3000 milliseconds (3 seconds)
    const HandleLogin = () =>{
        // setTimeout(myFunction, 3000);
        redirect('/');
    }
    return(
        <section className="flex flex-col md:flex-row h-screen items-center">
        <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
          <img src="https://c4.wallpaperflare.com/wallpaper/883/883/818/movie-collage-wallpaper-preview.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
        flex items-center justify-center">
          <div className="w-full h-100">
            <center>
          <a id="logo" href="#home"><img className="img h-28" src="logo.png" alt="Logo Image" /></a></center>
            <span className="text-2xl md:text-2xl font-bold leading-tight mt-8">Log in to your account</span>
            <form className="mt-6" action={HandleLogin} method="POST">
              <div>
                <label className="block text-gray-700">Email Address</label>
                <input type="" name id placeholder="Enter Email Address" className="w-full px-4 py-3 rounded-lg bg-gray-700 mt-2 border border-red-700 focus:border-red-800 focus:bg-gray-600 focus:outline-none" autofocus autoComplete required />
              </div>
              <div className="mt-4">
                <label className="block text-gray-700">Password</label>
                <input type="password" name id placeholder="Enter Password" className="w-full px-4 py-3 rounded-lg bg-gray-700 mt-2 border border-red-700 focus:border-red-800 focus:bg-gray-600 focus:outline-none" required />
              </div>
              <div className="text-right mt-2">
                <a href="#" className="text-sm font-semibold text-gray-700 hover:text-red-700 focus:text-red-700">Forgot Password?</a>
              </div>


              <button type="submit" className="w-full block bg-red-700 hover:bg-red-400 focus:bg-red-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-6">Log In</button>

              {/* <button className="w-full block bg-red-700 hover:bg-red-400 focus:bg-red-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-6"><span className="loading loading-bars loading-sm"></span></button> */}



            </form>
            <hr className="my-6 border-gray-300 w-full" />
            <button type="button" className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300">
              <div className="flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="w-6 h-6" viewBox="0 0 48 48"><defs><path id="a" d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z" /></defs><clipPath id="b"><use xlinkHref="#a" overflow="visible" /></clipPath><path clipPath="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" /><path clipPath="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z" /><path clipPath="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z" /><path clipPath="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z" /></svg>
                <span className="ml-4">
                  Log in
                  with
                  Google</span>
              </div>
            </button>
            <p className="mt-8">Need an account? <a href="#" className="text-red-700 hover:text-red-700 font-semibold">Create an
                account</a></p>
          </div>
        </div>
      </section>
    )
}