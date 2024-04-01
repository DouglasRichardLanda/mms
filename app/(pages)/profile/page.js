'use client'
import {logoutaction} from "@/app/_actions/auth-action";


export default function Profile () {

  const logout = async () => {
    await logoutaction()
  }

  return (
    <section>
      <p>Loged in and can be managed</p>
      <button onClick={logout} >Logout</button>
    </section>
  )
}