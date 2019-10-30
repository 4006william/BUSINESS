import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { Link } from 'react-router';

const columns = [
  { id: 'name', label: 'NAME', minWidth: 100 },
  { id: 'description', label: 'DESCRIPTION', minWidth: 450 },
  {
    id: 'hours',
    label: 'HOURS',
    minWidth: 70,
    align: 'right',
    format: value => value.toLocaleString(),
  },
  {
    id: 'address',
    label: 'ADDRESS',
    minWidth: 150,
    align: 'right',
    format: value => value.toLocaleString(),
  },

];

function createData(name, description, hours, address) {
  return { name, description, hours, address };
}

const rows = [
  createData(<a href="#">Texas Tradition</a>, 'Family-friendly dining on burgers, steaks & seafood in a super-casual setting with picnic tables.', '10:30 AM - 9 PM', '5321 Hwy Blvd #1306, Katy, TX 77494'),
  createData(<a href="#">Snappys Cafe n Grill</a>, 'Classic American diner fare, including Greek dishes, served for breakfast & lunch in casual digs.', '6 AM - 3 PM', '5803 Hwy Blvd, Katy, TX 77494'),
  createData(<a href="#">Snappys Cafe n Grill</a>, 'Classic American diner fare, including Greek dishes, served for breakfast & lunch in casual digs.', '6 AM - 3 PM', '5803 Hwy Blvd, Katy, TX 77494'),
  createData(<a href="#">Snappys Cafe n Grill</a>, 'Classic American diner fare, including Greek dishes, served for breakfast & lunch in casual digs.', '6 AM - 3 PM', '5803 Hwy Blvd, Katy, TX 77494'),
  createData(<a href="#">Snappys Cafe n Grill</a>, 'Classic American diner fare, including Greek dishes, served for breakfast & lunch in casual digs.', '6 AM - 3 PM', '5803 Hwy Blvd, Katy, TX 77494'),
  createData(<a href="#">Snappys Cafe n Grill</a>, 'Classic American diner fare, including Greek dishes, served for breakfast & lunch in casual digs.', '6 AM - 3 PM', '5803 Hwy Blvd, Katy, TX 77494'),
  createData(<a href="#">Snappys Cafe n Grill</a>, 'Classic American diner fare, including Greek dishes, served for breakfast & lunch in casual digs.', '6 AM - 3 PM', '5803 Hwy Blvd, Katy, TX 77494'),
  createData(<a href="#">Snappys Cafe n Grill</a>, 'Classic American diner fare, including Greek dishes, served for breakfast & lunch in casual digs.', '6 AM - 3 PM', '5803 Hwy Blvd, Katy, TX 77494'),
  createData(<a href="#">Snappys Cafe n Grill</a>, 'Classic American diner fare, including Greek dishes, served for breakfast & lunch in casual digs.', '6 AM - 3 PM', '5803 Hwy Blvd, Katy, TX 77494'),
  createData(<a href="#">Snappys Cafe n Grill</a>, 'Classic American diner fare, including Greek dishes, served for breakfast & lunch in casual digs.', '6 AM - 3 PM', '5803 Hwy Blvd, Katy, TX 77494'),
  createData(<a href="#">Snappys Cafe n Grill</a>, 'Classic American diner fare, including Greek dishes, served for breakfast & lunch in casual digs.', '6 AM - 3 PM', '5803 Hwy Blvd, Katy, TX 77494'),

];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  tableWrapper: {
    maxHeight: 440,
    overflow: 'auto',
  },
});

export default function Table1() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <div className={classes.tableWrapper}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth,
                           background: 'lightgray'
                        }}
                //   class="table1-heading"
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map(column => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        backIconButtonProps={{
          'aria-label': 'previous page',
        }}
        nextIconButtonProps={{
          'aria-label': 'next page',
        }}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}