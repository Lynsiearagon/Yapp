import React from 'react'; 
import './Footer.css'


const Footer = () => {

    return (
        <footer>
            <div className="footerCol">
                <div>
                    <ul className='languageLists'>
                        <h2 className="ulFooterListTitle">Backend</h2>
                        <li className='language' >Rails</li>
                        <li className='language'>Ruby</li>
                        <li className='language'>PostgreSQL</li>
                    </ul>
                    </div>
                <div>
                    <ul className='languageLists'>
                        <h2 className="ulFooterListTitle">Frontend</h2>
                        <li className='language'>JavaScript</li>
                        <li className='language'>React</li>
                        <li className='language'>Redux</li>
                    </ul>
                </div>
                <div>
                    <ul className='languageLists'>
                        <h2 className="ulFooterListTitle">Styling</h2>
                        <li className='language'>CSS</li>
                        <li className='language'>HTML</li>
                        <li className='language'>icons 8</li>
                        <li className='language'>Font Awesome</li>
                    </ul>
                </div>
            </div>

            <div id="copyright">
                <p>Copyright © 2023 Yapp and related marks are registered trademarks of Yapp</p>
            </div>
        </footer>
    )

}

export default Footer 