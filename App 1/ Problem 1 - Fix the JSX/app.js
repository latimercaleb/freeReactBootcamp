function Badge (props) {
  return (
    <div>
      <img src={props.img} />
      <h1>Name: {props.name} </h1>
      <h3>username: {props.username} </h3>
    </div>
  )
}

ReactDOM.render(
  <Badge
    name='Latimeks'
    username='Calrogue'
    img='https://pbs.twimg.com/profile_images/515404677987307520/SXvwJqQ6_400x400.jpeg'
  />,
  document.getElementById('app')
);
