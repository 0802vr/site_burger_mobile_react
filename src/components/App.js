import React, { useState, useEffect } from "react";



function App() {
   //реализация скрипта по изменению времени
    const [date, setDate] = useState(new Date());
     
    function refreshClock() {
    setDate(new Date());
    }
    useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
    clearInterval(timerId);
    };
    }, []);
//реализация скрипта по изменению текста
    const [clickOnText, setclickOnText] = useState(true);
    function handleClick(){
      if(clickOnText === true){setclickOnText(false)}
      else if(clickOnText === false){setclickOnText(true)}
    }
    const [isPopupOpen, setPopupOpen] =
    React.useState(false);
    function ClickLink (){
      setPopupOpen(false)

    }
    function openLink (e){
      if(e.target.checked){setPopupOpen(true)}
      else{setPopupOpen(false)}      
      
    }
  return (
    <div className='page'>
      <div className='header'>
      
      <a className="link" href='#home' > Home</a>
       <a  className="link" href='#about_me'> About me</a>
        <a className="link" href='#skils'> Skils</a>
         <a className="link" href='#portfolio'> Portfolio</a>
          <a className="link" href='#footer'> Contacts</a>
      </div>
      
      <div className='name' id='home'>
      <input id="toggle" onClick={openLink} type="checkbox"></input>
      <label htmlFor="toggle" className="hamburger">
        <div className="top-bun"></div>
        <div className="meat"></div>
        <div className="bottom-bun"></div>
      </label>

      
       {isPopupOpen ?
       <div className="nav" id='nav'>
       <div className="nav-wrapper"> <nav>
          <a onClick={ClickLink} href='#home'> Home</a>
          <a onClick={ClickLink} href='#about_me'> About me</a>
          <a  onClick={ClickLink} href='#skils'> Skils</a>
          <a onClick={ClickLink} href='#portfolio'> Portfolio</a>
          <a onClick={ClickLink} href='#footer'> Contacts</a>
        <div className="lang2">
           <button className="rus">RU |</button>
          <button className="eng">ENG</button>          
        </div>
          </nav> 
            </div>
            </div>: null
       }
          
  
        <p className="name__name">Denis Novik</p>
        <p className="name__about">UX | UI designer 24 years old, Minsk</p>
      <div className="lang1">
          <button className="rus">RU</button>
          <button className="eng">| ENG</button>
          
        </div>
      </div>
      <div className="name__img"></div>
      <div className='about_me' id='about_me'> 
      <p className="about_me__title" onClick={handleClick}>About me</p>
      <div className="about_me__text" >
                          {clickOnText ? (
      <><p className="about_me__paragraph">Привет, я Денис — UX/UI дизайнер из Минска. Интересуюсь дизайном и всем, что с ним связано.</p><p className="about_me__paragraph">Я учусь на курсах "Веб и мобильный дизайн интерфейсов" в IT-Академии.</p><p className="about_me__paragraph">Готовы реализовать отличные проекты с замечательными людьми.</p></>
     ) : (
      <><p className="about_me__paragraph">Hi, I'm Denis – UX/UI designer from Minsk. I'm interested in design and everything connected with it.</p><p className="about_me__paragraph">I'm studying at courses "Web and mobile design interfaces" in IT-Academy.</p><p className="about_me__paragraph">Ready to implement excellent projects with wonderful people.</p></>
     )} 
      </div>
      <span>Updated: {date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})} </span>
      </div>
      <div className='skils' id='skils' >
        <p className="skils__title">Skils</p>
        <p className="skils__subtitle">I work in such programs as</p>
        <div className="skils__table">
          <div className="card">
            <div className="card__img1"></div>
            <p className="card__text">Adobe
Photoshop</p>
            <div className="card__stars">
              <span className="active"></span>	
	            <span className="active"></span>    
	            <span className="active"></span>  
	            <span className="active"></span>  
              <span></span>
              </div>
          </div>
          <div className="card">
            <div  className="card__img2"></div>
            <p className="card__text">Adobe 
Illustrator</p>
            <div className="card__stars">
              <span className="active"></span>	
	            <span className="active"></span>    
	            <span className="active"></span>  
              <span></span>  
              <span></span></div>
          </div>
          <div className="card">
            <div className="card__img3"></div>
            <p className="card__text">Adobe 
After Effects</p>
            <div className="card__stars"><span className="active"></span>	
	            <span className="active"></span>    
	            <span className="active"></span>  
	            <span className="active"></span>  
              <span></span></div>
          </div>
          <div className="card">
            <div className="card__img4"></div>
            <p className="card__text">Figma</p>
            <div className="card__stars"><span className="active"></span>	
	            <span className="active"></span>    
	            <span className="active"></span>  
	            <span className="active"></span>  
              <span></span></div>
          </div>
        </div>
      </div>
      <div className='portfolio' id='portfolio' >
         
        <p className="portfolio__title">Portfolio</p>
        <div className="portfolio__img1" alt="#" src="../image/reebok_web.png" ></div>
        <p className="portfolio__subtitle">Online fashion store - Homepage</p>
        <div className="portfolio__img2" ></div>
        <p className="portfolio__subtitle">Reebok Store - Concept</p>
        <div className="portfolio__img3" ></div>
        <p className="portfolio__subtitle">Braun Landing Page - Concept</p>
       
      </div>
      <div className='footer' id='footer'>
        <p className='footer__title'>Contacts</p>
        <p className='footer__subtitle'>Want to know more or just chat? 
You are welcome!</p>
        <button className='footer__button'>Send message</button>
        <div className="footer__table">
          <div className="footer__img1" ></div>
          <div className="footer__img2" ></div>
          <div className="footer__img3" ></div>
          <div className="footer__img4" ></div>
        </div>
        <p className='footer__bottom'>Like me on
LinkedIn, Instagram, Behance, Dribble</p>
      </div>
    </div>
  )
}

export default App;
