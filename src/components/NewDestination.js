import React, { Fragment, useRef, useContext } from 'react';
import { Typography, CardContent, CardActions, Button, Switch } from '@mui/material';
import { DestContext } from '../contexts/destContext'
import classes from './NewDestination.module.css';

const NewDestination = (props) => {
  const { dispatch } = useContext(DestContext)

  const { onCloseModal } = props
  const nameInputRef = useRef(null)
  const imageInputRef = useRef(null)
  const addressInputRef = useRef(null)
  const populationInputRef = useRef(null)
  const nbrHotelsInputRef = useRef(null)
  const averageIncomeInputRef = useRef(null)
  const surfaceInputRef = useRef(null)
  const isActiveInputRef = useRef(null)
  
  const submitHandler = async (event) => {
    event.preventDefault()
    const name = nameInputRef.current.value;
    const imgUrl = imageInputRef.current.value;
    const address = addressInputRef.current.value;
    const isActive = isActiveInputRef.current.checked;
    const population = Number(populationInputRef.current.value);
    const averageIncome = Number(averageIncomeInputRef.current.value);
    const nbrHotels = Number(nbrHotelsInputRef.current.value);
    const surface = Number(surfaceInputRef.current.value);

    if(name.trim().length === 0 || imgUrl.trim().length === 0 || address.trim().length === 0 || population.toString().trim().length === 0 || averageIncome.toString().trim().length === 0 || surface.toString().trim().length === 0 || nbrHotels.toString().trim().length === 0){
      // throw error
      return;
    }
    
    dispatch({type: 'ADD_DEST', destination: {
      name,
      imgUrl,
      address,
      isActive,
      population,
      averageIncome,
      nbrHotels,
      surface,
    }})


    onCloseModal()
  }

  const cancelHandler = (e) => {
    e.preventDefault()
    onCloseModal()
  }
  
  addressInputRef.current?.focus();
  
  return (
    <Fragment>
      <CardContent>
        <form onSubmit={submitHandler}>
          <Typography variant='h5'>Ajouter une nouvelle destination</Typography>
          <div className={classes["form-group"]}>
            <input 
              ref={nameInputRef}  
              type="text" 
              placeholder="Nom de la destination" 
            />
          </div>
          <div className={classes["form-group"]}>
            <input 
              ref={addressInputRef} 
              type="text"
              placeholder="Adresse"
          />
          </div>
          <div className={classes["form-group"]}>
            <input 
              ref={imageInputRef} 
              placeholder="Lien de l’image"
              type="text" 
            /> 
          </div>
          <div className={classes["form-group"]}>
            <div className={classes.details}>
              <input 
                ref={populationInputRef} 
                placeholder="Nb Habitants"
              />
              <input 
                ref={nbrHotelsInputRef} 
                placeholder="Nb Hotels" 
                type="text" 
              /> 
              <input 
                ref={averageIncomeInputRef} 
                type="text" 
                placeholder="Revenu Moy"
              /> 
              <input 
                ref={surfaceInputRef} 
                type="text"
                placeholder="Superficie"
              /> 
            </div>
          </div>
          <Switch inputRef={isActiveInputRef}/>
        </form>
      </CardContent>
      <CardActions>
        <Button onClick={cancelHandler} size="small">Cancel</Button>
        <Button onClick={submitHandler} size="small">Confirm</Button>
      </CardActions>
    </Fragment>
  )
}

export default NewDestination