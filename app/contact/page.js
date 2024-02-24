import React from 'react';
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"

function Page(props) {


  return (
    <form className={`relative`}>
      <p>Name</p>
      <Input placeholder={`Please enter your name`} className={`w-full rounded-2xl bg-white text-slate-950 mb-5`} />
      <p>Your E-Mail</p>
      <Input placeholder={`Please enter your e-mail`} className={`w-full rounded-2xl bg-white text-slate-950 mb-5`} />
      <p>Message</p>
      <Textarea rows={5} placeholder={`Please enter your question`} className={`w-full rounded-2xl bg-white text-slate-950 mb-5`} />
      <div className={`flex justify-between`}>
        <div className={`w-80 h-20 border-white border-2`}>checker</div>
        <button className={`w-[300px] bg-red-700 text-center hover:bg-red-900 duration-300`} type={`submit`}>Submit</button>
      </div>
    </form>
  );
}

export default Page;