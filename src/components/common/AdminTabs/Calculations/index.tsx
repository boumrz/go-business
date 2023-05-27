import {
  TableContainer,
  TableHead,
  Table,
  TableRow,
  TableBody,
  Button,
  Paper,
  styled,
  TableCell,
  tableCellClasses,
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

const handleMore = () => {
  console.log("more");
};

export const Calculations = ({ calculations }: any) => {
  return (
    <TableContainer sx={{ boxShadow: "none" }} component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Дата</StyledTableCell>
            <StyledTableCell align="left">Пользователь</StyledTableCell>
            <StyledTableCell align="left">
              Сумма расчета объёма инвестиций
            </StyledTableCell>
            <StyledTableCell align="right">Действия</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {calculations.map((row: any) => (
            <StyledTableRow key={row.date}>
              <StyledTableCell component="th" scope="row">
                {row.date}
              </StyledTableCell>
              <StyledTableCell align="left">{row.user}</StyledTableCell>
              <StyledTableCell align="left">{row.amount}</StyledTableCell>
              <StyledTableCell align="right" width={300}>
                <Button
                  sx={{
                    width: "164px",
                    height: "40px",
                    borderRadius: "8px",
                    color: "#3A6CAB",
                    border: "1px solid #3A6CAB",
                    "&:hover": {
                      color: "#3A6CAB",
                      border: "1px solid #3A6CAB",
                      backgroundColor: "white",
                      boxShadow:
                        "0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)",
                    },
                  }}
                  variant="outlined"
                  onClick={handleMore}
                >
                  Подробнее
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
