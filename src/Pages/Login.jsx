import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useContext } from "react";
import { AuthControl } from "../router/AuthProvider";
import img1 from '../assets/Login.jpg'


const Login = () => {
    const { login } = useContext(AuthControl)
    const navigate = useNavigate()
    const location = useLocation()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
        const email = data.email
        const password = data.password
        try {
            login(email, password)
                .then(result => {
                    navigate(location?.state ? location.state : '/dashboard')
                })
                .catch(error => {
                    toast.error(error.message)
                })
        }
        catch (err) {
            toast.error(err.message)
        }
    }
    return (
        <div className='md:flex justify-center items-center min-h-screen'>
            <div className="md:w-1/2">
                <img src={img1} alt="" />
            </div>
            <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
                <div className='mb-8 text-center'>
                    <h1 className='my-3 text-4xl font-bold'>Log In</h1>
                    <p className='text-sm text-gray-400'>
                        Sign in to access your account
                    </p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}
                    noValidate=''
                    action=''
                    className='space-y-6 ng-untouched ng-pristine ng-valid'
                >
                    <div className='space-y-4'>
                        <div>
                            <label htmlFor='email' className='block mb-2 text-sm'>
                                Email address
                            </label>
                            <input
                                {...register("email", { required: true })}
                                type='email'
                                name='email'
                                id='email'
                                required
                                placeholder='Enter Your Email Here'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                                data-temp-mail-org='0'
                            />
                            {

                                errors.email && <span className=' text-red-800'>please fill up email</span>

                            }
                        </div>
                        <div>
                            <div className='flex justify-between'>
                                <label htmlFor='password' className='text-sm mb-2'>
                                    Password
                                </label>
                            </div>
                            <input
                                {...register("password", { required: true })}
                                type='password'
                                name='password'
                                autoComplete='current-password'
                                id='password'
                                required
                                placeholder='*******'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                            />
                            {

                                errors.password && <span className=' text-red-800'>please fill up password</span>

                            }
                        </div>
                    </div>

                    <div>
                        <button
                            type='submit'
                            className='bg-rose-500 w-full rounded-md py-3 text-white'
                        >
                            {/* {
                loading ? <TbFidgetSpinner className='text-2xl animate-spin mx-auto duration-1000' /> : 'Continue'
              } */}
                            Login
                        </button>
                    </div>
                </form>
                <div className='space-y-1'>
                    <button className='text-xs hover:underline hover:text-rose-500 text-gray-400'>
                        Forgot password?
                    </button>
                </div>
                <p className='px-6 text-sm text-center text-gray-400'>
                    Don&apos;t have an account yet?{' '}
                    <Link
                        to='/signup'
                        className='hover:underline hover:text-rose-500 text-gray-600'
                    >
                        SignUp
                    </Link>
                    .
                </p>
            </div>
        </div>
    );
};

export default Login;