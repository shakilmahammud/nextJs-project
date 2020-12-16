import Anotherpage from "./Anotherpage";

export default function Home() {
  return (
   <div>
      <h2 className="title">Hello World!</h2>
      <style jsx>
        {
          `.title{
            color:red;
          }`
        }
      </style>
    <Anotherpage/>
   </div>
  )
}
