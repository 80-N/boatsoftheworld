import React from 'react';
import {withFormik} from "formik";
import * as Yup from "yup";

const Formulaire = (props) => (
    <>
       <form>
            <div className="form-group">
                <label htmlFor="name">Nom : </label>
                <input type="text" className="form-control" id="name" aria-describedby="nameHelp" 
                // Controlled components below
                    name="nom" 
                    onChange={props.handleChange} 
                    value={props.values.nom}
                    onBlur = {props.handleBlur}
                />
                {//To indicate error to the user if the name area has been touched but not well filled
                    props.touched.nom && props.errors.nom && <span style={{color:"red"}}>{props.errors.nom}</span>
                }
            </div>
            <div className="form-group">
                <label htmlFor="email">Email : </label>
                <input type="text" className="form-control" id="email" aria-describedby="emailHelp" 
                // Controlled components below
                    name="email" 
                    onChange={props.handleChange} 
                    value={props.values.email}
                    onBlur = {props.handleBlur}
                />
                 {//To indicate error to the user if the email area has been touched but not well filled
                    props.touched.email && props.errors.email && <span style={{color:"red"}}>{props.errors.email}</span>
                }
            </div>
            <div className="form-group">
            <label htmlFor="message">Message : </label>
                <textarea className="form-control" placeholder="Ecrire votre message ici ..." id="message" rows="5"
                // Controlled components below
                    name="message" 
                    onChange={props.handleChange} 
                    value={props.values.message}
                    onBlur = {props.handleBlur}
                ></textarea>
                 {//To indicate error to the user if the message area has been touched but not well filled
                    props.touched.message && props.errors.message && <span style={{color:"red"}}>{props.errors.message}</span>
                }
            </div>

            <button type="submit" className="btn btn-primary" onClick={props.handleSubmit}>Envoyer</button>
        </form>
    </>
);

export default withFormik({
    mapPropsToValues : () => ({
        nom:"",
        email:"",
        message:""
    }),
    validationSchema : Yup.object().shape({
        nom: Yup.string()
        .min(2, "Le nom doit compter 2 caractères au minimum.")
        .required("A remplir obligatoirement."),
        email: Yup.string()
        .email("L'e-mail n'a pas le bon format.")
        .required("A remplir obligatoirement."),
        message: Yup.string()
        .min(5, "5 caractères minimum.")
        .max(250, "Message trop long: 250 caractères maximum.")
    }),
    handleSubmit: (values,{props}) => {
        const message = {
            nom : values.nom,
            email : values.email,
            contenu : values.message
        }
        props.sendMail(message);
    }
})(Formulaire);
