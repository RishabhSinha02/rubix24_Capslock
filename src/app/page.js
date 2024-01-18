import { redirect } from 'next/navigation';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="wrapper">
        {/* HEADER */}
        <header>
          <div className="netflixLogo">
            <a id="logo" href="#home"><img src="logo.png" alt="Logo Image" ></img></a>
          </div>
          <nav className="main-nav space-x-8">
            <a href="#home">Home</a>
            <a href="#tvShows">TV Shows</a>
            <a href="#movies">Movies</a>
            <a href="#originals">Originals</a>
            <a href="#">Recently Added</a>
            <a target="_blank" href="https://codepen.io/cb2307/full/NzaOrm">Portfolio</a>
          </nav>
          <nav className="sub-nav">
            <a href="#"><i className="fas fa-search sub-nav-logo" /></a>
            <a href="#"><i className="fas fa-bell sub-nav-logo" /></a>
            <a href="#">Account</a>
          </nav>
        </header>
        {/* END OF HEADER */}
        {/* MAIN CONTAINER */}
        <section className="main-container">
          <h1 className='heading text-3xl mb-4' id="myList">Categories</h1>
          <div className="box">
            <a href><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/t1.PNG?raw=true" alt="" /></a>
            <a href><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/t2.PNG?raw=true" alt="" /></a>
            <a href><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/t3.PNG?raw=true" alt="" /></a>
            <a href><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/t4.PNG?raw=true" alt="" /></a>
            <a href><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/t5.PNG?raw=true" alt="" /></a>
            <a href><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/t6.PNG?raw=true" alt="" /></a>
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
          <h1 className='heading text-3xl mb-4' id="originals">Netflix Originals</h1>
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
            <p>© 1997-2018 Netflix, Inc.</p>
            <p>Carlos Avila © 2018</p>
          </footer>
        </section></div>
  )
}
