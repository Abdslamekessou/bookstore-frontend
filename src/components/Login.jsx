import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { FaGoogle } from "react-icons/fa";
import { useForm } from 'react-hook-form';
import { useAuth } from "../context/AuthContext";


const Login = () => {
    const [message , setMessage] = useState("")
    const {LoginUser , googleSignIn} = useAuth()
    const navigate = useNavigate()
    const { 
        register, 
        handleSubmit, 
        formState: { errors },
        reset
    } = useForm();

    const onSubmit = async  (data)  =>{
        try {
            await LoginUser(data.email , data.password)
            alert("Login Successfully");
            navigate("/")
        } catch (error) {
            setMessage("Please Enter A Valid Email And Password");
            console.error(error)
        }
    }

    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn()
            alert("Google Sign In Successfully!!");
            navigate("/")

        } catch (error) {
            setMessage("Google Sign In Failed!!");
            console.error(error)
        }
    }

    
return (
    
    <div className='h-[calc(100vh-120px)] flex justify-center items-center'>
        <div className='w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pb-6 pt-8 mb-4'> 
            <h2 className='text-lg font-semibold mb-4'>Please Login</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                    <input  {...register("email" , {required: true}) } type="email" name="email" id="email" placeholder="Email Address"
                        className="border appearance-none shadow rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
                    <input {...register("password" , {required: true}) } type="password" name="password" id="password" placeholder="Password"
                        className="border appearance-none shadow rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow"
                    />
                </div>
                {
                    message && <p className="text-red-500 text-xs italic mb-3">{message}</p> 
                }
                <div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white text-bold py-2 px-8 rounded focus:outline-none">Login</button>
                </div>
                <p className="align-baseline font-medium mt-4">Haven't an account ? Please
                    <Link className="text-blue-500 hover:text-blue-700" to={'/register'}> Register</Link>
                </p>
            </form>

                {/*Google Sign In */}
                <div className="mt-4">
                    <button onClick={handleGoogleSignIn} className="w-full flex flex-wrap gap-1 items-center justify-center
                        bg-secondary text-white hover:bg-blue-700 font-bold py-2 px-4 rounded 
                        focus:outline-none"> 
                            <FaGoogle className="mr-2" /> 
                        Sign in with Google
                    </button>
                </div>
                <p className="mt-5 text-center text-gray-500 text-xs">©2025 Book Store. All rights reserved.</p>
        </div>
    </div>
)
}

export default Login