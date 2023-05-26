import {
  TableContainer,
  TableHead,
  Table,
  TableCell,
  TableRow,
  TableBody,
  Paper,
} from "@mui/material";

export const Calculations = ({ calculations }: any) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Показатель 1</TableCell>
            <TableCell align="right">Показатель 2</TableCell>
            <TableCell align="right">Показатель 3</TableCell>
            <TableCell align="right">Показатель 4</TableCell>
            <TableCell align="right">Показатель 5</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {calculations.map((row: any) => (
            <TableRow
              key={row.option1}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="right">{row.option1}</TableCell>
              <TableCell align="right">{row.option2}</TableCell>
              <TableCell align="right">{row.option3}</TableCell>
              <TableCell align="right">{row.option4}</TableCell>
              <TableCell align="right">{row.option5}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
