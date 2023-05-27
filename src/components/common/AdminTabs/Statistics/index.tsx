import {
  TableContainer,
  TableHead,
  Table,
  TableCell,
  TableRow,
  TableBody,
  Paper,
  tableCellClasses,
  styled,
} from "@mui/material";

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#F1F1F1",
    color: "#8E9397",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(() => ({
  "&:nth-of-type(even)": {
    backgroundColor: "rgba(241, 241, 241, 0.5)",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export const Statistics = ({ statistics }: any) => {
  return (
    <TableContainer sx={{ boxShadow: "none" }} component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Столбец 1</StyledTableCell>
            <StyledTableCell align="left">Столбец 2</StyledTableCell>
            <StyledTableCell align="left">Столбец 3</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {statistics.map((row: any) => (
            <StyledTableRow key={row.statistic1}>
              <StyledTableCell component="th" scope="row">
                {row.statistic1}
              </StyledTableCell>
              <StyledTableCell align="left">{row.statistic2}</StyledTableCell>
              <StyledTableCell align="left">{row.statistic3}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
