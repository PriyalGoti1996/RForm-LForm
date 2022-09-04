import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const getDatafromLS = () => {
    const data = localStorage.getItem("useryoutube");
    if (data) {
        return JSON.parse(data)
    }
    else {
        return []
    }
}
function Regis() {
    const history = useNavigate()
    const [inpval, setInpval] = useState({
        name: "",
        email: "",
        date: "",
        password: ""
    })
    const [data, setData] = useState(getDatafromLS());
    console.log(inpval);
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

        const { name, email, date, password } = inpval;

        if (name === "") {
            alert(' name field is requred!')

        }
        else if (email === "") {
            alert('email field is requred')

        } else if (!email.includes("@")) {
            alert('plz enter valid email addres')

        } else if (date === "") {
            alert('date field is requred')


        } else if (password === "") {
            alert('password field is requred')
        } else if (password?.length < 5) {
            alert('password length greater five')
        } else {
            alert("data added succesfully");
            // history("/login")
            localStorage.setItem("useryoutube", JSON.stringify([...data, inpval]));
            history("/login")

        }

    }

    return (
        <div>
            <h1>Registraction Form</h1>
            <form className="row g-3" >
                <div className="col-md-6">
                    <label for="inputEmail4" className="form-label">Name</label>
                    <input type="text" className="form-control" name="name" onChange={getdata} />
                </div>
                <div className="col-md-6">
                    <label for="inputPassword4" className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" onChange={getdata} />
                </div>
                <div className="col-md-6">
                    <label for="inputEmail4" className="form-label">DOB</label>
                    <input type="date" className="form-control" name="date" onChange={getdata} />
                </div>
                <div className="col-md-6">
                    <label for="inputPassword4" className="form-label">Password</label>
                    <input type="password" className="form-control" name="password" onChange={getdata} />
                </div>


                <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" />
                        <label className="form-check-label" for="gridCheck">
                            Check me out
                        </label>
                    </div>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary" onClick={addData}>Sign in</button>
                </div>
            </form>
            <p>Already Have an Account <NavLink to="/login"><span>SingIN</span></NavLink></p>
        </div>
    );
}

export default Regis;