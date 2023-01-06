import UseFetchData from "./CustomHook/UseFetchData";

 

const UseCustomHookExample = () => {
    // be attention to declare the variable {data} as an array to can map it
    // that is why {UseFetchData} return an arry in a custom hook
    const [data]=UseFetchData("https://jsonplaceholder.typicode.com/todos/")
  return (
    <div>
      <h1>Hello from Custom Hook</h1>
      {data.map((n ) => {
        return (
            <>
            <p >key= {n.id} </p>
            <h1 >{n.title}</h1>
            </>
            )
      })}
    </div>
  );
};
 export default UseCustomHookExample;
