import './index.css'


import dashboard1 from '../Assets/display.jpg';

const Landing = function (){
    return(
        <section className="banner" style={{ backgroundImage: `url(${dashboard1})` }}>            
            <div className="content">
                <h3> Light Nylon <br/>
                OuterWear
                </h3>

                <p>Casual line</p>
                <p>Nylon Mix fabric</p>
                <p>Buttoned Collar</p>
               <a  className='get-started-link'>GET STARTED</a>
            </div>
        </section>
    )
}

export default Landing;