import React from 'react'
import CountDivider from '../components/countDivider'
import LowerCTA from '../components/lowerCTA';

const bigCountCTA = ({openModals}) => (
<div>
    <CountDivider />
    <LowerCTA openModal={openModals} />
</div>
)

export default bigCountCTA