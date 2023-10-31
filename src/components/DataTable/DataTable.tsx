import React from "react";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import { startCase } from "lodash";
import { Error } from "@mui/icons-material";

type DataTableProps = {
  columns: string[];
  dataSource: string;
};

export default function DataTable({
  columns = [],
  dataSource,
}: DataTableProps) {
  const [data, setData] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [availableColumns, setAvailableColumns] = React.useState<string[]>([]);

  React.useEffect(() => {
    if (dataSource && !data.length) {
      const url = dataSource.startsWith("http")
        ? dataSource
        : `${import.meta.env.BASE_URL}/${dataSource}`;
      setLoading(true);
      fetch(url)
        .then((res) => res.json())
        .then((res) => {
          setData(res);
          setLoading(false);
        })
        .catch(() => {
          setError(true);
          setLoading(false);
        });
    }
  }, [dataSource, data]);

  React.useEffect(() => {
    if (!data.length || !columns.length) return;
    // only columns that are available in the data keys
    const cols = columns.filter((column) => data[0].hasOwnProperty(column));
    setAvailableColumns(cols);
  }, [columns, data]);

  if (loading)
    return (
      <TableContainer component={Paper} sx={{ width: "90%", height: 400 }}>
        <Skeleton variant="rectangular" width="100%" height="100%" />
      </TableContainer>
    );

  if (error)
    return (
      <TableContainer component={Paper} sx={{ width: "90%", height: 400 }}>
        <Stack justifyContent="center" alignItems="center" height="100%">
          <Error />
          <Typography>Something went wrong.</Typography>
        </Stack>
      </TableContainer>
    );

  return (
    <TableContainer
      component={Paper}
      sx={{ maxWidth: "90%", maxHeight: "75%" }}
    >
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            {availableColumns.map((column) => (
              <TableCell key={column}>{startCase(column)}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, i) => (
            <TableRow
              key={row + i}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {availableColumns.map((column, i) => (
                <TableCell key={column + i}>{row[column]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
