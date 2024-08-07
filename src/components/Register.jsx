// src/Register.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';


// Input text component
const FloatingLabelInput = ({ value, onChange, label, type = "text" }) => {
    return (
      <div className="relative">
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder=" "
          required
          className="w-full px-4 py-2 text-right rounded-full bg-slate-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black font-bold peer z-10"
        />

<label

className="absolute right-4 top-1/2 -translate-y-1/2 bg-slate-100 text-gray-500 transition-all duration-300 transform peer-focus:-translate-y-4 peer-focus:top-2 peer-focus:scale-75 peer-focus:text-blue-500 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:text-blue-500"

>
          {label}
        </label>
      </div>
    );
  };

  // Input password component
const PasswordInput = ({ value, onChange, placeholder }) => {
    const [showPassword, setShowPassword] = useState(false);
  
    return (
        <div className="relative mt-4">
        <input
          type={showPassword ? "text" : "password"}
          value={value}
          onChange={onChange}
          placeholder=" "
          required
          className="w-full px-4 py-2 text-right rounded-full border text-gray-700 bg-slate-100 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 peer"
        />
        <label className="absolute right-4 top-1/2 -translate-y-1/2 bg-slate-100 text-gray-500 transition-all duration-300 transform peer-focus:-translate-y-4 peer-focus:top-2 peer-focus:scale-75 peer-focus:text-blue-500 peer-valid:-translate-y-4 peer-valid:top-2 peer-valid:scale-75 peer-valid:text-blue-500 -peer-placeholder-shown:translate-y-1 peer-placeholder-shown:top-1/2 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-500">
          סיסמה
        </label>
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute inset-y-1 left-3 pr-3 flex items-center bg-slate-100"
        >
          {showPassword ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5 text-gray-500">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5 text-gray-500">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
            </svg>
          )}
        </button>
      </div>
    //   <div className="relative">
    //     <input
    //       type={showPassword ? "text" : "password"}
    //       value={value}
    //       onChange={onChange}
    //       placeholder={placeholder}
    //       required
    //       className="w-full px-4 py-2 text-right rounded-full border text-gray-700 bg-slate-100 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
    //     />
        
    //     <button
    //       type="button"
    //       onClick={() => setShowPassword(!showPassword)}
    //       className="absolute inset-y-0 left-3 pr-3 flex items-center bg-slate-100"
    //     >
    //       {showPassword ? (
    //         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5 text-gray-500">
    //           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    //           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    //         </svg>
    //       ) : (
    //         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5 text-gray-500">
    //           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
    //         </svg>
    //       )}
    //     </button>
    //   </div>
    );
  };

const Register = ( {onSwitchToLogin}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(true);
  const [message, setMessage] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  useEffect(() => {
    setPasswordsMatch(password === passwordConfirm);
  }, [password, passwordConfirm]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!passwordsMatch) {
      setMessage('הסיסמאות אינן תואמות');
      return;
    }
    try {
      const response = await axios.post('http://localhost:5001/api/users/register', {
        firstName,
        lastName,
        email,
        phoneNumber,
        password,
        isSubscribed
      });
      setMessage('יופי! נירשמת לאתר👌');
      localStorage.setItem('token', response.data.token);
    } catch (err) {
      setMessage('ההרשמה נכשלה!');
      console.error(err);
    }

    
  };


  ///
  
  return (
    <div className="flex h-screen">
        {/* register field */}
      <div className="w-1/2 p-8 flex flex-col justify-center">
        <h2 className="text-xl mb-6 mt-8 text-right text-gray-500">שמחים שבאת! <br/> רק כמה פרטים שנכיר אותך😁</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <FloatingLabelInput value={firstName} onChange={(e) => setFirstName(e.target.value)} label="שם פרטי" />
            <FloatingLabelInput value={lastName} onChange={(e) => setLastName(e.target.value)} label="שם משפחה" />
            <FloatingLabelInput value={email} onChange={(e) => setEmail(e.target.value)} label="אימייל" type="email" />
            <FloatingLabelInput value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} label="מספר טלפון" />
          </div>
          <PasswordInput value={password} onChange={(e) => setPassword(e.target.value)} placeholder="סיסמה" />
          <PasswordInput value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} placeholder="אימות סיסמה" />
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              checked={isSubscribed}
              onChange={(e) => setIsSubscribed(e.target.checked)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="subscribe" className="mr-2 text-sm text-gray-700">
              אני רוצה לקבל עידכונים, קופונים, מבצעים והטבות מועדון אישיות.
            </label>
          </div>
          <button
            type="submit"
            disabled={!passwordsMatch}
            className={`w-full text-white py-2 px-4 rounded-full w-2/5  transition duration-300 ${
              passwordsMatch ? 'bg-red-500 hover:bg-red-600' : 'bg-gray-400 cursor-not-allowed'
            }`}
          >
            להרשמה
          </button>
        </form>
        <p className="mt-4 text-center text-gray-500">{message}</p>
       

        <p className="mt-4  align-middle">

          <a href="#_" className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-pink-500 rounded-full shadow-md group"
            onClick={onSwitchToLogin}>
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 translate-x-full bg-pink-500 group-hover:-translate-x-0 ease">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                </svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-pink-500 transition-all duration-300 transform translate-x-0 group-hover:-translate-x-full ease">להתחברות</span>
            <span className="relative invisible">הרשמה</span>
        </a>
        


        </p>
      </div>
        {/* logo field */}
      <div className="w-1/2 bg-gray-100">
        <img src="../public/registerLogo.jpg" alt="Registration" className="object-cover" />
      </div>
    </div>
  );
};

export default Register;
