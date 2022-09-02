import { ItemCard, ItemContainer, ItemContent } from "./styled";

export function ItemPage({ itemInfo }: any) {
  const imgUrl = itemInfo?.Attachments[0].url;
  const title = itemInfo?.Title;
  const price = itemInfo?.Price
  const quantity = itemInfo?.Quantity 
  const description = itemInfo?.Description
  const flavors =  getFlavors(itemInfo)

  return (
    <ItemContainer>
      <ItemContent>
        <ItemCard
          imgUrl={imgUrl}
          title={title}
          subtitle={title}
          quantity={quantity}
          description={description}
          price={price}
          flavors={flavors}
        />
      </ItemContent>
    </ItemContainer>
  );
}

function getFlavors(itemInfo:any) {    
  if (itemInfo?.Category == "milanesa") {
    const flavors = itemInfo["Flavor milanesas (from Flavor)"] 
    return flavors
  } if (itemInfo?.Category == "hamburguesa") {
    const flavors = itemInfo["Flavor hamburguesas (from Flavor)"]
    return flavors
  }
}