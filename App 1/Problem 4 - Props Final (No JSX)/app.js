const user={
    name: 'Latimeks',
    img: 'https://pbs.twimg.com/profile_images/515404677987307520/SXvwJqQ6_400x400.jpeg',
    username: 'Calrogue'
  }

const Avatar = React.createElement("img", {src: user.img})
const Label = React.createElement('h1', null, user.name)
const ScreenName = React.createElement('h3', null, user.username)
const Badge= React.createElement('div', {id: 'test'}, [Avatar,Label, ScreenName])

ReactDOM.render(
  Badge, document.getElementById('app')
)
