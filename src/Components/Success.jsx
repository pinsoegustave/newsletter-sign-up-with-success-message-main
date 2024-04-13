import React from 'react'

const Success = () => {
  return (
    <div className='w-full flex my-auto border border-green-500'>
        <div className='p-4 block mx-auto my-auto mt-32 justify-around bg-White'>
            <img src="./images/icon-success.svg" alt="" className='' />
            <h1 className='mt-4 text-4xl font-bold'>Thanks for subscribing!</h1>
            <p className='mt-4'>
                A confirmation email has been sent to ash@loremcompany.com. Please open it and click the button inside to confirm your subscription.
            </p>
            <div className='mt-48'>
                <input type="submit" value="Dismiss message" className='p-4 w-full bg-DarkSlateGrey font-bold text-White border border-CharcoalGrey rounded-lg align-bottom' />
            </div>
        </div>
    </div>
  )
}

export default Success