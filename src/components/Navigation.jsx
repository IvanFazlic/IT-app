import "../styles/Navigation.css"
import BackgroundImage from "../assets/laptop.jpg"
import { useState } from "react"
export default function NavigationMenu(){
    const [fix, setFix ] = useState(false)
    function setFixed() { 
        if (window.scrollY>=200) { 
            setFix(true) 
        }else {
            setFix(false) 
        }
    }
    window.addEventListener("scroll",setFixed)
    return(<>
        <div className="container">
            <div className={fix ? 'navbarScroll' : 'navbar'}>
                <div className="div1">
                    <h2>IT-gram</h2>
                </div>
                <div className="div2">
                    <a href="" className="FAQ">FAQs</a>
                    <a href="" className="Login">Login</a>
                    <a href="" className="SignUp">Sign up</a>
                </div>
            </div>
            <div className="centriranTekst">
                <h1>
                    Lorem, ipsum. <br></br>
                    Lorem ipsum dolor sit amet consectetur.
                </h1>
                <br/>
                <a href="#nekiId">
                    <button>
                    Saznaj vise 
                    </button>
                </a>
            </div>
        </div>
        <div className="white">
            <h2 id="nekiId">nesto</h2>
        </div>
    </>
    )
}