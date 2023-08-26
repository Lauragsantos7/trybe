
export default function User() {
  const user = {
   firstName: 'Laura',
   lastName: 'Santos',
  }
  return (
    <div>
      { `${user.firstName} ${user.lastName}`}
    </div>
  )
}
