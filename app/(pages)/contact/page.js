'use client'
import React from 'react';
import {Input} from "@/components/ui/input"
import {Textarea} from "@/components/ui/textarea"
import {useForm} from "react-hook-form";
import mailer from "@/app/_actions/mail";
function Page(props) {

  const {
    register,
    handleSubmit,
    reset
  } =  useForm()

  const inSubmit = async (data) => {
    await mailer(data)
    reset()
  }

  return (
    <form
      onSubmit={handleSubmit(data => inSubmit(data))}
      className={`relative lg:w-[60%] mx-auto`}>
      <p>Email</p>
      <Input
        placeholder={`Please enter your email`}
        {...register('email', {required: true})}
        className={`w-full rounded-2xl bg-white text-slate-950 mb-5`}
        type={`email`}
      />
      <p>Message</p>
      <Textarea
        {...register('message', {required: true})}
                rows={5}
                placeholder={`Please enter your question`}
                className={`w-full rounded-2xl bg-white text-slate-950 mb-5`}/>
      <div className={`flex justify-between`}>
        <button className={`w-[300px] bg-red-700 text-center hover:bg-red-900 duration-300 rounded-xl py-5`}>
          Submit
        </button>
      </div>
    </form>
  );
}

export default Page;