function Avatar(props) {
  return <img src={props.src} />
}

function Label(props) {
  return <h1>Name:{props.name}</h1>
}

function ScreenName(props) {
  return <h3>Username: {props.username}</h3>
}

function Badge(props) {
  const user = props.user
  return (
    <div>
      <Avatar src={user.img} />
      <Label name= {user.name}/>
      <ScreenName username={user.username} />
    </div>
  )
}

ReactDOM.render(
  <Badge user={{
    name: 'Latimeks',
    img: 'https://pbs.twimg.com/profile_images/515404677987307520/SXvwJqQ6_400x400.jpeg',
    username: 'Calrogue'
  }} />,
  document.getElementById('app')
)
