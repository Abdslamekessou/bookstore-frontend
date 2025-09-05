
import {  createContext, useContext, useEffect, useState  } from "react";
import {  createUserWithEmailAndPassword , signInWithEmailAndPassword , GoogleAuthProvider , signInWithPopup , signOut , onAuthStateChanged} from "firebase/auth"
import {auth} from '../firebase/firebase.config'


const authContext = createContext();

export const useAuth = () => {
    return useContext(authContext)
}

const googleProvider = new GoogleAuthProvider();

//authProvider
    const AuthProvider = ({children}) =>{
        const [currentUser , setCurrentUser] = useState(null);
        const [loading , setLoading] = useState(true)

        // register user
        const registerUser = async (email , password) => {
            return await createUserWithEmailAndPassword(auth , email , password)
        }

        //Login user
        const LoginUser = async (email , password) => {
            return await signInWithEmailAndPassword(auth , email , password)
        }

        //Google Signin
        const googleSignIn = async () => {
            return await signInWithPopup(auth , googleProvider);
        }

        //Logout
        const Logout =  () => {
            return signOut(auth)
        }

        // manage users
        useEffect(() =>{
            const unsubscibe = onAuthStateChanged(auth , (user) =>{
                setCurrentUser(user)
                setLoading(false)

                if(user){
                    const {email , displayName , photoUrl} = user;
                    const userData ={
                        email , username : displayName , photo : photoUrl
                    }
                }

            })

            return () => unsubscibe();
        } , [])



        const value = {
            currentUser ,
            loading ,
            registerUser ,
            LoginUser ,
            googleSignIn ,
            Logout
        }
        return(
            <authContext.Provider value={value}>
                {children}
            </authContext.Provider>
        )
        
    }

export default AuthProvider;