import './bubble.css'

export const YellowBubble = ({shoot}: {shoot?: string}) => {
  return (
    <div className={shoot==='red'?'red':'yellow'}>
      
    </div>
  )
}

export const PinkBubble = ({shoot}: {shoot?: string}) => {
  return (
    <div className='pink'>
      
    </div>
  )
}


export const BlackBubble = ({shoot}: {shoot?: string}) => {
  return (
    <div className={'black'}>
      
    </div>
  )

}

export const PurpleBubble = ({shoot}: {shoot?: string}) => {
  return (
    <div className={'purple'}>
      
    </div>
  )
}


