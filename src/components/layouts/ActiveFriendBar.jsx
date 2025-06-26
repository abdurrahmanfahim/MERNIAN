import React from 'react' 
import { Link } from 'react-router-dom';

const ActiveFriendBar = () => {
    const activeFriends = Array.from({ length: 10 }, (_, index) => ({
      id: index,
      picture: './images/activefriend.jpg',
  }));
  return (
    <div className='w-20 bg-white '>
      <div className='flex flex-col gap-2 mt-2 items-center  '>
        {activeFriends.map(item => (
          <Link to={'/public-profile'} className='size-10' key={item.id}>
          <img className='size-full border-2 border-[#D9D9D9] rounded-full  ' src={item.picture} alt={item.id + "'s profile picture"} />
        </Link>
        ))}
      </div>
    </div>
  )
}

export default ActiveFriendBar