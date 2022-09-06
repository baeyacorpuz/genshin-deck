import React, { useState } from 'react';
import { Box, Button, Grid, Modal, Switch, Typography } from '@mui/material';
import { Field, Form } from 'react-final-form';
import SelectField from '../form-group/select-field';
import Textfield from '../form-group/textfield';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  minHeight: 300,
  backgroundColor: '#fff',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

const ModalForm = ({
  handleClose,
  isOpen,
  onSubmit,
  elements,
  formEdit,
  row,
  handleDelete,
}) => {
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  }

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
    >
      <Box sx={style}>
        {formEdit ? (
          <Form
            onSubmit={onSubmit}
            initialValues={row}
            // initialValues={{
            //   name: '',
            //   vision: {},
            //   weapon_type: '',
            //   constellation: '',
            //   title: '',
            //   description: '',
            //   is_active: checked,
            // }}
            render={({ handleSubmit }) => (
              <form onSubmit={handleSubmit} noValidate>
                <Field
                  name="name"
                  component={Textfield}
                  placeholder="Enter Name"
                  label="Enter Name"
                />
                <Field
                  name="vision"
                  component={SelectField}
                  elements={elements}
                  label="Select Vision/Element"
                />
                <Field
                  name="weapon_type"
                  component={Textfield}
                  placeholder="Enter Weapon"
                  label="Enter Weapon"
                />
                <Field
                  name="constellation"
                  component={Textfield}
                  placeholder="Enter Constellation"
                  label="Enter Constellation"
                />
                <Field
                  name="title"
                  component={Textfield}
                  placeholder="Enter Title"
                  label="Enter Title"
                />
                <Field
                  name="description"
                  component={Textfield}
                  placeholder="Enter Description"
                  label="Enter Description"
                  multiline={true}
                  rows={2}
                />
                <Switch
                  name="is_active"
                  label="Set Active?"
                  checked={checked}
                  value={checked}
                  onChange={handleChange}
                  inputprops={{ 'aria-label': 'controlled' }}
                />
                <Button
                  color="primary"
                  variant="contained"
                  size="large"
                  fullWidth
                  onClick={handleSubmit}
                >
                  Create Character
                </Button>
              </form>
            )}
          />
          ) : (
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Typography variant="h3">
                  {row.name}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h5">
                  {row.description}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6">Weapon: {row.weapon_type}</Typography>
                <Typography variant="h6">Title: {row.title}</Typography>
                <Typography variant="h6">Vision: {row.vision?.name}</Typography>
                <Typography variant="h6">Constellation: {row.constellation}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Button variant='contained' onClick={() => handleDelete(row)} color='primary'>Delete</Button>
              </Grid>
            </Grid>
          )
        }
      </Box>
    </Modal>
  )
}
 
export default ModalForm;
