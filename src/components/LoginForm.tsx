import { useState, FormEvent } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import logo from '../assets/logo.png';
import { UserLogin } from '../services/services';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../store';
import { GoogleLogin } from '@react-oauth/google';

const SignInForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const [isLoading, setIsLoading] = useState(false);
  const [isRememberTick, setIsRememberTick] = useState(false);
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  const { login } = useStore();
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    // setIsLoading(true);

    try {

      // response tra ve data => check data not null
      const response = await UserLogin(username, password);
      setTimeout(() => {
        if (response?.status === "success" && response.data) {
          login(response.data.accessToken, username, response.data.type, isRememberTick);
          navigate('/');
        } else {
          setIsError(true);
        }
        // setIsLoading(false);
      }, 1000);
    } catch (error) {
      setIsError(true);
      // setIsLoading(false);
    } finally {
      // setIsLoading(false);
    }
  };

  const handleLoginGoogle = async (accessToken?: string) => { 
    if (accessToken) {
      login(accessToken, username, "", isRememberTick);
      navigate('/');
    } else {
      setIsError(true);
    }
  }

  return (
    <div className="w-[50%] bg-white p-8 rounded-2xl"
      style={{
        boxShadow: '0px 12px 42.9px -14px rgba(0, 0, 0, 0.10)',
      }}>
      <div className="mt-2">
        <div className="flex justify-center aspect-auto">
          <img alt="logo" className="" src={logo} />
        </div>
        <h2 className="text-center text-4xl font-bold">
          Login
        </h2>
      </div>
      <form className=" space-y-6" onSubmit={handleSubmit}>
        <div className="rounded-md space-y-4">
          <div>
            <label htmlFor="username" className="text-sm relative top-2.5 left-2 z-20 bg-white text-[#1C1B1F] rounded-xl p-1">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              required
              className="appearance-none relative block w-full px-3 py-3 border border-gray-300 focus:placeholder-opacity-50 placeholder-gray-500 text-[#1C1B1F] rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                setIsError(false);
              }}
            />
          </div>
          <div className="relative">
            <label htmlFor="password" className="text-sm relative top-2.5 left-2 z-20 bg-white text-[#1C1B1F] rounded-xl p-1">
              Password
            </label>
            <input
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              required
              className="appearance-none relative block w-full px-3 py-3 border border-gray-300 focus:placeholder-opacity-50 placeholder-gray-500 text-[#1C1B1F] rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setIsError(false);
              }}
            />
            <div
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 top-6 z-10 right-0 pr-3 flex items-center cursor-pointer"
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </div>
          </div>
          {isError && <span className='h-full text-[#FF7D7D]'> Wrong username or password</span>}
          <div className="flex flex-row h-6 items-center">
            <button type='button' className='w-[20px] h-[20px]' onClick={() => setIsRememberTick(!isRememberTick)}>
              {isRememberTick ?
                (
                  <div className='flex flex-row'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                      <path d="M18.9222 1.73853H4.41746C3.08233 1.73853 2 2.82086 2 4.15599V18.6608C2 19.9959 3.08233 21.0782 4.41746 21.0782H18.9222C20.2574 21.0782 21.3397 19.9959 21.3397 18.6608V4.15599C21.3397 2.82086 20.2574 1.73853 18.9222 1.73853Z" stroke="#313131" strokeWidth="2.14885" strokeLinejoin="round" />
                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" x="5" y="5" viewBox="0 0 13 13" fill="none">
                        <path d="M11.8062 4.08738L5.30623 10.5874C5.24962 10.6442 5.18235 10.6893 5.10828 10.72C5.03421 10.7508 4.95479 10.7666 4.87459 10.7666C4.79439 10.7666 4.71498 10.7508 4.64091 10.72C4.56684 10.6893 4.49956 10.6442 4.44295 10.5874L1.5992 7.74363C1.54252 7.68695 1.49755 7.61966 1.46688 7.54559C1.4362 7.47153 1.42041 7.39216 1.42041 7.31199C1.42041 7.23183 1.4362 7.15245 1.46688 7.07839C1.49755 7.00433 1.54252 6.93704 1.5992 6.88035C1.65589 6.82367 1.72318 6.7787 1.79724 6.74803C1.8713 6.71735 1.95068 6.70156 2.03084 6.70156C2.11101 6.70156 2.19038 6.71735 2.26444 6.74803C2.33851 6.7787 2.4058 6.82367 2.46248 6.88035L4.8751 9.29297L10.944 3.22512C11.0584 3.11064 11.2137 3.04633 11.3756 3.04633C11.5375 3.04633 11.6928 3.11064 11.8072 3.22512C11.9217 3.3396 11.986 3.49486 11.986 3.65676C11.986 3.81865 11.9217 3.97392 11.8072 4.0884L11.8062 4.08738Z" fill="#29CF00" />
                      </svg>
                    </svg>
                  </div>
                )
                :
                (
                  <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                    <path d="M18.9222 1.73853H4.41746C3.08233 1.73853 2 2.82086 2 4.15599V18.6608C2 19.9959 3.08233 21.0782 4.41746 21.0782H18.9222C20.2574 21.0782 21.3397 19.9959 21.3397 18.6608V4.15599C21.3397 2.82086 20.2574 1.73853 18.9222 1.73853Z" stroke="#313131" strokeWidth="2.14885" strokeLinejoin="round" />
                  </svg>
                )}
            </button>
            <span className='ml-3 pt-1'> Remember me</span>
          </div>
        </div>

        <div>
          {/* <button
            type="submit"
            className="group relative w-full flex justify-center py-3 px-4 border border-transparent 
            text-sm font-medium rounded text-[#F3F3F3] bg-[#5584FF] hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {isLoading ? (
              <svg
                className="text-gray-300 animate-spin"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
              >
                <path
                  d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-custom-blue"
                ></path>
              </svg>
            ) : (
              'Login'
            )}
          </button> */}
          <GoogleLogin
            onSuccess={credentialResponse => {
              handleLoginGoogle(credentialResponse.credential);
            }}
            onError={() => {
              console.log('Login Failed');
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
