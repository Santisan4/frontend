import { Link } from 'react-router-dom'
import { DashboardIcon, User } from './Icons'

interface Props {
  user: {
    name: string
    email: string
    admin: number
    token: string
  }
}

export function View ({ user }: Props): JSX.Element {
  const isAdm = user !== null && user.admin > 0
  const view = isAdm
    ? <Link to='/admin/dashboard'> <DashboardIcon /> Dashboard</Link>
    : <Link to='/user/login'> <User /> User</Link>
  return (
    <>
      {view}
    </>
  )
}
