'use client'
import {logoutaction} from "@/app/_actions/auth-action";


export default async function Profile () {

  const logout = async () => {
    await logoutaction()
  }

  return (
    <section>
      from section
      <button onClick={logout} >Logout</button>
    </section>
  )
}