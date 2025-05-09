import { useState } from 'react'
import { Link } from "react-router";

import Default from '@/layouts/Default.tsx'
import Card from './components/Card.tsx'

import heroSection from "@/assets/images/hero_section.png"
import heroSection2 from "@/assets/images/hero_section2.png"
import aboutSection from "@/assets/images/about_section.png"
import photo4 from "@/assets/images/photo4.png"
import photo1 from "@/assets/images/photo1.png"
import photo2 from "@/assets/images/photo2.png"
import photo6 from "@/assets/images/photo6.png"
import photo3 from "@/assets/images/photo3.png"
import photo5 from "@/assets/images/photo5.png"
import photo9 from "@/assets/images/photo9.png"
import photo7 from "@/assets/images/photo7.png"
import photo8 from "@/assets/images/photo8.png"
import photo11 from "@/assets/images/photo11.png"
import photo10 from "@/assets/images/photo10.png"
import SearchIcon from "@/assets/images/svg/search.svg?react"
import YTIcon from '@/assets/images/yt.png'
import PodcastIcon from '@/assets/images/podcast.png'
import FBIcon from '@/assets/images/fb.png'
import LinkedinIcon from '@/assets/images/linkedin.png'
import IGIcon from '@/assets/images/ig.png'

const cardList = [
    {
        imgSrc: photo4,
        title: "React 入門不再迷惘：三步驟帶你上手核心概念",
        description: "你是否對 React 感到好奇，卻苦惱於該如何正式啟動學習之路？身為前端工程師兼職涯諮詢師，我常遇到同學問我：「React 到底該怎麼入門？」為了幫大家減少摸索的時間，我整理出三個循序漸進的關鍵步驟，帶你更輕鬆地掌握 React 核心概念，真正把理論應用在實際專案中。",
        tags: ["React", "入門基礎"],
        date: "2024/10/11",
    },
    {
        imgSrc: photo1,
        title: "前端作品集打造指南：讓你的專案成為履歷亮點",
        description: "對正在求職的前端工程師而言，作品集往往是第一個「說話」的利器。當面試官瀏覽你的網頁作品時，能夠快速了解你的程式邏輯、設計感以及解決問題的思路。我在協助多位同學優化履歷與作品集的過程中，總結出一些關鍵要素，分享給正在打造、升級作品集的你。",
        tags: ["作品集", "求職攻略"],
        date: "2024/09/07",
    },
    {
        imgSrc: photo2,
        title: "CSS 魔法大揭密：排版與設計的三大關鍵技巧",
        description: "在瀏覽器畫面上實現各種精美介面，一直是前端開發充滿成就感的部分。但當面臨複雜的佈局需求或是響應式設計時，往往讓人抓破頭皮。這篇文章想跟大家分享我在實務專案中累積的三大技巧，幫助你更有效率地駕馭 CSS，打造兼具美感與功能性的網頁。",
        tags: ["CSS設計", "視覺體驗"],
        date: "2024/09/03",
    },
    {
        imgSrc: photo6,
        title: "前端轉職必讀：從自學者到工程師的心路歷程",
        description: "能夠憑藉自學進入前端領域，聽起來令人振奮，但實際過程中可能遇到的挫折與疑慮，卻常常令人猶豫。回想當初我也是對程式一竅不通，卻在興趣的驅使下毅然踏上自學之路。今天想透過這篇文章，分享我的轉職經驗和一些調適心態的秘訣，盼能為有心投入前端領域的你提供一些力量與方向。",
        tags: ["轉職工程師", "學習心法"],
        date: "2024/07/09",
    },
    {
        imgSrc: photo3,
        title: "前端面試不再慌：破解常見提問的三大策略",
        description: "面試前端工程師時，你或許擔心被問到各種刁鑽的技術題目，或是擔憂無法在短時間內展現實力。其實，許多面試官關注的重點並不僅是程式碼本身，更包含問題解決的流程與溝通能力。這篇文章將分享我在面試過程中常見的三大難題，以及如何以更具條理的方式回應，讓你在面試場合中脫穎而出。",
        tags: ["面試準備", "工程師求職"],
        date: "2024/07/08",
    },
    {
        imgSrc: photo5,
        title: "Vue 3 新手指南：快速掌握 Composition API 與關鍵特色",
        description: "許多前端開發者對 Vue 一直情有獨鍾，因為它易上手又靈活。隨著 Vue 3 上線，Composition API 的導入更是大幅提升可讀性與維護性。這篇文章將帶你快速瞭解 Vue 3 的獨特魅力，並透過簡單範例幫助你更順利地切換到新版本的思維模式。",
        tags: ["Vue3", "框架學習"],
        date: "2024/06/29",
    },
    {
        imgSrc: photo9,
        title: "Git 與版本控制：前端協作的必修課",
        description: "當你從一人開發晉升到多人合作，版本控制的好壞往往決定了專案的順暢度。Git 不僅能記錄程式碼變動，更能確保每位成員都在正確的分支上完成任務。透過這篇文章，你將了解常見的 Git 流程，並學會在前端專案中輕鬆管理與協作。",
        tags: ["Git", "版本控制"],
        date: "2024/05/04",
    },
    {
        imgSrc: photo7,
        title: "SEO 與前端最佳實踐：讓搜尋引擎看見你的網站",
        description: "即使你的網站擁有優美的介面與強大的功能，如果在搜尋引擎上找不到它，那就形同隱形。身為前端工程師，瞭解基本的 SEO 概念與技術是讓網站脫穎而出的關鍵。這篇文章將分享我在前端實作時，常用的 SEO 小技巧與實務做法，幫助你顯著提升網站曝光度。",
        tags: ["SEO", "網頁曝光"],
        date: "2024/05/01",
    },
    {
        imgSrc: photo8,
        title: "穩定前端環境的祕訣：依賴管理與自動化流程",
        description: "前端世界日新月異，第三方套件與工具種類繁多，一個不留神就可能引爆依賴衝突。為了確保專案長期維護的穩定度，建立一套良好的依賴管理與自動化流程至關重要。在本文中，我會分享從套件更新到測試部署的實務經驗，讓你在開發時不再手忙腳亂。",
        tags: ["專案維護", "自動化測試"],
        date: "2024/02/17",
    },
    {
        imgSrc: photo11,
        title: "TypeScript 快速上手：強化前端程式碼的安全與可讀性",
        description: "許多前端開發者在成長過程中都曾面臨動態語言帶來的錯誤風險，而 TypeScript 的出現正是為了改善這種情況。它能在開發階段即發現型別錯誤，並帶來更友善的程式碼提示。本篇文章將介紹如何在前端專案中導入 TypeScript，並透過真實案例展示它為開發流程帶來的優勢。",
        tags: ["TypeScript", "程式設計"],
        date: "2024/02/17",
    },
    {
        imgSrc: photo10,
        title: "掌握前端測試：從單元測試到端對端測試的完整攻略",
        description: "寫程式容易，但要確保程式在多種情境、裝置都能正常運行就沒那麼簡單了。這時「測試」便成了維持程式品質的關鍵環節。從最基礎的單元測試，到模擬使用者行為的端對端測試，每一種測試方式都有它的價值與最佳應用情境。本文將帶你認識不同類型的前端測試工具，以及如何在開發流程中實踐自動化測試，打造更穩定、可預期的專案。",
        tags: ["測試框架", "品質保證"],
        date: "2024/02/07",
    }
]

