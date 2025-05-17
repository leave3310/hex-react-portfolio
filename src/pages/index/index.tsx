import Carousel from './components/carousel'
import Default from '@/layouts/Default'

import heroSection from '@/assets/images/hero_section.png'
import heroSection2 from '@/assets/images/hero_section2.png'
import photo from '@/assets/images/index/photo.png'
import photo2 from '@/assets/images/index/photo2.png'
import photo3 from '@/assets/images/index/photo3.png'
import photo4 from '@/assets/images/index/photo4.png'
import photo9 from '@/assets/images/index/photo9.png'
import photo8 from '@/assets/images/index/photo8.png'
import photo8Mobile from '@/assets/images/index/photo8_mobile.jpg'
import people from '@/assets/images/index/people.png'
import people2 from '@/assets/images/index/people2.png'
import people3 from '@/assets/images/index/people3.png'
import people4 from '@/assets/images/index/people4.png'
import YTIcon from '@/assets/images/yt.png'
import PodcastIcon from '@/assets/images/podcast.png'
import FBIcon from '@/assets/images/fb.png'
import LinkedinIcon from '@/assets/images/linkedin.png'
import IGIcon from '@/assets/images/ig.png'
import ArrowIcon from '@/assets/images/svg/arrow.svg?react'
import check from '@/assets/images/index/check.jpg'

const serviceList = [
  {
    title: '履歷健檢',
    description: '履歷是打開機會之門的第一步。讓我協助你突顯專業技術與核心能力，並透過簡短模擬面試為你加分，讓面試官第一眼就被你吸引。',
    image: photo,
  },
  {
    title: '線上諮詢',
    description: '想快速解決前端學習瓶頸，或需要專業職涯指引？透過線上一對一諮詢，我將協助你更有方向地邁進。',
    image: photo2,
  },
  {
    title: '網頁開發',
    description: '想打造高效能、具美感的網站？我提供從需求訪談到架構實作的一站式服務，讓你的品牌與產品在線上脫穎而出。',
    image: photo3,
  },
  {
    title: '企業內訓',
    description: '想讓團隊快速掌握前端最新技術或優化現有專案流程？我可協助打造專業、實用的企業內訓課程，一次解決團隊痛點。',
    image: photo4,
  },
]

const successCaseList = [
  {
    image: people,
    title: '無經驗到前端工程師 Offer',
    features: ['打造前端專案與履歷亮點', '深度強化面試表現'],
    link: '#',
  },
  {
    image: people2,
    title: '轉職迷茫到明確學習規劃',
    features: ['制訂階段性目標與時間安排', '鼓勵參與前端社群或活動'],
    link: '#',
  },
  {
    image: people3,
    title: '面試緊張到從容應對',
    features: ['透過面試模擬找出常犯的邏輯漏洞', '討論遇到不熟悉議題時的回應方式'],
    link: '#',
  },
  {
    image: people4,
    title: '面試緊張到從容應對',
    features: ['擬定進階框架或技術研究目標', '培養跨團隊溝通與簡報能力'],
    link: '#',
  },
]

