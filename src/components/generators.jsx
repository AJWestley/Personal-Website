import { ProjectCard, WorkCard } from "./Cards";

export function createProjectCards(cardDetails) {
    let cards = [];
    for (let i = 0; i < cardDetails.length; i++) {
        let c =  (
        <ProjectCard 
        title={cardDetails[i].title} 
        description={cardDetails[i].description} 
        image={cardDetails[i].image}
        link={cardDetails[i].link}
        />
        )
        cards.push(c);
    }
    return cards;
}

export function createWorkCards(cardDetails) {
    let cards = [];
    for (let i = 0; i < cardDetails.length; i++) {
        let c =  (
        <WorkCard 
        name={cardDetails[i].name} 
        description={cardDetails[i].description} 
        image={cardDetails[i].image} redirect={cardDetails[i].page} 
        />
        )
        cards.push(c);
    }
    return cards;
}