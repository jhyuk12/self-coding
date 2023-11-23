const Footer = () => {
  return (
    <div className='bg-[#222222] h-[260px] flex'>
      <div className=' w-[1160px] flex m-auto'>
        <ul className='mr-16 text-sm font-medium text-white '>
          <li className='text-yellow-300'>개인정보 처리방침</li>
          <li>위치정보 이용약관</li>
          <li>사이트맵</li>
          <li>임차문의</li>
          <li>고객문의</li>
          <li>인재채용</li>
        </ul>
        <div className='text-sm font-medium w-[800px]  text-gray-500 gap-2'>
          <ul>
            <li>한국맥도날드(유)</li>
            <li>대표이사:김기원</li>
            <li>사업자등록번호:101-81-26409</li>
            <li>전화주문: 1600-5252</li>
            <li>COPYRIGHT © 2019 ALL RIGHTS REVERSED BY McDonal's</li>
          </ul>
        </div>
        <div className='flex'>
          <img src='./images/logo.png' />
        </div>
      </div>
    </div>
  );
};

export default Footer;
