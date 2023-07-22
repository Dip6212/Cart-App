import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";


const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading,setLoading]=useState(false);
  const [posts,setPosts]=useState([]);

  async function fetchData(){
    setLoading(true);
    
    try {
      const res=await fetch(API_URL);
      const data= await res.json();
      setPosts(data);
      console.log(data);
      
    } catch (error) {
      console.log("error in api fetching"); 
      setPosts([])
    }
    setLoading(false);
  }

  useEffect(()=>{
    fetchData();
  },[]);

  return (<div>
    {
      loading ?
      <Spinner/>:
      posts.length>0 ?
      (<div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 max-xs:grid-cols-1 grid-cols-4 max-w-6xl p-2 max-md:p-4 mx-auto max-xs:place-content-center space-y-10 space-x-5 min-h-[80vh]">
        {
          posts.map((post)=>(
            <Product key={post.id} post={post}/>
          ))
        }
      </div>):(
        <div className="flex justify-center items-center"><p>no data found</p></div>
      )
    }
  </div>);
};

export default Home;
