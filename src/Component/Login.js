import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const histroy = useNavigate()
    const [inpval, setInpval] = useState({

        email: "",
        password: ""
    })

    const getdata = (e) => {
        const { value, name } = e.target;
        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })

    }
    const addData = (e) => {
        e.preventDefault();
        const { email, password } = inpval
        const getdatainlocal = localStorage.getItem("useryoutube")
        console.log(getdatainlocal);
        if (email === "") {
            alert('email field is requred')

        } else if (!email.includes("@")) {
            alert('plz enter valid email addres')

        } else if (password === "") {
            alert('password field is requred')
        } else if (password?.length < 5) {
            alert('password length greater five')
        } else {
            if (getdatainlocal && getdatainlocal.length) {
                const usedata = JSON.parse(getdatainlocal)
                const uselogin = usedata.filter((element, index) => {
                    return element.email === email && element.password === password
                })
                if (uselogin.length === 0) {
                    alert("invalid detalis")
                }
                else {
                    console.log("use login succesfully");
                    histroy("/detalis")

                }
            }
        }

    }
    return (
        <div>

            <div>
                <h1>Login</h1>
                <form className="row g-3" >
                    <div className="col-md-6">
                        <label for="inputPassword4" className="form-label">Email</label>
                        <input type="email" className="form-control" name="email" onChange={getdata} />
                    </div>
                    <div className="col-md-6">
                        <label for="inputPassword4" className="form-label">Password</label>
                        <input type="password" className="form-control" name="password" onChange={getdata} />
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary" onClick={addData} >Sign in</button>
                    </div>
                </form>
                <p>Already Have an Account <span>SingIN</span></p>
            </div>
        </div>

    );
}

export default Login;