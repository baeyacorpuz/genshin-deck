import React, { useState } from 'react';
import { DataGrid, GridActionsCellItem, GridToolbarContainer, GridToolbarFilterButton } from "@mui/x-data-grid"
import { Button } from '@mui/material';
import ModalForm from '../modal';
import { deleteCharacters } from '../../api/characterApi';
import { Edit } from '@mui/icons-material';

const CustomToolbar = ({
  handleDelete
}) => {
  return (
    <GridToolbarContainer>
      <GridToolbarFilterButton sx={{
        marginRight: 4
      }} />
      <Button onClick={handleDelete}>Delete</Button>
    </GridToolbarContainer>
  )
}

const DataTable = ({
  mutatedData,
  toggleViewModalOpen,
  viewModalOpen,
  onSubmit,
  elements,
}) => {

  const [selectedRow, setSelectedRow] = useState({})
  const [selectedIds, setSelectedIds] = useState([])
  const [formEdit, setFormEdit] = useState(false)

  const getVisionName = params => {
    return params.row.vision.name
  }

  const handleEdit = (params) => {
    setSelectedRow(params.row)
    toggleFormEdit()
    toggleViewModalOpen()
  }  

  const columns = [
    { field: 'name', headerName: "Name", width: 200, filterable: false},
    { field: 'vision',
      headerName: "Vision",
      width: 160,
      filterable: false,
      valueGetter: getVisionName,
    },
    { field: 'weapon_type', headerName: "Weapon", width: 160, filterable: false},
    { field: 'constellation', headerName: "Constellation", width: 200, filterable: false},
    { field: 'is_active', headerName: "Active", width: 100},
    { field: 'actions', 
      type: 'actions',
      getActions: params => [
        <GridActionsCellItem onClick={() => handleEdit(params)} icon={<Edit />} label="Edit character" />,
      ]  
    }
  ]


  const handleRowClick = (item) => {
    setSelectedRow(item.row)
    toggleViewModalOpen()
  }

  const handleDelete = (row) => {
    deleteCharacters({"ids": [row._id]})
    toggleViewModalOpen()
  }

  const toggleFormEdit = () => { setFormEdit(true) }

  return (
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={mutatedData}
        columns={columns}
        checkboxSelection
        getRowId={(row) => row._id}
        disableSelectionOnClick
        onRowClick={(row) => handleRowClick(row)}
        hideFooter={true}
        components={{
          Toolbar: CustomToolbar
        }}
        componentsProps={{
          GridToolbar: {
            
          }
        }}
        onSelectionModelChange={(ids) => {
          setSelectedIds(ids)
          console.log(ids);
        }}
      />
      <ModalForm
        isOpen={viewModalOpen}
        handleClose={toggleViewModalOpen}
        formEdit={!!formEdit}
        row={selectedRow}
        handleDelete={handleDelete}
        toggleFormEdit={toggleFormEdit}
        onSubmit={onSubmit}
        elements={elements}
      />
    </div>
  )
}

 
export default DataTable;