export default function Index() {
  return (
    <Default >
      <section className='xl:flex relative'>
        <div className='xl:w-1/2'>
          <img src={heroSection} alt="hero-section" className='w-full' />
        </div>
        <div className='h-[356px] xl:h-auto xl:w-1/2 flex xl:justify-center flex-col bg-cover bg-center xl:pl-[80px] px-[24px] py-[24px]' style={{ backgroundImage: `url(${heroSection2})` }}>
          <h1 className='2xl:text-[120px] xl:text-[80px] text-[52px] font-black text-primary mb-3'>Alyse Wang</h1>
          <p className='text-[28px] font-bold text-primary'>前端工程師 & 職涯諮詢師</p>
        </div>
        <div className='xl:absolute mt-[-160px] xl:mt-auto mx-4 xl:mx-auto xl:top-[80.8%] xl:right-[80px] bg-white xl:py-[80px] xl:px-[40px] py-[40px] px-[24px] font-medium xl:text-[28px] text-[24px] text-black max-w-[1077px]'>
          <p className='mb-4'>
            嗨，我是 Alyse <br className='xl:hidden' /> 一名深耕前端技術的工程師。
          </p>
          <p className='mb-4'>擅長 React、Vue 等框架，同時熱愛為轉職與新手工程師提供職涯指導。邀請你與我一起，開啟更具潛能的程式與職涯之旅！</p>
          <div className='flex gap-x-[23.98px]'>
            <img src={YTIcon} alt='youtube' />
            <img src={PodcastIcon} alt="podcast" />
            <img src={FBIcon} alt="fb" />
            <img src={LinkedinIcon} alt="linkedin" />
            <img src={IGIcon} alt="ig" />
          </div>
        </div>
      </section>
      <section className='xl:pt-[282px] pt-[64px] xl:pb-[80px] pb-[64px]'>
        <div className='max-w-[1296px] mx-auto'>
          <h2 className='xl:text-[64px] text-[48px] px-3 xl:px-0 font-bold text-black mb-[32px]'>
            專業服務與方案
          </h2>
          <div className='px-3 xl:px-[110px] grid gap-y-[32px] xl:gap-y-[64px] mb-[32px] xl:mb-[33px]'>
            {
              serviceList.map((item, index) => (
                <div className={`flex relative flex-col ${index % 2 !== 0 ? 'xl:flex-row-reverse' : ''}`} key={index}>
                  <div className='xl:max-w-[636px] w-full'>
                    <img src={item.image} alt="photo" className='w-full' />
                  </div>
                  <div className={`p-[24px] bg-white xl:absolute xl:top-1/2 xl:-translate-y-1/2 xl:max-w-[480px] w-full ${index % 2 !== 0 ? 'xl:left-0' : 'xl:right-0'}`}>
                    <div className='px-[5px] py-[18.75px]'>
                      <div className=' bg-primary rounded-[10px] w-[30px] h-[2.5px]'>
                      </div>
                    </div>
                    <div>
                      <h3 className='mb-2 text-[28px] font-bold text-black'>{item.title}</h3>
                      <p className='font-medium text-[16px] text-text'>{item.description}</p>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
          <div className='text-[28px] font-bold text-black flex items-end xl:items-center justify-end xl:flex-row flex-col px-3'>
            聯繫我，取得更多資訊！
            <div className='border border-black size-[40px] rounded-full flex items-center justify-center ml-2 mt-2 xl:mt-0'>
              <ArrowIcon className='fill-black  w-[13.5px] h-[21px]' />
            </div>
          </div>
        </div>
      </section>
      <section className='py-[64px] xl:py-[80px]'>
        <div className='max-w-[1432px] mx-auto px-4 xl:px-0'>
          <h2 className='xl:ml-[68px] text-[48px] font-bold text-black mb-[24px]'>部落格精選</h2>
          <Carousel />
        </div>
      </section>
      <section className='max-w-[1296px] mx-auto px-3 xl:py-[80px] py-[64px] xl:px-0'>
        <h2 className='xl:text-[64px] text-[48px] font-bold text-black mb-[24px]'>職涯諮詢<br className='xl:hidden' />成功案例</h2>
        <div className='relative xl:mb-[40px] mb-[40px]'>
          <div className='bg-[#EDEDED] p-[24px] xl:max-w-[745px]'>
            <img src={photo8} alt="photo8" className='w-full h-full object-cover hidden xl:block' />
            <img src={photo8Mobile} alt="photo8" className='w-full h-full object-cover block xl:hidden' />
          </div>
          <div className='mt-[-166px] xl:mt-0 relative xl:static'>
            <div className='xl:absolute xl:top-[29px] xl:right-[219px] mb-3 xl:max-w-[526px] w-full px-[40px] py-[40px] xl:py-[80px] bg-white'>
              <div className='flex items-center justify-center mb-[24px] size-[40px]'>
                <div className='w-[30px] h-[2.5px] bg-primary'></div>
              </div>
              <p className='text-[16px] font-bold text-black'>
                在職涯發展的關鍵轉折點上，適時的協助與正確的方向至關重要。藉由職涯諮詢，我可以幫助你加速釐清目標、建立更全面的技術與軟實力，並有效<span className='text-primary'>突破原有的舒適圈</span>。
              </p>
            </div>
            <div className='bg-[#F5F5F5] p-[40px] xl:max-w-[526px] w-full px-[24px] xl:absolute xl:top-[285px] xl:right-0 xl:py-[80px] xl:px-[40px]' >
              <div className='flex items-center justify-center mb-[24px] size-[40px]'>
                <div className='w-[30px] h-[2.5px] bg-primary'></div>
              </div>
              <p className='font-bold text-[16px] mb-[24px] text-black'>期待在下一個新機會中，我能與你一起攜手邁向更高峰！</p>
              <a href="#" className='text-[16px] font-medium py-2 px-4 border border-primary bg-white rounded-[40px] inline-flex text-primary'>立即預約諮詢</a>
            </div>
          </div>
        </div>
        <div className='bg-[#F5F5F5] p-[24px] flex xl:gap-x-[24px] flex-col xl:flex-row gap-y-[24px]'>
          {
            successCaseList.map((item, index) => (
              <div key={index} className='flex-1'>
                <div className='mb-4'>
                  <img src={item.image} alt="people" />
                </div>
                <h3 className='font-bold text-[24px] text-black mb-2'>{item.title}</h3>
                <ul className='flex flex-col gap-y-2 pb-4 border-b border-black mb-4'>
                  {
                    item.features.map((feature, index) => (
                      <li key={index} className='text-[16px] font-medium text-text flex items-center'>
                        <img src={check} alt="check" className='size-[16px] mr-2' />
                        {feature}
                      </li>
                    ))
                  }
                </ul>
                <a href={item.link} className='text-[16px] font-medium text-text py-2 px-4 border border-black rounded-[40px] inline-flex'>前往聆聽 podcast</a>
              </div>
            ))
          }
        </div>

      </section>
      <section className='flex flex-col xl:flex-row'>
        <div className='xl:w-1/2'>
          <img src={photo9} alt="photo9" className='w-full h-full object-cover' />
        </div>
        <div className='p-3 xl:px-[80px] xl:py-[172px] bg-cover bg-center xl:w-1/2' style={{
          backgroundImage: `url(${heroSection2})`,
        }}>
          <div className='bg-white py-[40px] px-[24px] xl:p-[80px]'>
            <h2 className='text-[48px] xl:text-[64px] font-bold text-black mb-4'>訂閱電子報</h2>
            <p className='text-[20px] font-medium text-black mb-[24px]'>
              立即訂閱，搶先掌握 <span className='text-primary'>前端 x 職涯</span>的獨家資訊！
            </p>
            <div className='mb-[24px]'>
              <input type="text" placeholder='請輸入您的大名' className='bg-[#F1F1F1] px-4 py-2 w-full text-[20px] font-medium mb-2' />
              <input type="email" placeholder='請輸入您的電子信箱' className='bg-[#F1F1F1] px-4 py-2 w-full text-[20px] font-medium' />
            </div>
            <button className='text-primary text-[16px] font-bold py-2 px-4 border border-primary rounded-[40px]' type='button'>
              啟動訂閱
            </button>
          </div>
        </div>
      </section>
      <section className='py-[64px] px-3'>
        <div className='max-w-[1296px] mx-auto'>
          <h2 className='text-[48px] font-bold text-black mb-[24px]'>與我聯繫</h2>
          <ul className='grid gap-y-4'>
            <li className='flex flex-col pb-4 border-b border-black xl:flex-row xl:items-center xl:justify-between'>
              <div className='flex flex-col xl:flex-row'>
                <a href="mailto:alysewang@hexschool.com" className='underline text-[24px] font-medium text-black mb-2 xl:mr-4'>
                  alysewang@hexschool.com
                </a>
                <span className='text-[24px] font-medium text-black mb-2'>合作洽談</span>

              </div>
              <ArrowIcon className='fill-black w-[13.5px] h-[21px]' />
            </li>
            <li className='flex flex-col pb-4 border-b border-black xl:flex-row xl:items-center xl:justify-between'>
              <a href="#" className='flex items-center text-[24px] font-medium text-black mb-2 xl:mr-4'>
                <div className='size-[44px] mr-2'>
                  <img src={YTIcon} alt="youtube" />
                </div>
                <div className='mr-2'>
                  Youtube
                </div>
                職涯諮詢室
              </a>
              <ArrowIcon className='fill-black w-[13.5px] h-[21px]' />
            </li>
            <li className='flex flex-col pb-4 border-b border-black xl:flex-row xl:items-center xl:justify-between'>
              <a href="#" className='flex items-center text-[24px] font-medium text-black mb-2 xl:mr-4'>
                <div className='size-[44px] mr-2'>
                  <img src={PodcastIcon} alt="podcast" />
                </div>
                <div className='mr-2'>
                  podcast
                </div>
                職涯諮詢室
              </a>
              <ArrowIcon className='fill-black w-[13.5px] h-[21px]' />
            </li>
            <li className='flex flex-col pb-4 border-b border-black xl:flex-row xl:items-center xl:justify-between'>
              <a href="#" className='flex items-center text-[24px] font-medium text-black mb-2 xl:mr-4'>
                <div className='size-[44px] mr-2'>
                  <img src={FBIcon} alt="fb" />
                </div>
                <div className='mr-2'>
                  Facebook
                </div>
                前端社群
              </a>
              <ArrowIcon className='fill-black w-[13.5px] h-[21px]' />
            </li>
            <li className='flex flex-col pb-4 border-b border-black xl:flex-row xl:items-center xl:justify-between'>
              <a href="#" className='flex items-center text-[24px] font-medium text-black mb-2 xl:mr-4'>
                <div className='size-[44px] mr-2'>
                  <img src={LinkedinIcon} alt="linkedin" />
                </div>
                <div className='mr-2'>
                  Linkedin
                </div>
                職涯交流
              </a>
              <ArrowIcon className='fill-black w-[13.5px] h-[21px]' />
            </li>
            <li className='flex flex-col pb-4 border-b border-black xl:flex-row xl:items-center xl:justify-between'>
              <a href="#" className='flex items-center text-[24px] font-medium text-black mb-2 xl:mr-4'>
                <div className='size-[44px] mr-2'>
                  <img src={IGIcon} alt="ig" />
                </div>
                <div className='mr-2'>
                  Instagram
                </div>
                日常分享
              </a>
              <ArrowIcon className='fill-black w-[13.5px] h-[21px]' />
            </li>
          </ul>
        </div>
      </section>
    </Default>
  )
}
