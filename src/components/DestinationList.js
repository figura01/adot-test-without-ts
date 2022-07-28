import { useContext } from 'react'
import { DestContext } from '../contexts/destContext'
import DestinationItem from './DestinationItem'

import classes from './DestinationList.module.css'

const DestinationList = (props) => {

  const { dests } = useContext(DestContext);

  return (
    <ul className={classes["destination-list"]}>
      {dests.length > 0 && dests.map((destination) => {
        return (
          <DestinationItem key={destination.id} destination={destination} />
        )
      })}
    </ul>
  )
}

export default DestinationList;