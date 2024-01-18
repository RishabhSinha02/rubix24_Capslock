import { redirect } from 'next/navigation';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="wrapper">
      {/* HEADER */}
      <Navbar />

      <section className="main mx-16">
        <h1 className='heading text-3xl mb-4' id="myList">Categories</h1>
        <div className="cat">


<a className="card border p-4 text-center text-xl">
Horror
</a>
<a className="card border p-4 text-center text-xl">
  Action
</a>
<a className="card border p-4 text-center text-xl">
  
Drama
</a>
<a className="card border p-4 text-center text-xl">
  
Thriller
</a>
<a className="card border p-4 text-center text-xl">

Comedy
</a>
<a className="card border p-4 text-center text-xl">
Romance
</a>


        </div>
        <h1 className='heading text-3xl mb-4' id="myList">Trending Now</h1>
        <div className="box">
          <a href><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/t1.PNG?raw=true" alt="" /></a>
          <a href><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/t2.PNG?raw=true" alt="" /></a>
          <a href><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/t3.PNG?raw=true" alt="" /></a>
          <a href><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/t4.PNG?raw=true" alt="" /></a>
          <a href><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/t5.PNG?raw=true" alt="" /></a>
          <a href><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/t6.PNG?raw=true" alt="" /></a>
        </div>
        <div className="location" id="home">
          <h1 className='heading text-3xl mb-4' id="home">Popular in India</h1>
          <div className="box">
            <a href><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p1.PNG?raw=true" alt="" /></a>
            <a href><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p2.PNG?raw=true" alt="" /></a>
            <a href><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p3.PNG?raw=true" alt="" /></a>
            <a href><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p4.PNG?raw=true" alt="" /></a>
            <a href><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p5.PNG?raw=true" alt="" /></a>
            <a href><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p6.PNG?raw=true" alt="" /></a>
            <a href><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p7.PNG?raw=true" alt="" /></a>
            <a href><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p8.PNG?raw=true" alt="" /></a>
            <a href><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p9.PNG?raw=true" alt="" /></a>
            <a href><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p10.PNG?raw=true" alt="" /></a>
            <a href><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p11.PNG?raw=true" alt="" /></a>
            <a href><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p12.PNG?raw=true" alt="" /></a>
          </div>
        </div>
        <h1 className='heading text-3xl mb-4' id="tvShows">TV Shows</h1>
        <div className="box">
          <a href><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv1.PNG?raw=true" alt="" /></a>
          <a href><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv2.PNG?raw=true" alt="" /></a>
          <a href><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv3.PNG?raw=true" alt="" /></a>
          <a href><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv4.PNG?raw=true" alt="" /></a>
          <a href><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv5.PNG?raw=true" alt="" /></a>
          <a href><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv6.PNG?raw=true" alt="" /></a>
          <a href><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv7.PNG?raw=true" alt="" /></a>
          <a href><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv8.PNG?raw=true" alt="" /></a>
          <a href><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv9.PNG?raw=true" alt="" /></a>
          <a href><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv10.PNG?raw=true" alt="" /></a>
          <a href><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv11.PNG?raw=true" alt="" /></a>
          <a href><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv12.PNG?raw=true" alt="" /></a>
        </div>
        <h1 className='heading text-3xl mb-4' id="movies">Blockbuster Action &amp; Adventure</h1>
        <div className="box">
          <a href><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/m1.PNG?raw=true" alt="" /></a>
          <a href><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/m2.PNG?raw=true" alt="" /></a>
          <a href><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/m3.PNG?raw=true" alt="" /></a>
          <a href><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/m4.PNG?raw=true" alt="" /></a>
          <a href><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/m5.PNG?raw=true" alt="" /></a>
          <a href><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/m6.PNG?raw=true" alt="" /></a>
        </div>
        <h1 className='heading text-3xl mb-4' id="originals">OptiView Originals</h1>
        <div className="box">
          <a href><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/o1.PNG?raw=true" alt="" /></a>
          <a href><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/o2.PNG?raw=true" alt="" /></a>
          <a href><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/o3.PNG?raw=true" alt="" /></a>
          <a href><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/o4.PNG?raw=true" alt="" /></a>
          <a href><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/o5.PNG?raw=true" alt="" /></a>
          <a href><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/o6.PNG?raw=true" alt="" /></a>
        </div>
        {/* END OF MAIN CONTAINER */}
        {/* LINKS */}
        <section className="link">
          <div className="logos">
            <a href="#"><i className="fab fa-facebook-square fa-2x logo" /></a>
            <a href="#"><i className="fab fa-instagram fa-2x logo" /></a>
            <a href="#"><i className="fab fa-twitter fa-2x logo" /></a>
            <a href="#"><i className="fab fa-youtube fa-2x logo" /></a>
          </div>
          <div className="sub-links">
            <ul>
              <li><a href="#">Audio and Subtitles</a></li>
              <li><a href="#">Audio Description</a></li>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Gift Cards</a></li>
              <li><a href="#">Media Center</a></li>
              <li><a href="#">Investor Relations</a></li>
              <li><a href="#">Jobs</a></li>
              <li><a href="#">Terms of Use</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Legal Notices</a></li>
              <li><a href="#">Corporate Information</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
        </section>
        {/* END OF LINKS */}
        {/* FOOTER */}
        <footer>
          <p>© 2023-2050 Opti View, Inc.</p>
          <p>Rishabh Sinha © 2002</p>
        </footer>
      </section></div>
  )
}


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div className="netflixLogo ml-4">
            <a id="logo" href="#home"><img src="logo.png" alt="Logo Image" /></a>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a href="/">Home</a></li>
            <li> <a> Services</a></li>
            <li><a>About Us</a></li>
            <li><a>Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex font-sans items-center space-x-11 py-3 px-48">
          <li><a href="#home">Home</a></li>
          <li><a href="#tvShows">TV Shows</a></li>
          <li><a href="#movies">Movies</a></li>
          <li><a href="#originals">Originals</a></li>
          <li><a href="#">Recently Added</a></li>
          <li><a target="_blank" href="https://codepen.io/cb2307/full/NzaOrm">Portfolio</a></li>
        </ul>
      </div>
      <div className="navbar-end mr-16 font-bold text-red-700">
          👽 Rishabh
      </div>
    </div>
  );
};