import React from 'react'
import { ButtonGroup, ToggleButton } from 'react-bootstrap'

function Header({tabValue, setTabValue}) {
  return (
    <div className='d-flex justify-content-between my-4'>
        <h2>Video Library</h2>
        <div>
          <ButtonGroup>
            <ToggleButton
              type="radio"
              id="radio-1"
              variant={'outline-success'}
              value={'1'}
              checked={tabValue === "1"}
              onChange={() => setTabValue("1")}
            >
              All Videos
            </ToggleButton>
            <ToggleButton
              type="radio"
              id="radio-2"
              variant={'outline-success'}
              value={'2'}
              checked={tabValue === "2"}
              onChange={() => setTabValue("2")}
            >
              Bookmarked Videos
            </ToggleButton>
          </ButtonGroup>
        </div>
      </div>
  )
}

export default Header