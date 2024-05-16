const names = ['Darya', 'Fed' ]

export default function Post(){

  const dynamicName = Math.random() > 0.5 ? names[0] : names[1];

  return(
  <div>
    <p>{dynamicName}</p>
    <p>First post</p>
  </div>
  )
}