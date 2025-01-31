import HowToBuyCard from "../../components/Cards/howToBuyCard";
import { howToBuyData } from "../../../constant/dummyData";

export default function HowToBuy() {
    return (
        <>
            {howToBuyData.map((data, index) => (
                <HowToBuyCard key={index} title={data.title} steps={data.steps} />
            ))}
        </>
    );
}