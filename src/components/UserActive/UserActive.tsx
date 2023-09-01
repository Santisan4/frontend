interface Props {
  user: {
    name: string
    email: string
  }
}

export function UserActive ({ user }: Props): JSX.Element {
  return (
    <div className='user-active-container'>
      <div className='user'>
        <img src='/rengo2.jpeg' alt='' />
        <div>
          <p>{user.name}</p>
          <small>{user.email}</small>
        </div>
      </div>
    </div>
  )
}
