import { Button } from '@mui/material';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { getCharacters, getElements, postCharacter, updateCharacter } from '../../api/characterApi';
import DataTable from '../../components/data-table';
import ModalForm from '../../components/modal';

const Characters = () => {
  const [formModalOpen, setFormModalOpen] = useState(false)
  const [viewModalOpen, setViewModalOpen] = useState(false)

  const { data, isLoading } = useQuery("characters", getCharacters)
  const { data: elements } = useQuery('elements', getElements);

  const toggleFormModalOpen = () => {
    setFormModalOpen(!formModalOpen)
  }

  const toggleViewModalOpen = () => {
    setViewModalOpen(!viewModalOpen)
  }

  const onSubmit = (values) => {
    postCharacter(values).then(() => toggleFormModalOpen())
  }

  const onUpdate = (values) => {
    updateCharacter(values).then(() => toggleViewModalOpen())
  }

  if (isLoading) {
    return (
      <div className="App">
        <div className="App-header">
          <h1 data-testid="loadingTestId">Loading...</h1>
        </div>
      </div>
    )
  }

  const mutatedData = (() => {
    return data.character
  })()

  const visionElements = (() => {
    return elements?.element
  })()

  return (
    <div className="App">
      <div className="App-header">
        <div style={{ width: '75%' }}>
          <h1
            data-testid="titleTestId" style={{ margin: 0 }}>Hello, Traveler.</h1>
          <p>Ad astra abyssosque!</p>
          <div data-testid="buttonTestId">
            <Button
              color="primary"
              variant="contained"
              size="large"
              onClick={toggleFormModalOpen}
              sx={{
                marginBottom: 2
              }}
            >New Character</Button>
          </div>
          <ModalForm
            isOpen={formModalOpen}
            handleClose={toggleFormModalOpen}
            onSubmit={onSubmit}
            elements={visionElements}
            formEdit={true}
          />
          <DataTable
            onSubmit={onUpdate}
            mutatedData={mutatedData}
            toggleViewModalOpen={toggleViewModalOpen}
            viewModalOpen={viewModalOpen}
            elements={visionElements}
          />
        </div>
      </div>
    </div>
  );
}

export default Characters;
