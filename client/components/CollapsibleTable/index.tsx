import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Image from "next/image";
import { Button } from "@mui/material";

function createData(
  _id: string,
  title: string,
  date: string,
  content: string,
  summary: string,
  imagelink: string
) {
  return {
    _id,
    title,
    date,
    content,
    summary,
    imagelink,
  };
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  function editThisBlog(e: any) {
    console.log(e.target.id);
    fetch("http://localhost:3000/blog/getblogbyid", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ id: e.target.id }),
    })
      .then((response) => {
        if (response.status == 200) {
          console.log(response);
          response.json().then((data) => {
            console.log(data);
          });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>{row._id}</TableCell>
        <TableCell>{row.date}</TableCell>
        <TableCell>{row.title}</TableCell>

        <TableCell align="right">
          <img src={row.imagelink} alt="image" height="auto" width="200px" />
        </TableCell>
        <TableCell>
          <Button variant="outlined" id={row._id} onClick={editThisBlog}>
            Edit
          </Button>
        </TableCell>
        {/* <TableCell align="right">{row.Summary}</TableCell> */}
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Summary
              </Typography>
              <Table size="small" aria-label="summary">
                <TableHead>
                  <TableRow>
                    <TableCell>Summary</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      {row._id}
                    </TableCell>
                    <TableCell>{row.summary}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function CollapsibleTable({ rows }: any) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Id</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>image</TableCell>
            <TableCell>Edit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row: any) => (
            <Row key={row._id} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
