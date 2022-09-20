import styles from "../styles/Home.module.css";
import Head from "next/head";
import Navbar from "./Navbar";
import {Modal} from "bootstrap";

export default function Contact() {

    async function handleOnSubmit(e) {
        e.preventDefault();

        const formData = {};
        const myModal = new Modal(document.getElementById('exampleModal'), {})

        Array.from(e.currentTarget.elements).forEach(field => {
            if (!field.name) return;
            formData[field.name] = field.value;
        });

        await fetch('/api/sendgrid', {
            method: 'POST',
            body: JSON.stringify(formData)
        }).then((res) => {
            document.getElementById("first_name").value = '';
            document.getElementById("middle_name").value = '';
            document.getElementById("last_name").value = '';
            document.getElementById("email_id").value = '';
            document.getElementById("subject").value = '';
            document.getElementById("message").value = '';
            myModal.show()
        })
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Contact | Ashish Kumar Bhoi</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            {Navbar("Contact")}
            <main className={styles.main}>
                <h1 className={styles.title}>
                    Contact Form
                </h1>
                <form className={"my-auto mx-auto"} method={"post"} onSubmit={handleOnSubmit}>
                    <div className={"row mb-4"}>
                        <div className={"col"}>
                            <label htmlFor="first_name" className={"form-label"}>First Name</label>
                            <input type={"text"} className={"form-control"} id={"first_name"} name={"first_name"}
                                   placeholder={"First Name"} aria-describedby={"first_name"} required/>
                        </div>
                        <div className={"col"}>
                            <label htmlFor="middle_name" className={"form-label"}>Middle Name</label>
                            <input type={"text"} className={"form-control"} id={"middle_name"} name={"middle_name"}
                                   placeholder={"Middle Name"} aria-describedby={"middle_name"}/>
                        </div>
                        <div className={"col"}>
                            <label htmlFor="last_name" className={"form-label"}>Last Name</label>
                            <input type={"text"} className={"form-control"} id={"last_name"} name={"last_name"}
                                   placeholder={"Last Name"} aria-describedby={"last_name"} required/>
                        </div>
                    </div>
                    <div className={"col mb-4"}>
                        <label htmlFor="email_id" className={"form-label"}>Email ID</label>
                        <input type={"text"} className={"form-control"} id={"email_id"} name={"email_id"}
                               placeholder={"Email Id"} aria-describedby={"last_name"} required/>
                    </div>
                    <div className={"col mb-4"}>
                        <label htmlFor="subject" className={"form-label"}>Subject</label>
                        <input type={"text"} className={"form-control"} id={"subject"} name={"subject"}
                               placeholder={"Subject"} aria-describedby={"subject"} required/>
                    </div>
                    <div className={"col mb-5"}>
                        <label htmlFor="message" className={"form-label"}>Message</label>
                        <textarea className={"form-control"} rows={6} id={"message"} name={"message"}
                                  placeholder={"Please type your message ...."} required/>
                    </div>
                    <button type={"submit"} className={"btn btn-dark"}>Submit</button>
                </form>
            </main>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Contact Email</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Email sent successfully
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}