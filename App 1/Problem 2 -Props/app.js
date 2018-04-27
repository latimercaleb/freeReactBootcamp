const USER_DATA = {
  name: 'Latimeks',
  img: 'https://pbs.twimg.com/profile_images/515404677987307520/SXvwJqQ6_400x400.jpeg',
  username: 'Calrogue'
}

function Badge (props) {
  return (
    <div>
      <img src={props.user.img} />
      <h1>Name: {props.user.name}</h1>
      <h3>username: {props.user.username}</h3>
    </div>
  )
}

ReactDOM.render(
  <Badge user={USER_DATA}/>,
  document.getElementById('app')
);
