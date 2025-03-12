import Coolponents from "./index.js";
function App() {
  return (
    <>
      <Coolponents.BlogCard
        title="This is a Blog Card!"
        authorImage="./authorimg.jpg"
        author="Kotesei"
        date="03/11/25"
        image="https://images.unsplash.com/photo-1741526798351-50eeb46b2a06?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        imagePos="0 55%"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Coolponents.BlogCard>
    </>
  );
}

export default App;
