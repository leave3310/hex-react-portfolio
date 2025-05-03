import { Link } from "react-router";

export default function Card(cardData: {
    imgSrc: string;
    title: string;
    description: string;
    tags: string[];
    date: string;
}) {
    return (
        <div>
            <div className="mb-4">
                <img src={cardData.imgSrc} alt={cardData.title} className="w-full h-full object-cover" />
            </div>
            <div>
                <div className="mb-1 font-medium text-[16px]">
                    {cardData.date}
                </div>
                <ul className="flex text-primary font-medium text-[24px]">
                    {
                        cardData.tags.map((tag) => (
                            <li key={tag} className="mr-1">#{tag}</li>
                        ))
                    }
                </ul>
                <div className="text-[28px] font-bold mb-2">
                    {cardData.title}
                </div>
                <p className="text-[16px] font-medium text-text line-clamp-2 mb-4">
                    {cardData.description}
                </p>
                <Link to="/blog/detail" className="rounded-[40px] text-text py-2 px-4 border border-black inline-block hover:bg-black hover:text-white transition-colors">
                    閱讀內文
                </Link>
            </div>
        </div>
    );
}