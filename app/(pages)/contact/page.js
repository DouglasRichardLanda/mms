'use client'
import React, {useState} from 'react';
import {Input} from "@/components/ui/input"
import {Textarea} from "@/components/ui/textarea"
import {useForm} from "react-hook-form";
import mailer from "@/app/_actions/mail";
import {useToast} from "@/components/ui/use-toast";
import {useRouter} from "next/navigation";
import {cn} from "@/lib/utils";
function Page(props) {

  const [subbmitting, setSubbmitting] = useState(false)
  const {
    register,
    handleSubmit,
    reset
  } =  useForm()
  const {toast} = useToast()
  const router = useRouter()
  const inSubmit = async (data) => {
    setSubbmitting(true)
    await mailer(data)
    router.push('/')
    setSubbmitting(false)
    reset()
    toast({
      title: "Thank you for your feed back",
      description: "We will get in touch with you as soon as possible",
    })
  }

  return (
    <form
      onSubmit={handleSubmit(data => inSubmit(data))}
      className={`relative lg:w-[60%] mx-auto`}>
      <p>Email</p>
      <Input
        disabled={subbmitting}
        placeholder={`Please enter your email`}
        {...register('email', {required: true})}
        className={`w-full rounded-2xl bg-white text-slate-950 mb-5`}
        type={`email`}
      />
      <p>Message</p>
      <Textarea
        disabled={subbmitting}
        {...register('message', {required: true})}
                rows={5}
                placeholder={`Please enter your question`}
                className={`w-full rounded-2xl bg-white text-slate-950 mb-5`}/>
      <div className={`flex justify-between`}>
        <button disabled={subbmitting} className={cn(`w-[300px] bg-red-700 text-center hover:bg-red-900 duration-300 rounded-xl py-5`, subbmitting && 'bg-gray-700 hover:bg-gray-700')}>
          Submit
        </button>
      </div>
    </form>
  );
}

export default Page;