import React, { useRef, useState } from "react";
import * as fa from "react-icons/fa";
import * as md from "react-icons/md";
import Input from "../input";
import TextArea from "../textArea";
import Button from "../button";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const Service_ID = process.env.REACT_APP_SERVICE_ID;
  const Template_ID = process.env.REACT_APP_TEMPLATE_ID;
  const Public_Key = process.env.REACT_APP_PUBLIC_KEY;
  const [messageSuccess, setMessageSuccess] = useState(false);
  const require = true;
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (Service_ID && Template_ID && Public_Key && form.current) {
      emailjs.sendForm(Service_ID, Template_ID, form.current, Public_Key).then(
        (result) => {
          console.log(result.text);
          setMessageSuccess(true);
          setTimeout(() => setMessageSuccess(false), 1500);
        },
        (error) => {
          console.log(error.text);
          setMessageSuccess(false);
        }
      );
    }
  };
  return (
    <section
      className="flex flex-col phone:px-5 laptop:px-36 py-20 justify-center items-center gap-10"
      id="contact"
    >
      <div className="flex justify-center flex-col gap-5 items-center w-full ">
        <h1 className="text-2xl font-medium text-center border-b-4 rounded-full px-5 border-purple-200">
          Contact Me
        </h1>
        <div className="flex tablet:flex-row phone:flex-col  justify-center gap-10 w-full">
          <div className="flex flex-col gap-4 p-5">
            <h1 className="text-xl flex items-center gap-3">
              Love to hear from you{" "}
              <md.MdWavingHand className="text-purple-300 text-3xl" />
            </h1>
            <h1 className="text-5xl">GET IN TOUCH!</h1>
            <div className=" border border-purple-600 rounded md p-3 flex gap-4 items-center text-purple-800">
              <i className="text-4xl text-purple-500">
                <fa.FaPhoneAlt />
              </i>
              <div className="flex flex-col gap-2 ">
                <p>+639121095499</p>
                <p>+639297646767</p>
              </div>
            </div>

            <div className="border border-purple-600 rounded md p-3 flex gap-4 items-center text-purple-800">
              <i className="text-4xl text-purple-500">
                <md.MdEmail />
              </i>
              <div className="flex flex-col gap-2 ">
                <p>habigalexander91@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="laptop:p-5 laptop:w-[50%] tablet:w-full">
            <form
              onSubmit={sendEmail}
              ref={form}
              className="flex flex-col gap-5"
            >
              <div className="flex w-full gap-5">
                <Input
                  type={"text"}
                  text={"Name"}
                  name="from_name"
                  req={require}
                />
                <Input
                  type={"email"}
                  text={"Email"}
                  name="from_email"
                  req={require}
                />
              </div>
              <Input type={"text"} text={"Subject"} name="user_subject" />
              <TextArea text="Message" name="message" />
              {messageSuccess && (
                <div className=" bg-green-300 w-full flex items-center justify-center top-50  py-3 rounded-md relative ">
                  Message Sent Successful!
                </div>
              )}
              <Button
                disable={messageSuccess}
                text="submit"
                type={"submit"}
                classname={`text-base rounded-sm  text-white ${
                  messageSuccess
                    ? "bg-gray-400"
                    : "hover:bg-purple-600 bg-purple-500"
                }`}
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
