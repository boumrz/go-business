import {
  TableContainer,
  TableHead,
  Table,
  TableCell,
  TableRow,
  TableBody,
  Paper,
  Button,
  Box,
  tableCellClasses,
  styled,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

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

export const Users = ({ users }: any) => {
  const navigate = useNavigate();

  const handleRemove = () => {
    console.log("remove");
  };

  //@ts-ignore
  const handleMore = (_event: any, user: any) => {
    navigate("/user/123");
  };

  return (
    <TableContainer sx={{ boxShadow: "none" }} component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">ИНН</StyledTableCell>
            <StyledTableCell align="left">
              Адрес электронной почты
            </StyledTableCell>
            <StyledTableCell align="left">Действия</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row: any) => (
            <StyledTableRow key={row.inn}>
              <StyledTableCell component="th" scope="row">
                {row.inn}
              </StyledTableCell>
              <StyledTableCell align="left">{row.email}</StyledTableCell>
              <StyledTableCell align="left" width={300}>
                <Box sx={{ display: "flex", gap: "24px" }}>
                  <Button
                    sx={{
                      width: "164px",
                      height: "40px",
                      backgroundColor: "rgba(211, 27, 44, 0.1)",
                      borderRadius: "8px",
                      color: "#D31B2C",
                      "&:hover": {
                        color: "#D31B2C",
                        backgroundColor: "rgba(211, 27, 44, 0.1)",
                        boxShadow:
                          "0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)",
                      },
                    }}
                    variant="contained"
                    onClick={handleRemove}
                  >
                    Удалить
                  </Button>
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
                    onClick={(event: any) => handleMore(event, row)}
                  >
                    Подробнее
                  </Button>
                </Box>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
