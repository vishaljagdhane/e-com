import React, { useEffect, useState } from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper, 
  Box,
  TextField,
  Button,
  IconButton,
  Tooltip,
  Typography,
} from '@mui/material';
import { styled } from '@mui/system';
import NagivationBar from '../Nagivation-pages/NagivationBar';
import EditIcon from '@mui/icons-material/Edit';
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';

const StyledTableCell = styled(TableCell)({
  backgroundColor: '#f5f5f5', // Background color for the header
  position: 'sticky',
  top: 0,
  zIndex: 1,
  borderBottom: '1px solid #e0e0e0', // Add bottom border to header cells
});

function StickyHeaderTable() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [editRowId, setEditRowId] = useState(null);
  const [editedData, setEditedData] = useState({});

  useEffect(() => {
    fetch("http://localhost:3010/users")
      .then(response => response.json())
      .then(result => {
        setData(result);
        setFilteredData(result); // Initially set filtered data same as fetched data
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    filterData(event.target.value);
  };

  const filterData = (value) => {
    if (value === '') {
      setFilteredData(data); // Reset to original data if search term is empty
    } else {
      const filtered = data.filter(row => 
        row.fristname.toLowerCase().includes(value.toLowerCase()) ||
        row.fatherName.toLowerCase().includes(value.toLowerCase()) ||
        row.lastName.toLowerCase().includes(value.toLowerCase()) ||
        row.eductions.toLowerCase().includes(value.toLowerCase()) ||
        row.collouge.toLowerCase().includes(value.toLowerCase()) ||
        row.City.toLowerCase().includes(value.toLowerCase()) ||
        row.State.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredData(filtered);
    }
  };

  const handleEditClick = (row) => {
    setEditRowId(row.id);
    setEditMode(true);
    setEditedData(row);
  };

  const handleSaveEdit = () => {
    // Perform save operation here (e.g., update data on server)
    // For demonstration, we'll just log the edited data
    console.log('Edited Data:', editedData);

    // Reset edit mode
    setEditMode(false);
    setEditRowId(null);
  };

  const handleCancelEdit = () => {
    // Reset edit mode and edited data
    setEditMode(false);
    setEditRowId(null);
    setEditedData({});
  };

  const handleFieldChange = (event, field) => {
    const value = event.target.value;
    setEditedData(prevData => ({
      ...prevData,
      [field]: value
    }));
  };

  const handleDelete = (row) => {
    // Perform delete operation here (e.g., update data on server)
    // For demonstration, we'll just log the deleted row
    console.log('Deleting row:', row);

    // Filter out the deleted row from both data and filteredData
    const updatedData = data.filter(item => item.id !== row.id);
    const updatedFilteredData = filteredData.filter(item => item.id !== row.id);
    setData(updatedData);
    setFilteredData(updatedFilteredData);
  };

  return (
    <>
      <Box sx={{width: '100%', position: 'relative', top: '100px', display: 'flex', justifyContent: 'center'}}>
        <NagivationBar/>
        <Box sx={{position:'relative',display:'block'}}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', width: '100%' }}>
          <Typography variant="h5" component="div">User Data</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <TextField
              label="Search"
              variant="outlined"
              value={searchTerm}
              onChange={handleSearchChange}
              style={{ marginRight: '10px' }}
              InputProps={{
                endAdornment: (
                  <IconButton size="large">
                    <SearchIcon />
                  </IconButton>
                )
              }}
            />
          </Box>
        </Box>

        <TableContainer component={Paper} style={{ width: '100%', marginTop: '20px',height:'500px' }}>
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell>First Name</StyledTableCell>
                <StyledTableCell>Father Name</StyledTableCell>
                <StyledTableCell>Last Name</StyledTableCell>
                <StyledTableCell>Education</StyledTableCell>
                <StyledTableCell>College</StyledTableCell>
                <StyledTableCell>City</StyledTableCell>
                <StyledTableCell>State</StyledTableCell>
                <StyledTableCell>Actions</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredData.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{editMode && editRowId === row.id ? (
                    <TextField
                      value={editedData.fristname}
                      onChange={(e) => handleFieldChange(e, 'fristname')}
                      variant="outlined"
                      size="small"
                    />
                  ) : row.fristname}</TableCell>
                  <TableCell>{editMode && editRowId === row.id ? (
                    <TextField
                      value={editedData.fatherName}
                      onChange={(e) => handleFieldChange(e, 'fatherName')}
                      variant="outlined"
                      size="small"
                    />
                  ) : row.fatherName}</TableCell>
                  <TableCell>{editMode && editRowId === row.id ? (
                    <TextField
                      value={editedData.lastName}
                      onChange={(e) => handleFieldChange(e, 'lastName')}
                      variant="outlined"
                      size="small"
                    />
                  ) : row.lastName}</TableCell>
                  <TableCell>{editMode && editRowId === row.id ? (
                    <TextField
                      value={editedData.eductions}
                      onChange={(e) => handleFieldChange(e, 'eductions')}
                      variant="outlined"
                      size="small"
                    />
                  ) : row.eductions}</TableCell>
                  <TableCell>{editMode && editRowId === row.id ? (
                    <TextField
                      value={editedData.collouge}
                      onChange={(e) => handleFieldChange(e, 'collouge')}
                      variant="outlined"
                      size="small"
                    />
                  ) : row.collouge}</TableCell>
                  <TableCell>{editMode && editRowId === row.id ? (
                    <TextField
                      value={editedData.City}
                      onChange={(e) => handleFieldChange(e, 'City')}
                      variant="outlined"
                      size="small"
                    />
                  ) : row.City}</TableCell>
                  <TableCell>{editMode && editRowId === row.id ? (
                    <TextField
                      value={editedData.State}
                      onChange={(e) => handleFieldChange(e, 'State')}
                      variant="outlined"
                      size="small"
                    />
                  ) : row.State}</TableCell>
                  <TableCell>
                    {editMode && editRowId === row.id ? (
                      <>
                        <Button onClick={handleSaveEdit} variant="contained" color="primary" size="small" style={{ marginRight: '5px' }}>Save</Button>
                        <Button onClick={handleCancelEdit} variant="contained" color="secondary" size="small">Cancel</Button>
                      </>
                    ) : (
                      <>
                        <Tooltip title="Edit">
                          <IconButton onClick={() => handleEditClick(row)} size="small">
                            <EditIcon />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Delete">
                          <IconButton onClick={() => handleDelete(row)} size="small">
                            <DeleteIcon />
                          </IconButton>
                        </Tooltip>
                      </>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </Box>
      </Box>
    </>
  );

}

export default StickyHeaderTable;
