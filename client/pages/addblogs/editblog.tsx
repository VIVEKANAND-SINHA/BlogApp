import CollapsibleTable from "@/components/CollapsibleTable";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";

const editblog = () => {
  const [rowsdata, setRowsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/blog/allblogs", {
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        });
        if (response.ok) {
          const data = await response.json();
          setRowsData(data);
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  console.log({ rowsdata });
  return (
    <>
      <div>
        <Typography variant="h5">Edit you Blogs</Typography>
      </div>
      <CollapsibleTable rows={rowsdata} />
    </>
  );
};

export default editblog;
