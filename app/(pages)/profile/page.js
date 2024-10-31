'use client'
import {logoutaction} from "@/app/_actions/auth-action";


export default function Profile () {

  const logout = async () => {
    await logoutaction()
  }

  return (
    <section>
      <p className={`text-4xl font-bold`}>Status:: Aktiv</p>
      <button
        className={`px-10 py-5 bg-red-700 mt-10 text-2xl hover:bg-red-900 duration-200`}
        onClick={logout}>Logout</button>
    </section>
  )
}