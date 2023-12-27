import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  Campaigns: string,
  Clicks: number,
  Cost: number,
  Conversions: number,
  Revenue: number
) {
  return { Campaigns, Clicks, Cost, Conversions, Revenue };
}

const rows = [
  createData("Cosmatics", 712, 4272, 8, 16568),
  createData("Serums", 3961, 9.0, 37, 4.3),
  createData("Feshwash", 9462, 16.0, 24, 6.0),
  createData("Shamppose", 439, 3.7, 67, 4.3),
  createData("Conditionrs", 1680, 16.0, 49, 3.9),
];

export default function TableData() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 100 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Campaigns</StyledTableCell>
            <StyledTableCell align="right">Clicks</StyledTableCell>
            <StyledTableCell align="right">Cost</StyledTableCell>
            <StyledTableCell align="right">Conversion</StyledTableCell>
            <StyledTableCell align="right">Revenue</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.Campaigns}>
              <StyledTableCell component="th" scope="row">
                {row.Campaigns}
              </StyledTableCell>
              <StyledTableCell align="right">{row.Clicks}</StyledTableCell>
              <StyledTableCell align="right">{row.Cost}</StyledTableCell>
              <StyledTableCell align="right">{row.Conversions}</StyledTableCell>
              <StyledTableCell align="right">{row.Revenue}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
