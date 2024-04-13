import React from 'react'

const Home = () => {
    const reason = [
        {
            "check" : true,
            "text" : "Product discovery and building what matters"
        },
        {
            "check" : true,
            "text" : "Measuring to ensure updates are a success"
        },
        {
            "check" : true,
            "text" : "And much more!"
        },
    ]
  return (
    <div className='w-full h-full md:max-w-[700px] mx-auto mt-10 my-auto'>
        <div className='p-4 md:flex flex-row-reverse md:mt-10 md:mx-auto md:my-auto bg-White w-full h-full border bg-none border-red-300 rounded-xl'>
        <div className='w-full md:hidden'>
            <img src="../images/illustration-sign-up-mobile.svg" alt="" className='w-full h-full' />
        </div>
        <div className='hidden md:flex'>
            <img src="../images/illustration-sign-up-desktop.svg" alt="w-full h-full" />
        </div>
        <div className='items-center p-6'>
            <div className='m-2 block gap-4 '>
                <h1 className='text-3xl font-bold text-CharcoalGrey'>Stay updated!</h1>
                <p className='mt-4'>Join 60,000+ product managers receiving monthly updates on:</p>
            </div>
            <div className='m-2 font-medium block gap-4 justify-center'>
                { reason.map((data) => (
                    <div key={data.text} className='flex gap-4'>
                        <span className=''><img src="./images/icon-list.svg" alt="" /></span>
                        <p>{data.text}</p>
                    </div>
                ))}
            </div>
            <div className='gap-4'>
                <div className="">
                    <p>Email address</p>
                    <input type="email" placeholder='email@company.com' className='p-4 w-full border border-CharcoalGrey rounded-lg'/>
                </div>
                <div className='mt-4'>
                    <input type="submit" value='Subscribe to monthly newsletter' className='p-4 w-full bg-DarkSlateGrey font-bold text-White border border-CharcoalGrey rounded-lg' />
                </div>
            </div>

        </div>
        </div>
    </div>
  )
}

export default Home