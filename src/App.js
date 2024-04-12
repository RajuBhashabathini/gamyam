import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import "./App.css";
import Card from "./pages/Card";

function App() {
  const [pageNum, setPageNum] = useState(1);
  const [landData, setLandData] = useState([]);

  const getMyData = async (pageNumProps, pageSize) => {
    try {
      const data = await fetch(
        `https://prod-be.1acre.in/lands/?ordering=-updated_at&page=${pageNumProps}&page_size=${pageSize}`
      );
      const jsonData = await data.json();
      const results = jsonData.results;
      console.log("results :", results);
      setLandData(landData.concat(results));
    } catch (error) {
      console.log("error is :", error);
    }
  };

  useEffect(() => {
    console.log("pageNum pageNum", pageNum);
    getMyData(pageNum, 10);
  }, [pageNum]);

  return (
    <div className="p-10 flex justify-start">
      <InfiniteScroll
        className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-8"
        dataLength={landData.length}
        next={() => setPageNum((prev) => prev + 1)}
        hasMore={true}
        loader={<div className="min-h-60 w-full">Loading...</div>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {landData.map((ele) => {
          return (
            <div className="max-w-[372px] border border-red-400 rounded-lg">
              <Card data={ele} />
            </div>
          );
        })}{" "}
      </InfiniteScroll>
    </div>
  );
}

export default App;
