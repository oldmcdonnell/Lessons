import { Link } from "react-router-dom"
// import { Accordion } from "react-bootstrap"

function About() {


  const blogPost =[
    {
      title: 'Day 1',
      body: `I can't wait to learn how to program Fortnite`
    },
    {
      title: 'Day 2',
      body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius temporibus laudantium atque esse. Est sit reiciendis odio laudantium, exercitationem accusantium quasi odit dolorum sapiente consequatur quis quisquam illum quidem temporibus!`
    },
    {
      title: 'Day 3',
      body: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, dicta eum facere quasi quas modi in iure temporibus necessitatibus harum facilis vitae explicabo sint velit tenetur quod iusto at dolor.`
    },
    {
      title: 'Day 4',
      body: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, dicta eum facere quasi quas modi in iure temporibus necessitatibus harum facilis vitae explicabo sint velit tenetur quod iusto at dolor.`
    },
  ]

  const mapOfPosts = blogPost.map((post, index) => {
    return (
      <div key={index}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    )
  })

  return (
    <div className="p-5">
      <Link to='/'>{'<- Back'}</Link>
      <h1>About Page</h1>
      {mapOfPosts}
    </div>
  )
}


export default About
