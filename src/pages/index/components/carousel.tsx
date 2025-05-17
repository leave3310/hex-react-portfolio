import { useEffect } from 'react'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'

import NewsCard from './NewsCard'
import Card from '@/components/Card.tsx'
import photo5 from '@/assets/images/index/photo5.png'
import photo6 from '@/assets/images/index/photo6.png'
import photo7 from '@/assets/images/index/photo7.png'
import ArrowIcon from '@/assets/images/svg/arrow.svg?react'

const cardList = [
  {
    imgSrc: photo5,
    title: '自學前端不用怕：從零開始的三大關鍵',
    description: '嗨，我是 Alyse，一名前端工程師兼職涯諮詢師。一直以來，我都很喜歡在部落格分享學習與工作心得，也常有讀者問：「我想轉職/自學前端，該從哪裡開始？」 其實自學的過程既自由又具挑戰性。我整理了三大關鍵，幫助你在短期內建立紮實基礎，並快速累積實戰經驗。希望能替你的前端之路帶來一些啟發與動力！',
    tags: ['前端開發 x 職涯成長'],
    date: '2024/10/21',
    isNew: true,
  },
  {
    imgSrc: photo6,
    title: '前端面試不再慌：破解常見提問的三大策略',
    description: '面試前端工程師時，你或許擔心被問到各種刁鑽的技術題目，或是擔憂無法在短時間內展現實力。其實，許多面試官關注的重點並不僅是程式碼本身，更包含問題解決的流程與溝通能力。這篇文章將分享我在面試過程中常見的三大難題，以及如何以更具條理的方式回應，讓你在面試場合中脫穎而出。',
    tags: ['面試準備', '工程師求職'],
    date: '2024/07/08',
    isHot: true,
  },
  {
    imgSrc: photo7,
    title: 'CSS 魔法大揭密：排版與設計的三大關鍵技巧',
    description: '在瀏覽器畫面上實現各種精美介面，一直是前端開發充滿成就感的部分。但當面臨複雜的佈局需求或是響應式設計時，往往讓人抓破頭皮。這篇文章想跟大家分享我在實務專案中累積的三大技巧，幫助你更有效率地駕馭 CSS，打造兼具美感與功能性的網頁。',
    tags: ['CSS設計', '視覺體驗'],
    date: '2024/09/03',
    isHot: false,
  },
  {
    imgSrc: photo7,
    title: 'CSS 魔法大揭密：排版與設計的三大關鍵技巧',
    description: '在瀏覽器畫面上實現各種精美介面，一直是前端開發充滿成就感的部分。但當面臨複雜的佈局需求或是響應式設計時，往往讓人抓破頭皮。這篇文章想跟大家分享我在實務專案中累積的三大技巧，幫助你更有效率地駕馭 CSS，打造兼具美感與功能性的網頁。',
    tags: ['CSS設計', '視覺體驗'],
    date: '2024/09/03',
    isHot: false,
  },
]

export default function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })])

  return (
      <div className='relative xl:px-[68px]'>
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex mb-8 xl:mb-0">
                    <div className="xl:max-w-[416px] flex-[0_0_100%] mr-6">
                        <NewsCard imgSrc={cardList[0].imgSrc} title={cardList[0].title} description={cardList[0].description} tags={cardList[0].tags} date={cardList[0].date} isNew={cardList[0].isNew ?? false} />
                    </div>
                    {
                        cardList.slice(1).map((card, index) => (
                            <div className="xl:max-w-[416px] flex-[0_0_100%] mr-6" key={index}>
                                <Card imgSrc={card.imgSrc} title={card.title} description={card.description} tags={card.tags} date={card.date} isHot={card.isHot ?? false} />
                            </div>
                        ))
                    }

                </div>
                <div className='flex justify-end'>
                    <button onClick={() => emblaApi?.scrollPrev()} type='button' className='mr-6 xl:mr-0 cursor-pointer bg-primary rounded-full size-[44px] flex items-center justify-center p-3 xl:absolute xl:top-1/2 xl:-translate-y-1/2 xl:left-0'>
                        <ArrowIcon className='fill-white rotate-180' />
                    </button>
                    <button onClick={() => emblaApi?.scrollNext()} type='button' className='cursor-pointer bg-primary rounded-full size-[44px] flex items-center justify-center p-3 xl:absolute xl:top-1/2 xl:-translate-y-1/2 xl:right-0'>
                        <ArrowIcon className='fill-white' />
                    </button>
                </div>
            </div>
        </div>

  )
}
