import {loginaction} from "@/app/_actions/auth-action";


export default async function Auth () {
  return (
    <form
      action={loginaction}
      className={`flex flex-col gap-2`}
    >
      <input name={`username`} type="text" placeholder={`Username`}
      className={`p-2 text-black`}/>
      <input name={`password`} type="password" placeholder={`Password`}
      className={`p-2 text-black`}/>
      <button className={`p-2 hover:bg-green-600 duration-200`}>Submit</button>
    </form>
  )
}