import Feed from "@components/Feed";
const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1  className="head_text text-center">
            Discover and Share
            <br className="max-md:hidden"/>
            <span className="orange_gradient text-center">AI-Powered Prompts</span>
            <p className="desc text-center">
                Promptopia is a open-source AI promting 
                tool for modern world to discover , 
                create and share creative prompts
            </p>

            <Feed/>
        </h1>

    </section>
  )
}

export default Home
