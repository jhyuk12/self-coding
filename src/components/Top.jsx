const Top = () => {
  return (
    <div className=' max-w-[1180px] h-[140px] mx-auto flex justify-between'>
      <div className=' h-[140px] py-6 w-2/12'>
        <img
          src='https://www.mcdonalds.co.kr/kor/images/common/logo.png'
          alt='맥도날드'
        />
      </div>

      <ul className=' h-[140px] flex items-center text-xl w-8/12 gap-10 font-bold  '>
        <li className='w-2/12 ml-6'>Menu</li>
        <li className='w-2/12'>Store</li>
        <li className='w-3/12'>What's New</li>
        <li className='w-2/12 ml-2'>Story</li>
      </ul>

      <ul className=' h-[140px] flex items-center w-4/12 gap-1'>
        <li className='rounded-full bg-red-600 p-2 text-white '>임차문의</li>
        <li className='rounded-full bg-orange-600 p-2 text-white '>RECRUIT</li>
        <li className='rounded-full bg-[#264a36] w- p-2 mr-4 text-white '>
          ENG
        </li>
        <li>
          <img
            src='https://www.mcdonalds.co.kr/kor/images/common/ico_search.png'
            alt='검색돋보기'
          />
        </li>
      </ul>
    </div>
  );
};

export default Top;