export default function Blog() {

    const [currentPage, setCurrentPage] = useState(0)
    return (
        <Default>
            <div className='xl:flex'>
                <div className='xl:w-1/2'>
                    <img src={heroSection} alt="hero-section" className='w-full' />
                </div>
                <div className='xl:w-1/2 flex justify-center flex-col bg-cover bg-center xl:pl-[80px] px-[24px] py-[24px]' style={{ backgroundImage: `url(${heroSection2})` }}>
                    <h1 className='xl:text-[120px] text-[52px] font-black uppercase text-primary mb-3 '>blog</h1>
                    <p className='text-[28px] font-bold text-primary'>前端工程師 & 職涯諮詢師</p>
                </div>
            </div>
            <div className='xl:flex items-center '>
                <div className='xl:w-1/2'>
                    <img src={aboutSection} alt="about-section" className='w-full' />
                </div>
                <div className='xl:w-1/2 xl:pl-[24px] max-w-[636px] px-3 pt-[48px]'>
                    <div className='text-black text-[16px] font-medium mb-1'>
                        2024/10/21
                    </div>
                    <div className='flex mb-2'>
                        <h2 className='text-primary text-[24px] font-medium mr-2'>
                            前端開發 x 職涯成長
                        </h2>
                        <div className='rounded-[40px] bg-primary text-white text-[16px] font-bold py-[6px] px-3'>
                            最新文章
                        </div>
                    </div>
                    <h3 className='text-black text-[28px] font-bold mb-2'>
                        自學前端不用怕：從零開始的三大關鍵
                    </h3>
                    <p className='line-clamp-2 font-medium text-[16px] mb-4'>
                        嗨，我是 Alyse，一名前端工程師兼職涯諮詢師。一直以來，我都很喜歡在部落格分享學習與工作心得，也常有讀者問：「我想轉職/自學前端，該從哪裡開始？」 其實自學的過程既自由又具挑戰性。我整理了三大關鍵，幫助你在短期內建立紮實基礎，並快速累積實戰經驗。希望能替你的前端之路帶來一些啟發與動力！
                    </p>
                    <Link to="/blog/detail" className="rounded-[40px] text-text py-2 px-4 border border-black inline-block hover:bg-black hover:text-white transition-colors">
                        閱讀內文
                    </Link>
                </div>
            </div>
            <div className='pt-[112px] xl:pt-[80px] max-w-[1296px] mx-auto px-[12px]'>
                <div className='mb-10 relative mx-auto min-w-[351px] max-w-[416px] xl:ml-0'>
                    <SearchIcon className='w-6 h-6 absolute top-1/2 left-4 -translate-y-1/2 text-text text-text' />
                    <input type="text" className='border border-solid p-4 rounded-[40px] w-full pl-[50px] font-medium text-[16px] ' placeholder='搜尋你感興趣的文章' />
                </div>
                <div className='grid xl:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-[32px] md:gap-y-20 mb-10'>
                    {
                        cardList.map((card, index) => (
                            <Card key={index} {...card} />
                        ))
                    }
                </div>

                <nav className='mx-auto md:mb-20 mb-[64px] w-fit justify-center flex bg-white rounded-[40px] text-[16px] font-medium py-2'>
                    <button type='button' className='py-2 px-4 text-text cursor-pointer hover:text-primary transition-colors'>
                        &lt;
                    </button>
                    <ul className='flex'>
                        {
                            Array.from({ length: 5 }).map((_, index) => (
                                <li key={index}>
                                    <button
                                        type='button'
                                        className={`py-2 px-4 flex cursor-pointer hover:text-primary transition-colors ${currentPage === index ? 'text-primary' : 'text-text'}`}
                                        onClick={() => setCurrentPage(index)}
                                    >
                                        {index + 1}
                                    </button>
                                </li>
                            ))
                        }
                    </ul>
                    <div className='py-2 px-4 text-text'>...</div>
                    <button type='button' className='py-2 px-4 text-text cursor-pointer hover:text-primary transition-colors'>
                        &gt;
                    </button>
                </nav>
                <div className='py-[80px] justify-between hidden xl:flex'>
                    <a href="mailto:alysewang@hexschool.com" className='text-[32px] font-medium text-black'>
                        alysewang@hexschool.com
                    </a>
                    <div className='flex gap-x-[24px]'>
                        <img src={YTIcon} alt='youtube' />
                        <img src={PodcastIcon} alt="podcast" />
                        <img src={FBIcon} alt="fb" />
                        <img src={LinkedinIcon} alt="linkedin" />
                        <img src={IGIcon} alt="ig" />
                    </div>
                </div>
            </div>
        </Default>
    );
}